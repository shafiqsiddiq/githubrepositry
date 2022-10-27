import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import MyDataTableCustom from "../../../assets/genericComponents/MyDataTableCustom";
import { IMAGES } from "../../../assets/images";

const CallLogs = () => {
  useEffect(() => {
    document.title = "Call Logs || INNOVA";
  }, []);

  const columns = [
    {
      dataField: "serialNumber",
      text: "Appt. Id",
    },
    {
      dataField: "patientName",
      text: "Patient Name",
    },
    {
      dataField: "doctorName",
      text: "Doctor Name",
      formatter: (cell, row, index) => {
        return (
          <div>
            <Image
              src={IMAGES.PATIENTPROFILEIMAGE}
              width="50px"
              className="rounded-circle"
            ></Image>
            <span>Garry Jenkins</span>
          </div>
        );
      },
    },
    {
      dataField: "appointmentDate",
      text: "Appt. Date",
    },
    {
      dataField: "doctorJoined",
      text: "Doctor Joined",
    },
    {
      dataField: "doctorLeft",
      text: "Doctor Left",
    },
    {
      dataField: "patientJoined",
      text: "Patient Joined",
    },
    {
      dataField: "patientLeft",
      text: "Patient Left",
    },
    {
      dataField: "duration",
      text: "Duration",
    },
  ];

  const products = [
    {
      serialNumber: "1",
      patientName: "John",
      appointmentDate: "12/12/2020",
      doctorName: "Tim david",
      doctorJoined: "11:00am",
      doctorLeft: "11:30am",
      patientJoined: "11:00am",
      patientLeft: "11:30am",
      duration: "30 min",
    },
    {
      serialNumber: "1",
      patientName: "John",
      appointmentDate: "12/12/2020",
      doctorName: "Tim david",
      doctorJoined: "11:00am",
      doctorLeft: "11:30am",
      patientJoined: "11:00am",
      patientLeft: "11:30am",
      duration: "30 min",
    },
    {
      serialNumber: "1",
      patientName: "John",
      appointmentDate: "12/12/2020",
      doctorName: "Tim david",
      doctorJoined: "11:00am",
      doctorLeft: "11:30am",
      patientJoined: "11:00am",
      patientLeft: "11:30am",
      duration: "30 min",
    },
    {
      serialNumber: "1",
      patientName: "John",
      appointmentDate: "12/12/2020",
      doctorName: "Tim david",
      doctorJoined: "11:00am",
      doctorLeft: "11:30am",
      patientJoined: "11:00am",
      patientLeft: "11:30am",
      duration: "30 min",
    },
    {
      serialNumber: "1",
      patientName: "John",
      appointmentDate: "12/12/2020",
      doctorName: "Tim david",
      doctorJoined: "11:00am",
      doctorLeft: "11:30am",
      patientJoined: "11:00am",
      patientLeft: "11:30am",
      duration: "30 min",
    },
  ];
  return (
    <div>
      <MyDataTableCustom
        data={products}
        columns={columns}
        search={true}
        className="align-middle"
        tableHeading={<h4 className="mb-0 pb-2">Call Logs</h4>}
      />
    </div>
  );
};
export default CallLogs;
