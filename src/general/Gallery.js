import React, { Component } from "react";
import {
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

class Gallery extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Row>
            <h1>Galeria</h1>
          </Row>
          <Row className="justify-content-center">
            <h3 className="mb-5"> Carousel de fotos</h3>
          </Row>
          <Row className="justify-content-center">
            <h3 className="mb-5"> Carousel de Vídeos</h3>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Gallery;
