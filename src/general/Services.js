import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import { Card, Button, CardTitle, CardText } from "reactstrap";

class Services extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Row>
            <Col>
              <h1>O que oferecemos</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card body inverse color="danger">
                <CardTitle>Instrumentos</CardTitle>
                <CardText>Texto com explicação rápida</CardText>
                <Button>Saiba Mais</Button>
              </Card>
            </Col>
            <Col>
              <Card body inverse color="danger">
                <CardTitle>Vozes</CardTitle>
                <CardText>Texto com explicação rápida</CardText>
                <Button color="secondary">Saiba Mais</Button>
              </Card>
            </Col>
            <Col>
              <Card body inverse color="danger">
                <CardTitle>Repertório</CardTitle>
                <CardText>Texto com explicação rápida</CardText>
                <Button color="secondary">Saiba Mais</Button>
              </Card>
            </Col>
            <Col>
              <Card body inverse color="danger">
                <CardTitle>Arranjos Personalizados</CardTitle>
                <CardText>Texto com explicação rápida</CardText>
                <Button color="secondary">Saiba Mais</Button>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Services;
