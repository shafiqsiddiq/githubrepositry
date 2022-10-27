import React, { useEffect, useState } from "react";
import MyDataTableCustom from "../../../assets/genericComponents/MyDataTableCustom";
import { FaTrashAlt, FaReply, FaEye } from "react-icons/fa";
import { Col, Form, Row } from "react-bootstrap";
import { GenericModal } from "../../../assets/genericComponents/GenericModal";

const ManageContactUs = () => {
  useEffect(() => {
    document.title = "MANAGE CONTACT US || INNOVA";
  }, []);
  const [viewQuestion, setViewQuestion] = useState("");
  const [replyModal, setReplyModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  const columns = [
    {
      dataField: "query",
      text: "Query",
    },
    {
      dataField: "status",
      text: "Status",
    },
    {
      text: "Action",
      dataField: "isSuspended",
      formatter: (cell, row, index) => {
        const viewQuestionModal = () => {
          setViewQuestion(row.query);
          setViewModal(true);
        };
        const replyViewModal = () => {
          setReplyModal(true);
          setViewQuestion(row.query);
        };
        return (
          <>
            <button className="bg-info table-action-btn">
              <FaEye onClick={() => viewQuestionModal()} />
            </button>
            <button className="bg-success table-action-btn">
              <FaReply onClick={() => replyViewModal()} />
            </button>
            <button className="bg-danger table-action-btn">
              <FaTrashAlt />
            </button>
          </>
        );
      },
    },
  ];

  const products = [
    {
      query: <p className="mb-0">Lorem ipsum dolor sit amet</p>,
      status: <p className="mb-0 badge bg-warning">Pending</p>,
    },
  ];

  const HeaderContent = () => {
    return (
      <div className="d-flex justify-content-between align-items-center">
        <h4>Manage Contact Us</h4>
        {/* <button className="primary-btn" onClick={() => setReplyModal(true)}>
          Add
        </button> */}
        <GenericModal
          headerName="Reply Query"
          footerContent={
            <>
              <button
                className="footerbtn btn btn-default"
                onClick={() => setReplyModal(false)}
              >
                Reply
              </button>
              <button
                className="footerbtn1 btn btn-default"
                onClick={() => setReplyModal(false)}
              >
                Close
              </button>
            </>
          }
          show={replyModal}
          size="md"
          onHide={() => setReplyModal(false)}
        >
          <Form>
            <Row className="">
              <Col md={12}>
                <h6>Query</h6>
                {viewQuestion}
              </Col>

              <Col md={12}>
                <Form.Group className="my-2" controlId="formBasicLastName">
                  <Form.Label className="font-weight-bold">
                    <h6>Answer</h6>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Answer" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </GenericModal>
        <GenericModal
          headerName="View Query"
          footerContent={
            <button
              className="footerbtn1 btn btn-default"
              onClick={() => setViewModal(false)}
            >
              Close
            </button>
          }
          show={viewModal}
          size="md"
          onHide={() => setViewModal(false)}
        >
          <Form>
            <Row className="mb-3">
              <Col md={12}>
                <h6>Query</h6>
                {viewQuestion}
              </Col>
            </Row>
          </Form>
        </GenericModal>
      </div>
    );
  };

  return (
    <MyDataTableCustom
      data={products}
      columns={columns}
      search={true}
      tableHeading={<HeaderContent />}
    />
  );
};
export default ManageContactUs;
