import React, { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPhoneAlt,
} from "react-icons/fa";
import { IMAGES } from "../../assets/images/index.js";
import Slider from "rc-slider";
import "rc-tooltip/assets/bootstrap.css";
import "rc-slider/assets/index.css";
import {
  Button,
  Container,
  Navbar,
  Row,
  Col,
  Image,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { PATH } from "../../config.js";
function LandingPage() {
  useEffect(() => {
    document.title = "HOME || INNOVA";
    AOS.init({ duration: 1200 });
  }, []);


  const { createSliderWithTooltip } = Slider;
  const Range = createSliderWithTooltip(Slider.Range);
  // const { Handle } = Slider;
  const d = new Date();
  const currentYear = d.getFullYear();

  function contactUs() {
    var my_element = document.getElementById("contactUs");

    my_element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  const wrapperStyle = { width: "90%" };
  // function onSubmit(data) { }
  return (
    <div className="x-scroll-disabled">
      <div className="section-1">
        <div className="overlay-logo">
          <Container fluid className="py-5">
            <Navbar className="justify-content-between" expand="lg">
              <Navbar.Brand href="#home">
                <Image
                  src={IMAGES.LOGO}
                  className="d-inline-block align-top"
                  alt="Innova logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse
                className="justify-content-end"
                id="basic-navbar-nav"
              >
                <Form inline className="d-flex">
                  <Link to={PATH.LOGIN} variant="" className="nav-btn btn-bg-login mx-1 pt-2">
                    Login
                  </Link>
                  <Button variant="" className="nav-btn primary-bg-btn mx-1">
                    Pricing
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
            <Row>
              <Col
                className="d-flex flex-column align-items-start justify-content-center"
                lg={6}
                md={6}
                sm={12}
                xs={12}
              >
                <div
                  className="top-section-text font-weight-bolder"
                  data-aos="fade-right"
                >
                  Welcome to <span id="heading-innova">INNOVA</span>,
                  sustainable telemedicine at its best.
                </div>
                <div className="s1-basic-text mb-5" data-aos="fade-up">
                  We priotitize value-based integrated remote care by empowering
                  patients and providers through innovation
                </div>
                <Button
                  onClick={contactUs}
                  variant=""
                  data-aos="zoom-in"
                  className="s1-btn section-btn mx-auto mb-2"
                >
                  Request a demo
                </Button>
              </Col>
              <Col
                className="d-flex align-items-center justify-content-center"
                lg={6}
                md={6}
                sm={12}
                xs={12}
                data-aos="fade-up"
              >
                <div className="arrow-img d-flex flex-column align-items-center font-weight-bolder">
                  <Image
                    src={IMAGES.TABLETSCREEN}
                    className="w-75"
                  ></Image>
                  <div id="scroll-down-text">Scroll down to explore</div>
                  <Image
                    src={IMAGES.SCROLLDOWNBUTTON}
                    style={{ width: "35px" }}
                  ></Image>
                  <ul>
                    <li>
                      <Image
                        style={{ width: "35px" }}
                        className="my-1"
                        src={IMAGES.FBLOGO}
                      />{" "}
                      Facebook
                    </li>
                    <li>
                      <Image
                        style={{ width: "35px" }}
                        className="my-1"
                        src={IMAGES.INSTAGRAMLOGO}
                      />{" "}
                      Instagram
                    </li>
                    <li>
                      <Image
                        style={{ width: "35px" }}
                        className="my-1"
                        src={IMAGES.LINKEDINLOGO}
                      />{" "}
                      LinkedIn
                    </li>
                  </ul>
                </div>
              </Col>

            </Row>
          </Container>
        </div>
      </div>

      {/* ==================================Sections 2 ===================================*/}
      {/* ==================================Sections 2 ===================================*/}
      {/* ==================================Sections 2 ===================================*/}
      {/* ==================================Sections 2 ===================================*/}

      <div className="pt-5 section-2">
        <Container fluid>
          <div>
            <Row
              className="d-flex flex-column justify-content-center align-items-center text-center"
              data-aos="zoom-in"
            >
              <Row>
                <div className="s2-title py-2">
                  Comprehensive White Label Telemedicine Solution
                </div>
              </Row>
            </Row>
            <Row className="py-5">
              <Col
                sm={12}
                md={12}
                lg={12}
                xl={6}
                className="d-flex align-items-center justify-content-center s2-basic-text"
              >
                <Container
                  fluid
                  className="d-flex justify-content-md-center"
                  data-aos="fade-right"
                >
                  <ul className="pl-0">
                    <li>
                      <Image className="my-3 mr-3" src={IMAGES.LISTSTYLEICON} />
                      Safe, simple and efficient
                    </li>
                    <li>
                      <Image className="my-3 mr-3" src={IMAGES.LISTSTYLEICON} />
                      Customizable across all specialties
                    </li>
                    <li>
                      <Image className="my-3 mr-3" src={IMAGES.LISTSTYLEICON} />
                      No coding required
                    </li>
                    <li>
                      <Image className="my-3 mr-3" src={IMAGES.LISTSTYLEICON} />
                      Save valuable time without compromising on patient
                      satisfaction
                    </li>
                    <li>
                      <Image className="my-3 mr-3" src={IMAGES.LISTSTYLEICON} />
                      Low monthly subscription fee
                    </li>
                    <li>
                      <Image className="my-3 mr-3" src={IMAGES.LISTSTYLEICON} />
                      User intuitive interface
                    </li>
                    <li>
                      <Button
                        onClick={contactUs}
                        variant=""
                        data-aos="zoom-in"
                        className="d-flex justify-content-center align-items-center s1-btn section-btn mt-3"
                      >
                        Get a qoute
                      </Button>
                    </li>
                  </ul>
                </Container>
              </Col>
              <Col
                className="d-flex justify-content-center align-items-center"
                xl={6}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                data-aos="fade-left"
              >
                <Image
                  id=""
                  className="my-1 s7-radius w-100"
                  src={IMAGES.DOCTOR}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      {/* ==================================Sections 3 ===================================*/}
      {/* ==================================Sections 3 ===================================*/}
      {/* ==================================Sections 3 ===================================*/}
      {/* ==================================Sections 3 ===================================*/}

      <div className="overlay-logo">
        <div className="section-3 pt-5">
          <Row className="justify-content-center align-items-center text-center pb-3 mx-0">
            <Row data-aos="zoom-in">
              <h1 className="font-weight-bolder section-heading">
                High Level Features
              </h1>
            </Row>
          </Row>
          <Container fluid>
            <Row className="py-4">
              <Col
                className="d-flex justify-content-center align-items-center"
                xl={6}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                data-aos="fade-left"
              >
                <Image
                  id=""
                  className="my-1 s7-radius w-75"
                  src={IMAGES.DASHBOARDDESIGN}
                />
              </Col>
              <Col
                sm={12}
                md={12}
                lg={12}
                xl={6}
                className="d-flex align-items-center justify-content-center s2-basic-text"
              >
                <Container
                  fluid
                  className="d-flex justify-content-md-center"
                  data-aos="fade-right"
                >
                  <ul className="pl-0">
                    <li>
                      <Image className="my-3 mr-3" src={IMAGES.LISTSTYLEICON} />
                      User Profile Management
                    </li>
                    <li>
                      <Image className="my-3 mr-3" src={IMAGES.LISTSTYLEICON} />
                      Clinicial Scheduling
                    </li>
                    <li>
                      <Image className="my-3 mr-3" src={IMAGES.LISTSTYLEICON} />
                      Clinical Notes and Prescription
                    </li>
                    <li>
                      <Image className="my-3 mr-3" src={IMAGES.LISTSTYLEICON} />
                      Comprehensive Patient Health Record
                    </li>
                    <li>
                      <Image className="my-3 mr-3" src={IMAGES.LISTSTYLEICON} />
                      Secure audio/visual Appointments
                    </li>
                    <li>
                      <Image className="my-3 mr-3" src={IMAGES.LISTSTYLEICON} />
                      Community Forum
                    </li>
                    <li>
                      <Image className="my-3 mr-3" src={IMAGES.LISTSTYLEICON} />
                      Real-time Notifications and Alerts
                    </li>
                    <li>
                      <Image className="my-3 mr-3" src={IMAGES.LISTSTYLEICON} />
                      Built-in Reports & Analytics
                    </li>
                  </ul>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* ==================================Sections 4 ===================================*/}
      {/* ==================================Sections 4 ===================================*/}
      {/* ==================================Sections 4 ===================================*/}
      {/* ==================================Sections 4 ===================================*/}

      <div className="section-4">
        <Row className="mx-0 justify-content-center">
          <Col md={12} sm={12} lg={12} xs={12} xl={12} id="s4-bg">
            <Container fluid>
              <Image
                data-aos="fade-up"
                // id=""
                className="my-1 s7-radius w-75 d-flex justify-content-center mx-auto"
                src={IMAGES.WHYCHOOSEUS}
              />
            </Container>
          </Col>
        </Row>
      </div>

      {/* ==================================Sections 4(1) ===================================*/}
      {/* ==================================Sections 4(1) ===================================*/}
      {/* ==================================Sections 4(1) ===================================*/}
      {/* ==================================Sections 4(1) ===================================*/}
      <div className="section-41">
        <Row className="mx-0 section41">
          <Col
            md={12}
            className="font-weight-bolder d-flex flex-column justify-content-center align-items-center text-center mx-auto py-5"
            data-aos="zoom-in"
          >
            <Container fluid>
              <div className="section-heading">Robusts Integration</div>
            </Container>
          </Col>
          <Col
            md={12}
            className="d-flex justify-content-center mx-auto"
          >
            <Container fluid>
              <Image
                data-aos="fade-right"
                className="py-5 w-75 d-flex justify-content-center mx-auto"
                src={IMAGES.SECTION41}
              />
            </Container>
          </Col>

        </Row>
      </div>

      {/* ==================================Sections 5 ===================================*/}
      {/* ==================================Sections 5 ===================================*/}
      {/* ==================================Sections 5 ===================================*/}
      {/* ==================================Sections 5 ===================================*/}
      <div className="section-5 pt-5">
        <Container fluid>
          <Row
            className="align-items-center justify-content-center mx-auto"
            data-aos="zoom-in"
          >
            <p className="section-heading">
              We bring together everyone in patient care
            </p>
          </Row>
          <Row className="mx-0 py-5 align-items-center justify-content-md-center">
            <Col
              xl={7}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="justify-content-start pr-5"
              id="chat-col"
            >
              <Container fluid>
                <Row
                  className="align-items-center justify-content-end text-right text-justify"
                  data-aos="fade-left"
                >
                  <Col
                    md={6}
                    sm={9}
                    xs={9}
                    className="my-2 chat-bg-patient chat-style"
                  >
                    <div className="p-2">
                      <span className="font-weight-bolder chat-text-title">
                        Patient
                      </span>
                      <br></br>
                      Innova prioritizes value-based integrated remote patient
                      careby bridging the patient-provider through through
                      tele-consultations in these challenging times.
                    </div>
                  </Col>
                  <Col lg={1} md={1} sm={3} xs={3} className="p-1 d-flex justify-content-center">
                    <Image
                      fluid
                      className="my-1 s7-radius"
                      style={{ width: "65%" }}
                      src={IMAGES.SECTION5CHATWOMANPIC}
                    />
                  </Col>
                </Row>
                <Row
                  className="align-items-center justify-content-start"
                  data-aos="fade-right"
                >
                  <Col md={1} lg={1} sm={2} xs={3} className="p-1 d-flex justify-content-center">
                    <Image
                      fluid
                      className="my-1 s7-radius"
                      style={{ width: "65%" }}
                      src={IMAGES.SECTION5CHATDOCTORPIC}
                    />
                  </Col>
                  <Col
                    md={6}
                    sm={9}
                    xs={9}
                    className="my-2 px-0 chat-bg-doctor chat-style"
                  >
                    <div className="p-2">
                      <span className="font-weight-bolder chat-text-title">
                        Doctor
                      </span>
                      <br></br>
                      Innova prioritizes value-based integrated remote patient
                      careby bridging the patient-provider through through
                      tele-consultations in these challenging times.
                    </div>
                  </Col>
                </Row>
                <Row
                  className="align-items-center justify-content-end text-right text-justify"
                  data-aos="fade-left"
                >
                  <Col
                    md={6}
                    sm={9}
                    xs={9}
                    className="my-2 px-0 chat-bg-patient chat-style"
                  >
                    <div className="p-2">
                      <span className="font-weight-bolder chat-text-title">
                        Patient
                      </span>
                      <br></br>
                      Innova prioritizes value-based integrated remote patient
                      careby bridging the patient-provider through through
                      tele-consultations in these challenging times.
                    </div>
                  </Col>
                  <Col lg={1} md={1} sm={2} xs={3} className="p-1 d-flex justify-content-center">
                    <Image
                      fluid
                      className="my-1 s7-radius"
                      style={{ width: "65%" }}
                      src={IMAGES.SECTION5CHATWOMANPIC}
                    />
                  </Col>
                </Row>
                <Row
                  className="align-items-center justify-content-start"
                  data-aos="fade-right"
                >
                  <Col lg={1} md={1} sm={2} xs={3} className="p-1 d-flex justify-content-center">
                    <Image
                      fluid
                      className="my-1 s7-radius"
                      style={{ width: "65%" }}
                      src={IMAGES.SECTION5CHATDOCTORPIC}
                    />
                  </Col>
                  <Col
                    md={6}
                    sm={9}
                    xs={9}
                    className="my-2 px-0 chat-bg-doctor chat-style text-justify"
                  >
                    <div className="p-2">
                      <span className="font-weight-bolder chat-text-title">
                        Doctor
                      </span>
                      <br></br>
                      Innova prioritizes value-based integrated remote patient
                      careby bridging the patient-provider through through
                      tele-consultations in these challenging times.
                    </div>
                  </Col>
                </Row>
                <Row
                  className="align-items-center justify-content-end text-right text-justify"
                  data-aos="fade-left"
                >
                  <Col
                    md={6}
                    sm={9}
                    xs={9}
                    className="my-2 px-0 chat-bg-patient chat-style"
                  >
                    <div className="p-2">
                      <span className="font-weight-bolder chat-text-title">
                        Patient
                      </span>
                      <br></br>Innova prioritizes value-based integrated remote
                      patient careby bridging the patient-provider through
                      through tele-consultations in these challenging times.
                    </div>
                  </Col>
                  <Col lg={1} md={1} sm={2} xs={3} className="p-1 d-flex justify-content-center">
                    <Image
                      fluid
                      className="my-1 s7-radius"
                      style={{ width: "65%" }}
                      src={IMAGES.SECTION5CHATWOMANPIC}
                    />
                  </Col>
                </Row>
                <Row
                  className="align-items-center justify-content-start"
                  data-aos="fade-right"
                >
                  <Col lg={1} md={1} sm={2} xs={3} className="p-1 d-flex justify-content-center">
                    <Image
                      fluid
                      className="my-1 s7-radius"
                      style={{ width: "65%" }}
                      src={IMAGES.SECTION5CHATDOCTORPIC}
                    />
                  </Col>
                  <Col
                    md={6}
                    sm={9}
                    xs={9}
                    className="my-2 px-0 chat-bg-doctor chat-style text-justify"
                  >
                    <div className="p-2">
                      <span className="font-weight-bolder chat-text-title">
                        Doctor
                      </span>{" "}
                      <br></br>
                      Innova prioritizes value-based integrated remote patient
                      careby bridging the patient-provider through through
                      tele-consultations in these challenging times.
                    </div>
                  </Col>
                </Row>

                <Row
                  className="align-items-center justify-content-end text-right text-justify"
                  data-aos="fade-left"
                >
                  <Col
                    md={12}
                    sm={12}
                    xs={12}
                    className="d-flex justify-content-end align-items-end"
                  >
                    <Button
                      onClick={contactUs}
                      variant=""
                      data-aos="zoom-in"
                      className="s1-btn section-btn ml-auto mt-2"
                    >
                      Get in touch
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col
              xl={5}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="d-flex justify-content-center"
              data-aos="fade-down"
            >
              <Image
                fluid
                className="my-1 s7-radius w-75"
                src={IMAGES.SECTION5RIGHT}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* ==================================Sections 6 ===================================*/}
      {/* ==================================Sections 6 ===================================*/}
      {/* ==================================Sections 6 ===================================*/}
      {/* ==================================Sections 6 ===================================*/}
      <div id="getPrice">
        <div className="section-6-1 d-flex justify-content-center align-items-center py-5 section-heading text-center">
          <div data-aos="zoom-in">Request a cost estimate</div>
        </div>
        <div className="section-6-2 pt-3">
          <Container fluid>
            <Form
              className="s6-form"
              // onInput="range-value.value=(parseInt.value)"
            >
              <Row
                className="justify-content-between mt-3"
                data-aos="fade-down"
              >
                <Col
                  md={12}
                  xl={12}
                  lg={12}
                  className="mb-5 font-weight-bolder"
                >
                  <h5
                    className="font-weight-bolder"
                  >
                    1. What type of software solution would you like to develop
                    with us?
                  </h5>
                </Col>
                <Col md={3}>
                  <label className="main">
                    <h5>

                      Desktop
                    </h5>
                    <input type="checkbox" />
                    <span className="geekmark"></span>
                  </label>
                </Col>
                <Col md={3}>
                  <label className="main">
                    <h5>

                      Mobile
                    </h5>
                    <input type="checkbox" />
                    <span className="geekmark"></span>
                  </label>
                </Col>
                <Col md={3}>
                  <label className="main">
                    <h5>
                      Web
                    </h5>
                    <input type="checkbox" />
                    <span className="geekmark"></span>
                  </label>
                </Col>
                <Col md={3}>
                  <label className="main">
                    <h5>

                      Consultancy Needed
                    </h5>
                    <input type="checkbox" />
                    <span className="geekmark"></span>
                  </label>
                </Col>
              </Row>
              <hr></hr>
              <Row
                className="justify-content-between mt-3"
                data-aos="fade-down"
              >
                <Col md={12} className="mb-5 font-weight-bolder">
                  <h5 className="font-weight-bolder">

                    2. What is the current stage of your software development
                    process?
                  </h5>
                </Col>
                <Col md={3}>
                  <label className="main">
                    <h5>
                      Idea
                    </h5>
                    <input type="checkbox" />
                    <span className="geekmark"></span>
                  </label>
                </Col>
                <Col md={3}>
                  <label className="main">
                    <h5>
                      Prototype/ Specification
                    </h5>
                    <input type="checkbox" />
                    <span className="geekmark"></span>
                  </label>
                </Col>
                <Col md={3}>
                  <label className="main">
                    <h5>
                      Designed solution
                    </h5>
                    <input type="checkbox" />
                    <span className="geekmark"></span>
                  </label>
                </Col>
                <Col md={3}>
                  <label className="main">
                    <h5>
                      MVP
                    </h5>

                    <input type="checkbox" />
                    <span className="geekmark"></span>
                  </label>
                </Col>
              </Row>
              <hr></hr>
              <Row
                className="justify-content-between mt-3"
                data-aos="fade-down"
              >
                <Col md={12} className="mb-5">
                  <h5 className="font-weight-bolder">
                    3. Do you need a professional consultation from any of the
                    specialists below?
                  </h5>
                </Col>
                <Col md={3}>
                  <label className="main">
                    <h5>
                      Project Manager
                    </h5>
                    <input type="checkbox" />
                    <span className="geekmark"></span>
                  </label>
                </Col>
                <Col md={3}>
                  <label className="main">
                    <h5>
                      Business Analyst
                    </h5>
                    <input type="checkbox" />
                    <span className="geekmark"></span>
                  </label>
                </Col>
                <Col md={3}>
                  <label className="main">
                    <h5>
                      UI/UX Designer
                    </h5>
                    <input type="checkbox" />
                    <span className="geekmark"></span>
                  </label>
                </Col>
                <Col md={3}>
                  <label className="main">
                    <h5>
                      Archiect
                    </h5>
                    <input type="checkbox" />
                    <span className="geekmark"></span>
                  </label>
                </Col>
              </Row>
              <hr></hr>
              <Row
                className="justify-content-between mt-3"
                data-aos="fade-down"
              >
                <Col md={12} className="mb-5 font-weight-bolder">
                  <h5 className="font-weight-bolder">
                    4. What is the expected duration of your project?
                  </h5>
                </Col>
                <Col md={12}>
                  <div style={wrapperStyle} className="mx-4">
                    <Range
                      min={0}
                      max={100}
                      defaultValue={[0]}
                      marks={{
                        0: "1 month",
                        25: "6 month",
                        50: "1 Year",
                        75: "1.5 Years",
                        100: "2 + Years",
                      }}
                      step={null}
                      tipFormatter={(value) => `${value}%`}
                    />
                  </div>
                </Col>
              </Row>
              <hr></hr>
              <Col md={12} className="my-5" data-aos="fade-left">
                <Button variant="" className="s6-btn section-btn">
                  Get Price
                </Button>
              </Col>
              <hr></hr>
            </Form>
          </Container>
        </div>
      </div>

      {/* ==================================Sections 7 ===================================*/}
      {/* ==================================Sections 7 ===================================*/}
      {/* ==================================Sections 7 ===================================*/}
      {/* ==================================Sections 7 ===================================*/}
      <div className="section-7">
        <Form className="my-5 px-3 py-4 s7-form" id="contactUs">
          <div
            className="s7-title mx-3"
            data-aos="fade-down"
          >
            Contact form
          </div>
          <Row className="mx-0" data-aos="fade-down">
            <Col md={3} className="my-3 p-3">
              <Form.Control
                className="p-4 s7-radius text-muted"
                type="text"
                placeholder="YOUR NAME"
              />
            </Col>
            <Col md={3} className="my-3 p-3">
              <Form.Control
                className="p-4 s7-radius text-muted"
                type="email"
                placeholder="EMAIL ADDRESS"
              />
            </Col>
            <Col md={3} className="my-3 p-3">
              <Form.Control as="select" size="lg">
                <option>1 - 10 Employees</option>
                <option>10 - 50 Employees</option>
                <option>50 - 100 Employees</option>
                <option>100+ Employees</option>
              </Form.Control>
            </Col>
          </Row>
          <Row className="mx-0" data-aos="fade-right">
            <Col md={9}>
              <textarea
                className="my-3 p-3 w-100 s7-radius"
                type="text-area"
                placeholder="Any other details?"
                rows="5"
              />
            </Col>
          </Row>
          <Row className="mx-3">
            <Button
              variant=""
              className="my-4 s7-btn section-btn"
              data-aos="zoom-in"
            >
              Submit
            </Button>
          </Row>
        </Form>
      </div>

      {/* ==================================Sections 8 ===================================*/}
      {/* ==================================Sections 8 ===================================*/}
      {/* ==================================Sections 8 ===================================*/}
      {/* ==================================Sections 8 ===================================*/}


      <div className="section8 pt-5">
        <Row className="mx-0 justify-content-center">
          <Col
            xl={2}
            lg={3}
            md={5}
            sm={11}
            xs={11}
            className="my-3 font-weight-bolder m-3"
            data-aos="fade-left"
          >
            <Row className="mx-0">
              <Image id="asia-logo" src={IMAGES.ASIALOGO} alt="Innova logo" />
            </Row>
            <div className="footer-place-work pt-3">Asia</div>
            <div className="footer-contact">
              <Image className="mr-2" src={IMAGES.ADDRESSLOGO} /> Dr East
              Stroudsburg, Pennsylvania USA
              <hr className="my-3"></hr>
              <div className="pb-2">
                <FaPhoneAlt className="mr-2" />
                +92310-0404053
              </div>
              <div id="footer-email">
                <Image className="mr-2" src={IMAGES.EMAILLOGO} />
                business@xevensolutions.com
              </div>
            </div>
          </Col>

          <Col
            xl={2}
            lg={3}
            md={5}
            sm={11}
            xs={11}
            className="my-3 font-weight-bolder m-3"
            data-aos="fade-left"
          >
            <Row className="mx-0">
              <Image src={IMAGES.NORTHAMERICALOGO} alt="Innova logo" />
            </Row>
            <div className="footer-place-work pt-3">North America</div>
            <div className="footer-contact">
              <Image className="mr-2" src={IMAGES.ADDRESSLOGO} /> Dr East
              Stroudsburg, Pennsylvania USA
              <hr className="my-3"></hr>
              <div className="pb-2">
                <FaPhoneAlt className="mr-2" />
                +92310-0404053
              </div>
              <div id="footer-email">
                <Image className="mr-2" src={IMAGES.EMAILLOGO} />
                business@xevensolutions.com
              </div>
            </div>
          </Col>

          <Col
            xl={2}
            lg={3}
            md={5}
            sm={11}
            xs={11}
            className="my-3 font-weight-bolder m-3"
            data-aos="fade-left"
          >
            <Row className="mx-0">
              <Image src={IMAGES.MENALOGO} alt="Innova logo" />
            </Row>
            <div className="footer-place-work pt-4">MENA</div>
            <div className="footer-contact">
              <Image className="mr-2" src={IMAGES.ADDRESSLOGO} /> Dr East
              Stroudsburg, Pennsylvania USA
              <hr className="my-3"></hr>
              <div className="pb-2">
                <FaPhoneAlt className="mr-2" />
                +92310-0404053
              </div>
              <div id="footer-email">
                <Image className="mr-2" src={IMAGES.EMAILLOGO} />
                business@xevensolutions.com
              </div>
            </div>
          </Col>

          <Col
            xl={2}
            lg={3}
            md={5}
            sm={11}
            xs={11}
            className="my-3 font-weight-bolder m-3"
            data-aos="fade-left"
          >
            <Row className="mx-0">
              <Image src={IMAGES.EUROPELOGO} alt="Innova logo" />
            </Row>
            <div className="footer-place-work pt-3">Europe</div>
            <div className="footer-contact">
              <Image className="mr-2" src={IMAGES.ADDRESSLOGO} /> Dr East
              Stroudsburg, Pennsylvania USA
              <hr className="my-3"></hr>
              <div className="pb-2">
                <FaPhoneAlt className="mr-2" />
                +92310-0404053
              </div>
              <div id="footer-email">
                <Image className="mr-2" src={IMAGES.EMAILLOGO} />
                business@xevensolutions.com
              </div>
            </div>
          </Col>

        </Row>
        <hr></hr>
        <Container fluid>
          <Row className="mx-0 my-2 align-items-center justify-content-sm-center">
            <Col
              lg={2}
              md={3}
              sm={12}
              xs={12}
              className="d-flex justify-content-md-start footer-text justify-content-sm-center justify-content-xs-center"
            >
              <div>
                {currentYear} © <Link to="https://innova.xevensolutions.com"> XevenSolution</Link>
              </div>
            </Col>
            <Col
              lg={5}
              md={5}
              sm={12}
              xs={12}
              className="d-flex justify-content-md-center footer-text justify-content-sm-center justify-content-xs-center"
            >
              <Link className="px-2" to="/login">
                Home
              </Link>
              |
              <Link className="px-2" to="/">
                {" "}
                Pricing
              </Link>
              |
              <Link className="px-2" to="/">
                {" "}
                Login{" "}
              </Link>
            </Col>
            <Col
              lg={2}
              md={3}
              sm={12}
              xs={12}
              className="d-flex justify-content-md-end footer-text justify-content-sm-center justify-content-xs-center"
            >
              <Image className="mx-1 w-14" src={IMAGES.FOOTERFBLOGO} />
              <Image className="mx-1 w-14" src={IMAGES.FOOTERINSTAGRAMLOGO} />
              <Image className="mx-1 w-14" src={IMAGES.FOOTERLINKEDINLOGO} />

            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default LandingPage;
