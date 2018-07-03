import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "./general/Header";
import Body1 from "./general/Body1";
import Footer from "./general/Footer";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Header />
        <Body1 />
        <Footer />
      </Container>
    );
  }
}

export default App;
