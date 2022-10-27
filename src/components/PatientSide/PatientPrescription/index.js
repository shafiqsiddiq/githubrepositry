import React, { useEffect, useState } from "react";
import { Button, Col, Image, Modal, Row, Table } from "react-bootstrap";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import MyDataTableCustom from "../../../assets/genericComponents/MyDataTableCustom";
import { IMAGES } from "../../../assets/images";

const PatientPrescription = () => {
  useEffect(() => {
    document.title = "PRESCRIPTION || INNOVA";
  }, []);

  const columns = [
    {
      dataField: "serialNumber",
      text: "SrNo.",
    },
    {
      dataField: "appointmentDateTime",
      text: "Appointment Date & Time",
    },
    {
      dataField: "doctorName",
      text: "Doctor Name",
    },
    {
      dataField: "appointmentType",
      text: "Appointment Type",
    },
    {
      text: "Action",
      dataField: "isSuspended",
      formatter: (cell, row, index) => {
        return (
          <>
            <EditModal />
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
      serialNumber: "1",
      appointmentDateTime: "12/12/2020 12:12pm",
      doctorName: "dsjdhsj smdms",
      appointmentType: "Chat",
    },
    {
      serialNumber: "2",
      appointmentDateTime: "12/12/2020 12:12pm",
      doctorName: "akdhsjd",
      appointmentType: "Chat",
    },
    {
      serialNumber: "3",
      appointmentDateTime: "12/12/2020 12:12pm",
      doctorName: "akdhsjd",
      appointmentType: "Chat",
    },
    {
      serialNumber: "4",
      appointmentDateTime: "12/12/2020 12:12pm",
      doctorName: "akdhsjd",
      appointmentType: "Chat",
    },
    {
      serialNumber: "5",
      appointmentDateTime: "12/12/2020 12:12pm",
      doctorName: "akdhsjd",
      appointmentType: "Chat",
    },
    {
      serialNumber: "6",
      appointmentDateTime: "12/12/2020 12:12pm",
      doctorName: "akdhsjd",
      appointmentType: "Chat",
    },
  ];
  return (
    <div>
      <MyDataTableCustom
        data={products}
        columns={columns}
        search={true}
        className="align-middle"
        tableHeading={<h4 className="mb-0 pb-2">Prescription List</h4>}
      />
    </div>
  );
};
function EditModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="bg-success table-action-btn" onClick={handleShow}>
        <FaEye />
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="d-block">
          <Row className="justify-content-between">
            <Col sm={3} className="d-flex align-items-center">
              <Image src={IMAGES.AUTHLOGO} className="img-fluid" />
            </Col>
            <Col
              sm={4}
              style={{ "font-size": "15px", "word-break": "break-all" }}
              className="text-left edit-modal-styling"
            >
              <div>
                <span className="font-weight-bolder">Address: </span> 9304
                Valley Farms Street Hollywood, FL 3302
              </div>
              <div>
                <span className="font-weight-bolder">Email: </span>{" "}
                john@innova.com
              </div>
              <div>
                <span className="font-weight-bolder">PH: </span> +44 345
                773266383
              </div>
              <div>
                <span className="font-weight-bolder">Web: </span> www.innova.com
              </div>
            </Col>
          </Row>
        </Modal.Header>
        <Modal.Body>
          <Row className="prescription-modal-table-header">
            <Col md={6} className="mb-3">
              <div className="mb-3">
                <span className="font-weight-bolder">DIAGNOSIS: </span> DEMO
              </div>
              <span className="font-weight-bolder">Patient Name: </span>
              <div>Hana Baker</div>
              <span className="font-weight-bolder">Doctor Name: </span>
              <div>David Fluid</div>
            </Col>
            <Col md={6} className="text-right">
              <div className="mb-3">
                <span className="font-weight-bolder">Date: </span> 12/10/2022
              </div>
              <Image src={IMAGES.QRCODEIMG} className="w-25" />
            </Col>
            <Col md={12}>
              <Table responsive="md">
                <thead>
                  <tr>
                    <th>Medicine Name</th>
                    <th>Duration</th>
                    <th>Dose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Panadol 8mg</td>
                    <td>Every 8 hours</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col md={12}>
              <div className="font-weight-bolder">ADVICE</div>
              <div className="my-2 basic-text-style">
                Take rest for 10 days.
              </div>
            </Col>
            <Col md={12}>
              <div className="font-weight-bolder">DISCLAIMER:</div>
              <div className="my-2 basic-text-style">
                A medical disclaimer is a statement declaring that the content
                on your site is for informational or educational purposes only,
                and does not substitute professional medical advice or
                consultations with healthcare professionals
              </div>
            </Col>
            <Col md={12} colspan="12" className="text-right">
              <div>
                {/* <Image src={IMAGES.ASIALOGO} className="w-25" /> */}
                <div className="basic-text-style font-weight-bolder">
                  Dr. Andrew Smith
                </div>
                <div className="basic-text-style font-weight-bolder">
                  MD, MBBS
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default PatientPrescription;
