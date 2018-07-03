import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Logo from "images/logo.png";

class HeaderLogo extends Component {
  render() {
    return (
      <Row className="justify-content-center my-5">
        <Col xs="auto">
          <img src={Logo} />
        </Col>
      </Row>
    );
  }
}

export default HeaderLogo;
