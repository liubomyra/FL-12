import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createItem } from './actions';
import './Root.css';
import SearchPanel from './search-panel';
import CoursesList from './courses-list';
import EditListItem from './edit-list-item';

class Root extends Component {
  handleCreateItem = event => {
    const { createItem } = this.props;
    createItem();
  };

  render() {
    const { itemToEdit } = this.props;

    return (
      <div className='App'>
        <header className='App-header'>LEARN</header>

        {itemToEdit ? (
          <EditListItem {...itemToEdit} />
        ) : (
          <>
            <div className='heading'>
              <SearchPanel></SearchPanel>
              <button onClick={this.handleCreateItem}>Add course</button>
            </div>
            <CoursesList />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  itemToEdit: state.itemToEdit
});

const mapDispatchToProps = dispatch => ({
  createItem: id => dispatch(createItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
