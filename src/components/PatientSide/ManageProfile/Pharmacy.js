import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { Card, Col, Form, Row } from "react-bootstrap";
import MyDataTableSimple from "../../../assets/genericComponents/MyDataTableSimple";

const educationColumns = [
  {
    dataField: "patientName",
    text: "Pharmacy Name",
  },
  {
    dataField: "relationship",
    text: "Address",
  },
  {
    dataField: "RelationName",
    text: "	City",
  },
  {
    dataField: "companyName",
    text: "State",
  },
  {
    dataField: "CompanyCode",
    text: "Zip Code",
  },
  {
    dataField: "CompanyGroup",
    text: "Primary Phone",
  },
  {
    dataField: "InsuranceID",
    text: "Primary Fax",
  },
  {
    dataField: "PhoneNo",
    text: "Status",
  },
  {
    text: "Action",
    dataField: "isSuspended",
    formatter: (cell, row, index) => {
      return (
        <>
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
    patientName: "MedaVant Test Pharmacy",
    relationship: "222 River Rode",
    RelationName: "Bethesda",
    companyName: "MD",
    CompanyCode: "20814",
    CompanyGroup: "3014447879",
    InsuranceID: "3014447878",
    PhoneNo: "Default",
  },
];
const columnsPharmacy = [
  {
    dataField: "patientName",
    text: "Pharmacy Name",
  },
  {
    dataField: "relationship",
    text: "Address",
  },
  {
    dataField: "RelationName",
    text: "	City",
  },
  {
    dataField: "companyName",
    text: "State",
  },
  {
    dataField: "CompanyCode",
    text: "Zip Code",
  },
  {
    dataField: "CompanyGroup",
    text: "Primary Phone",
  },
  {
    dataField: "InsuranceID",
    text: "Primary Fax",
  },
  {
    dataField: "PhoneNo",
    text: "Status",
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
            <AiOutlineCheck />
          </button>
        </>
      );
    },
  },
];
const dataPharmacy = [
  {
    patientName: "MedaVant Test Pharmacy",
    relationship: "222 River Rode",
    RelationName: "Bethesda",
    companyName: "MD",
    CompanyCode: "20814",
    CompanyGroup: "3014447879",
    InsuranceID: "3014447878",
    PhoneNo: (
      <Form.Control
        className="custom-styling-checkbox"
        style={{ width: "25px", marginLeft: "10px" }}
        type="checkbox"
        placeholder=" Search Pharmacies"
      />
    ),
  },
  {
    patientName: "MedaVant Test Pharmacy",
    relationship: "222 River Rode",
    RelationName: "Bethesda",
    companyName: "MD",
    CompanyCode: "20814",
    CompanyGroup: "3014447879",
    InsuranceID: "3014447878",
    PhoneNo: (
      <Form.Control
        className="custom-styling-checkbox"
        style={{ width: "25px", marginLeft: "10px" }}
        type="checkbox"
        placeholder=" Search Pharmacies"
      />
    ),
  },
  {
    patientName: "MedaVant Test Pharmacy",
    relationship: "222 River Rode",
    RelationName: "Bethesda",
    companyName: "MD",
    CompanyCode: "20814",
    CompanyGroup: "3014447879",
    InsuranceID: "3014447878",
    PhoneNo: (
      <Form.Control
        className="custom-styling-checkbox"
        style={{ width: "25px", marginLeft: "10px" }}
        type="checkbox"
        placeholder=" Search Pharmacies"
      />
    ),
  },
  {
    patientName: "MedaVant Test Pharmacy",
    relationship: "222 River Rode",
    RelationName: "Bethesda",
    companyName: "MD",
    CompanyCode: "20814",
    CompanyGroup: "3014447879",
    InsuranceID: "3014447878",
    PhoneNo: (
      <Form.Control
        className="custom-styling-checkbox"
        style={{ width: "25px", marginLeft: "10px" }}
        type="checkbox"
        placeholder=" Search Pharmacies"
      />
    ),
  },
  {
    patientName: "MedaVant Test Pharmacy",
    relationship: "222 River Rode",
    RelationName: "Bethesda",
    companyName: "MD",
    CompanyCode: "20814",
    CompanyGroup: "3014447879",
    InsuranceID: "3014447878",
    PhoneNo: (
      <Form.Control
        className="custom-styling-checkbox"
        style={{ width: "25px", marginLeft: "10px" }}
        type="checkbox"
        placeholder=" Search Pharmacies"
      />
    ),
  },
];

const Pharmacy = () => {
  return (
    <div className="manage-profile">
      <Card className="pb-4 border-0 personal-information">
        <Card.Body className="pb-0">
          <Form>
            <Row>
              <Col md={12}>
                <h2>Preferred Pharmacy</h2>
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
                  <label>Pharmacy Name</label>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder=" Search Pharmacies"
                    />
                  </Form.Group>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="d-flex justify-content-end">
                <button className="mx-1 rounded-pill py-2 save-btn">
                  Search
                </button>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col md={12}>
                <MyDataTableSimple
                  tablePagination="false"
                  data={dataPharmacy}
                  columns={columnsPharmacy}
                />
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

export default Pharmacy;
