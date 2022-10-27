import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

import MyDataTableSimple from "../../../assets/genericComponents/MyDataTableSimple";

import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";
import { GenericModal } from "../../../assets/genericComponents/GenericModal";

const awardColumns = [
  {
    dataField: "awardName",
    text: "Award Name",
  },
  {
    dataField: "instituteName",
    text: "End Date",
  },
  {
    dataField: "awardDate",
    text: "Award Date",
  },
];
const awardData = [
  {
    awardName: "Premium",
    instituteName: "London Surgery Complex",
    awardDate: "12/12/2022",
  },
];
const membershipColumns = [
  {
    dataField: "membershipName",
    text: "Membership Name",
  },
  {
    dataField: "startDate",
    text: "Start Date",
  },
  {
    dataField: "endDate",
    text: "End Date",
  },
];
const membershipData = [
  {
    membershipName: "Premium",
    startDate: "12/12/2022",
    endDate: "12/03/2022",
  },
];
const licenseColumns = [
  {
    dataField: "licenseNumber",
    text: "License Number",
  },

  {
    dataField: "licenseType",
    text: "License Type",
  },
  {
    dataField: "startDate",
    text: "Start Date",
  },
  {
    dataField: "endDate",
    text: "End Date",
  },
];
const licenseData = [
  {
    licenseNumber: "PK-235421",
    licenseType: "Quaid e Azam Hospital, Lahore",
    startDate: "12/12/2022",
    endDate: "12/03/2022",
  },
];
const workExperienceColumns = [
  {
    dataField: "jobTitle",
    text: "Job Title",
  },
  {
    dataField: "organisationName",
    text: "Organization Name",
  },
  {
    datafield: "supervisorName",
    text: "Supervisor Name",
  },
  {
    dataField: "startDate",
    text: "Start Date",
  },
  {
    dataField: "endDate",
    text: "End Date",
  },
];
const workExperienceData = [
  {
    jobTitle: "Senior Surgeon",
    organisationName: "Quaid e Azam Hospital, Lahore",
    supervisorName: "Dr. Atia Khalid",
    startDate: "12/12/2022",
    endDate: "12/03/2022",
  },
];
const skillsColumns = [
  {
    dataField: "skillName",
    text: "Skill Name",
  },
  {
    dataField: "instituteName",
    text: "Institute Name",
  },
  {
    dataField: "startDate",
    text: "Start Date",
  },
  {
    dataField: "endDate",
    text: "End Date",
  },
];
const skillsData = [
  {
    skillName: "React Course",
    instituteName: "Udemy",
    startDate: "12/12/2022",
    endDate: "12/03/2022",
  },
];
const specializationColumns = [
  {
    dataField: "speciality",
    text: "Speciality",
  },
  {
    dataField: "subSpeciality",
    text: "Sub-Speciality",
  },
];
const specializationData = [
  {
    speciality: "Child",
    subSpeciality: "ENR",
  },
];
const educationColumns = [
  {
    dataField: "degreeName",
    text: "Name",
  },
  {
    dataField: "degreeCompleted",
    text: "Degree Completed",
  },
  {
    dataField: "startDate",
    text: "Start Date",
  },
  {
    dataField: "endDate",
    text: "End Date",
  },
];
const educationData = [
  {
    degreeName: "BS",
    degreeCompleted: "Yes",
    startDate: "11-09-2017",
    endDate: "12-10-2021",
  },
];

const socialColumns = [
  {
    dataField: "socialMediaName",
    text: "Name",
  },
  {
    dataField: "socialMediaURL",
    text: "URL",
  },
];
const socialProducts = [
  {
    id: "1",
    socialMediaName: "Facebook",
    socialMediaURL: <Link target="__blank">www.facebook.com</Link>,
  },
];
const referencesColumns = [
  {
    dataField: "name",
    text: "Name",
  },
  {
    dataField: "email",
    text: "Email",
  },
  {
    dataField: "contactNumber",
    text: "contactNumber",
  },
  {
    dataField: "relation",
    text: "Relation",
  },
  {
    dataField: "durationAssociated",
    text: "Duration Associated",
  },
];

