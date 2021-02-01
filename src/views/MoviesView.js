import MoviesPage from "../components/MoviesPage/MoviesPage";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import { Component } from "react";
import { fetchMoviesFind } from "../service/moviesApi";

import TrendList from "../components/TrendList/TrendList";
import queryString from "query-string";
import { Route } from "react-router-dom";
import routes from "../routes";
import ButtonMain from "../components/ButtonMain/ButtonMain";

class MoviesView extends Component {
  state = {
    searchfilms: "",
    films: [],
  };
  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
    if (
      prevState.searchfilms !== this.state.searchfilms &&
      this.state.searchfilms
    ) {
      fetchMoviesFind(this.state.searchfilms).then((res) => {
        this.setState({ films: res.results });
        this.props.history.push({
          pathname: this.props.location.pathname,
          search: `query=${this.state.searchfilms}`,
        });
      });
    }
  }

  getMovieFromProps = (props) => {
    return queryString.parse(props.location.search);
  };

  handleOnSubmit = (value) => {
    this.setState({ searchfilms: value });
  };

  render() {
    return (
      <>
        <Container>
          <Header>
            <ButtonMain path={routes.home} name={"Home"} />
            <ButtonMain path={routes.movies} name={"Movies"} />
          </Header>
          <MoviesPage onSubmit={this.handleOnSubmit} />
          <Route
            render={(props) => <TrendList {...props} list={this.state.films} />}
          />
        </Container>
      </>
    );
  }
}

export default MoviesView;
