import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFilterTerm } from './actions';

class SearchPanel extends Component {
  state = {
    term: ''
  };

  onTermChange = e => {
    const { updateFilterTerm } = this.props;
    this.setState({
      term: e.target.value
    });

    updateFilterTerm(e.target.value);
  };

  render() {
    return (
      <input
        type='text'
        className='search'
        placeholder='Search'
        value={this.state.term}
        onChange={this.onTermChange}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  updateFilterTerm: term => dispatch(updateFilterTerm(term))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
