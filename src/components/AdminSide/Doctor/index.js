import React, { useEffect, useState } from "react";
import MyDataTableCustom from "../../../assets/genericComponents/MyDataTableCustom";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { IMAGES } from "../../../assets/images";
import { Col, Form, Image, Row } from "react-bootstrap";
import { GenericModal } from "../../../assets/genericComponents/GenericModal";
import { Link } from "react-router-dom";
import { PATH } from "../../../config";

const Doctor = () => {
  useEffect(() => {
    document.title = "DOCTOR'S LIST || INNOVA";
  }, []);

  const columns = [
    {
      dataField: "docPicture",
      text: "Picture",
      style: { width: "15%" },
    },
    {
      dataField: "doctorName",
      text: "Name",
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
            <Link to={PATH.DOCTOR_MANAGEPROILE}>
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
      docPicture: (
        <Image src={IMAGES.AVATAR} className="rounded-circle table-data-img" />
      ),
      createdDate: "12/12/2020",
      doctorName: "Will Smith",
      contactNumber: "+92 314 5676345",
    },
    {
      docPicture: (
        <Image src={IMAGES.AVATAR} className="rounded-circle table-data-img" />
      ),
      createdDate: "12/12/2020",
      doctorName: "Danny Morrison",
      contactNumber: "+92 314 5676345",
    },
    {
      docPicture: (
        <Image src={IMAGES.AVATAR} className="rounded-circle table-data-img" />
      ),
      createdDate: "12/12/2020",
      doctorName: "Danny Morrison",
      contactNumber: "+92 314 5676345",
    },
    {
      docPicture: (
        <Image src={IMAGES.AVATAR} className="rounded-circle table-data-img" />
      ),
      createdDate: "12/12/2020",
      doctorName: "Danny Morrison",
      contactNumber: "+92 314 5676345",
    },
    {
      docPicture: (
        <Image src={IMAGES.AVATAR} className="rounded-circle table-data-img" />
      ),
      createdDate: "12/12/2020",
      doctorName: "Danny Morrison",
      contactNumber: "+92 314 5676345",
    },
    {
      docPicture: (
        <Image src={IMAGES.AVATAR} className="rounded-circle table-data-img" />
      ),
      createdDate: "12/12/2020",
      doctorName: "Danny Morrison",
      contactNumber: "+92 314 5676345",
    },
  ];

  const [modalShow, setModalShow] = useState(false);
  const HeaderContent = () => {
    return (
      <div className="d-flex justify-content-between align-items-center">
        <h4>Doctors</h4>
        <button className="primary-btn" onClick={() => setModalShow(true)}>
          Add Doctor
        </button>
        <GenericModal
          headerName="Add Doctor"
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

export default Doctor;
