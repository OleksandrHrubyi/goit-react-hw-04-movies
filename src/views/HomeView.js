import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import { fetchTrendMovies } from "../service/moviesApi";
import TrendList from "../components/TrendList/TrendList";
import routes from "../routes";
import ButtonMain from "../components/ButtonMain/ButtonMain";
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
          <Header name="Most popular films">
            <ButtonMain path={routes.home} name={"Home"} />
            <ButtonMain path={routes.movies} name={"Movies"} />
          </Header>
          <h2>Most popular films</h2>
          <TrendList list={trend} />
        </Container>
      </>
    );
  }
}

export default HomeView;
