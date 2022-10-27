import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import MyDataTableCustom from "../../../assets/genericComponents/MyDataTableCustom";

const PaymentDetails = () => {
  useEffect(() => {
    document.title = "Payment Details|| INNOVA";
  }, []);
  const columns = [
    {
      dataField: "patientName",
      text: "Doctor Name",
    },
    {
      dataField: "email",
      text: "Email",
    },
    {
      dataField: "phoneNumber",
      text: "Phone Number",
    },
    {
      dataField: "subscriptionDate",
      text: "Subscription Date",
    },
    {
      dataField: "packagePlan",
      text: "Package Plan",
    },
    {
      dataField: "planName",
      text: "Plan Name",
    },
    {
      dataField: "price",
      text: "Price",
    },
  ];

  const products = [
    {
      email: "john.doe@innova.com",
      subscriptionDate: "12/12/2020",
      patientName: "John Doe",
      phoneNumber: "+93 3452367098",
      packagePlan: "Basic Plan",
      planName: "Family",
      price: "$35",
    },
    {
      email: "john.doe@innova.com",
      subscriptionDate: "12/12/2020",
      patientName: "John Doe",
      phoneNumber: "+93 3452367098",
      packagePlan: "Basic Plan",
      planName: "Family",
      price: "$35",
    },
    {
      email: "john.doe@innova.com",
      subscriptionDate: "12/12/2020",
      patientName: "John Doe",
      phoneNumber: "+93 3452367098",
      packagePlan: "N/A",
      planName: "Family",
      price: "$35",
    },
  ];
  return (
    <div>
      <Row>
        <Col md={12}>
          <h2>Search</h2>
        </Col>
        <Col>
          <label>Promo/Discount Code</label>
          <br />
          <input className="form-control" type="text" />
        </Col>
        <Col>
          <label>Start Date</label>
          <br />
          <input className="form-control" type="date" />
        </Col>
        <Col>
          <label>End Date</label>
          <br />
          <input className="form-control" type="date" />
        </Col>
      </Row>

      <div className="mt-3">
        <MyDataTableCustom
          data={products}
          columns={columns}
          search={true}
          className="align-middle"
          tableHeading={<h4 className="mb-0 pb-2">Patient Subscription</h4>}
        />
      </div>
    </div>
  );
};

export default PaymentDetails;
