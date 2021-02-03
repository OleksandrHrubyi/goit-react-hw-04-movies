import React, { Component, Suspense, lazy } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Route, Switch } from "react-router-dom";
import Loader from "react-loader-spinner";
import routes from "../routes";
import Header from "./Header/Header";
import ButtonMain from "./ButtonMain/ButtonMain";
const HomeView = lazy(() =>
  import("../views/HomeView" /* webpackChunkName: "home-view" */)
);
const MoviesView = lazy(() =>
  import("../views/MoviesView" /* webpackChunkName: "movies-view" */)
);
const MoviesDetailsView = lazy(() =>
  import(
    "../views/MoviesDetailsView" /* webpackChunkName: "movies-details-view" */
  )
);
const NotFoundView = lazy(() =>
  import("../views/NotFoundView" /* webpackChunkName: "not-found-page" */)
);

class App extends Component {
  render() {
    return (
      <>
        <Header>
          <ButtonMain path={routes.home} name={"Home"} />
          <ButtonMain path={routes.movies} name={"Movies"} />
        </Header>
        <Suspense
          fallback={
            <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
          }
        >
          <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <Route
              exect
              path={routes.moviesDetails}
              component={MoviesDetailsView}
            ></Route>
            <Route exect path={routes.movies} component={MoviesView} />
            <Route component={NotFoundView} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
