import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Row>
            <Col>Aqui vai o logo</Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Header;
