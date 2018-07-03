import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import img02 from "images/img02.png";
import img03 from "images/img03.png";
import img07 from "images/img07.png";
import Services from "./Services";
import Contact from "./Contact";
import Groups from "./Groups";
import Gallery from "./Gallery";
import SocialMedia from "./SocialMedia";
import Wwdo from "./Wwdo";

class Body1 extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Row className="mb-5">
            <Col className="justify-content-end mb-5">
              <img src={img02} />;
            </Col>
          </Row>

          <Row className="mb-5">
            <Col className="justify-content-center">
              <Wwdo />
            </Col>
          </Row>

          <Row className="mb-5">
            <Col className="justify-content-center">
              <img src={img03} />;
            </Col>
          </Row>

          <Row className="mb-5">
            <Col className="justify-content-center">
              <Services />
            </Col>
          </Row>

          <Row className="mb-5, bg-secondary">
            <Col>
              <Gallery />
            </Col>
          </Row>

          <Row className="mb-5">
            <Col>
              <SocialMedia />
            </Col>
          </Row>

          <Row className="mb-5">
            <Col>
              <img src={img07} />;
            </Col>
          </Row>

          <Row className="mb-5">
            <Col>
              <Contact />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Body1;
