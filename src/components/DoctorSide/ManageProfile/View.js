import React from "react";
import { Accordion, Card, Col, Image, Row, Tab, Tabs } from "react-bootstrap";
import { IMAGES } from "../../../assets/images";
const Overview = () => {
  return (
    <div className="view-overview">
      <div>
        <h4>Specialization</h4>
        <ul>
          <li>
            <h6>Cardiologist</h6>
          </li>
          <li>
            <h6>Chiropractor</h6>
          </li>
        </ul>
      </div>
      <hr></hr>
      <div>
        <h4>Experience</h4>
        <p className="text-center">Please Add your experience</p>
      </div>
      <hr></hr>

      <div>
        <h4>Practice</h4>
        <p className="text-center">Please Add your practice</p>
      </div>
      <hr></hr>

      <div>
        <h4>Services</h4>
        <p className="text-center">Please Add your Services</p>
      </div>
      <hr></hr>

      <div>
        <h4>Professional Licenses/ certificates</h4>
        <p className="text-center">
          Please Add your Professional Licenses/ certificates
        </p>
      </div>
      <hr></hr>

      <div>
        <h4>Education</h4>
        <p className="text-center">Please Add your Education</p>
      </div>
      <hr></hr>

      <div>
        <h4>Languages</h4>
        <p className="text-center">Please Add your Languages</p>
      </div>
      <hr></hr>
    </div>
  );
};
const Services = () => {
  return (
    <div className="view-services">
      <h4>Services</h4>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Minor surgery
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>$500</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Major Surjery
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>$5000</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};
const Reviews = () => {
  return (
    <Row className="view-reviews d-flex align-items-center">
      <Col md={3}>
        <Image src={IMAGES.AVATAR} className="w-50 rounded-circle" />
      </Col>
      <Col md={9}>
        <h4>John doe</h4>
        <h5>Specialization</h5>
        <p>Comments</p>
      </Col>
    </Row>
  );
};

const View = () => {
  return (
    <div>
      <Tabs defaultActiveKey="Overview" id="" className="mb-3 pb-3">
        <Tab eventKey="Overview" title="Overview">
          <Overview />
        </Tab>
        <Tab eventKey="Services" title="Services">
          <Services />
        </Tab>
        <Tab eventKey="Reviews" title="Reviews">
          <Reviews />
        </Tab>
      </Tabs>
    </div>
  );
};

export default View;
