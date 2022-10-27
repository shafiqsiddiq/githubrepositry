import React, { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Dropdown,
  DropdownButton,
  Image,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { IMAGES } from "../../../assets/images";
import { PATH } from "../../../config";
function Dashboard() {
  useEffect(() => {
    document.title = "DASHBOARD || INNOVA";
  }, []);
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  var today = new Date();

  var date =
    today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
  return (
    <>
      <div className="dashboard-top-section">
        <Image
          src={IMAGES.DASHBOARDDOCTORTOPIMAGE}
          className="dashboard-overlay-img"
        />
        <Image
          src={IMAGES.PATIENTDASHBOARDDOCTOR}
          className="w-100 doctor-dashboard-top-img"
        ></Image>
        <h1>
          Welcome,<br></br> Gregory
        </h1>
        <Row className="top-section-btn d-flex text-center">
          <Col>
            <Card className="btn-cards">
              <Link to={PATH.PATIENT_SEARCHDOCTOR}>
                <Image src={IMAGES.FINDADOCTOR} className="patient-top-btn" />
              </Link>
              Find a Doctor
            </Card>
          </Col>
          <Col>
            <Card className="btn-cards mx-2">
              <Link to={PATH.PATIENT_APPOINTMENT}>
                <Image src={IMAGES.APPOINTMENT} className="patient-top-btn" />
              </Link>
              Appointment
            </Card>
          </Col>
          <Col>
            <Card className="btn-cards">
              <Link to="/Patient/ChatScreen">
                <Image src={IMAGES.VIEWMESSAGE} className="patient-top-btn" />
              </Link>
              View Messages
            </Card>
          </Col>
        </Row>
      </div>
      <Row>
        <Col lg={6} md={12} xs={12} sm={12}>
          <Card className="cards-styling" style={{ height: "195px" }}>
            <Card.Header className="card-headers d-flex justify-content-between align-items-center ">
              Unread Messages
              {/* <Image src={IMAGES.UNREADMESSAGESICON} /> */}
            </Card.Header>
            <Card.Body>
              <Row className="align-items-center mb-2">
                <Col md={1} xs={2} sm={1}>
                  <Image
                    src={IMAGES.DOCTORPROFILEIMAGE}
                    className="avatar-border w-100"
                  />
                </Col>
                <Col md={9} xs={7} sm={8}>
                  <h4 className="card-main-text m-0">Dr. Rachel</h4>
                  <div
                    className="card-basic-text p-0"
                    style={{ color: "black" }}
                  >
                    we are here to welcome you.
                  </div>
                </Col>
                <Col md={2} xs={3} sm={3} className="p-0">
                  <Button className="card-basic-text w-75">View</Button>
                </Col>
              </Row>
              <Row className="align-items-center mb-2 mt-3">
                <Col md={1} xs={2} sm={1}>
                  <Image
                    src={IMAGES.DOCTORPROFILEIMAGE}
                    className="avatar-border w-100"
                  />
                </Col>
                <Col md={9} xs={7} sm={8}>
                  <h4 className="card-main-text m-0">Dr. Rachel</h4>
                  <div
                    className="card-basic-text p-0"
                    style={{ color: "black" }}
                  >
                    we are here to welcome you.
                  </div>
                </Col>
                <Col md={2} xs={3} sm={3} className="p-0">
                  <Button className="card-basic-text w-75">View</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="cards-styling" style={{ height: "280px" }}>
            <Card.Header className="card-headers d-flex justify-content-between align-items-center ">
              Next Appointments
              {/* <Image src={IMAGES.CALENDERICON} /> */}
            </Card.Header>
            <Card.Body>
              <Row className="align-items-center mb-2">
                <Table className="table-borderless table-sm">
                  <thead className="card-main-text">
                    <tr style={{ borderBottom: "1px solid #909090" }}>
                      <th>Date</th>
                      <th>Provider</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody className="card-basic-text">
                    <tr>
                      <td>
                        {date}
                        <br />
                        {formatAMPM(new Date())}
                      </td>
                      <td>
                        mogdalena <br />
                        bentiey
                      </td>
                      <td>
                        Bitmore Surgical <br /> Parters LLC
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {date}
                        <br />
                        {formatAMPM(new Date())}
                      </td>
                      <td>
                        mogdalena <br />
                        bentiey
                      </td>
                      <td>
                        Bitmore Surgical <br /> Parters LLC
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {date}
                        <br />
                        {formatAMPM(new Date())}
                      </td>
                      <td>
                        mogdalena <br />
                        bentiey
                      </td>
                      <td>
                        Bitmore Surgical <br /> Parters LLC
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12} xs={12} sm={12}>
          <Card className="cards-styling" style={{ height: "194px" }}>
            <Card.Header className="card-headers d-flex justify-content-between align-items-center">
              <div>Medicine Reminder</div>
              <div className="d-flex align-items-center">
                <small className="card-basic-text" style={{ color: "white" }}>
                  Sort by
                </small>
                <DropdownButton
                  variant="outline-secondary"
                  title="Today"
                  id="input-group-dropdown-1"
                  className="mx-2"
                >
                  <Dropdown.Item>Action</Dropdown.Item>
                  <Dropdown.Item>Another action</Dropdown.Item>
                  <Dropdown.Item>Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Separated link</Dropdown.Item>
                </DropdownButton>
                {/* <Image src={IMAGES.REMINDERICON} /> */}
              </div>
            </Card.Header>
            <div className="card-scrollbar">
              <Card.Body>
                <Row className="align-items-center mb-2">
                  <Col md={1} xs={2} sm={1}>
                    <Image
                      src={IMAGES.PANADOL}
                      className="avatar-border w-100"
                    />
                  </Col>
                  <Col md={5} xs={5} sm={6} className="card-main-text">
                    Panadol Extra (65gm)
                  </Col>
                  <Col md={3} xs={2} sm={2} className="card-basic-text p-0">
                    1 Tablet
                  </Col>
                  <Col md={2} xs={2} sm={2} className="card-basic-text p-0">
                    {formatAMPM(new Date())}
                  </Col>
                  <Col
                    md={1}
                    xs={1}
                    sm={1}
                    className="d-flex justify-content-end"
                  >
                    <Image src={IMAGES.FALSEICON} className="true-false-btn" />
                  </Col>
                </Row>
                <Row className="align-items-center mb-2">
                  <Col md={1} xs={2} sm={1}>
                    <Image
                      src={IMAGES.ROSUVASTATIN}
                      className="avatar-border w-100"
                    />
                  </Col>
                  <Col md={5} xs={5} sm={6} className="card-main-text">
                    Panadol Extra (65gm)
                  </Col>
                  <Col md={3} xs={2} sm={2} className="card-basic-text p-0">
                    1 Tablet
                  </Col>
                  <Col md={2} xs={2} sm={2} className="card-basic-text p-0">
                    {formatAMPM(new Date())}
                  </Col>
                  <Col
                    md={1}
                    xs={1}
                    sm={1}
                    className="d-flex justify-content-end true-false-btn"
                  >
                    <Image src={IMAGES.TRUEICON} className="true-false-btn" />
                  </Col>
                </Row>
                <Row className="align-items-center mb-2">
                  <Col md={1} xs={2} sm={1}>
                    <Image
                      src={IMAGES.PANADOL}
                      className="avatar-border w-100"
                    />
                  </Col>
                  <Col md={5} xs={5} sm={6} className="card-main-text">
                    Panadol Extra (65gm)
                  </Col>
                  <Col md={3} xs={2} sm={2} className="card-basic-text p-0">
                    1 Tablet
                  </Col>
                  <Col md={2} xs={2} sm={2} className="card-basic-text p-0">
                    {formatAMPM(new Date())}
                  </Col>
                  <Col
                    md={1}
                    xs={1}
                    sm={1}
                    className="d-flex justify-content-end true-false-btn"
                  >
                    <Image src={IMAGES.TRUEICON} className="true-false-btn" />
                  </Col>
                </Row>
                <Row className="align-items-center mb-2">
                  <Col md={1} xs={2} sm={1}>
                    <Image
                      src={IMAGES.ROSUVASTATIN}
                      className="avatar-border w-100"
                    />
                  </Col>
                  <Col md={5} xs={5} sm={6} className="card-main-text">
                    Panadol Extra (65gm)
                  </Col>
                  <Col md={3} xs={2} sm={2} className="card-basic-text p-0">
                    1 Tablet
                  </Col>
                  <Col md={2} xs={2} sm={2} className="card-basic-text p-0">
                    {formatAMPM(new Date())}
                  </Col>
                  <Col
                    md={1}
                    xs={1}
                    sm={1}
                    className="d-flex justify-content-end true-false-btn"
                  >
                    <Image src={IMAGES.TRUEICON} className="true-false-btn" />
                  </Col>
                </Row>
              </Card.Body>
            </div>
          </Card>
          <Card className="cards-styling" style={{ height: "280px" }}>
            <Card.Header className="card-headers d-flex justify-content-between align-items-center ">
              Community Forum
              {/* <Image src={IMAGES.COMMUNITYICON} /> */}
            </Card.Header>
            <div className="card-scrollbar">
              <Card.Body>
                <Row className="align-items-center mb-2">
                  <Col md={1} xs={2} sm={1}>
                    <Image
                      src={IMAGES.COMMUNITYPROFILEIMAGEMALE}
                      className="avatar-border w-100"
                    />
                  </Col>
                  <Col md={9} sm={8} xs={8}>
                    <h4 className="card-main-text m-0">Member Name</h4>
                    <small className="card-basic-text p-0">
                      How are you? I think you will be in a goo health.
                    </small>
                  </Col>
                  <Col
                    md={2}
                    xs={2}
                    sm={3}
                    className="card-basic-text d-flex align-items-end justify-content-end"
                  >
                    {formatAMPM(new Date())}
                  </Col>
                </Row>
                <Row className="align-items-center mb-2">
                  <Col md={1} xs={2} sm={1}>
                    <Image
                      src={IMAGES.COMMUNITYPROFILEIMAGEFEMALE}
                      className="avatar-border w-100"
                    />
                  </Col>
                  <Col md={9} xs={8} sm={8}>
                    <h4 className="card-main-text m-0">Member Name</h4>
                    <small className="card-basic-text p-0">
                      How are you? I think you will be in a goo health.
                    </small>
                  </Col>
                  <Col
                    md={2}
                    xs={2}
                    sm={3}
                    className="card-basic-text d-flex align-items-end justify-content-end"
                  >
                    {formatAMPM(new Date())}
                  </Col>
                </Row>
                <Row className="align-items-center mb-2">
                  <Col md={1} xs={2} sm={1}>
                    <Image
                      src={IMAGES.COMMUNITYPROFILEIMAGEMALE}
                      className="avatar-border w-100"
                    />
                  </Col>
                  <Col md={9} sm={8} xs={8}>
                    <h4 className="card-main-text m-0">Member Name</h4>
                    <small className="card-basic-text p-0">
                      How are you? I think you will be in a goo health.
                    </small>
                  </Col>
                  <Col
                    md={2}
                    xs={2}
                    sm={3}
                    className="card-basic-text d-flex align-items-end justify-content-end"
                  >
                    {formatAMPM(new Date())}
                  </Col>
                </Row>
                <Row className="align-items-center mb-2">
                  <Col md={1} xs={2} sm={1}>
                    <Image
                      src={IMAGES.COMMUNITYPROFILEIMAGEFEMALE}
                      className="avatar-border w-100"
                    />
                  </Col>
                  <Col md={9} xs={8} sm={8}>
                    <h4 className="card-main-text m-0">Member Name</h4>
                    <small className="card-basic-text p-0">
                      How are you? I think you will be in a goo health.
                    </small>
                  </Col>
                  <Col
                    md={2}
                    xs={2}
                    sm={3}
                    className="card-basic-text d-flex align-items-end justify-content-end"
                  >
                    {formatAMPM(new Date())}
                  </Col>
                </Row>
              </Card.Body>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default Dashboard;
