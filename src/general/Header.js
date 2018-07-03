import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import HeaderLogo from "./HeaderLogo";
import HeaderTitle from "./HeaderTitle";
import DellarcoCarousel from "./DellarcoCarousel";
import HeaderSubscribe from "./HeaderSubscribe";

class Header extends Component {
  render() {
    return (
      <Row className="bg-secondary">
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
            <Col className="justify-content-center">Quem Somos</Col>
            <Col className="justify-content-center">Galeria</Col>
            <Col className="justify-content-center">Diferenciais</Col>
            <Col className="justify-content-center">O que oferecemos</Col>
            <Col className="justify-content-center">Formações</Col>
            <Col className="justify-content-center">Socilite um Orçamento</Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Header;
