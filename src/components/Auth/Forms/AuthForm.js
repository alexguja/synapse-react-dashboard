import { useState } from 'react';
import { Form, Button, Container} from "react-bootstrap";

import {
  CardForm,
  CardTitle,
  FormInput,
  FormLabel,
  FormLink
} from "./AuthFormStyles";


const AuthForm = ({ handleSubmit, buttonText, formTitle, auth}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Container className="my-4 mx-auto">
        <CardForm>
          <CardTitle className="m-auto mt-2">{formTitle}</CardTitle>
          <Form>
            
            <Form.Group className="mb-2 m-4">
              <FormLabel>Email address</FormLabel>
              <FormInput
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-2 m-4" controlId="formBasicPassword">
              <FormLabel>Password</FormLabel>
              <FormInput
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="m-4"
              onClick={(e) => handleSubmit(e, email, password, auth)}
            >
              {buttonText}
            </Button>
            
            {buttonText === "Sign in" ? <FormLink to="/signup"> New user sign up </FormLink> : ""}
       
          </Form>
        </CardForm>
      </Container>
    </>
  )
}

export default AuthForm;