import React from "react";
import { Button, Card, Col, Image, Row, Table } from "react-bootstrap";
import MyCalender from "../../../assets/genericComponents/MyCalender";
import { IMAGES } from "../../../assets/images";

function Dashboard() {
  const appointments = [
    {
      id: "1",
      dp: (
        <Image
          src={IMAGES.MESSAGESPROFILEIMAGE}
          className="avatar-border p-auto m-auto"
        />
      ),
      patientName: "Jerry",
      date: "12/10/2015",
      time: "12:12pm",
      mode: "tele",
    },
    {
      id: "2",
      dp: (
        <Image
          src={IMAGES.MESSAGESPROFILEIMAGE}
          className="avatar-border p-auto m-auto"
        />
      ),
      patientName: "John",
      date: "12/10/2015",
      time: "12:12pm",
      mode: "tele",
    },
    {
      id: "3",
      dp: (
        <Image
          src={IMAGES.MESSAGESPROFILEIMAGE}
          className="avatar-border p-auto m-auto"
        />
      ),
      patientName: "Phantom",
      date: "12/10/2015",
      time: "12:12pm",
      mode: "tele",
    },
    {
      id: "4",
      dp: (
        <Image
          src={IMAGES.MESSAGESPROFILEIMAGE}
          className="avatar-border p-auto m-auto"
        />
      ),
      patientName: "FasiUllah",
      date: "12/10/2015",
      time: "12:12pm",
      mode: "tele",
    },
    {
      id: "5",
      dp: (
        <Image
          src={IMAGES.MESSAGESPROFILEIMAGE}
          className="avatar-border p-auto m-auto"
        />
      ),
      patientName: "Jerry",
      date: "12/10/2015",
      time: "12:12pm",
      mode: "tele",
    },
    {
      id: "6",
      dp: (
        <Image
          src={IMAGES.MESSAGESPROFILEIMAGE}
          className="avatar-border p-auto m-auto"
        />
      ),
      patientName: "Jerry",
      date: "12/10/2015",
      time: "12:12pm",
      mode: "tele",
    },
  ];
  const messages = [
    {
      dp: (
        <Image
          src={IMAGES.MESSAGESPROFILEIMAGE}
          className="avatar-border mt-3"
        />
      ),
      name: <div className="mt-3">Dr. Watson Johnson</div>,
      viewBtn: <Button className="card-basic-text mt-3">View</Button>,
    },
    {
      dp: (
        <Image
          src={IMAGES.MESSAGESPROFILEIMAGE}
          className="avatar-border p-auto m-auto"
        />
      ),
      name: "Dr. Watson Johnson",
      viewBtn: <Button className="card-basic-text">View</Button>,
    },

    {
      dp: (
        <Image
          src={IMAGES.MESSAGESPROFILEIMAGE}
          className="avatar-border p-auto m-auto"
        />
      ),
      name: "Dr. Watson Johnson",
      viewBtn: <Button className="card-basic-text">View</Button>,
    },
    {
      dp: (
        <Image
          src={IMAGES.MESSAGESPROFILEIMAGE}
          className="avatar-border p-auto m-auto"
        />
      ),
      name: "Dr. Watson Johnson",
      viewBtn: <Button className="card-basic-text">View</Button>,
    },
    {
      dp: (
        <Image
          src={IMAGES.MESSAGESPROFILEIMAGE}
          className="avatar-border p-auto m-auto"
        />
      ),
      name: "Dr. Watson Johnson",
      viewBtn: <Button className="card-basic-text">View</Button>,
    },
    {
      dp: (
        <Image
          src={IMAGES.MESSAGESPROFILEIMAGE}
          className="avatar-border p-auto m-auto"
        />
      ),
      name: "Dr. Watson Johnson",
      viewBtn: <Button className="card-basic-text">View</Button>,
    },
    {
      dp: (
        <Image
          src={IMAGES.MESSAGESPROFILEIMAGE}
          className="avatar-border p-auto m-auto"
        />
      ),
      name: "John",
      viewBtn: <Button className="card-basic-text">View</Button>,
    },
    {
      dp: (
        <Image
          src={IMAGES.MESSAGESPROFILEIMAGE}
          className="avatar-border p-auto m-auto"
        />
      ),
      name: "John",
      viewBtn: <Button className="card-basic-text">View</Button>,
    },
  ];
  const eventList = [
    { title: "Pakistan day", date: "2022-03-23" },
    { title: "ReactJs", date: "2022-03-16" },
  ];
  return (
    <Row className="doctor-dashboard">
      <Col xl={7} g={12} md={12} sm={12} xs={12}>
        <Card className="doctor-welcome-content">
          <Row>
            <Col
              lg={6}
              md={12}
              sm={12}
              xs={12}
              className="d-flex flex-column align-items-start justify-content-center py-4 pl-3"
            >
              <h5 id="doctor-welcome-text">Welcome Back</h5>
              <h3 id="doctor-name">Dr.Emily Jones</h3>
              <div style={{ fontSize: "13px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt aliqua.
              </div>
            </Col>
            <Col
              lg={6}
              md={12}
              sm={12}
              xs={12}
              className="d-flex align-items-start align-items-xs-center justify-content-center justify-content-xs-center doc-db-welcome-col-bg-img"
            >
              <Image
                src={IMAGES.DASHBOARDDOCOTORSIMAGE}
                className="dashboard-doctor-img"
              />
            </Col>
          </Row>
        </Card>
        <Card className="cards-styling join-room-doctor-display">
          <Card.Header className="card-headers d-flex justify-content-between align-items-center">
            Join Room
          </Card.Header>
          <Card.Body>
            <Table responsive>
              <tbody>
                <tr>
                  <td>
                    <h4 className="card-main-text">Gregory James</h4>
                    <div
                      className="card-basic-text p-0"
                      style={{ color: "black" }}
                    >
                      Your visit is about to start in 3 min and 20 sec.
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Button className="card-basic-text">View</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <div className="mt-5">
          <MyCalender eventList={eventList} />
        </div>
      </Col>
      <Col xl={5} lg={12} md={12} sm={12} xs={12}>
        <Card className="cards-styling join-room-doctor-not-display">
          <Card.Header className="card-headers d-flex justify-content-between align-items-center">
            Join Room
          </Card.Header>
          <Card.Body>
            <Table responsive>
              <tbody>
                <tr>
                  <td>
                    <h4 className="card-main-text">Gregory James</h4>
                    <div
                      className="card-basic-text p-0"
                      style={{ color: "black" }}
                    >
                      Your visit is about to start in 3 min and 20 sec.
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle", width: "15%" }}>
                    <Button className="card-basic-text">View</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
            {/* <Row className="align-items-center mb-2">
              <Col md={9} xs={8} sm={9}>
                <h4 className="card-main-text">Gregory James</h4>
                <div className="card-basic-text p-0" style={{ color: "black" }}>
                  Your visit is about to start in 3 min and 20 sec.
                </div>
              </Col>
              <Col
                md={3}
                xs={4}
                sm={3}
                className="d-flex justify-content-center"
              >
                <Button className="card-basic-text">View</Button>
              </Col>
            </Row> */}
          </Card.Body>
        </Card>
        <Card
          className="cards-styling doctor-appointments"
          style={{ height: "348px" }}
        >
          <Card.Header className="card-headers d-flex justify-content-between align-items-center">
            <div>Upcoming Appointments</div>
            <div className="d-flex align-items-center">
              {/* <Image src={IMAGES.CALENDERICON} /> */}
            </div>
          </Card.Header>
          <div className="card-scrollbar">
            <Card.Body>
              <Table className="doctor-dashboard-table" responsive>
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Mode</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((item, key) => {
                    return (
                      <tr>
                        <td>{item.dp}</td>
                        <td>{item.patientName}</td>
                        <td>{item.date}</td>
                        <td>{item.time}</td>
                        <td>{item.mode}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </div>
        </Card>
        <Card className="cards-styling doctor-messages">
          <Card.Header className="card-headers d-flex justify-content-between align-items-center ">
            My Messages
            {/* <Image src={IMAGES.UNREADMESSAGESICON} /> */}
          </Card.Header>
          <div className="card-scrollbar">
            <Card.Body className="my-1">
              <Table className="doctor-dashboard-table" responsive>
                <tbody>
                  {messages.map((item, key) => {
                    return (
                      <tr>
                        <td style={{ width: "15%" }}>{item.dp}</td>
                        <td style={{ width: "70%" }}>
                          <p className="text-left mb-0 card-main-text">
                            {item.name}
                          </p>
                        </td>
                        <td style={{ width: "15%" }}>{item.viewBtn}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              {/* <Row className="align-items-center mb-4">
                <Col md={1} xs={2} sm={2}>
                  <Image
                    src={IMAGES.PATIENTPROFILEIMAGE}
                    className="avatar-border w-100 p-0"
                  />
                </Col>
                <Col md={8} xs={7} sm={7}>
                  <h4 className="card-main-text">Dr. Rachel</h4>
                </Col>
                <Col
                  md={3}
                  xs={3}
                  sm={3}
                  className="p-0 d-flex justify-content-center"
                >
                  <Button className="card-basic-text">View</Button>
                </Col>
              </Row> */}
            </Card.Body>
          </div>
        </Card>
      </Col>
    </Row>
  );
}
export default Dashboard;
