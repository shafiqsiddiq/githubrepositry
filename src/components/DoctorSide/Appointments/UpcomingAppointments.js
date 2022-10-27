import React from "react";
import MyDataTableCustom from "../../../assets/genericComponents/MyDataTableCustom";

let viewportHeight = 150;

const UpcomingAppointments = () => {
  const columns = [
    {
      dataField: "serialNumber",
      text: "Sr.",
    },
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
  ];

  const products = [
    {
      serialNumber: "1",
      appointmentDate: "12/12/2020",
      patientName: "dsjdhsj smdms",
      appointmentTime: "12:10pm",
    },
    {
      serialNumber: "2",
      appointmentDate: "12/12/2020",
      patientName: "akdhsjd",
      appointmentTime: "12:10pm",
    },
    {
      serialNumber: "3",
      appointmentDate: "12/12/2020",
      patientName: "akdhsjd",
      appointmentTime: "12:10pm",
    },
    {
      serialNumber: "4",
      appointmentDate: "12/12/2020",
      patientName: "akdhsjd",
      appointmentTime: "12:10pm",
    },
    {
      serialNumber: "5",
      appointmentDate: "12/12/2020",
      patientName: "akdhsjd",
      appointmentTime: "12:10pm",
    },
    {
      serialNumber: "6",
      appointmentDate: "12/12/2020",
      patientName: "akdhsjd",
      appointmentTime: "12:10pm",
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

export default UpcomingAppointments;
