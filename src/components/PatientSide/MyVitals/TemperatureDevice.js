import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import MyDataTableSimple from "../../../assets/genericComponents/MyDataTableSimple";
const TemperatureDevice = () => {
  useEffect(() => {
    document.title = "TEMPERATURE DEVICE || INNOVA";
  }, []);
  const columns = [
    {
      dataField: "temperature",
      text: "Temperature",
    },
    {
      dataField: "unit",
      text: "Unit",
    },
    {
      dataField: "date",
      text: "Date",
    },
    {
      dataField: "time",
      text: "Time",
    },
    // {
    //     dataField: 'actions',
    //     text: 'Actions',
    // },
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
      temperature: "130",
      unit: "Celsius",
      date: "12/12/2020",
      time: "12:12pm",
      // actions: "{<FaEdit />}"
    },
    {
      id: "2",
      temperature: "130",
      unit: "Fahrenheit",
      date: "12/12/2020",
      time: "12:12pm",
    },
    {
      id: "3",
      temperature: "130",
      unit: "Fahrenheit",
      date: "12/12/2020",
      time: "12:12pm",
    },
    {
      id: "4",
      temperature: "130",
      unit: "Fahrenheit",
      date: "12/12/2020",
      time: "12:12pm",
    },
    {
      id: "5",
      temperature: "130",
      unit: "Fahrenheit",
      date: "12/12/2020",
      time: "12:12pm",
    },
    {
      id: "6",
      temperature: "130",
      unit: "Fahrenheit",
      date: "12/12/2020",
      time: "12:12pm",
    },
    {
      id: "7",
      temperature: "130",
      unit: "Fahrenheit",
      date: "12/12/2020",
      time: "12:12pm",
    },
    {
      id: "8",
      temperature: "130",
      unit: "Fahrenheit",
      date: "12/12/2020",
      time: "12:12pm",
    },
    {
      id: "9",
      temperature: "130",
      unit: "Fahrenheit",
      date: "12/12/2020",
      time: "12:12pm",
    },
  ];
  return (
    <div className="">
      <Form className="myvitals-form my-3 py-4">
        <Row className="justify-content-between">
          <Col lg={3} sm={4}>
            <Form.Label className="d-flex align-items-center  pr-2 mb-0">
              Temperature
            </Form.Label>
            <Form.Group className="d-inline-flex w-100">
              <Form.Control className="w-100" type="text" placeholder="130" />
              <br />
            </Form.Group>
          </Col>
          <Col lg={3} sm={4}>
            <Form.Label className="d-flex align-items-center pr-2 mb-0">
              Unit
            </Form.Label>
            <Form.Group className="d-inline-flex w-100">
              <select
                className="w-100 weight-machine-unit-dropdown"
                type="text"
                placeholder="130"
              >
                <option value="volvo">Celsius</option>
                <option value="saab">Fahrenheit</option>
              </select>
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
          <Col lg={3} className="d-flex justify-content-end">
            <Button className="myvitals-save-btn mr-2 mt-4">Save</Button>
            <Button className="myvitals-cancel-btn mt-4">Cancel</Button>
          </Col>
        </Row>
      </Form>
      {/* <h4 className="tabs-title px-5 py-2 rounded mb-0">Temperature Device</h4> */}
      <MyDataTableSimple data={products} columns={columns} />
    </div>
  );
};

export default TemperatureDevice;
