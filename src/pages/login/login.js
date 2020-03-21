import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormFeedback} from 'reactstrap';

const Login = () => {
  return (
         <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          <Input valid />
          <FormFeedback valid>Sweet! that name is available</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          <Input invalid />
          <FormFeedback>Oh noes! that name is already taken</FormFeedback>
        </FormGroup>
        <Button outline color="success">Sign Up</Button> <Button outline color="warning">Log In</Button>
      </Form>
  );
}
    
export default Login