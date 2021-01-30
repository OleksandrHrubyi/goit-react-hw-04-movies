import MoviesPage from "../components/MoviesPage/MoviesPage";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import { Component } from "react";
import { fetchMoviesFind } from "../service/moviesApi";
import { Route, Switch } from "react-router-dom";
import TrendList from "../components/TrendList/TrendList";

class MoviesView extends Component {
  state = {
    searchfilms: "",
    films: [],
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchfilms !== this.state.searchfilms) {
      fetchMoviesFind(this.state.searchfilms).then((res) => {
        this.setState({ films: res.results });
      });
    }
  }

  handleOnSubmit = (value) => {
    this.setState({ searchfilms: value });
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${value}`,
    });
  };

  render() {
    const { searchfilms } = this.state;
    console.log(this.props.match);
    return (
      <>
        <Container>
          <Header />
          <MoviesPage onSubmit={this.handleOnSubmit} />
          <TrendList list={this.state.films} />
          {/* <Route
            path={`${this.props.match.path}?query=${searchfilms}`}
            render={(props) => <TrendList list={this.state.films} />}
          /> */}
        </Container>
      </>
    );
  }
}

export default MoviesView;
