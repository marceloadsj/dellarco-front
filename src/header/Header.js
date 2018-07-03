import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import HeaderLogo from "./HeaderLogo";
import HeaderTitle from "./HeaderTitle";
import HeaderSubscribe from "./HeaderSubscribe";
import DellarcoCarousel from "../general/DellarcoCarousel";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <Row className="header">
        <Col>
          <HeaderLogo />

          <HeaderTitle />

          <HeaderSubscribe />

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
