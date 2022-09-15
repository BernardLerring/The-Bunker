import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Sign Up</h1>

            <Form>
                <Form.Group controlId="username">
                    <Form.Label className="d-none">username</Form.Label>
                    <Form.Control
                    className={styles.Input}
                    type="text" 
                    placeholder="username" 
                    name="username"
                    />
                </Form.Group>
                <Form.Group controlId="password1">
                    <Form.Label className="d-none">password1</Form.Label>
                    <Form.Control 
                    className={styles.Input}
                    type="password" 
                    placeholder="password" 
                    name="password"
                    />
                </Form.Group>
                <Form.Group controlId="password2">
                    <Form.Label className="d-none">password2</Form.Label>
                    <Form.Control
                    className={styles.Input}
                    type="password" 
                    placeholder="repeat password" 
                    name="password"
                    />
                </Form.Group>

                <Button className={`${btnStyles.Button} ${btnStyles.Wide}`}type="submit">
                    Join Us!
                </Button>
            </Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already a member? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://res.cloudinary.com/timwright/image/upload/v1663273140/pexels-jopwell-1325749_2_f0kgv4.jpg"
          }
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;