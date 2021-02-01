import React, { Component, Suspense, lazy } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Route, Switch } from "react-router-dom";
import Loader from "react-loader-spinner";
// import HomeView from "../views/HomeView";
// import MoviesView from "../views/MoviesView";
// import NotFoundView from "../views/NotFoundView";
// import MoviesDetailsView from "../views/MoviesDetailsView";
import routes from "../routes";

const HomeView = lazy(() => import("../views/HomeView"));
const MoviesView = lazy(() => import("../views/MoviesView"));
const MoviesDetailsView = lazy(() => import("../views/MoviesDetailsView"));
const NotFoundView = lazy(() => import("../views/NotFoundView"));

class App extends Component {
  render() {
    return (
      <>
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
