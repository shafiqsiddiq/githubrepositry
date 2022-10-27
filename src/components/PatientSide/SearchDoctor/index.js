import React, { useEffect } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import MyDataTableCustom from "../../../assets/genericComponents/MyDataTableCustom";
import { PATH } from "../../../config";

const SearchDoctor = () => {
  useEffect(() => {
    document.title = "SEARCH DOCTOR || INNOVA";
  }, []);
  const ratingChanged = (newRating) => {
    // console.log(newRating)
  };

  const columns = [
    {
      dataField: "name",
      text: "Name",
    },
    {
      text: "Rating",
      dataField: "rating",
    },
    {
      dataField: "speciality",
      text: "Speciality",
    },
    {
      dataField: "appointmentType",
      text: "Appointment Type",
    },
    {
      dataField: "city",
      text: "City",
    },

    {
      text: "Book Appointment",
      dataField: "isSuspended",
      formatter: (cell, row, index) => {
        return (
          <>
            <Link
              to={PATH.PATIENT_BOOKAPPOINTMENT}
              className="btn btn-md bg-success-light search-doc-btn-primary px-3 py-2"
            >
              <small className="font-weight-bolder">Book Appointment</small>
            </Link>
          </>
        );
      },
    },
  ];

  const products = [
    {
      name: "John",
      rating: (
        <div className="d-flex justify-content-center">
          <ReactStars
            className="d-flex justify-content-center"
            count={5}
            value={3}
            edit={false}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>
      ),
      speciality: "Neurologist",
      city: "luxemburg",
      appointmentType: "Chat",
    },
    {
      name: "John",
      rating: (
        <div className="d-flex justify-content-center">
          <ReactStars
            className="d-flex justify-content-center"
            count={5}
            value={4}
            edit={false}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>
      ),
      speciality: "Neurologist",
      city: "luxemburg",
      appointmentType: "Chat",
    },
    {
      name: "John",
      rating: (
        <div className="d-flex justify-content-center">
          <ReactStars
            className="d-flex justify-content-center"
            count={5}
            value={1}
            edit={false}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>
      ),
      speciality: "Neurologist",
      city: "luxemburg",
      appointmentType: "Chat",
    },
    {
      name: "John",
      rating: (
        <div className="d-flex justify-content-center">
          <ReactStars
            className="d-flex justify-content-center"
            count={5}
            value={5}
            edit={false}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>
      ),
      speciality: "Neurologist",
      city: "luxemburg",
      appointmentType: "Chat",
    },
    {
      name: "John",
      rating: (
        <div className="d-flex justify-content-center">
          <ReactStars
            className="d-flex justify-content-center"
            count={5}
            value={5}
            edit={false}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>
      ),
      speciality: "Neurologist",
      city: "luxemburg",
      appointmentType: "Chat",
    },
    {
      name: "John",
      rating: (
        <div className="d-flex justify-content-center">
          <ReactStars
            className="d-flex justify-content-center"
            count={5}
            value={3}
            edit={false}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>
      ),
      speciality: "Neurologist",
      city: "luxemburg",
      appointmentType: "Chat",
    },
    {
      name: "John",
      rating: (
        <div className="d-flex justify-content-center">
          <ReactStars
            className="d-flex justify-content-center"
            count={5}
            value={4}
            edit={false}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>
      ),
      speciality: "Neurologist",
      city: "luxemburg",
      appointmentType: "Chat",
    },
    {
      name: "John",
      rating: (
        <div className="d-flex justify-content-center">
          <ReactStars
            className="d-flex justify-content-center"
            count={5}
            value={3}
            edit={false}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>
      ),
      speciality: "Neurologist",
      city: "luxemburg",
      appointmentType: "Chat",
    },
  ];
  const HeaderContent = () => {
    return (
      <Col md={12}>
        <Form className="">
          <Row>
            <Col md={4} lg={3} xl={2}>
              <label className="my-0">Name</label>
              <input
                className="form-control my-2"
                type="text"
                placeholder="Search by Name"
              />
            </Col>
            <Col md={4} lg={3} xl={2}>
              <label className="my-0">City</label>
              <input
                className="form-control my-2"
                type="text"
                placeholder="Search by City"
              />
            </Col>
            <Col md={4} lg={3} xl={2}>
              <label className="my-0">Speciality</label>
              <select className="form-control my-2">
                <option value="Child">Child Specialist</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </Col>
            <Col md={4} lg={3} xl={2}>
              <label className="my-0">Location</label>
              <input
                className="form-control my-2"
                placeholder="Search by Location"
              />
            </Col>
            <Col md={4} lg={3} xl={2}>
              <label className="my-0">Language</label>
              <select className="form-control my-2">
                <option value="Child">English</option>
                <option value="saab">Arabic</option>
                <option value="mercedes">Urdu</option>
              </select>
            </Col>
            <Col md={4} lg={3} xl={2} className="">
              <label className="my-0">Ratings</label>
              <select className="form-control my-2">
                <option value="audi"> &#60; 1.0</option>
                <option value="Child"> &#62; 1.0</option>
                <option value="saab"> &#62; 2.0</option>
                <option value="mercedes"> &#62; 3.0</option>
                <option value="audi"> &#62; 4.0</option>
                <option value="audi"> &#61; 5.0</option>
              </select>
            </Col>
            <Col md={4} lg={3} xl={2}>
              <label className="my-0">Type</label>
              <select className="form-control my-2">
                <option value="physical">Physical</option>
                <option value="tele">Tele</option>
                <option value="chat">Chat</option>
              </select>
            </Col>
            <Col md={4} lg={3} xl={2}>
              <label className="my-0">Practice Address</label>
              <input
                className="form-control my-2"
                placeholder="Search by Practice"
              />
            </Col>
            <Col md={4} lg={3} xl={2}>
              <label className="my-0">Gender</label>
              <select className="form-control my-2">
                <option value="Child">Male</option>
                <option value="saab">Female</option>
                <option value="mercedes">Others</option>
              </select>
            </Col>
            <Col md={4} lg={3} xl={2}>
              <label className="my-0">Availability</label>

              <select className="form-control my-2">
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </Col>
            <Col md={4} lg={3} xl={2}>
              <label className="my-0">Fee</label>

              <select className="form-control my-2">
                <option value="free">greater than 100$</option>
                <option value="paid">greater than 200$</option>
              </select>
            </Col>
            <Col
              md={4}
              lg={3}
              xl={2}
              className="d-flex justify-content-center align-items-end"
            >
              <button className="form-control my-2 justfiy-content-center search-doc-btn-primary">
                Search
              </button>
            </Col>
          </Row>
        </Form>
      </Col>
    );
  };
  return (
    <div>
      <MyDataTableCustom
        data={products}
        columns={columns}
        tableHeading={<h4>Search by filters</h4>}
        search={false}
        headerContent={<HeaderContent />}
      />
    </div>
  );
};

export default SearchDoctor;
