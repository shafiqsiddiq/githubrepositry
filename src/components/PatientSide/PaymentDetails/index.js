import React, { useEffect } from "react";
import MyDataTableCustom from "../../../assets/genericComponents/MyDataTableCustom";

const PaymentDetails = () => {
  useEffect(() => {
    document.title = "PAYMENT DETAILS || INNOVA";
  }, []);
  const columns = [
    {
      dataField: "doctorName",
      text: "Doctor Name",
    },
    {
      dataField: "appointmentDate",
      text: "Appointment Date",
    },
    {
      dataField: "appointmentDuration",
      text: "Appointment Duration",
    },
    {
      dataField: "amount",
      text: "Amount",
    },
    {
      dataField: "status",
      text: "Status",
    },
  ];

  const products = [
    {
      id: "1",
      doctorName: "John",
      appointmentDate: "12/12/2020",
      appointmentDuration: "10:00 am to 10:30 am (30 mins)",
      amount: "$100",
      status: "Paid",
    },
    {
      id: "2",
      doctorName: "John",
      appointmentDate: "12/12/2020",
      appointmentDuration: "10:00 am to 10:30 am (30 mins)",
      amount: "$100",
      status: "Paid",
    },
    {
      id: "3",
      doctorName: "John",
      appointmentDate: "12/12/2020",
      appointmentDuration: "10:00 am to 10:30 am (30 mins)",
      amount: "$100",
      status: "Paid",
    },
    {
      id: "4",
      doctorName: "John",
      appointmentDate: "12/12/2020",
      appointmentDuration: "10:00 am to 10:30 am (30 mins)",
      amount: "$100",
      status: "Paid",
    },
    {
      id: "5",
      doctorName: "John",
      appointmentDate: "12/12/2020",
      appointmentDuration: "10:00 am to 10:30 am (30 mins)",
      amount: "$100",
      status: "Paid",
    },
    {
      id: "6",
      doctorName: "John",
      appointmentDate: "12/12/2020",
      appointmentDuration: "10:00 am to 10:30 am (30 mins)",
      amount: "$100",
      status: "Paid",
    },
    {
      id: "7",
      doctorName: "John",
      appointmentDate: "12/12/2020",
      appointmentDuration: "10:00 am to 10:30 am (30 mins)",
      amount: "$100",
      status: "Paid",
    },
  ];
  return (
    <div>
      <MyDataTableCustom
        data={products}
        columns={columns}
        tableHeading={<h4 className="mb-0 pb-2">Payment Details</h4>}
      />
    </div>
  );
};

export default PaymentDetails;
