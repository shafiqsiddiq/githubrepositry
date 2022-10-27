import React, { useEffect } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import TemperatureDevice from "./TemperatureDevice";
import PulseOximeter from "./PulseOximeter";
import WeightMachine from "./WeightMachine";
import BloodPressure from "./BloodPressure";

const MyVitals = () => {
  useEffect(() => {
    document.title = "MY VITALS || INNOVA";
  }, []);
  return (
    <div className="myvitals">
      <Row className="">
        <Col sm={12}>
          <Tabs
            defaultActiveKey="pulseOximeter"
            id="uncontrolled-tab-example"
            className="justify-content-start border-0 nav-justified"
          >
            <Tab
              eventKey="pulseOximeter"
              title="Pulse Oximeter"
              className="mt-1"
            >
              <PulseOximeter />
            </Tab>
            <Tab
              eventKey="bloodPressure"
              title="Blood Pressure"
              className="mt-1"
            >
              <BloodPressure />
            </Tab>
            <Tab
              eventKey="weightMachine"
              title="Weight Machine"
              className="mt-1"
            >
              <WeightMachine />
            </Tab>
            <Tab
              eventKey="temperatureDevice"
              title="Temperature Device"
              className="mt-1"
            >
              <TemperatureDevice />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default MyVitals;