const referencesData = [
  {
    id: "1",
    name: "Smith",
    email: "smith@innova.com",
    contactNumber: "+92 3149623324",
    relation: "Brother",
    durationAssociated: "2 Months",
  },
];
const ProfessionalInformation = () => {
  const [educationShowModal, educationSetShowModal] = React.useState(false);
  const [specializationShowModal, specializationSetShowModal] =
    React.useState(false);
  const [skillShowModal, skillSetShowModal] = React.useState(false);
  const [experienceShowModal, experienceSetShowModal] = React.useState(false);
  const [referenceShowModal, referenceSetShowModal] = React.useState(false);
  const [certificationShowModal, certificationSetShowModal] =
    React.useState(false);
  const [membershipShowModal, membershipSetShowModal] = React.useState(false);
  const [awardShowModal, awardSetShowModal] = React.useState(false);
  const [socialMediaShowModal, socialMediaSetShowModal] = React.useState(false);
  const [enableFeeld, setEnablefeeld] = useState(true);
  return (
    <main className="h-100">
      <div className="manage-profile h-100">
        <Row className="h-100" style={{ "overflow-y": "auto" }}>
          <Col lg={12} className="rounded">
            <Card className="pb-4 border-0 professional-information">
              <Card.Body>
                <Form>
                  <Row>
                    <Col md={12} className="d-flex justify-content-between align-items-center">
                      <h2 className="fonttext mb-0">Educational Information</h2>
                      <Button
                        className="primary-btn"
                        onClick={() => educationSetShowModal(true)}
                      >
                        + Add Education
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} className="mt-3">
                      <MyDataTableSimple
                        tablePagination="false"
                        data={educationData}
                        columns={educationColumns}
                      />
                    </Col>
                  </Row>
                  <GenericModal
                    headerName="Add Education"
                    footerContent={
                      <div>
                        <button
                          className="footerbtn btn btn-default mr-2"
                          type="submit"
                        >
                          Add
                        </button>
                        <button
                          onClick={() => {
                            educationSetShowModal(false);
                          }}
                          className="footerbtn1 btn btn-default"
                        >
                          Cancel
                        </button>
                      </div>
                    }
                    show={educationShowModal}
                    size="lg"
                    onHide={() => educationSetShowModal(false)}
                  >
                    <Row>
                      <Col sm={6} md={4} lg={4} xl={4}>
                        <label>Education Type</label>
                        <Form.Group>
                          <select
                            className="form-control"
                            aria-label="education-type"
                          >
                            <option value="1">Formal</option>
                            <option value="2">Informal</option>
                          </select>
                        </Form.Group>
                      </Col>
                      <Col sm={6} md={4} lg={4} xl={4}>
                        <label>Degree Name</label>
                        <Form.Group>
                          <Form.Control type="text" placeholder="Degree Name" />
                        </Form.Group>
                      </Col>
                      <Col sm={6} md={4} lg={4} xl={4} className="">
                        <div className="mb-3" name="degreeCompleted">
                          is Completed?
                        </div>
                        <Form.Check
                          inline
                          onChange={() => {
                            setEnablefeeld(true);
                          }}
                          label="Yes"
                          type="radio"
                          name="degreeCompleted"
                        />
                        <Form.Check
                          inline
                          onChange={() => {
                            setEnablefeeld(false);
                          }}
                          label="No"
                          type="radio"
                          name="degreeCompleted"
                        />
                      </Col>
                      <Col sm={6} md={4} lg={4} xl={4}>
                        <label>Institute Name</label>
                        <Form.Group>
                          <Form.Control
                            type="text"
                            placeholder="Institute Name"
                          />
                        </Form.Group>
                      </Col>
                      <Col sm={6} md={4} lg={4} xl={4}>
                        <label>Majors</label>
                        <Form.Group>
                          <Form.Control type="text" placeholder="Majors" />
                        </Form.Group>
                      </Col>

                      <Col sm={6} md={4} lg={4} xl={4}>
                        <label>Start Date</label>
                        <Form.Group>
                          <Form.Control type="date" />
                        </Form.Group>
                      </Col>
                      <Col sm={6} md={4} lg={4} xl={4}>
                        <label>End Date</label>
                        {enableFeeld ? (
                          <Form.Group>
                            <Form.Control type="date" />
                          </Form.Group>
                        ) : (
                          <Form.Group>
                            <Form.Control type="date" disabled />
                          </Form.Group>
                        )}
                      </Col>
                      <Col sm={6} md={4} lg={4} xl={4}>
                        <label>Country</label>
                        <Form.Group>
                          <select className="form-control" aria-label="country">
                            <option value="1">Australia</option>
                            <option value="2">USA</option>
                          </select>
                        </Form.Group>
                      </Col>
                      <Col sm={6} md={4} lg={4} xl={4}>
                        <label>State</label>
                        <Form.Group>
                          <select className="form-control" aria-label="state">
                            <option value="1">Washington</option>
                            <option value="2">Florida</option>
                          </select>
                        </Form.Group>
                      </Col>

                      <Col sm={6} md={4} lg={4} xl={4}>
                        <label>City</label>
                        <Form.Group>
                          <select className="form-control" aria-label="city">
                            <option value="1">New York</option>
                            <option value="2">Chicago</option>
                          </select>
                        </Form.Group>
                      </Col>
                      <Col lg={12}>
                        <label>Degree Description</label>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Control
                            as="textarea"
                            placeholder="Degree Description"
                            rows={4}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </GenericModal>
                </Form>
              </Card.Body>
            </Card>
            <Card className="pb-4 border-0 professional-information">
              <Card.Body>
                <Form>
                  <Row>
                    <Col md={12} className="d-flex justify-content-between align-items-center">
                      <h2 className="fonttext">Specialization</h2>
                      <Button
                        className="primary-btn"
                        onClick={() => specializationSetShowModal(true)}
                      >
                        + Add Specialization
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} className="mt-3">
                      <MyDataTableSimple
                        tablePagination="false"
                        data={specializationData}
                        columns={specializationColumns}
                      />

                      <GenericModal
                        headerName="Add Speciality"
                        footerContent={
                          <div>
                            <button
                              className="footerbtn btn btn-default mr-2"
                              type="submit"
                            >
                              Add
                            </button>
                            <button
                              onClick={() => {
                                specializationSetShowModal(false);
                              }}
                              className="footerbtn1 btn btn-default"
                            >
                              Cancel
                            </button>
                          </div>
                        }
                        show={specializationShowModal}
                        size="lg"
                        onHide={() => specializationSetShowModal(false)}
                      >
                        <Row>
                          <Col md={4} lg={4}>
                            <label>Speciality</label>
                            <Form.Group>
                              <select
                                className="form-control"
                                aria-label="speciality"
                              >
                                <option value="1">Child</option>
                                <option value="2">Surgical</option>
                              </select>
                            </Form.Group>
                          </Col>
                          <Col md={8} lg={8}>
                            <label>Select Speciality</label>
                            <Form.Group>
                              <select
                                className="form-control"
                                aria-label="select-speciality"
                              >
                                <option value="1">Ear</option>
                                <option value="2">Lungs</option>
                              </select>
                            </Form.Group>
                          </Col>
                        </Row>
                      </GenericModal>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
            <Card className="pb-4 border-0 professional-information">
              <Card.Body>
                <Row>
                  <Col md={12} className="d-flex justify-content-between align-items-center">
                    <h2 className="fonttext mb-0">Skills</h2>
                    <Button
                      className="primary-btn"
                      onClick={() => skillSetShowModal(true)}
                    >
                      + Add Skill
                    </Button>
                  </Col>
                </Row>

                <GenericModal
                  headerName="Add Skill"
                  footerContent={
                    <div>
                      <button
                        className="footerbtn btn btn-default mr-2"
                        type="submit"
                      >
                        Add
                      </button>
                      <button
                        onClick={() => {
                          skillSetShowModal(false);
                        }}
                        className="footerbtn1 btn btn-default"
                      >
                        Cancel
                      </button>
                    </div>
                  }
                  show={skillShowModal}
                  size="lg"
                  onHide={() => skillSetShowModal(false)}
                >
                  <Row>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Skill Name</label>
                      <Form.Group>
                        <Form.Control type="text" placeholder="Skill Name" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Institute Name</label>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="Institute Name"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Supervisor Contact No.</label>
                      <PhoneInput
                        inputClass="react-phone-input-custom"
                        country="pk"
                        inputProps={{
                          name: "phone",
                          required: true,
                          autoFocus: true,
                        }}
                      />
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Education Type</label>
                      <Form.Group>
                        <select
                          className="form-control"
                          aria-label="educationType"
                        >
                          <option value="1">Formal</option>
                          <option value="2">In Formal</option>
                        </select>
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Start Date</label>
                      <Form.Group>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>End Date</label>
                      <Form.Group>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Country</label>
                      <Form.Group>
                        <select className="form-control" aria-label="country">
                          <option value="1">Australia</option>
                          <option value="2">USA</option>
                        </select>
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>State</label>
                      <Form.Group>
                        <select className="form-control" aria-label="state">
                          <option value="1">Washington</option>
                          <option value="2">Florida</option>
                        </select>
                      </Form.Group>
                    </Col>

                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>City</label>
                      <Form.Group>
                        <select className="form-control" aria-label="city">
                          <option value="1">New York</option>
                          <option value="2">Chicago</option>
                        </select>
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <label>Degree Description</label>
                      <Form.Group>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          placeholder="Degree Description"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <label>Address</label>
                      <Form.Group>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          placeholder="Address"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </GenericModal>
                <Row>
                  <Col lg={12} className="mt-3">
                    <MyDataTableSimple
                      tablePagination="false"
                      data={skillsData}
                      columns={skillsColumns}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="pb-4 border-0 professional-information">
              <Card.Body>
                <Row>
                  <Col md={12} className="d-flex justify-content-between align-items-center">
                    <h2 className="fonttext mb-0">Work Experience</h2>
                    <Button
                      className="primary-btn"
                      onClick={() => experienceSetShowModal(true)}
                    >
                      + Add Work
                    </Button>
                  </Col>
                </Row>

                <GenericModal
                  headerName="Add Experience"
                  footerContent={
                    <div>
                      <button
                        className="footerbtn btn btn-default mr-2"
                        type="submit"
                      >
                        Add
                      </button>
                      <button
                        onClick={() => {
                          experienceSetShowModal(false);
                        }}
                        className="footerbtn1 btn btn-default"
                      >
                        Cancel
                      </button>
                    </div>
                  }
                  show={experienceShowModal}
                  size="lg"
                  onHide={() => experienceSetShowModal(false)}
                >
                  <Row>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Job Title</label>
                      <Form.Group>
                        <Form.Control type="text" placeholder="Job Title" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Organization Name</label>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="Organization Name"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Supervisor Name</label>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="Supervisor Name"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Supervisor Contact No.</label>
                      <PhoneInput
                        inputClass="react-phone-input-custom"
                        country="pk"
                        inputProps={{
                          name: "phone",
                          required: true,
                          autoFocus: true,
                        }}
                      />
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Fax</label>
                      <Form.Group>
                        <Form.Control type="tel" placeholder="Fax" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Start Date</label>
                      <Form.Group>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>End Date</label>
                      <Form.Group>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Country</label>
                      <Form.Group>
                        <select className="form-control" aria-label="country">
                          <option value="1">Australia</option>
                          <option value="2">USA</option>
                        </select>
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>State</label>
                      <Form.Group>
                        <select className="form-control" aria-label="state">
                          <option value="1">Washington</option>
                          <option value="2">Florida</option>
                        </select>
                      </Form.Group>
                    </Col>

                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>City</label>
                      <Form.Group>
                        <select className="form-control" aria-label="city">
                          <option value="1">New York</option>
                          <option value="2">Chicago</option>
                        </select>
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4} className="">
                      <p className="mb-3" name="degreeCompleted">
                        Currently Working?
                      </p>
                      <Form.Check
                        inline
                        label="Yes"
                        type="radio"
                        name="degreeCompleted"
                      />
                      <Form.Check
                        inline
                        label="No"
                        type="radio"
                        name="degreeCompleted"
                      />
                    </Col>
                    <Col lg={12}>
                      <label>Address</label>
                      <Form.Group>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          placeholder="Address"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </GenericModal>
                <Row>
                  <Col lg={12} className="mt-3">
                    <MyDataTableSimple
                      tablePagination="false"
                      data={workExperienceData}
                      columns={workExperienceColumns}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="pb-4 border-0 professional-information">
              <Card.Body>
                <Row>
                  <Col md={12} className="d-flex justify-content-between align-items-center">
                    <h2 className="fonttext mb-0">References</h2>
                    <Button
                      className="primary-btn"
                      onClick={() => referenceSetShowModal(true)}
                    >
                      + Add Reference
                    </Button>
                  </Col>
                </Row>

                <GenericModal
                  headerName="Add Reference"
                  footerContent={
                    <div>
                      <button
                        className="footerbtn btn btn-default mr-2"
                        type="submit"
                      >
                        Add
                      </button>
                      <button
                        onClick={() => {
                          referenceSetShowModal(false);
                        }}
                        className="footerbtn1 btn btn-default"
                      >
                        Cancel
                      </button>
                    </div>
                  }
                  show={referenceShowModal}
                  size="lg"
                  onHide={() => referenceSetShowModal(false)}
                >
                  <Row>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Name</label>
                      <Form.Group>
                        <Form.Control type="text" placeholder="Name" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Phone Number</label>
                      <PhoneInput
                        inputClass="react-phone-input-custom"
                        country="pk"
                        inputProps={{
                          name: "phone",
                          required: true,
                          autoFocus: true,
                        }}
                      />
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Fax</label>
                      <Form.Group>
                        <Form.Control type="tel" placeholder="Fax" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Email</label>
                      <Form.Group>
                        <Form.Control type="email" placeholder="Email" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Relation</label>
                      <Form.Group>
                        <select className="form-control" aria-label="relation">
                          <option value="1">Father</option>
                          <option value="2">Brother</option>
                          <option value="3">Colleague</option>
                        </select>
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Duration Associated</label>
                      <Form.Group>
                        <select className="form-control" aria-label="relation">
                          <option value="1">1 Month</option>
                          <option value="2">3 Months</option>
                          <option value="3">1 Year</option>
                          <option value="3">1+ Year</option>
                        </select>
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <label>Address</label>
                      <Form.Group>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          placeholder="Address"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </GenericModal>
                <Row>
                  <Col lg={12} className="mt-3">
                    <MyDataTableSimple
                      tablePagination="false"
                      data={referencesData}
                      columns={referencesColumns}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="pb-4 border-0 professional-information">
              <Card.Body>
                <Row>
                  <Col md={12} className="d-flex justify-content-between align-items-center">
                    <h2 className="fonttext mb-0">Licenses or Certification</h2>
                    <Button
                      className="primary-btn"
                      onClick={() => {
                        certificationSetShowModal(true);
                      }}
                    >
                      + Add Certificate{" "}
                    </Button>
                  </Col>
                </Row>

                <GenericModal
                  headerName="Add Reference"
                  footerContent={
                    <div>
                      <button
                        className="footerbtn btn btn-default mr-2"
                        type="submit"
                      >
                        Add
                      </button>
                      <button
                        onClick={() => {
                          certificationSetShowModal(false);
                        }}
                        className="footerbtn1 btn btn-default"
                      >
                        Cancel
                      </button>
                    </div>
                  }
                  show={certificationShowModal}
                  size="lg"
                  onHide={() => certificationSetShowModal(false)}
                >
                  <Row>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>License or Certificate No.</label>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="License or Certificate No."
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>License or Certificate Type</label>
                      <Form.Group>
                        <select className="form-control">
                          <option></option>
                          <option></option>
                          <option></option>
                        </select>
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Start Date</label>
                      <Form.Group>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>End Date</label>
                      <Form.Group>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Country</label>
                      <Form.Group>
                        <select className="form-control" aria-label="country">
                          <option value="1">Australia</option>
                          <option value="2">USA</option>
                        </select>
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>State</label>
                      <Form.Group>
                        <select className="form-control" aria-label="state">
                          <option value="1">Washington</option>
                          <option value="2">Florida</option>
                        </select>
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>City</label>
                      <Form.Group>
                        <select className="form-control" aria-label="city">
                          <option value="1">New York</option>
                          <option value="2">Chicago</option>
                        </select>
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <label>Degree Description</label>
                      <Form.Group>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          placeholder="Degree Description"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </GenericModal>
                <Row>
                  <Col lg={12} className="mt-3">
                    <MyDataTableSimple
                      tablePagination="false"
                      data={licenseData}
                      columns={licenseColumns}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="pb-4 border-0 professional-information">
              <Card.Body>
                <Row>
                  <Col md={12} className="d-flex justify-content-between align-items-center">
                    <h2 className="fonttext mb-0">Memberships</h2>
                    <Button
                      className="primary-btn"
                      onClick={() => {
                        membershipSetShowModal(true);
                      }}
                    >
                      + Add Membership
                    </Button>
                  </Col>
                </Row>

                <GenericModal
                  headerName="Add Membership"
                  footerContent={
                    <div>
                      <button
                        className="footerbtn btn btn-default mr-2"
                        type="submit"
                      >
                        Add
                      </button>
                      <button
                        onClick={() => {
                          membershipSetShowModal(false);
                        }}
                        className="footerbtn1 btn btn-default"
                      >
                        Cancel
                      </button>
                    </div>
                  }
                  show={membershipShowModal}
                  size="lg"
                  onHide={() => membershipSetShowModal(false)}
                >
                  <Row>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Membership</label>
                      <Form.Group>
                        <Form.Control type="text" placeholder="Membership" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Start Date</label>
                      <Form.Group>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>End Date</label>
                      <Form.Group>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Country</label>
                      <Form.Group>
                        <select className="form-control" aria-label="country">
                          <option value="1">Australia</option>
                          <option value="2">USA</option>
                        </select>
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>State</label>
                      <Form.Group>
                        <select className="form-control" aria-label="state">
                          <option value="1">Washington</option>
                          <option value="2">Florida</option>
                        </select>
                      </Form.Group>
                    </Col>

                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>City</label>
                      <Form.Group>
                        <select className="form-control" aria-label="city">
                          <option value="1">New York</option>
                          <option value="2">Chicago</option>
                        </select>
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4} className="">
                      <p className="mb-3" name="degreeCompleted">
                        Currently Member?
                      </p>
                      <Form.Check
                        inline
                        label="Yes"
                        type="radio"
                        name="degreeCompleted"
                      />
                      <Form.Check
                        inline
                        label="No"
                        type="radio"
                        name="degreeCompleted"
                      />
                    </Col>
                  </Row>
                </GenericModal>
                <Row>
                  <Col lg={12} className="mt-3">
                    <MyDataTableSimple
                      tablePagination="false"
                      data={membershipData}
                      columns={membershipColumns}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="pb-4 border-0 professional-information">
              <Card.Body>
                <Row>
                  <Col md={12} className="d-flex justify-content-between align-items-center">
                    <h2 className="fonttext mb-0">Awards</h2>
                    <Button
                      className="primary-btn"
                      onClick={() => {
                        awardSetShowModal(true);
                      }}
                    >
                      + Add Awards
                    </Button>
                  </Col>
                </Row>

                <GenericModal
                  headerName="Add Award"
                  footerContent={
                    <div>
                      <button
                        className="footerbtn btn btn-default mr-2"
                        type="submit"
                      >
                        Add
                      </button>
                      <button
                        onClick={() => {
                          awardSetShowModal(false);
                        }}
                        className="footerbtn1 btn btn-default"
                      >
                        Cancel
                      </button>
                    </div>
                  }
                  show={awardShowModal}
                  size="lg"
                  onHide={() => awardSetShowModal(false)}
                >
                  <Row>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Title</label>
                      <Form.Group>
                        <Form.Control type="text" placeholder="Title" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Institute</label>
                      <Form.Group>
                        <Form.Control type="text" placeholder="Institute" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Award Date</label>
                      <Form.Group>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>Country</label>
                      <Form.Group>
                        <select className="form-control" aria-label="country">
                          <option value="1">Australia</option>
                          <option value="2">USA</option>
                        </select>
                      </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>State</label>
                      <Form.Group>
                        <select className="form-control" aria-label="state">
                          <option value="1">Washington</option>
                          <option value="2">Florida</option>
                        </select>
                      </Form.Group>
                    </Col>

                    <Col sm={6} md={4} lg={4} xl={4}>
                      <label>City</label>
                      <Form.Group>
                        <select className="form-control" aria-label="city">
                          <option value="1">New York</option>
                          <option value="2">Chicago</option>
                        </select>
                      </Form.Group>
                    </Col>
                  </Row>
                </GenericModal>
                <Row>
                  <Col lg={12} className="mt-3">
                    <MyDataTableSimple
                      tablePagination="false"
                      data={awardData}
                      columns={awardColumns}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="pb-4 border-0 professional-information">
              <Card.Body>
                <Row>
                  <Col md={12} className="d-flex justify-content-between align-items-center">
                    <h2 className="fonttext mb-0">Social Media</h2>
                    <Button
                      className="primary-btn"
                      onClick={() => {
                        socialMediaSetShowModal(true);
                      }}
                    >
                      + Add Social Media
                    </Button>
                  </Col>
                </Row>

                <GenericModal
                  headerName="Add Social Media"
                  footerContent={
                    <div>
                      <button
                        className="footerbtn btn btn-default mr-2"
                        type="submit"
                      >
                        Add
                      </button>
                      <button
                        onClick={() => {
                          socialMediaSetShowModal(false);
                        }}
                        className="footerbtn1 btn btn-default"
                      >
                        Cancel
                      </button>
                    </div>
                  }
                  show={socialMediaShowModal}
                  size="lg"
                  onHide={() => socialMediaSetShowModal(false)}
                >
                  <Row>
                    <Col sm={4} md={4} lg={4}>
                      <label>Name</label>
                      <Form.Group>
                        <Form.Control type="text" placeholder="Name" />
                      </Form.Group>
                    </Col>
                    <Col sm={8} md={8} lg={8}>
                      <label>URL</label>
                      <Form.Group>
                        <Form.Control type="text" placeholder="URL" />
                      </Form.Group>
                    </Col>
                  </Row>
                </GenericModal>
                <Row>
                  <Col lg={12} className="mt-3">
                    <MyDataTableSimple
                      tablePagination="false"
                      data={socialProducts}
                      columns={socialColumns}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </main>
  );
};

export default ProfessionalInformation;
