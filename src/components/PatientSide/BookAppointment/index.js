import React, { useEffect } from "react";
import { Card, Col, Image, Row, Tab, Tabs } from "react-bootstrap";
import {
  FaRegComment,
  FaMapMarkedAlt,
  FaCreditCard,
  FaLongArrowAltRight,
} from "react-icons/fa";
import ReactStars from "react-stars";
import { IMAGES } from "../../../assets";

const BookAppointment = () => {
  useEffect(() => {
    document.title = " BOOK APPOINTMENT || INNOVA";
  }, []);

  const Overview = () => {
    return (
      <div>
        <div>
          <h4>About Me</h4>
          <p>I am a heart surgeon with experience of 2 years</p>
        </div>
        <div>
          <h4>Education</h4>
          <div className="experience">
            <ul className="experience-list">
              <li>
                <div className="experience-user">
                  <div className="before-circle"></div>
                </div>

                <div className="experience-content">
                  <div className="timeline-content">
                    <p className="name"> MBBS</p>
                    <span className="time">1999</span>
                  </div>
                </div>
                <div className="experience-user">
                  <div className="before-circle"></div>
                </div>
                <div className="experience-content">
                  <div className="timeline-content">
                    <p className="name"> MBBS</p>
                    <span className="time">1999</span>
                  </div>
                </div>
                <div className="experience-user">
                  <div className="before-circle"></div>
                </div>
                <div className="experience-content">
                  <div className="timeline-content">
                    <p className="name"> MBBS</p>
                    <span className="time">1999</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4>Work & Experience</h4>
          <div className="experience">
            <ul className="experience-list">
              <li>
                <div className="experience-user">
                  <div className="before-circle"></div>
                </div>

                <div className="experience-content">
                  <div className="timeline-content">
                    <p className="name">
                      {" "}
                      King Edward Medical University, Lahore
                    </p>
                    <span className="time">2000-2005 (5 years)</span>
                  </div>
                </div>
                <div className="experience-user">
                  <div className="before-circle"></div>
                </div>
                <div className="experience-content">
                  <div className="timeline-content">
                    <p className="name">
                      {" "}
                      Allama Iqbal Medical University, Lahore
                    </p>
                    <span className="time">2005-2010 (5 years) </span>
                  </div>
                </div>
                <div className="experience-user">
                  <div className="before-circle"></div>
                </div>
                <div className="experience-content">
                  <div className="timeline-content">
                    <p className="name"> General Hospital, Lahore</p>
                    <span className="time">2010-2015 (5 years) </span>
                  </div>
                </div>
                <div className="experience-user">
                  <div className="before-circle"></div>
                </div>
                <div className="experience-content">
                  <div className="timeline-content">
                    <p className="name"> Mayo Hospital, Lahore</p>
                    <span className="time">2015-2020 (5 years) </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4>Awards</h4>
          <div className="experience">
            <ul className="experience-list">
              <li>
                <div className="experience-user">
                  <div className="before-circle"></div>
                </div>
                <div className="experience-content">
                  <div className="timeline-content">
                    <p className="name"> The best Doctor, Lahore</p>
                    <span className="time">2018 </span>
                  </div>
                </div>
                <div className="experience-user">
                  <div className="before-circle"></div>
                </div>
                <div className="experience-content">
                  <div className="timeline-content">
                    <p className="name"> The best Doctor, Lahore</p>
                    <span className="time">2020 </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4>Specializations</h4>
          <span>
            <FaLongArrowAltRight /> Emergency medicine
          </span>
          <span className="ml-4">
            <FaLongArrowAltRight /> Dermatology
          </span>
          <span className="ml-4">
            <FaLongArrowAltRight /> Colon and rectal surgery
          </span>
          <span className="ml-4">
            <FaLongArrowAltRight /> Cardiovascular disease
          </span>
        </div>
      </div>
    );
  };
  const Review = () => {
    return (
      <div>
        <div className="row mt-2">
          <div className="col-md-2">
            <Image
              src={IMAGES.PATIENTPROFILEIMAGE}
              className="rounded-circle"
              width="45px"
              height="auto"
            />
          </div>
          <div className="col-md-6">
            <h6>Mubashir Hussan</h6>
            <p>Good One</p>
          </div>
          <div className="col-md-4">
            <ReactStars
              count={5}
              value={4}
              edit={false}
              size={30}
              activeColor="#ffd700"
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <Row className="patient-book-appointment">
      <Col lg={8} md={12}>
        <Card className="p-3 rounded">
          <Row>
            <Col md={2} sm={12}>
              <Image
                src={IMAGES.PATIENTPROFILEIMAGE}
                className="rounded doc-img"
                // width="50%"
              />
            </Col>
            <Col md={6} sm={12}>
              <h4>Mubashir Hussan</h4>
              <h6>Specialization</h6>
              <p>Emergency medicine</p>
              <p>Dermatology</p>
              <p>Colon and rectal surgery</p>
              <p>Cardiovascular disease</p>

              <ReactStars
                count={5}
                value={4}
                edit={true}
                size={30}
                activeColor="#ffd700"
              />
            </Col>
            <Col md={4} sm={12}>
              <div>
                <div className="d-flex justify-content-start align-items-center mb-2">
                  <FaRegComment />
                  <p className="ml-2 mb-0">0 Comments</p>
                </div>

                <div className="d-flex justify-content-start align-items-center mb-2">
                  <FaMapMarkedAlt />
                  <p className="ml-2 mb-0">Lahore, Pakistan</p>
                </div>
                <div className="d-flex justify-content-start align-items-center mb-2">
                  <FaCreditCard />
                  <p className="ml-2 mb-0">$ 10</p>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
        <Card className="mt-3">
          <Card.Body>
            <div className="appointment-tab">
              <Tabs defaultActiveKey="overview" className=" nav-tabs">
                <Tab eventKey="overview" title="Overview">
                  <Overview />
                </Tab>
                <Tab eventKey="review" title="Reviews">
                  <Review />
                </Tab>
              </Tabs>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} md={12}>
        <Card className="p-3 rounded">
          <h4>Available Appointments</h4>
          <div className="form-group">
            <label>Filter Appointment slots</label>
            <input className="form-control"></input>
          </div>
          <Row className="available-appointment">
            <Col xl={6} lg={12} md={6} sm={12} className="mt-2">
              <div className=" text-center border filter-appointment">
                <div>22/12/2014</div>
                <div>12:45pm - 13:15pm</div>
              </div>
            </Col>
            <Col xl={6} lg={12} md={6} sm={12} className="mt-2">
              <div className="border text-center filter-appointment">
                <div>22/12/2014</div>
                <div>12:45pm - 13:15pm</div>
              </div>
            </Col>
            <Col xl={6} lg={12} md={6} sm={12} className="mt-2">
              <div className="border text-center filter-appointment">
                <div>22/12/2014</div>
                <div>12:45pm - 13:15pm</div>
              </div>
            </Col>
            <Col xl={6} lg={12} md={6} sm={12} className="mt-2">
              <div className="border text-center filter-appointment">
                <div>22/12/2014</div>
                <div>12:45pm - 13:15pm</div>
              </div>
            </Col>
            <Col xl={6} lg={12} md={6} sm={12} className="mt-2">
              <div className="border  text-center filter-appointment">
                <div>22/12/2014</div>
                <div>12:45pm - 13:15pm</div>
              </div>
            </Col>
            <Col xl={6} lg={12} md={6} sm={12} className="mt-2">
              <div className="border text-center filter-appointment">
                <div>22/12/2014</div>
                <div>12:45pm - 13:15pm</div>
              </div>
            </Col>
            <Col xl={6} lg={12} md={6} sm={12} className="mt-2">
              <div className="border text-center filter-appointment">
                <div>22/12/2014</div>
                <div>12:45pm - 13:15pm</div>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default BookAppointment;
