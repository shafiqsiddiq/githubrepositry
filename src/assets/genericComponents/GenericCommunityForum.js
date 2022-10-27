import React, { useEffect } from "react";
import {
  Accordion,
  Card,
  Col,
  Image,
  Row,
  Navbar,
  Container,
} from "react-bootstrap";
import { FaRegComment, FaServicestack } from "react-icons/fa";
import { IMAGES } from "../../assets/images";

const GenericCommunityForum = () => {
  useEffect(() => {
    document.title = "COMMUNITY FORUM || INNOVA";
  }, []);
  return (
    <div className="community-forum">
      <Navbar className="py-3">
        <Container fluid>
          <Navbar.Brand className="font-weight-bolder">
            <h4>Question and Answers</h4>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Accordion defaultActiveKey="0" className="mx-3">
        <Card className="py-2 border-0">
          <Accordion.Toggle as={Card.Header} eventKey="0" className="">
            <Row>
              <Col md={11} className="small-screen-padding-right">
                <Image src={IMAGES.AVATAR} className="avatar-style" />
                What is needed for lungs examination?
              </Col>
              <Col
                md={1}
                className="d-flex align-items-center justify-content-end"
              >
                <FaRegComment />
              </Col>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Card className="my-3 py-2 answer-card">
                <Row>
                  <Col md={12} className="small-screen-padding-right">
                    <Image src={IMAGES.AVATAR} className="avatar-style" />
                    First you have to consult with doctor
                  </Col>
                </Row>
              </Card>
              <Card className="my-3 py-2 answer-card">
                <Row>
                  <Col md={12} className="d-flex align-items-center ">
                    <Image src={IMAGES.AVATAR} className="avatar-style" />
                    <input
                      type="text"
                      className="w-100 form-control mr-3"
                      placeholder="Answer"
                    />
                    <FaServicestack />
                  </Col>
                </Row>
              </Card>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="py-2 border-0">
          <Accordion.Toggle as={Card.Header} eventKey="8" className="">
            <Row>
              <Col md={11} className="small-screen-padding-right">
                <Image src={IMAGES.AVATAR} className="avatar-style" />
                What is needed for lungs examination?
              </Col>
              <Col
                md={1}
                className="d-flex align-items-center justify-content-end"
              >
                <FaRegComment />
              </Col>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="8">
            <Card.Body>
              <Card className="my-3 py-2 answer-card">
                <Row>
                  <Col md={12} className="small-screen-padding-right">
                    <Image src={IMAGES.AVATAR} className="avatar-style" />
                    First you have to consult with doctor
                  </Col>
                </Row>
              </Card>
              <Card className="my-3 py-2 answer-card">
                <Row>
                  <Col md={12} className="d-flex align-items-center ">
                    <Image src={IMAGES.AVATAR} className="avatar-style" />
                    <input
                      type="text"
                      className="w-100 form-control mr-3"
                      placeholder="Answer"
                    />
                    <FaServicestack />
                  </Col>
                </Row>
              </Card>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="py-2 border-0">
          <Accordion.Toggle as={Card.Header} eventKey="1" className="">
            <Row>
              <Col md={11} className="small-screen-padding-right">
                <Image src={IMAGES.AVATAR} className="avatar-style" />
                What is needed for lungs examination?
              </Col>
              <Col
                md={1}
                className="d-flex align-items-center justify-content-end"
              >
                <FaRegComment />
              </Col>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Card className="my-3 py-2 answer-card">
                <Row>
                  <Col md={12} className="small-screen-padding-right">
                    <Image src={IMAGES.AVATAR} className="avatar-style" />
                    First you have to consult with doctor
                  </Col>
                </Row>
              </Card>
              <Card className="my-3 py-2 answer-card">
                <Row>
                  <Col md={12} className="d-flex align-items-center">
                    <Image src={IMAGES.AVATAR} className="avatar-style" />
                    <input
                      type="text"
                      className="w-100 form-control mr-3"
                      placeholder="Answer"
                    />
                    <FaServicestack />
                  </Col>
                </Row>
              </Card>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="py-2 border-0">
          <Accordion.Toggle as={Card.Header} eventKey="2" className="">
            <Row>
              <Col md={11} className="small-screen-padding-right">
                <Image src={IMAGES.AVATAR} className="avatar-style" />
                What is needed for lungs examination?
              </Col>
              <Col
                md={1}
                className="d-flex align-items-center justify-content-end"
              >
                <FaRegComment />
              </Col>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <Card className="my-3 py-2 answer-card">
                <Row>
                  <Col md={12} className="small-screen-padding-right">
                    <Image src={IMAGES.AVATAR} className="avatar-style" />
                    First you have to consult with doctor
                  </Col>
                </Row>
              </Card>
              <Card className="my-3 py-2 answer-card">
                <Row>
                  <Col md={12} className="d-flex align-items-center">
                    <Image src={IMAGES.AVATAR} className="avatar-style" />
                    <input
                      type="text"
                      className="w-100 form-control mr-3"
                      placeholder="Answer"
                    />
                    <FaServicestack />
                  </Col>
                </Row>
              </Card>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="py-2 border-0">
          <Accordion.Toggle as={Card.Header} eventKey="3" className="">
            <Row>
              <Col md={11} className="small-screen-padding-right">
                <Image src={IMAGES.AVATAR} className="avatar-style" />
                What is needed for lungs examination?
              </Col>
              <Col
                md={1}
                className="d-flex align-items-center justify-content-end"
              >
                <FaRegComment />
              </Col>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <Card className="my-3 py-2 answer-card">
                <Row>
                  <Col md={12} className="small-screen-padding-right">
                    <Image src={IMAGES.AVATAR} className="avatar-style" />
                    First you have to consult with doctor
                  </Col>
                </Row>
              </Card>
              <Card className="my-3 py-2 answer-card">
                <Row>
                  <Col md={12} className="d-flex align-items-center">
                    <Image src={IMAGES.AVATAR} className="avatar-style" />
                    <input
                      type="text"
                      className="w-100 form-control mr-3"
                      placeholder="Answer"
                    />
                    <FaServicestack />
                  </Col>
                </Row>
              </Card>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="py-2 border-0">
          <Accordion.Toggle as={Card.Header} eventKey="5" className="">
            <Row>
              <Col md={11} className="small-screen-padding-right">
                <Image src={IMAGES.AVATAR} className="avatar-style" />
                What is needed for lungs examination?
              </Col>
              <Col
                md={1}
                className="d-flex align-items-center justify-content-end"
              >
                <FaRegComment />
              </Col>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <Card className="my-3 py-2 answer-card">
                <Row>
                  <Col md={12} className="small-screen-padding-right">
                    <Image src={IMAGES.AVATAR} className="avatar-style" />
                    First you have to consult with doctor
                  </Col>
                </Row>
              </Card>
              <Card className="my-3 py-2 answer-card">
                <Row>
                  <Col md={12} className="d-flex align-items-center">
                    <Image src={IMAGES.AVATAR} className="avatar-style" />
                    <input
                      type="text"
                      className="w-100 form-control mr-3"
                      placeholder="Answer"
                    />
                    <FaServicestack />
                  </Col>
                </Row>
              </Card>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="py-2 border-0">
          <Accordion.Toggle as={Card.Header} eventKey="6" className="">
            <Row>
              <Col md={11} className="small-screen-padding-right">
                <Image src={IMAGES.AVATAR} className="avatar-style" />
                What is needed for lungs examination?
              </Col>
              <Col
                md={1}
                className="d-flex align-items-center justify-content-end"
              >
                <FaRegComment />
              </Col>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              <Card className="my-3 py-2 answer-card">
                <Row>
                  <Col md={12} className="small-screen-padding-right">
                    <Image src={IMAGES.AVATAR} className="avatar-style" />
                    First you have to consult with doctor
                  </Col>
                </Row>
              </Card>
              <Card className="my-3 py-2 answer-card">
                <Row>
                  <Col md={12} className="d-flex align-items-center">
                    <Image src={IMAGES.AVATAR} className="avatar-style" />
                    <input
                      type="text"
                      className="w-100 form-control mr-3"
                      placeholder="Answer"
                    />
                    <FaServicestack />
                  </Col>
                </Row>
              </Card>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default GenericCommunityForum;
