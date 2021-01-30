import React, { Component } from "react";

import "react-toastify/dist/ReactToastify.css";

import { Route, Switch } from "react-router-dom";
import HomeView from "../views/HomeView";
import MoviesView from "../views/MoviesView";
import NotFound from "../views/NotFound";
import MoviesDetailsView from "../views/MoviesDetailsView";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route
            exect
            path="/movies/:moviesId"
            component={MoviesDetailsView}
          ></Route>
          <Route exect path="/movies" component={MoviesView} />
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
