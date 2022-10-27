import React, { useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";

import PersonalInformation from "./PersonalInformation";
import ProfessionalInformation from "./ProfessionalInformation";
import View from "./View";

const ManageProfile = () => {
  useEffect(() => {
    document.title = "MANAGE PROFILE|| INNOVA";
  }, []);
  return (
    <div className="doctor-manage-profile">
      <Tabs
        defaultActiveKey="PersonalInformation"
        id="uncontrolled-tab-example"
        className="mb-3 pb-3"
      >
        <Tab eventKey="PersonalInformation" title="Personal Information">
          <PersonalInformation />
        </Tab>
        <Tab
          eventKey="ProfessionalInformation"
          title="Professional Information"
        >
          <ProfessionalInformation />
        </Tab>
        <Tab eventKey="View" title="View">
          <View />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ManageProfile;
