import React from "react";
import { Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import { GenericModal } from "../../../assets/genericComponents/GenericModal";
// import MyCalender from "../../../assets/genericComponents/MyCalender";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
const viewportHeight = 150;
const CreateSlots = () => {
  const [CreateSlotsModalShow, CreateSlotsSetModalShow] = React.useState(false);
  return (
    <div style={{ minHeight: `calc(100vh - ${viewportHeight}px` }}>
      <Row className="justify-content-end">
        <button
          className="primary-btn"
          onClick={() => CreateSlotsSetModalShow(true)}
        >
          <small>+ Create Appointments</small>
        </button>
      </Row>
      <Row className="mt-3 bg-white">
        <Col xl={12} lg={12} className="mt-3">
          {/* <MyCalender /> */}
          <FullCalendar
            plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth"
            weekends={true}
            events={[
              { title: "event 1", date: "2019-04-01" },
              { title: "event 2", date: "2019-04-02" },
            ]}
          />
        </Col>
      </Row>
      <GenericModal
        headerName="Create Appointment Slots"
        show={CreateSlotsModalShow}
        size="lg"
        onHide={() => CreateSlotsSetModalShow(false)}
      >
        <Form>
          <Tabs
            defaultActiveKey="pulseOximeter"
            id="uncontrolled-tab-example"
            className="justify-content-start border-0 nav-justified"
          >
            <Tab
              eventKey="pulseOximeter"
              title="Single/Multiple Day Appointment"
              className="mt-1"
            >
              <div className="text-right my-4">
                <p className="px-2 font-weight-bolder">
                  Fee Amount:
                  <span className="bg-success text-white px-4 rounded mx-2">
                    10
                  </span>
                </p>
              </div>
              <Row className="mb-3">
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Label className="font-weight-bold">Date</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Label className="font-weight-bold">
                      Start Time
                    </Form.Label>
                    <Form.Control type="time" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Label className="font-weight-bold">
                      End Time
                    </Form.Label>
                    <Form.Control type="time" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Label className="font-weight-bold">
                      Duration
                    </Form.Label>
                    <Form.Control type="number" placeholder="Duration" />
                  </Form.Group>
                </Col>
                <Col lg={12}>
                  <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Label className="font-weight-bold">Notes</Form.Label>
                    <textarea className="form-control" rows={3} />
                  </Form.Group>
                </Col>
              </Row>
            </Tab>
            <Tab
              eventKey="bloodPressure"
              title="Monthly Appointment"
              className="mt-1"
            >
              <div className="text-right my-4">
                <p className="px-2 font-weight-bolder">
                  Fee Amount:
                  <span className="bg-success text-white px-4 rounded mx-2">
                    10
                  </span>
                </p>
              </div>
              <Row className="mb-3">
                <Col lg={6}>
                  <Row>
                    <Col lg={12}>
                      <h4 className="mb-4">Range of Recurrence</h4>
                    </Col>

                    <Col lg={6}>
                      <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label className="font-weight-bold">
                          Start Date
                        </Form.Label>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label className="font-weight-bold">
                          End Date
                        </Form.Label>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
                <Col lg={6}>
                  <Row>
                    <Col lg={12}>
                      <h4 className="mb-4">Appointment Time</h4>
                    </Col>
                    <Col lg={4}>
                      <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label className="font-weight-bold">
                          Start Time
                        </Form.Label>
                        <Form.Control type="time" />
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label className="font-weight-bold">
                          End Time
                        </Form.Label>
                        <Form.Control type="time" />
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label className="font-weight-bold">
                          Duration
                        </Form.Label>
                        <Form.Control type="number" placeholder="Duration" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
                <Col lg={12} className="px-4">
                  <h4>Recurrence Pattern</h4>
                  <Form.Check
                    inline
                    label="Monday"
                    type="checkbox"
                    className="px-1"
                  />
                  <Form.Check
                    inline
                    label="Tuesday"
                    type="checkbox"
                    className="px-1"
                  />
                  <Form.Check
                    inline
                    label="Wednesday"
                    type="checkbox"
                    className="px-1"
                  />
                  <Form.Check
                    inline
                    label="Thursday"
                    type="checkbox"
                    className="px-1"
                  />
                  <Form.Check
                    inline
                    label="Friday"
                    type="checkbox"
                    className="px-1"
                  />
                  <Form.Check
                    inline
                    label="Saturday"
                    type="checkbox"
                    className="px-1"
                  />
                  <Form.Check
                    inline
                    label="Sunday"
                    type="checkbox"
                    className="px-1"
                  />
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Form>
      </GenericModal>
    </div>
  );
};
export default CreateSlots;
