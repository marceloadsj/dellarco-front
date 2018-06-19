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
          <Row>
            <Col sm="4" md={{ size: 4, offset: 5 }}>
              <HeaderLogo />
            </Col>
          </Row>
          <Row>
            <Col className="text-right">
              <HeaderTitle />
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm="4" md={{ size: 6, offset: 6 }}>
              <HeaderSubscribe />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <DellarcoCarousel />
            </Col>
          </Row>
          <br />
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
