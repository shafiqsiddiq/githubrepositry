import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Card, Col, Form, Image, Row, Button } from "react-bootstrap";
import MyDataTableSimple from "../../../assets/genericComponents/MyDataTableSimple";
import { IMAGES } from "../../../assets/images";
import { FaCamera } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";

const educationColumns = [
  {
    dataField: "patientName",
    text: "Name",
  },
  {
    dataField: "relationship",
    text: "Relationship",
  },
  {
    dataField: "phone",
    text: "Phone",
  },
  {
    dataField: "email",
    text: "Email",
  },
  {
    dataField: "country",
    text: "Country",
  },
  {
    dataField: "state",
    text: "State",
  },
  {
    dataField: "city",
    text: "City",
  },
  {
    dataField: "zipCode",
    text: "ZipCode",
  },
  {
    text: "Action",
    dataField: "isSuspended",
    formatter: (cell, row, index) => {
      return (
        <>
          <button
            className="table-action-btn bg-info"
            // onClick={() => ViewTherapist(row)} data-for="main"
            //     data-bs-toggle="tooltip" data-bs-placement="top" title="View"
            //     data-iscapture="true"
          >
            <FaEdit />
          </button>
          <button
            className="table-action-btn bg-danger"
            data-for="main"
            // onClick={() => EditTherapistDetails(row)}
            //     data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"
            //     data-iscapture="true"
          >
            <FaTrashAlt />
          </button>
        </>
      );
    },
  },
];
const educationData = [
  {
    patientName: "Eliot",
    relationship: "brother",
    phone: "95834737743",
    email: "eliot070@example.com",
    country: "America",
    state: "America",
    city: "New York",
    zipCode: "9879",
  },
];

const Overview = () => {
  // const [lgShow, setLgShow] = useState(false);
  const [image, setImage] = useState(IMAGES.AVATAR);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className="manage-profile">
      <Card className="pb-0 border-0 personal-information">
        <Card.Body className="pb-0">
          <Form>
            <Row className="align-items-center">
              <Col md={12}>
                <h2>Personal Information</h2>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <div className="choose-profile-img mx-auto mb-3">
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
              <Col sm={6} md={4} lg={4} xl={3}>
                <Form.Group>
                  <label>Prefix</label>
                  <select className="form-control" aria-label="Gender">
                    <option value="1">Mr</option>
                    <option value="2">Ms</option>
                    <option value="3">Mrs</option>
                  </select>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>First Name</label>
                <Form.Group>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <Form.Group>
                  <label>Last Name</label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Gender</label>
                <Form.Group>
                  <select className="form-control" aria-label="Gender">
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Other</option>
                  </select>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Date Of Birth</label>
                <Form.Group>
                  <Form.Control type="date" placeholder="D.O.B" />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Status</label>
                <Form.Group>
                  <select className="form-control" aria-label="Gender">
                    <option value="1">Single</option>
                    <option value="2">Married</option>
                  </select>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Email</label>
                <Form.Group>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Language</label>
                <Form.Group>
                  <select className="form-control" aria-label="Language">
                    <option value="2">Posados</option>
                    <option value="1">Masionos</option>
                  </select>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <label>Primary Address</label>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    placeholder="Primary Address"
                    rows={2}
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <label>Secondary Address</label>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    placeholder="Secondary Address"
                    rows={2}
                  />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Country</label>
                <Form.Group>
                  <select className="form-control" aria-label="Country">
                    <option value="1">Pakistan</option>
                    <option value="2">Argentina</option>
                  </select>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>State</label>
                <Form.Group>
                  <select className="form-control" aria-label="Gender">
                    <option value="1">Masionos</option>
                    <option value="2">Posados</option>
                  </select>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>City</label>
                <Form.Group>
                  <select className="form-control" aria-label="Gender">
                    <option value="2">Posados</option>
                    <option value="1">Masionos</option>
                  </select>
                </Form.Group>
              </Col>

              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Ethnicity</label>
                <Form.Group>
                  <select className="form-control" aria-label="Ethnicity">
                    <option value="2">German</option>
                    <option value="1">Italian</option>
                  </select>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Cell Phone No</label>
                <PhoneInput
                  inputClass="react-phone-input-custom"
                  country="pk"
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                />
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Home Phone No</label>
                <PhoneInput
                  inputClass="react-phone-input-custom"
                  country="pk"
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                />
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Office Phone No</label>
                <PhoneInput
                  inputClass="react-phone-input-custom"
                  country="pk"
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                />
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>BloodGroup</label>
                <Form.Group>
                  <select className="form-control" aria-label="BloodGroup">
                    <option value="2">AB+</option>
                    <option value="1">O+</option>
                  </select>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Current Occupation</label>
                <Form.Group>
                  <select className="form-control" aria-label="BloodGroup">
                    <option value="2">Farmer</option>
                    <option value="1">Businessman</option>
                    <option value="1">Doctor</option>
                    <option value="1">Others</option>
                  </select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="d-flex justify-content-end">
                <Button
                  variant="none"
                  className="mx-1 rounded-pill py-2 save-btn"
                >
                  Update
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <Card className="pb-0 border-0 personal-information">
        <Card.Body className="pb-0">
          <Form>
            <Row>
              <Col md={12}>
                <h2>Emergency Contact</h2>
              </Col>
            </Row>
            <Row>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Contact Number</label>
                <PhoneInput
                  inputClass="react-phone-input-custom"
                  country="pk"
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                />
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Name</label>
                <Form.Group>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Relation</label>
                <Form.Group>
                  <select className="form-control" aria-label="relation">
                    <option value="1">Father</option>
                    <option value="1">Brother</option>
                    <option value="1">Mother</option>
                    <option value="1">Husband</option>
                    <option value="1">Wife</option>
                    <option value="1">Son</option>
                    <option value="1">Daughter</option>
                  </select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="d-flex justify-content-end">
                <button className="mx-1 rounded-pill py-2 save-btn">
                  Save
                </button>
                <button className="mx-1 rounded-pill py-2 save-btn">
                  Save & Add More
                </button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <Card className="pb-4 border-0 personal-information">
        <Card.Body>
          <Form>
            <Row>
              <Col md={12}>
                <h2>Patient Guardian</h2>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col md={12}>
                <MyDataTableSimple
                  tablePagination="false"
                  data={educationData}
                  columns={educationColumns}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Contact</label>
                <PhoneInput
                  inputClass="react-phone-input-custom"
                  country="pk"
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                />
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Name</label>
                <Form.Group>
                  <Form.Control type="text" placeholder="Father" />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Relation</label>
                <Form.Group>
                  <select className="form-control" aria-label="relation">
                    <option value="1">Father</option>
                    <option value="2">Mother</option>
                  </select>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Email</label>
                <Form.Group>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Country</label>
                <Form.Group>
                  <select className="form-control" aria-label="country">
                    <option value="1">Austria</option>
                    <option value="2">UK</option>
                    <option value="3">Other</option>
                  </select>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>State</label>
                <Form.Group>
                  <select className="form-control" aria-label="area">
                    <option value="1">Formosa</option>
                    <option value="2">Adola</option>
                  </select>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>City</label>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <label>Primary Address</label>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    row={2}
                    placeholder="Primary Address"
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <label>Secondary Address</label>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    row={2}
                    placeholder="Secondary Address"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="d-flex justify-content-end">
                <button className="mx-1 rounded-pill py-2 save-btn">
                  Save
                </button>
                <button className="mx-1 rounded-pill py-2 save-btn">
                  Save & Add More
                </button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Overview;
