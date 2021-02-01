import React, { Component } from "react";

class MoviesPage extends Component {
  state = {
    searchValue: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: "" });
  };

  handleChange = (event) => {
    this.setState({ searchValue: event.currentTarget.value });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={searchValue} onChange={this.handleChange} />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default MoviesPage;
