import React from "react";
import { Form, Button } from "react-bootstrap";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="main-Container">
      <div style={{ width: "2000px" }}>
        <img className="loginpage-child" alt="" src="/group-2.svg" />
      </div>

      <div>
        <h>Human Resource Management Portal for Your Organizations</h>
        <div className="login-wrapper">
          <Form>
            <h2>Login Your Account</h2>
            <Form.Group className="mb-3 formHeading" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group
              className="mb-3 formHeading"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="buttonContainer">
              <Button type="submit" className="blueButton">
                Sign In
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
