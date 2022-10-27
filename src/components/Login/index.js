import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { IMAGES } from "../../assets/images/index.js";
import { useCookies } from "react-cookie";
import { useAuth } from "../../Navigation/Auth/ProvideAuth";
import { FaChevronLeft } from "react-icons/fa";
function Login() {
  // eslint-disable-next-line
  const [cookies, setCookies] = useCookies();
  let auth = useAuth();
  console.log("auth", auth);

  useEffect(() => {
    document.title = "Login || Innova";
  }, []);
  const [userRole, setuserRole] = useState("Doctor");
  // function onSubmit(data) {}
  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };

  const LoginFunc = () => {
    // debugger
    let data = { token: "token", Name: "Doctor", role: userRole };
    setCookies("innova_user", data);
  };
  return (
    <div className="auth-bg d-flex justify-content-center align-items-center">
      <Container className="auth-container">
        <Row>
          <Link className="back-btn" to="/">
            <FaChevronLeft className="mt-1 mr-1" />
            <p style={{ "text-decoration": "none" }}>Back</p>
          </Link>
          <Col
            xl={12}
            className="d-flex justify-content-center align-items-center"
          >
            <div
              id="auth-innova-logo"
              className="d-flex align-items-center justify-content-center"
            >
              <Image src={IMAGES.AUTHLOGO} />
            </div>
          </Col>
        </Row>
        <Row id="auth-row-margin">
          <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            className="d-flex justify-content-center align-items-center"
          >
            <Form
              className="auth-form mx-lg-5"
              id="register"
              onSubmit={handleLoginSubmit}
            >
              <Form.Group controlId="formBasicName">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  className="auth-fields"
                  type="text"
                  name="name"
                  placeholder="Name (Mandatory)"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  className="auth-fields"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPhone">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  className="auth-fields"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (Mandatory)"
                />
                <Form.Group className="mt-3">
                  <select className="py-2" id="dropdown-basic">
                    <option value="Patient" selected>
                      Patient
                    </option>
                  </select>
                </Form.Group>
                <Form.Text className="text-muted pl-3">
                  (Your mobile number will only be used to send transaction
                  SMS's)
                </Form.Text>
              </Form.Group>

              <Form.Group>
                <label className="main">
                  Have a promo code?
                  <input type="checkbox" />
                  <span className="geekmark"></span>
                </label>
              </Form.Group>
              <Form.Group>
                <label className="main">
                  I am agree to terms of use and policy
                  <input type="checkbox" />
                  <span className="geekmark"></span>
                </label>
              </Form.Group>
              <Button className="auth-btn py-2" variant="primary" type="submit">
                Create Account
              </Button>
            </Form>
          </Col>
          {/* ====================================================Login ===============================================*/}
          {/* ====================================================Login ===============================================*/}
          {/* ====================================================Login ===============================================*/}
          <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="auth-form login-bg mx-lg-5" id="login">
              <h3 className="pb-4 login-txt">Let's Login</h3>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  className="auth-fields"
                  type="tel"
                  placeholder="Phone#"
                  name="phone"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  className="auth-fields"
                  type="text"
                  placeholder="Name"
                  name="name"
                />
              </Form.Group>
              <Form.Group className="">
                <select
                  className="py-2"
                  id="dropdown-basic"
                  onChange={(e) => setuserRole(e.target.value)}
                >
                  <option value="Doctor">Doctor</option>
                  <option value="Patient">Patient</option>
                  <option value="Admin">Admin</option>
                </select>
              </Form.Group>
              <Form.Group className="forgot-link">
                <Link to="/login" className="forgot-password">
                  Forgot Password?
                </Link>
              </Form.Group>

              <Button
                className="btn auth-btn py-2 text-white"
                onClick={LoginFunc}
              >
                Login
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Login;
