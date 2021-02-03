import { Route, Switch } from "react-router-dom";
import Container from "../components/Container/Container";
import React, { Component, lazy, Suspense } from "react";
import MoviesDetailsPage from "../components/MovieDetailsPage/MovieDetailsPage";
import routes from "../routes";
import Loader from "react-loader-spinner";
import {
  fetchMoviesDetails,
  fetchMoviesCredits,
  fetchMoviesReviews,
} from "../service/moviesApi";

const Cast = lazy(() =>
  import("../components/Cast/Cast" /* webpackChunkName: "cast-view" */)
);
const Reviews = lazy(() =>
  import("../components/Reviews/Reviews" /* webpackChunkName: "Reviews-view" */)
);

class MoviesDetailsView extends Component {
  state = {
    movieInfo: {},
    credits: [],
    reviews: [],
  };

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
  };

  render() {
    const { url } = this.props.match;
    const { movieInfo, credits, reviews } = this.state;

    return (
      <Container>
        <MoviesDetailsPage
          movies={movieInfo}
          onClick={this.handleOnclickHistory}
        />
        <Suspense
          fallback={
            <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
          }
        >
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
        </Suspense>
      </Container>
    );
  }
}

export default MoviesDetailsView;
