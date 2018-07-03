import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
  Input
} from "reactstrap";

class HeaderSubscribe extends Component {
  renderInputGroup() {
    return (
      <InputGroup>
        <Input placeholder="Digite seu e-mail" />

        <InputGroupAddon addonType="append">
          <Button color="primary">Enviar</Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }

  renderForm() {
    return (
      <Form>
        <h4 className="text-right text-white">
          Deseja receber nossas novidades?
        </h4>
        {this.renderInputGroup()}
      </Form>
    );
  }

  render() {
    return (
      <Row className="justify-content-end mb-5 mr-5">
        <Col xs="auto">{this.renderForm()}</Col>
      </Row>
    );
  }
}

export default HeaderSubscribe;
