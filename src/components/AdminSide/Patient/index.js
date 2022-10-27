import React, { useEffect, useState } from "react";
import { Col, Form, Image, Row } from "react-bootstrap";
import { GenericModal, IMAGES } from "../../../assets";
import MyDataTableCustom from "../../../assets/genericComponents/MyDataTableCustom";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { PATH } from "../../../config";
import { Link } from "react-router-dom";

const Patient = () => {
  useEffect(() => {
    document.title = "PATIENT'S LIST || INNOVA";
  }, []);
  const [modalShow, setModalShow] = useState(false);

  const columns = [
    {
      dataField: "patientPicture",
      text: "Picture",
      style: { width: "15%" },
    },
    {
      dataField: "patientName",
      text: "Name",
    },
    {
      dataField: "patientEmail",
      text: "Email",
    },
    {
      dataField: "contactNumber",
      text: "Contact",
    },
    {
      dataField: "createdDate",
      text: "Created Date",
    },
    {
      text: "Action",
      dataField: "isSuspended",
      formatter: (cell, row, index) => {
        return (
          <>
            <Link to={PATH.PATIENT_MANAGEPROFILE}>
              <button className="bg-info table-action-btn">
                <FaRegEdit
                // onClick={() => setModalShow(true)}
                />
              </button>
            </Link>
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
      patientPicture: (
        <Image className="rounded-circle table-data-img" src={IMAGES.AVATAR} />
      ),
      createdDate: "12/12/2020",
      patientEmail: "danny@innova.com",
      patientName: "Will Smith",
      contactNumber: "+92 314 5676345",
    },
    {
      patientPicture: (
        <Image className="rounded-circle table-data-img" src={IMAGES.AVATAR} />
      ),
      createdDate: "12/12/2020",
      patientEmail: "danny@innova.com",
      patientName: "Danny Morrison",
      contactNumber: "+92 314 5676345",
    },
    {
      patientPicture: (
        <Image className="rounded-circle table-data-img" src={IMAGES.AVATAR} />
      ),
      createdDate: "12/12/2020",
      patientEmail: "danny@innova.com",
      patientName: "Danny Morrison",
      contactNumber: "+92 314 5676345",
    },
    {
      patientPicture: (
        <Image className="rounded-circle table-data-img" src={IMAGES.AVATAR} />
      ),
      createdDate: "12/12/2020",
      patientEmail: "danny@innova.com",
      patientName: "Danny Morrison",
      contactNumber: "+92 314 5676345",
    },
    {
      patientPicture: (
        <Image className="rounded-circle table-data-img" src={IMAGES.AVATAR} />
      ),
      createdDate: "12/12/2020",
      patientEmail: "danny@innova.com",
      patientName: "Danny Morrison",
      contactNumber: "+92 314 5676345",
    },
    {
      patientPicture: (
        <Image className="rounded-circle table-data-img" src={IMAGES.AVATAR} />
      ),
      createdDate: "12/12/2020",
      patientEmail: "danny@innova.com",
      patientName: "Danny Morrison",
      contactNumber: "+92 314 5676345",
    },
  ];

  const HeaderContent = () => {
    return (
      <div>
        <h4>Patients</h4>

        <GenericModal
          headerName="Edit Patient"
          show={modalShow}
          size="md"
          onHide={() => setModalShow(false)}
        >
          <Form>
            <Row className="mb-3">
              <Col md={12}>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Label className="font-weight-bold">
                    First Name
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label className="font-weight-bold">
                    Last Name
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="font-weight-bold">Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3" controlId="formBasicContactNumber">
                  <Form.Label className="font-weight-bold">
                    Contact Number
                  </Form.Label>
                  <Form.Control type="tel" placeholder="Contact Number" />
                </Form.Group>
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

export default Patient;
