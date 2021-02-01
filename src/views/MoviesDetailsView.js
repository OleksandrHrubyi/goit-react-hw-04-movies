import { Route, Switch } from "react-router-dom";
import Container from "../components/Container/Container";
import React, { Component } from "react";
import MoviesDetailsPage from "../components/MovieDetailsPage/MovieDetailsPage";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";
import Header from "../components/Header/Header";
import routes from "../routes";
import ButtonMain from "../components/ButtonMain/ButtonMain";
import {
  fetchMoviesDetails,
  fetchMoviesCredits,
  fetchMoviesReviews,
} from "../service/moviesApi";

class MoviesDetailsView extends Component {
  state = {
    movieInfo: {},
    credits: [],
    reviews: [],
  };

  componentDidUpdate() {
    console.log(this.props);
  }

  componentDidMount() {
    fetchMoviesDetails(this.props.match.params.moviesId).then((response) => {
      this.setState({ movieInfo: response });
    });

    fetchMoviesCredits(this.props.match.params.moviesId).then((response) => {
      this.setState({ credits: response.cast });
    });

    fetchMoviesReviews(this.props.match.params.moviesId).then((response) => {
      this.setState({ reviews: response.results });
    });
  }

  handleOnclickHistory = (e) => {
    if (this.props.location.state && this.props.location.state.from) {
      this.props.history.push(this.props.location.state.from);
      return;
    }
    this.props.history.push(routes.home);
    console.log(this.props);
  };

  render() {
    const { url } = this.props.match;
    const { movieInfo, credits, reviews } = this.state;

    return (
      <Container>
        <Header>
          <ButtonMain path={routes.home} name={"Home"} />
          <ButtonMain path={routes.movies} name={"Movies"} />
        </Header>
        <MoviesDetailsPage
          movies={movieInfo}
          onClick={this.handleOnclickHistory}
        />
        <Switch>
          <Route
            exact
            path={`${url}/cast`}
            render={(props) => <Cast {...props} cast={credits} />}
          />
          <Route
            exact
            path={`${url}/review`}
            render={(props) => <Reviews {...props} reviews={reviews} />}
          />
        </Switch>
      </Container>
    );
  }
}

export default MoviesDetailsView;
