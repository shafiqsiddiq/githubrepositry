import React, { useState, useRef, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const MyCalender = (props) => {
  const [calendarTitle, setCalendarTitle] = useState("");
  const calenderTitleChangeRef = useRef();

  const d = new Date();
  const currentMonth = d.toLocaleString("default", { month: "long" });
  const todayDate = d.getDate();

  useEffect(() => {
    setCalendarTitle(
      calenderTitleChangeRef.current.getApi().currentDataManager.data.viewTitle
    );
    document.title = "DASHBOARD || INNOVA";
  }, []);

  const nextMonth = () => {
    calenderTitleChangeRef.current.getApi().next();
    setCalendarTitle(
      calenderTitleChangeRef.current.getApi().currentDataManager.data.viewTitle
    );
  };

  const prevMonth = () => {
    calenderTitleChangeRef.current.getApi().prev();
    setCalendarTitle(
      calenderTitleChangeRef.current.getApi().currentDataManager.data.viewTitle
    );
  };
  const previousYear = () => {
    calenderTitleChangeRef.current.getApi().prevYear();
    setCalendarTitle(
      calenderTitleChangeRef.current.getApi().currentDataManager.data.viewTitle
    );
  };
  const nextYear = () => {
    calenderTitleChangeRef.current.getApi().nextYear();

    setCalendarTitle(
      calenderTitleChangeRef.current.getApi().currentDataManager.data.viewTitle
    );
  };
  return (
    <Card className="cards-styling generic-calendar">
      <Card.Header className="card-headers d-flex justify-content-between align-items-center">
        <Col lg={6} md={6} sm={6} xs={6}>
          My Calendar
        </Col>
        <Col
          lg={5}
          md={4}
          sm={4}
          xs={4}
          className="d-flex align-items-center justify-content-end ml-5"
        >
          <FaLessThan
            fill="white"
            className="mr-3 p-1"
            onClick={previousYear}
          />
          {calendarTitle.split(" ")[1]}
          <FaGreaterThan
            fill="white"
            className="ml-3 p-1 "
            onClick={nextYear}
          />
        </Col>
        <Col lg={1} md={1} sm={1} xs={1}></Col>
      </Card.Header>
      <Card.Body className="my-3">
        <Row>
          <Col lg={3} md={12} sm={12} className="p-0">
            <Row className="justify-content-center">
              <div className="current-month font-weight-bolder">
                <FaLessThan
                  fill="white"
                  className="p-1 mr-2 less-greater-icon-bg"
                  onClick={prevMonth}
                />
                {calendarTitle.split(" ")[0]}
                <FaGreaterThan
                  fill="white"
                  className="p-1 ml-2 less-greater-icon-bg"
                  onClick={nextMonth}
                />
              </div>
            </Row>
            <Row className="align-items-center justify-content-center my-3">
              <div className="calender-today-date text-center">
                <div className="mt-4">
                  {todayDate}
                  <div className="current-month text-center">
                    {currentMonth}
                  </div>
                </div>
              </div>
            </Row>
          </Col>
          <Col lg={9} md={12} sm={12}>
            <FullCalendar
              ref={calenderTitleChangeRef}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              // ialView="dayGridMonth"
              height="430px"
              width="100%"
              windowResizeDelay="50"
              dateClick={() => console.log("dateClick")}
              select={() => console.log("select")}
              events={props.eventList}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default MyCalender;
