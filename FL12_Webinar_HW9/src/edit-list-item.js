import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveEditItem, cancelEditItem } from './actions';

class EditListItem extends Component {
  state = {
    id: this.props.itemToEdit.id,
    date: this.props.itemToEdit.date || new Date().toISOString(),
    title: this.props.itemToEdit.title,
    description: this.props.itemToEdit.description,
    duration: this.props.itemToEdit.duration,
    authors: this.props.itemToEdit.authors,
    updated: false
  };

  handleChange(event) {
    const key = event.target.name;
    this.setState({ [key]: event.target.value, updated: true });
  }

  handleSave = () => {
    const { saveEditItem } = this.props;
    saveEditItem(this.state);
  };
  handleCancel = event => {
    const { cancelEditItem } = this.props;
    cancelEditItem();
  };

  render() {
    const { closeEditing } = this.props;
    return (
      <>
        <h1>{this.state.id ? 'Edit' : 'Add'} item</h1>
        <div>
          <label className='date'>
            date
            <input
              type='datetime-local'
              name='date'
              value={new Date(this.state.date).toISOString().slice(0, 16)}
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </label>
          <label className='title'>
            title
            <input
              type='text'
              name='title'
              value={this.state.title}
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </label>
          <label className='description'>
            description
            <textarea
              name='description'
              value={this.state.description}
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </label>
          <label className='duration'>
            duration
            <input
              type='text'
              name='duration'
              value={this.state.duration}
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </label>
          <label className='authors'>
            authors
            <input
              type='text'
              name='authors'
              value={this.state.authors}
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </label>

          <button
            className='buttonSave'
            disabled={!this.state.updated}
            onClick={this.handleSave}
          >
            Save
          </button>
          <button className='buttonCancel' onClick={this.handleCancel}>
            Cancel
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  itemToEdit: state.itemToEdit
});

const mapDispatchToProps = dispatch => ({
  saveEditItem: item => dispatch(saveEditItem(item)),
  cancelEditItem: () => dispatch(cancelEditItem())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditListItem);
