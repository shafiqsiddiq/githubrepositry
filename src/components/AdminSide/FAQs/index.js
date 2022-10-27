import React, { useEffect, useState } from "react";
import MyDataTableCustom from "../../../assets/genericComponents/MyDataTableCustom";
import { FaTrashAlt, FaRegEdit, FaEye } from "react-icons/fa";
import { Col, Form, Row } from "react-bootstrap";
import { GenericModal } from "../../../assets/genericComponents/GenericModal";

const FAQs = () => {
  useEffect(() => {
    document.title = "FAQs'S LIST || INNOVA";
  }, []);
  const [viewQuestion, setViewQuestion] = useState("");
  const [viewAnswer, setViewAnswer] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  const columns = [
    {
      dataField: "question",
      text: "Question",
    },
    {
      dataField: "answer",
      text: "Answer",
    },
    {
      text: "Action",
      dataField: "isSuspended",
      formatter: (cell, row, index) => {
        const viewQuestionModal = () => {
          setViewQuestion(row.question);
          setViewAnswer(row.answer);
          setViewModal(true);
        };
        return (
          <>
            <button className="bg-info table-action-btn">
              <FaEye onClick={() => viewQuestionModal()} />
            </button>
            <button className="bg-success table-action-btn">
              <FaRegEdit onClick={() => setEditModal(true)} />
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
      question: <p className="mb-0">Lorem ipsum dolor sit amet</p>,
      answer: (
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adiet dolore magna
        </p>
      ),
    },
  ];

  const HeaderContent = () => {
    return (
      <div className="d-flex justify-content-between align-items-center">
        <h4>FAQs</h4>
        <button className="primary-btn" onClick={() => setEditModal(true)}>
          Add
        </button>
        <GenericModal
          headerName="Add FAQs"
          show={editModal}
          size="md"
          onHide={() => setEditModal(false)}
        >
          <Form>
            <Row className="mb-3">
              <Col md={12}>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Label className="font-weight-bold">Question</Form.Label>
                  <Form.Control type="text" placeholder="Question" />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label className="font-weight-bold">Answer</Form.Label>
                  <Form.Control type="text" placeholder="Answer" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </GenericModal>
        <GenericModal
          headerName="View FAQs"
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
                <h6>Question</h6>
                {viewQuestion}
                <h6>Answer</h6>
                {viewAnswer}
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

export default FAQs;
