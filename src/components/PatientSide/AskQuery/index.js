import React, { useEffect, useState } from "react";
import { ButtonGroup, Card, Col, Dropdown, Form, Row } from "react-bootstrap";
import MyDataTableSimple from "../../../assets/genericComponents/MyDataTableSimple";
import { GenericModal } from "../../../assets/genericComponents/GenericModal";
const AskQuery = () => {
  useEffect(() => {
    document.title = "ASK QUERY || INNOVA";
  }, []);
  const [questionStatus, setQuestionStatus] = useState(
    "Questions Pending For Approval"
  );
  const [modalShow, setModalShow] = React.useState(false);
  const columns = [
    {
      dataField: "question",
      text: "Question",
    },
    {
      dataField: "createdDate",
      text: "Created Date",
    },
    {
      dataField: "questionStatus",
      text: "Question Status",
    },
  ];

  const products = [
    {
      id: "1",
      question: "abdvdvd",
      createdDate: "12/12/2020 12:12pm",
      questionStatus: "Approved",
    },
    {
      id: "2",
      question: "abdvdvd",
      createdDate: "12/12/2020 12:12pm",
      questionStatus: "Approved",
    },
    {
      id: "3",
      question: "abdvdvd",
      createdDate: "12/12/2020 12:12pm",
      questionStatus: "Approved",
    },
    {
      id: "4",
      question: "abdvdvd",
      createdDate: "12/12/2020 12:12pm",
      questionStatus: "Approved",
    },
    {
      id: "5",
      question: "abdvdvd",
      createdDate: "12/12/2020 12:12pm",
      questionStatus: "Approved",
    },
    {
      id: "6",
      question: "abdvdvd",
      createdDate: "12/12/2020 12:12pm",
      questionStatus: "Approved",
    },
  ];
  return (
    <div>
      <Card>
        <div className="card-header d-flex justify-content-between">
          <Dropdown as={ButtonGroup}>
            <h4 className="card-title  my-2 font-weight-bold">
              {questionStatus}
            </h4>
            <Dropdown.Toggle
              id="dropdown-split-basic"
              className="btn-light ml-1 rounded-circle"
            />
            <Dropdown.Menu>
              <Dropdown.Item
                onSelect={() =>
                  setQuestionStatus("Questions Pending For Approval")
                }
              >
                Questions Pending For Approval
              </Dropdown.Item>
              <Dropdown.Item
                onSelect={() => setQuestionStatus("Approved Questions")}
              >
                Approved Questions
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="card-tools">
            <button
              style={{ backgroundColor: "#09857c", borderRadius: "50px" }}
              onClick={() => setModalShow(true)}
              className="btn my-1 text-white"
            >
              Add Question
            </button>
          </div>
        </div>
        <Card.Body>
          <MyDataTableSimple data={products} columns={columns} />
        </Card.Body>
      </Card>

      <GenericModal
        headerName="Create Question"
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Form>
          <Row className="mt-3">
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Label className="font-weight-bold">Gender</Form.Label>
                <Form.Control as="select">
                  <option>Select Option</option>
                  <option questionStatus="1">Male</option>
                  <option questionStatus="2">Female</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Label className="font-weight-bold">Age</Form.Label>
                <Form.Control type="text" placeholder="Age" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="font-weight-bold">Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label className="font-weight-bold">Phone</Form.Label>
                <Form.Control type="tel" placeholder="Phone Number" />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3 mt-4 py-3 FormCheck">
                <Form.Check type="checkbox" label="PostAsAnonymous" />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="font-weight-bold">
                  Add Question
                </Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </GenericModal>
    </div>
  );
};

export default AskQuery;
