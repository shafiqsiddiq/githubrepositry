import React, { useEffect, useState } from "react";
import MyDataTableCustom from "../../../assets/genericComponents/MyDataTableCustom";
import { FaEye, FaCheck, FaTimes } from "react-icons/fa";
import { GenericModal } from "../../../assets/genericComponents/GenericModal";
import { Col, Row } from "react-bootstrap";

const ManageQuery = () => {
  const [viewQuery, setViewQuery] = useState(false);
  const [assignQuery, setAssignQuery] = useState(false);
  const [query, setQuery] = useState("");
  useEffect(() => {
    document.title = "Manage Query || INNOVA";
  }, []);
  const ModalFooterContent = () => {
    return (
      <div>
        <button className="footerbtn btn btn-default mr-2" type="submit">
          Assign
        </button>
        <button
          className="footerbtn1 btn btn-default"
          onClick={() => setAssignQuery(false)}
        >
          Close
        </button>
      </div>
    );
  };
  const columns = [
    {
      dataField: "query",
      text: "Query",
    },
    {
      dataField: "patientName",
      text: "Patient Name",
    },
    {
      dataField: "referTo",
      text: "Refer To",
    },
    {
      text: "Status",
      dataField: "status",
      formatter: (cell, row, index) => {
        return (
          <label
            className={
              cell === "1"
                ? "bg-success badge mx-auto px-2 text-white rounded mb-0"
                : cell === "2"
                ? "bg-info badge px-2 text-white rounded mb-0"
                : "bg-danger badge px-2 text-white rounded mb-0"
            }
          >
            {cell === "1" ? "Approved" : cell === "2" ? "Pending" : "Rejected"}
          </label>
        );
      },
    },
    {
      dataField: "action",
      text: "Action",
      formatter: (cell, row, index) => {
        const viewModalWithQuery = () => {
          setViewQuery(true);
          setQuery(row.query); //row contains the complete data(columns data) of respective row on which we click
        };
        const assignModalWithQuery = () => {
          setAssignQuery(true);
          setQuery(row.query); //row contains the complete data(columns data) of respective row on which we click
        };
        return (
          <div>
            <button className="bg-info table-action-btn">
              <FaEye onClick={() => viewModalWithQuery()} />
            </button>
            <button className="bg-success table-action-btn">
              <FaCheck onClick={() => assignModalWithQuery()} />
            </button>
            <button className="bg-danger table-action-btn">
              <FaTimes />
            </button>
          </div>
        );
      },
    },
  ];

  const products = [
    {
      query: "I am having a problem in my stomach",
      patientName: "John",
      action: "12/12/2020",
      referTo: "Tim david",
      status: "2",
    },
    {
      query: "I have to discuss some thing",
      patientName: "John",
      action: "12/12/2020",
      referTo: "Tim david",
      status: "1",
    },
    {
      query: "I am having headache",
      patientName: "John",
      action: "12/12/2020",
      referTo: "Tim david",
      status: "3",
    },
  ];

  return (
    <div>
      <MyDataTableCustom
        data={products}
        columns={columns}
        search={true}
        className="align-middle"
        tableHeading={<h4 className="mb-0 pb-2">Manage Query</h4>}
      />

      <GenericModal
        footerContent={
          <button
            className="footerbtn1 btn btn-default"
            onClick={() => setViewQuery(false)}
          >
            Close
          </button>
        }
        headerName="Query"
        show={viewQuery}
        size="md"
        onHide={() => setViewQuery(false)}
      >
        <p>{query}</p>
      </GenericModal>

      <GenericModal
        headerName="Assign"
        show={assignQuery}
        size="md"
        footerContent={<ModalFooterContent />}
        onHide={() => setAssignQuery(false)}
      >
        <Row>
          <Col md={12}>
            <h5>Query</h5>
            <p>{query}</p>
          </Col>
          <Col md={6}>
            <label className="font-weight-bolder">Select Doctor:</label>
            <select name="doctor" className="form-control">
              <option>Dr.Julia</option>
              <option>Dr.Anderson</option>
            </select>
          </Col>
        </Row>
      </GenericModal>
    </div>
  );
};

export default ManageQuery;
