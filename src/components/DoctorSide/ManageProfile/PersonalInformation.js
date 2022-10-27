import React, { useState } from "react";
import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import { IMAGES } from "../../../assets/images";
import { FaCamera } from "react-icons/fa";

const PersonalInformation = () => {
  const [image, setImage] = useState(IMAGES.AVATAR);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className="manage-profile">
      <Card className="pb-4 border-0 personal-information">
        <Card.Body>
          <Form>
            <Row className="align-items-center">
              <Col sm={12} className="mb-3">
                <h2>Personal Infomation</h2>
              </Col>
              <Col sm={6} md={4} lg={4} xl={4}>
                <div className="choose-profile-img mx-auto">
                  <FaCamera className="camera-icon" />
                  <Image
                    src={image}
                    className="rounded-circle w-100 avatar"
                    accept="image/*"
                  />
                  <div className="choose-img-overlay my-auto">
                    <small className="choose-img-text">Choose Image</small>
                  </div>
                  <input
                    type="file"
                    className="select-img rounded-circle w-100"
                    onChange={onImageChange}
                    accept="image/*"
                  />
                </div>
              </Col>
              <Col sm={6} md={4} lg={4} xl={4}>
                <label>Prefix</label>
                <Form.Group>
                  <select className="form-control" aria-label="prefix">
                    <option value="1">Mr.</option>
                    <option value="2">Ms.</option>
                    <option value="2">Mrs.</option>
                  </select>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={4}>
                <label>First Name</label>
                <Form.Group>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={4}>
                <Form.Group>
                  <label>Middle Name</label>
                  <Form.Control type="text" placeholder="Middle Name" />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={4}>
                <Form.Group>
                  <label>Last Name</label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={4}>
                <label>Gender</label>
                <Form.Group>
                  <select className="form-control" aria-label="Gender">
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Other</option>
                  </select>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={4}>
                <label>Date Of Birth</label>
                <Form.Group>
                  <Form.Control type="date" placeholder="D.O.B" />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={4}>
                <label>Marital Status</label>
                <Form.Group>
                  <select className="form-control" aria-label="Gender">
                    <option value="1">Single</option>
                    <option value="2">Married</option>
                  </select>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={4}>
                <Form.Group>
                  <label>Cell No.</label>
                  <PhoneInput
                    inputClass="react-phone-input-custom"
                    country="pk"
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoFocus: true,
                    }}
                  />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={4}>
                <Form.Group>
                  <label>Office No.</label>
                  <PhoneInput
                    inputClass="react-phone-input-custom"
                    country="pk"
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoFocus: true,
                    }}
                  />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={4}>
                <Form.Group>
                  <label>Fax</label>
                  <Form.Control type="tel" placeholder="Fax" />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={4}>
                <label>Country</label>
                <Form.Group>
                  <select className="form-control" aria-label="country">
                    <option value="1">Australia</option>
                    <option value="2">USA</option>
                  </select>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={4}>
                <label>State</label>
                <Form.Group>
                  <select className="form-control" aria-label="state">
                    <option value="1">Washington</option>
                    <option value="2">Florida</option>
                  </select>
                </Form.Group>
              </Col>

              <Col sm={6} md={4} lg={4} xl={4}>
                <label>City</label>
                <Form.Group>
                  <select className="form-control" aria-label="city">
                    <option value="1">New York</option>
                    <option value="2">Chicago</option>
                  </select>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={4}>
                <label>Practice Country</label>
                <Form.Group>
                  <select className="form-control" aria-label="continent">
                    <option value="1">Australia</option>
                    <option value="2">South Africa</option>
                  </select>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={4}>
                <Form.Group>
                  <label>Zip Code</label>
                  <Form.Control type="tel" placeholder="Zip Code" />
                </Form.Group>
              </Col>
              <Col sm={0} md={0} lg={0} xl={8}></Col>
              <Col sm={12} md={6} lg={6}>
                <label>Primary Address</label>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    placeholder="Primary Address"
                    rowss={2}
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <label>Secondary Address</label>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    placeholder="Secondary Address"
                    rows={2}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="d-flex justify-content-end">
                <Button
                  variant="none"
                  className="mx-1 rounded-pill py-2 save-btn"
                >
                  Save
                </Button>
                <Button
                  variant="none"
                  className="mx-1 rounded-pill py-2 cancel-btn"
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PersonalInformation;
