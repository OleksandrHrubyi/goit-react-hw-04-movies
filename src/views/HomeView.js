import Container from "../components/Container/Container";
import { fetchTrendMovies } from "../service/moviesApi";
import TrendList from "../components/TrendList/TrendList";

import React, { Component } from "react";

class HomeView extends Component {
  state = {
    trend: [],
  };

  componentDidMount() {
    fetchTrendMovies().then((response) =>
      this.setState({ trend: response.results })
    );
    this.props.history.push({
      pathname: this.props.location.pathname,
    });
  }

  render() {
    const { trend } = this.state;
    return (
      <>
        <Container>
          <h2>Most popular films</h2>
          <TrendList list={trend} />
        </Container>
      </>
    );
  }
}

export default HomeView;
