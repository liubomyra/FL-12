import React, { Component } from 'react';

export default class SearchPanel extends Component {
  state = {
    term: ''
  };

  onTermChange = e => {
    const { onSearchChange = () => {} } = this.props;
    this.setState({
      term: e.target.value
    });

    onSearchChange(e.target.value);
  };

  addNewCourse = () => {};

  render() {
    return (
      <input
        type='text'
        className=''
        placeholder='Search'
        value={this.state.term}
        onChange={this.onTermChange}
      />
    );
  }
}
