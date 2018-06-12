import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "./general/Header";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Header />
      </Container>
    );
  }
}

export default App;
