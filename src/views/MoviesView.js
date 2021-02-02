import { Component } from "react";
import { fetchMoviesFind } from "../service/moviesApi";
import { Route } from "react-router-dom";
import MoviesPage from "../components/MoviesPage/MoviesPage";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import TrendList from "../components/TrendList/TrendList";
import queryString from "query-string";
import routes from "../routes";
import ButtonMain from "../components/ButtonMain/ButtonMain";

class MoviesView extends Component {
  state = {
    searchfilms: "",
    films: [],
  };

  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    if (this.props.location.search) {
      fetchMoviesFind(parsed.query).then((res) => {
        this.setState({ films: res.results });
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
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
