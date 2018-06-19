import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Label,
  Input,
  InputGroupText,
  FormText
} from "reactstrap";

class HeaderSubscribe extends Component {
  render() {
    return (
      <Form>
        <h4 className="text-right"> Deseja receber nossas novidades?</h4>
        <InputGroup>
          <Input placeholder="Digite seu e-mail" />
          <InputGroupAddon addonType="append">
            <Button color="secondary">Enviar</Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    );
  }
}
export default HeaderSubscribe;
