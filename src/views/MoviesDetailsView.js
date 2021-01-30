import { Route, Switch } from "react-router-dom";
import Container from "../components/Container/Container";
import React, { Component } from "react";
import MoviesDetailsPage from "../components/MovieDetailsPage/MovieDetailsPage";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";
import {
  fetchMoviesDetails,
  fetchMoviesCredits,
  fetchMoviesReviews,
} from "../service/moviesApi";

import ButtonMain from "../components/ButtonMain/ButtonMain";

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

  render() {
    console.log(this.props.match);
    const { path } = this.props.match;
    const { movieInfo, credits, reviews } = this.state;

    return (
      <Container>
        <MoviesDetailsPage movies={movieInfo} path={this.props.match.url} />
        <ButtonMain name="Cast" path={`${this.props.match.url}/cast`} />
        <ButtonMain name="Review" path={`${this.props.match.url}/review`} />
        <Switch>
          <Route
            exact
            path={`${path}/cast`}
            render={(props) => <Cast cast={credits} />}
          />
          <Route
            exact
            path={`${path}/review`}
            render={(props) => <Reviews reviews={reviews} />}
          />
        </Switch>
      </Container>
    );
  }
}

export default MoviesDetailsView;
