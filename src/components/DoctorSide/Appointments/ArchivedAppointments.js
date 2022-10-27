import React from "react";
import MyDataTableCustom from "../../../assets/genericComponents/MyDataTableCustom";
import { FaEllipsisV } from "react-icons/fa";
let viewportHeight = 150;

const ArchivedAppointments = () => {
  const columns = [
    {
      dataField: "patientName",
      text: "Patient Name",
    },
    {
      dataField: "appointmentDate",
      text: "Date",
    },
    {
      dataField: "appointmentTime",
      text: "Time",
    },
    {
      dataField: "appointmentType",
      text: "Type",
    },
    {
      text: "Action",
      datafield: "isSuspended",
      formatter: (cell, row, index) => {
        return <FaEllipsisV />;
      },
    },
  ];

  const products = [
    {
      serialNumber: "1",
      appointmentDate: "12/12/2020",
      patientName: "John Doe",
      appointmentTime: "12:10pm",
      appointmentType: "tel",
    },
    {
      serialNumber: "2",
      appointmentDate: "12/12/2020",
      patientName: "John Doe",
      appointmentTime: "12:10pm",
      appointmentType: "tel",
    },
    {
      serialNumber: "3",
      appointmentDate: "12/12/2020",
      patientName: "John Doe",
      appointmentTime: "12:10pm",
      appointmentType: "tel",
    },
    {
      serialNumber: "4",
      appointmentDate: "12/12/2020",
      patientName: "John Doe",
      appointmentTime: "12:10pm",
      appointmentType: "tel",
    },
    {
      serialNumber: "5",
      appointmentDate: "12/12/2020",
      patientName: "John Doe",
      appointmentTime: "12:10pm",
      appointmentType: "tel",
    },
    {
      serialNumber: "6",
      appointmentDate: "12/12/2020",
      patientName: "John Doe",
      appointmentTime: "12:10pm",
      appointmentType: "tel",
    },
  ];
  return (
    <div style={{ minHeight: `calc(100vh - ${viewportHeight}px` }}>
      <MyDataTableCustom
        data={products}
        columns={columns}
        search={true}
        className="align-middle"
        showHeader={false}
        tableHeading={<h4 className="mb-0">List of Appointments</h4>}
      />
    </div>
  );
};

export default ArchivedAppointments;
