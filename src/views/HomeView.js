import HomePage from "../components/HomePage/HomePage";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";

import React, { Component } from "react";

class HomeView extends Component {
  render() {
    return (
      <>
        <Container>
          <Header />
          <HomePage />
        </Container>
      </>
    );
  }
}

export default HomeView;
