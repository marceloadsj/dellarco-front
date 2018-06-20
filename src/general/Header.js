import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import HeaderLogo from "./HeaderLogo";
import HeaderTitle from "./HeaderTitle";
import DellarcoCarousel from "./DellarcoCarousel";
import HeaderSubscribe from "./HeaderSubscribe";

class Header extends Component {
  render() {
    return (
      <Row>
        <Col>

          <Row className="justify-content-center">
            <Col xs="auto">
              <HeaderLogo />
            </Col>
          </Row>

          <Row className="mb-5">
            <Col className="text-right">
              <HeaderTitle />
            </Col>
          </Row>

          <Row className="justify-content-end mb-5">
            <Col xs="auto">
              <HeaderSubscribe />
            </Col>
          </Row>

          <Row className="justify-content-center mb-5">
            <Col xs="auto">
              <DellarcoCarousel />
            </Col>
          </Row>

          <Row>
            <Col>Apresentações</Col>
            <Col>Casamentos</Col>
            <Col>Ensaios</Col>
            <Col>Aulass</Col>
            <Col>Eventos</Col>
            <Col>Palestras</Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Header;
