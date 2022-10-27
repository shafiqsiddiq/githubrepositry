import React from "react";
import MyDataTableCustom from "../../../assets/genericComponents/MyDataTableCustom";
import { FaEllipsisV } from "react-icons/fa";
let viewportHeight = 150;

const ListView = () => {
  const columns = [
    {
      dataField: "appointmentDate",
      text: "Date",
    },
    {
      dataField: "appointmentStartTime",
      text: "Start Time",
    },
    {
      dataField: "appointmentEndTime",
      text: "End Time",
    },
    {
      dataField: "appointmentype",
      text: "Type",
    },
    {
      text: "Status",
      dataField: "status",
      formatter: (cell, row, index) => {
        return (
          <label
            className={
              cell === "1"
                ? "bg-success badge mx-auto px-2 text-white rounded mb-0"
                : cell === "2"
                ? "bg-info px-2 badge text-white rounded mb-0"
                : "bg-danger px-2 badge text-white rounded mb-0"
            }
          >
            {cell === "1" ? "Completed" : cell === "2" ? "Upcoming" : "Missed"}
          </label>
        );
      },
    },
    {
      text: "Action",
      dataField: "isSuspended",
      formatter: (cell, row, index) => {
        return <FaEllipsisV />;
      },
    },
  ];

  const products = [
    {
      serialNumber: "1",
      appointmentStartTime: "12:15pm",
      appointmentEndTime: "12:45pm",
      appointmentDate: "12/12/2020",
      appointmentype: "Tel",
      status: "1",
    },
    {
      serialNumber: "2",
      appointmentStartTime: "12:15pm",
      appointmentEndTime: "12:45pm",
      appointmentDate: "12/12/2020",
      appointmentype: "Physical",
      status: "2",
    },
    {
      serialNumber: "3",
      appointmentStartTime: "12:15pm",
      appointmentEndTime: "12:45pm",
      appointmentDate: "12/12/2020",
      appointmentype: "Physical",
      status: "1",
    },
    {
      serialNumber: "4",
      appointmentStartTime: "12:15pm",
      appointmentEndTime: "12:45pm",
      appointmentDate: "12/12/2020",
      appointmentype: "Physical",
      status: "3",
    },
    {
      serialNumber: "5",
      appointmentStartTime: "12:15pm",
      appointmentEndTime: "12:45pm",
      appointmentDate: "12/12/2020",
      appointmentype: "Physical",
      status: "1",
    },
    {
      serialNumber: "6",
      appointmentStartTime: "12:15pm",
      appointmentEndTime: "12:45pm",
      appointmentDate: "12/12/2020",
      appointmentype: "Physical",
      status: "1",
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

export default ListView;
