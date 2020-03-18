import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, editItem } from './actions';

import deleteIcon from './delete.svg';
import editIcon from './edit.svg';

class CoursesListItem extends React.Component {
  state = {
    controlsExpanded: false
  };

  handleDelete = event => {
    const { deleteItem, id } = this.props;
    deleteItem(id);
  };
  handleEdit = event => {
    const { editItem, id } = this.props;
    editItem(id);
  };

  toggleControls() {
    this.setState({ controlsExpanded: !this.state.controlsExpanded });
  }

  render() {
    const {
      id,
      date,
      title,
      description,
      duration,
      removeItem,
      editItem
    } = this.props;

    return (
      <div className='course-list-item' data-id={id}>
        <span className='course-date'>{date}</span>
        <span className='course-title'>{title}</span>
        <span className='course-description'>{description}</span>
        <span className='course-duration'>{duration}</span>
        <span className='course-controls'>
          <button onClick={() => this.toggleControls()}>...</button>
          {this.state.controlsExpanded && (
            <span className='controlsWrap'>
              <button onClick={this.handleDelete}>
                <img src={deleteIcon} alt='delete' />
              </button>
              <button onClick={this.handleEdit}>
                {' '}
                <img src={editIcon} alt='edit' />
              </button>
            </span>
          )}
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  editItem: item => dispatch(editItem(item)),
  deleteItem: id => dispatch(deleteItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesListItem);
