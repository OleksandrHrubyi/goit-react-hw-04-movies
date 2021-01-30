import React, { Component } from "react";
import { fetchTrendMovies } from "../../service/moviesApi";
import TrendList from "../TrendList/TrendList";

class HomePage extends Component {
  state = {
    trend: [],
  };

  componentDidMount() {
    fetchTrendMovies().then((response) =>
      this.setState({ trend: response.results })
    );
  }

  render() {
    const { trend } = this.state;
    return <TrendList list={trend} />;
  }
}

export default HomePage;
