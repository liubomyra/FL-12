import React, { Component } from 'react';

export default class EditListItem extends Component {
  state = {
    id: this.props.id,
    date: this.props.date || new Date().toISOString(),
    title: this.props.title,
    description: this.props.description,
    duration: this.props.duration,
    authors: this.props.authors,
    updated: false
  };

  handleChange(event) {
    const key = event.target.name;
    this.setState({ [key]: event.target.value, updated: true });
  }

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
            onClick={() => closeEditing(this.state)}
          >
            Save
          </button>
          <button className='buttonCancel' onClick={() => closeEditing(null)}>
            Cancel
          </button>
        </div>
      </>
    );
  }
}
