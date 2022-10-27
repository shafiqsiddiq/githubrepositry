import React from "react";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { Card, Col, Form, Row } from "react-bootstrap";
import MyDataTableSimple from "../../../assets/genericComponents/MyDataTableSimple";

const educationColumns = [
  {
    dataField: "title",
    text: "Title",
  },
  {
    dataField: "date",
    text: "Date",
  },
  {
    text: "Action",
    dataField: "isSuspended",
    formatter: (cell, row, index) => {
      return (
        <>
          <button
            className="table-action-btn bg-info"
            data-for="main"
            // onClick={() => EditTherapistDetails(row)}
            //     data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"
            //     data-iscapture="true"
          >
            <FaEye />
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
    title: "Leave",
    date: "1st May 2022",
  },
];

const Documents = () => {
  // const [lgShow, setLgShow] = useState(false);

  return (
    <div className="manage-profile">
      <Card className="pb-4 border-0 personal-information">
        <Card.Body className="pb-0">
          <Form>
            <Row>
              <Col md={12}>
                <h2>Upload Other Documents</h2>
              </Col>
            </Row>
            <Row>
              <Col sm={6} md={4} lg={4} xl={3}>
                <Form.Group>
                  <label>Title</label>
                  <Form.Group>
                    <Form.Control type="text" placeholder=" " />
                  </Form.Group>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <Form.Group>
                  <label>Date *</label>
                  <Form.Group>
                    <Form.Control type="date" />
                  </Form.Group>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={4} xl={3}>
                <Form.Group>
                  <label>Date *</label>
                  <Form.Group>
                    <Form.Control type="file" />
                  </Form.Group>
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
            <Row>
              <Col md={12}>
                <h2>Your Documents</h2>
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
              <Col lg={12} className="">
                <h5>Driver's License</h5>

                <button className="mx-1 rounded-pill py-2 save-btn">
                  Upload
                </button>
              </Col>
            </Row>

            <Row>
              <Col lg={12} className=" mt-3">
                <h5>Insurance Card</h5>
                <div className="d-flex">
                  <button className="mx-1 rounded-pill py-2 save-btn">
                    Front
                  </button>
                  <button className="mx-1 rounded-pill py-2 save-btn">
                    Back
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Documents;
