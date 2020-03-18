import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, editItem } from './actions';

import './courses-list.css';

import CoursesListItem from './courses-list-item';

class CoursesList extends React.Component {
  render() {
    const { items, filterTerm } = this.props;
    const filteredItems = items.filter(
      el => el.title.toLowerCase().indexOf(filterTerm.toLowerCase()) !== -1
    );
    return (
      <ul className='course-list'>
        {filteredItems.map(item => {
          const { id, ...itemProps } = item;
          return (
            <li key={id}>
              <CoursesListItem {...itemProps} id={id} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  filterTerm: state.filterTerm
});

const mapDispatchToProps = dispatch => ({
  editItem: item => dispatch(editItem(item)),
  deleteItem: id => dispatch(deleteItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesList);
