import React, { useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import CreateSlots from "./CreateSlots";
import UpcomingAppointments from "./UpcomingAppointments";
import ListView from "./ListView";
import ArchivedAppointments from "./ArchivedAppointments";
import AppointmentFee from "../AppointmentFee";

const Appointments = () => {
  useEffect(() => {
    document.title = "APPOINTMENTS || INNOVA";
  }, []);

  return (
    <div className="doctorSide-Appointments">
      <Tabs
        defaultActiveKey="CreateSlots"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="CreateSlots" title="Create Slots">
          <CreateSlots />
        </Tab>
        <Tab eventKey="UpcomingAppointments" title="Upcoming Appointments">
          <UpcomingAppointments />
        </Tab>
        <Tab eventKey="ListView" title="List View">
          <ListView />
        </Tab>
        <Tab eventKey="ArchivedAppointments" title="Archived Appointments">
          <ArchivedAppointments />
        </Tab>
        <Tab eventKey="AppointmentFee" title="Appointment Fee" className="mt-1">
          <AppointmentFee />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Appointments;
