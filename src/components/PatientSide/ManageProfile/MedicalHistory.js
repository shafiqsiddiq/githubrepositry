import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Card, Col, Form, Row, Button } from "react-bootstrap";
import MyDataTableSimple from "../../../assets/genericComponents/MyDataTableSimple";
import PhoneInput from "react-phone-input-2";

const educationColumns = [
  {
    dataField: "relationship",
    text: "Relationship",
  },
  {
    dataField: "phone",
    text: "If Deceased - Death Age",
  },
  {
    dataField: "email",
    text: "Medical Conditions",
  },
  {
    dataField: "country",
    text: "Notes",
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
const dataMedical = [
  {
    patientName: "Eliot",
    relationship: "Disease Name",
    phone: "Notes",
    email: "eliot070@example.com",
    country: "America",
    state: "America",
    city: "New York",
    zipCode: "9879",
  },
];
const columnsMedical = [
  {
    dataField: "relationship",
    text: "Disease Name",
  },
  {
    dataField: "phone",
    text: "	Notes",
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

const dataRecreational = [
  {
    relationship: "drugs",
    phone: "drug type",
    email: "eliot070@example.com",
    country: "America",
    state: "America",
    notes: "notes",
    lastUsed: "last Used",
  },
];
const columnsRecreational = [
  {
    dataField: "relationship",
    text: "Drugs",
  },
  {
    dataField: "phone",
    text: "	Drug Type",
  },
  {
    dataField: "lastUsed",
    text: "Last Used",
  },
  {
    dataField: "notes",
    text: "Notes",
  },

  {
    text: "Action",
    dataField: "",
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
    phone: "Death Age",
    email: "Medical Conditions",
    country: "Notes",
    state: "America",
    city: "New York",
    zipCode: "9879",
  },
];
const dataAllergies = [
  {
    patientName: "Eliot",
    relationship: "Allergy To",
    phone: "Reaction",
    notes: "Notes",
  },
  {
    patientName: "Eliot",
    relationship: "Allergy To",
    phone: "Reaction",
    notes: "Notes",
  },
  {
    patientName: "Eliot",
    relationship: "Allergy To",
    phone: "Reaction",
    notes: "Notes",
  },
  {
    patientName: "Eliot",
    relationship: "Allergy To",
    phone: "Reaction",
    notes: "Notes",
  },
  {
    patientName: "Eliot",
    relationship: "Allergy To",
    phone: "Reaction",
    notes: "Notes",
  },
];
const columnsAllergies = [
  {
    dataField: "relationship",
    text: "Allergy To",
  },
  {
    dataField: "phone",
    text: "		Reaction",
  },
  {
    dataField: "notes",
    text: "		Notes",
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
const MedicalHistory = () => {
  return (
    <div className="medical-history">
      <Card className="pb-0 border-0 current-medications">
        <Card.Body className="pb-0">
          <Form>
            <Row>
              <Col md={12}>
                <h2>Current Medications</h2>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <label>Medicine</label>
                  <select className="form-control" aria-label="medicine-name">
                    <option value="1">Panadol</option>
                    <option value="2">Paracetamol</option>
                  </select>
                </Form.Group>
              </Col>

              <Col md={12}>
                <label>Reason for Medication</label>
                <Form.Group controlId="reason-medication">
                  <Form.Control
                    as="textarea"
                    placeholder="Enter Reason"
                    rows={3}
                  />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Dose</label>
                <Form.Group>
                  <Form.Control type="text" placeholder="Enter Dose" />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Dose Frequency</label>
                <select className="form-control" aria-label="medicine-name">
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Doctor Name</label>
                <Form.Group>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Doctor Number</label>
                <PhoneInput
                  inputClass="react-phone-input-custom"
                  country="pk"
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                  }}
                />
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Pharmacy Name</label>
                <Form.Group>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Pharmacy Number</label>
                <PhoneInput
                  inputClass="react-phone-input-custom"
                  country="pk"
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                  }}
                />
              </Col>
              <Col md={12}>
                <label>Notes</label>
                <Form.Group controlId="reason-medication">
                  <Form.Control as="textarea" placeholder="Notes" rows={3} />
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
                  className="mx-1 rounded-pill py-2 save-btn"
                >
                  Save & Add More
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <Card className="pb-0 border-0 medical-history-other">
        <Card.Body className="pb-0">
          <Form>
            <Row>
              <Col md={12}>
                <h2>Medical History Other</h2>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Current Pharmacy Name</label>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Current Pharmacy Name"
                  />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Pharmacy Location</label>
                <Form.Group>
                  <Form.Control type="text" placeholder="Pharmacy Location" />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Current Therapist Name</label>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Current Therapist Name"
                  />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Current Therapist Phone</label>
                <PhoneInput
                  inputClass="react-phone-input-custom"
                  country="pk"
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                  }}
                />
              </Col>
              <Col sm={12} md={12} lg={6} xl={6}>
                <label>
                  Previous Psychiatric Diagnosis: Summarize Health & Medical
                  Conditions
                </label>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Psychiatric Diagnosis"
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={12} lg={6} xl={6}>
                <label>
                  Indicate Any Previous Psychiatric Hospitalizations (List
                  Facility Name, Dates And Your Age At Time)
                </label>
                <Form.Group>
                  <Form.Control type="text" placeholder="Psychiatric" />
                </Form.Group>
              </Col>
              <Col sm={12} md={12} lg={6} xl={6}>
                <label>
                  Indicate Any Previous Substance Abuse Treatment / Rehab
                  Participation (List Program, Dates And Your Age At Time)
                </label>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Substance Abuse Treatment"
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
                  className="mx-1 rounded-pill py-2 save-btn"
                >
                  Save & Add More
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <Card className="pb-0 border-0 medical-history-other">
        <Card.Body className="pb-0">
          <Form>
            <Col md={12}>
              <h2>Family History</h2>
            </Col>
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
                <label>Relationship</label>
                <select className="form-control" aria-label="medicine-name">
                  <option value="1">Father</option>
                  <option value="2">Mother</option>
                </select>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>If Deceased - Death Age</label>
                <select className="form-control" aria-label="medicine-name">
                  <option value="1">Father</option>
                  <option value="2">Mother</option>
                </select>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={6}>
                <label>Medical Condition/Cause of Death</label>
                <Form.Group controlId="reason-medication">
                  <Form.Control
                    as="textarea"
                    placeholder="Medical Condition/Cause of Death"
                    rows={3}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <label>Notes</label>
                <Form.Group controlId="reason-medication">
                  <Form.Control as="textarea" placeholder="Notes" rows={3} />
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
                  className="mx-1 rounded-pill py-2 save-btn"
                >
                  Save & Add More
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <Card className="pb-0 border-0 medical-history-other">
        <Card.Body className="pb-0">
          <Form>
            <Col md={12}>
              <h2>Past Medical History</h2>
            </Col>
            <Row className="mt-2">
              <Col md={12}>
                <MyDataTableSimple
                  tablePagination="false"
                  data={dataMedical}
                  columns={columnsMedical}
                />
              </Col>
            </Row>
            <Row className="mt-2">
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Disease Name</label>
                <select className="form-control" aria-label="medicine-name">
                  <option value="1">Disease Name1</option>
                  <option value="2">Disease Name2</option>
                </select>
                <h6 className="mt-3">Manually Add if not listed</h6>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={12}>
                <label>Notes</label>
                <Form.Group controlId="reason-medication">
                  <Form.Control as="textarea" placeholder="Notes" rows={3} />
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
                  className="mx-1 rounded-pill py-2 save-btn"
                >
                  Save & Add More
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <Card className="pb-0 border-0 medical-history-other">
        <Card.Body className="pb-0">
          <Form>
            <Col md={12}>
              <h2>Recreational Drugs History</h2>
            </Col>
            <Row className="mt-2">
              <Col md={12}>
                <MyDataTableSimple
                  tablePagination="false"
                  data={dataRecreational}
                  columns={columnsRecreational}
                />
              </Col>
            </Row>
            <Row className="mt-2">
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Drugs</label>
                <select className="form-control" aria-label="medicine-name">
                  <option value="1">Disease Name1</option>
                  <option value="2">Disease Name2</option>
                </select>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Type</label>
                <Form.Group>
                  <Form.Control type="text" placeholder="Type" />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Amount Per week</label>
                <select className="form-control" aria-label="medicine-name">
                  <option value="1">Disease Name1</option>
                  <option value="2">Disease Name2</option>
                </select>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Last Used</label>
                <Form.Group>
                  <Form.Control type="text" placeholder="Last Used" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col md={12}>
                <label>Notes</label>
                <Form.Group controlId="reason-medication">
                  <Form.Control as="textarea" placeholder="Notes" rows={3} />
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
                  className="mx-1 rounded-pill py-2 save-btn"
                >
                  Save & Add More
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <Card className="pb-4 border-0 medical-history-other">
        <Card.Body className="pb-0">
          <Form>
            <Col md={12}>
              <h2>Patient Allergies History</h2>
            </Col>
            <Row className="mt-2">
              <Col md={12}>
                <MyDataTableSimple
                  tablePagination="false"
                  data={dataAllergies}
                  columns={columnsAllergies}
                />
              </Col>
            </Row>
            <Row className="mt-2">
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Search</label>
                <Form.Group>
                  <Form.Control type="text" placeholder="Search" />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Allergy To</label>
                <select className="form-control" aria-label="medicine-name">
                  <option value="1">Disease Name1</option>
                  <option value="2">Disease Name2</option>
                </select>
              </Col>

              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Reaction</label>
                <Form.Group>
                  <Form.Control type="text" placeholder="Reaction" />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Notes</label>
                <Form.Group>
                  <Form.Control type="text" placeholder="Notes" />
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
                  className="mx-1 rounded-pill py-2 save-btn"
                >
                  Save & Add More
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MedicalHistory;
