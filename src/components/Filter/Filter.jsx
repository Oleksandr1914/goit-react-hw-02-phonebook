import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterInput } from './FilterList';

class Filter extends Component {
  state = {
    filter: '',
  };

  onInputText = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
    this.setState(prevState => this.props.onFilter(prevState));
  };

  render() {
    return (
      <>
        <h3>Find contcts by name</h3>
        <FilterInput
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.onInputText}
        />
      </>
    );
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
