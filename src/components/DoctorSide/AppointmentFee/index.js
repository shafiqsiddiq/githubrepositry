import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const AppointmentFee = () => {
  return (
    <Form>
      <Row className="mb-3">
        {/* <Col md={12}>Appointment Fee</Col> */}
        <Col md={6}>
          <Form.Group className="mb-3" controlId="formBasicAmount">
            <Form.Label className="font-weight-bold">Amount</Form.Label>
            <Form.Control type="number" placeholder="Amount" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="formBasicCurrency">
            <Form.Label className="font-weight-bold">Currency</Form.Label>
            <Form.Control as="select">
              <option>Select Option</option>
              <option value="1">Dollar</option>
              <option value="2">Euro</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={12} className="d-flex justify-content-end">
          <Form.Group className="mb-3" controlId="formBasicCurrency">
            <Button className="primary-btn">Save</Button>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default AppointmentFee;
