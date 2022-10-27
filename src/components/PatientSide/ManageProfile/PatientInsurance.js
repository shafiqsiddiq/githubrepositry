import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Card, Col, Form, Row } from "react-bootstrap";
import MyDataTableSimple from "../../../assets/genericComponents/MyDataTableSimple";
import PhoneInput from "react-phone-input-2";

const educationColumns = [
  {
    dataField: "patientName",
    text: "Subscriber Name",
  },
  {
    dataField: "relationship",
    text: "Relationship",
  },
  {
    dataField: "RelationName",
    text: "Relation Name",
  },
  {
    dataField: "companyName",
    text: "Company Name",
  },
  {
    dataField: "CompanyCode",
    text: "Company Code",
  },
  {
    dataField: "CompanyGroup",
    text: "Company Group",
  },
  {
    dataField: "InsuranceID",
    text: "Insurance ID",
  },
  {
    dataField: "PhoneNo",
    text: "Phone No",
  },
  {
    dataField: "snn",
    text: "SNN.",
  },
  {
    dataField: "companyAddress",
    text: "Company Address",
  },
  {
    dataField: "notes",
    text: "Notes",
  },
  {
    text: "Action",
    dataField: "isSuspended",
    formatter: (cell, row, index) => {
      return (
        <div className="d-flex">
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
        </div>
      );
    },
  },
];
const educationData = [
  {
    patientName: "Eliot",
    relationship: "brother",
    RelationName: "NA",
    companyName: "NA",
    CompanyCode: "NA",
    CompanyGroup: "NA",
    InsuranceID: "NA",
    PhoneNo: "NA",
    snn: "NA",
    companyAddress: "NA",
    notes: "NA",
  },
];

const PatientInsurance = () => {
  return (
    <div className="manage-profile">
      <Card className="pb-4 border-0 personal-information">
        <Card.Body className="pb-0">
          <Form>
            <Row>
              <Col md={12}>
                <h2>Patient Insurance</h2>
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
                <Form.Group>
                  <label>Subscriber Name *</label>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Subscriber Name" />
                  </Form.Group>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Relationship *</label>
                <select className="form-control" aria-label="Gender">
                  <option value="1">Brother</option>
                  <option value="2">Father</option>
                  <option value="3">Mother</option>
                </select>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <Form.Group>
                  <label>Company Name *</label>
                  <select className="form-control" aria-label="Gender">
                    <option value="1">Xeven</option>
                    <option value="2">Dev</option>
                    <option value="3">Fog Revolution</option>
                  </select>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Company Code *</label>
                <Form.Control type="text" placeholder="Company Code" />
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Company Group *</label>
                <Form.Group>
                  <Form.Control type="text" placeholder="Company Group " />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Insurance ID *</label>
                <Form.Group>
                  <Form.Control type="text" placeholder="Insurance ID" />
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <label>Phone No. *</label>
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
                <label>SNN *</label>
                <Form.Control type="text" placeholder="Enter SNN" />
              </Col>
              <Col lg={6}>
                <label>Company Address *</label>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    placeholder="Company Address "
                    rows={2}
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <label>Notes *</label>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" placeholder="Notes" rows={2} />
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

export default PatientInsurance;
