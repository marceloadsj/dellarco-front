import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import HeaderTitle from "./HeaderTitle";
import DellarcoCarousel from "./DellarcoCarousel";

class Header extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Row>
            <Col>Aqui vai o logo</Col>
          </Row>
          <Row>
            <Col className="text-right"><HeaderTitle/></Col>
          </Row>
          <Row>
            <Col>Aqui o form do eduardo</Col>
          </Row>
          <Row>
            <Col><DellarcoCarousel /></Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Header;
