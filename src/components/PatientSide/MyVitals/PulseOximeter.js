import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import MyDataTableSimple from "../../../assets/genericComponents/MyDataTableSimple";

const columns = [
  {
    dataField: "bloodLevel",
    text: "BLOOD LEVEL",
  },
  {
    dataField: "oxygenLevel",
    text: "OXYGEN LEVEL",
  },
  {
    dataField: "date",
    text: "Date",
  },
  {
    dataField: "time",
    text: "Time",
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

const products = [
  {
    id: "1",
    bloodLevel: "130",
    oxygenLevel: "130",
    date: "12/12/2020",
    time: "12:12pm",
  },
  {
    id: "2",
    bloodLevel: "130",
    oxygenLevel: "130",
    date: "12/12/2020",
    time: "12:12pm",
  },
  {
    id: "3",
    bloodLevel: "130",
    oxygenLevel: "130",
    date: "12/12/2020",
    time: "12:12pm",
  },
  {
    id: "4",
    bloodLevel: "130",
    oxygenLevel: "130",
    date: "12/12/2020",
    time: "12:12pm",
  },
  {
    id: "5",
    bloodLevel: "130",
    oxygenLevel: "130",
    date: "12/12/2020",
    time: "12:12pm",
  },
  {
    id: "6",
    bloodLevel: "130",
    oxygenLevel: "130",
    date: "12/12/2020",
    time: "12:12pm",
  },
  {
    id: "7",
    bloodLevel: "130",
    oxygenLevel: "130",
    date: "12/12/2020",
    time: "12:12pm",
  },
  {
    id: "8",
    bloodLevel: "130",
    oxygenLevel: "130",
    date: "12/12/2020",
    time: "12:12pm",
  },
];
const PulseOximeter = () => {
  return (
    <div>
      <Form className="myvitals-form my-3 py-4">
        <Row className="justify-content-between">
          <Col lg={3} sm={4}>
            <Form.Label className="d-flex align-items-center  pr-2 mb-0">
              BLOOD LEVEL
            </Form.Label>
            <Form.Group className="d-inline-flex w-100">
              <Form.Control className="w-100" type="text" placeholder="130" />
              <br />
            </Form.Group>
          </Col>
          <Col lg={3} sm={4}>
            <Form.Label className="d-flex align-items-center pr-2 mb-0">
              OXYGEN LEVEL
            </Form.Label>
            <Form.Group className="d-inline-flex w-100">
              <Form.Control className="w-100" type="text" placeholder="130" />
              <br />
            </Form.Group>
          </Col>
          <Col lg={3} sm={4}>
            <Form.Label className="d-flex align-items-center pr-2 mb-0">
              Date
            </Form.Label>
            <Form.Group className="d-inline-flex w-100">
              <Form.Control type="date" placeholder="Delivery Date" />
              <br />
            </Form.Group>
          </Col>

          {/* <Row className="justify-content-end"> */}
          <Col lg={3} className="d-flex justify-content-end">
            <Button className="myvitals-save-btn mr-2 mt-4">Save</Button>
            <Button className="myvitals-cancel-btn mt-4">Cancel</Button>
          </Col>
          {/* </Row> */}
        </Row>
      </Form>
      {/* <h4 className="tabs-title px-5 py-2 rounded mb-0">Pulse Oximeter</h4> */}

      <MyDataTableSimple data={products} columns={columns} />
    </div>
  );
};

export default PulseOximeter;
