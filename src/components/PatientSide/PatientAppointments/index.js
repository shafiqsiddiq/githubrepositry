import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Dropdown, Image } from "react-bootstrap";
import MyDataTableCustom from "../../../assets/genericComponents/MyDataTableCustom";
import { IMAGES } from "../../../assets/images";

const PatientAppointment = () => {
  useEffect(() => {
    document.title = "APPOINTMENTS || INNOVA";
  }, []);

  const products = [
    {
      id: "1",
      patient: "Chat Appointment",
      location: "New York",
      status: "Upcoming",
    },
    {
      id: "2",
      patient: "Chat Appointment",
      location: "New York",
      status: "Booked",
    },
    {
      id: "3",
      patient: "Chat Appointment",
      location: "New York",
      status: "Archived",
    },
    {
      id: "4",
      patient: "Chat Appointment",
      location: "New York",
      status: "Archived",
    },
    {
      id: "5",
      patient: "Chat Appointment",
      location: "New York",
      status: "Booked",
    },
    {
      id: "6",
      patient: "Chat Appointment",
      location: "New York",
      status: "Upcoming",
    },
    {
      id: "7",
      patient: "Chat Appointment",
      location: "New York",
      status: "Booked",
    },
  ];
  const [patientAppointment, setPatientAppointment] =
    useState("All Appointment");
  const [appointmentData, setAppointmentData] = useState(products);

  const columns = [
    {
      dataField: "patient",
      text: "Appointment Type",
    },
    {
      dataField: "doctor",
      text: "Doctor",
      formatter: (cell, row, index) => {
        return (
          <>
            <div>
              <Image
                src={IMAGES.PATIENTPROFILEIMAGE}
                width="50px"
                className="rounded-circle"
              ></Image>
              <span> Mubashir Hussan</span>
            </div>
          </>
        );
      },
    },
    {
      dataField: "datetime",
      text: "Date & Time",
      formatter: (cell, row, index) => {
        return (
          <>
            <div>
              <span>22/Mar/2022</span>
              <br></br>
              <span>15:26 pm to 15:28 pm</span>
            </div>
          </>
        );
      },
    },
    {
      dataField: "location",
      text: "Location",
    },
    {
      dataField: "status",
      text: "Status",
    },
    {
      text: "Action",
      dataField: "isSuspended",
      formatter: (cell, row, index) => {
        return (
          <>
            <Button style={{ backgroundColor: "#09857c" }}>Join</Button>
          </>
        );
      },
    },
  ];

  const appointmentStatus = (type) => {
    // debugger;
    setPatientAppointment(type);
    let appointmentList = [];
    if (type !== "All Appointment") {
      appointmentList = products.filter(
        (item) => item.status.toLowerCase() === type.split(" ")[0].toLowerCase()
      );
    } else appointmentList = products;
    setAppointmentData(appointmentList);
  };
  const CustomDropDown = () => {
    return (
      <Dropdown as={ButtonGroup}>
        <h4 className="mb-0 pb-2">{patientAppointment}</h4>

        <Dropdown.Toggle
          id="dropdown-split-basic"
          className="btn-light ml-1 px-3"
          style={{ borderRadius: "50%" }}
        />
        <Dropdown.Menu>
          <Dropdown.Item onSelect={() => appointmentStatus("All Appointment")}>
            All
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() => appointmentStatus("Upcoming Appointment")}
          >
            Upcoming
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() => appointmentStatus("Booked Appointment")}
          >
            Booked
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() => appointmentStatus("Archived Appoinment")}
          >
            Archived
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };
  return (
    <div>
      <MyDataTableCustom
        data={appointmentData}
        columns={columns}
        tableHeading={<CustomDropDown />}
      />
    </div>
  );
};
export default PatientAppointment;
