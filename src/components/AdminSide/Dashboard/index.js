import React from "react";
import { GiThreeFriends } from "react-icons/gi";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { Card, Image, Table } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import { IMAGES } from "../../../assets/images";

const Dashboard = () => {
  const Column_chart = {
    series: [
      {
        data: [5, 7, 10, 15, 25, 20, 15, 10, 7, 5],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },

      plotOptions: {
        bar: {
          columnWidth: "25%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ["John", "Doe"],
          ["Joe", "Smith"],
          ["Jake", "Williams"],
          "Amber",
          ["Peter", "Brown"],
          ["Mary", "Evans"],
          ["David", "Wilson"],
          ["Lily", "Roberts"],
          ["Mary", "Evans"],
          ["David", "Wilson"],
        ],
        labels: {
          style: {
            fontSize: "12px",
          },
        },
      },
    },
  };
  const Pie_chart = {
    series: [44],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },

            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  const Line_chart = {
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  };
  const doctors = [
    {
      id: "1",
      dp: (
        <Image
          src={IMAGES.MESSAGESPROFILEIMAGE}
          className="avatar-border p-auto m-auto"
        />
      ),
      doctorName: "Mubashir Hussan",
      specialization: "Anestheologist",
      phone: "+923377346474",
      profileStatus: "Complete Profile",
    },
    {
      id: "2",
      dp: (
        <Image
          src={IMAGES.MESSAGESPROFILEIMAGE}
          className="avatar-border p-auto m-auto"
        />
      ),
      doctorName: "Mubashir Hussan",
      specialization: "Anestheologist",
      phone: "+923377346474",
      profileStatus: "Complete Profile",
    },
    {
      id: "3",
      dp: (
        <Image
          src={IMAGES.MESSAGESPROFILEIMAGE}
          className="avatar-border p-auto m-auto"
        />
      ),
      doctorName: "Mubashir Hussan",
      specialization: "Anestheologist",
      phone: "+923377346474",
      profileStatus: "Complete Profile",
    },
    {
      id: "4",
      dp: (
        <Image
          src={IMAGES.MESSAGESPROFILEIMAGE}
          className="avatar-border p-auto m-auto"
        />
      ),
      doctorName: "Mubashir Hussan",
      specialization: "Anestheologist",
      phone: "+923377346474",
      profileStatus: "Complete Profile",
    },
    {
      id: "5",
      dp: (
        <Image
          src={IMAGES.MESSAGESPROFILEIMAGE}
          className="avatar-border p-auto m-auto"
        />
      ),
      doctorName: "Mubashir Hussan",
      specialization: "Anestheologist",
      phone: "+923377346474",
      profileStatus: "Complete Profile",
    },
    {
      id: "6",
      dp: (
        <Image
          src={IMAGES.MESSAGESPROFILEIMAGE}
          className="avatar-border p-auto m-auto"
        />
      ),
      doctorName: "Mubashir Hussan",
      specialization: "Anestheologist",
      phone: "+923377346474",
      profileStatus: "Complete Profile",
    },
  ];
  return (
    <div>
      <div className="row">
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div
            className="card appointments-med-card-1 mb-3 pointer"
            style={{ backgroundColor: "#f26522", color: "white" }}
          >
            <div className="card-body text-white">
              <div className="d-flex">
                <div className="appointment-card-icon">
                  <BsFileEarmarkPlus className="appointments-card-file-icon " />
                </div>
                <div className="border-right ml-3"></div>
                <div className="ml-4">
                  <div className="admindashboard">
                    <h3 className="appointments-new-med">11780</h3>
                    <p> APPOINTMENTS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div
            className="card appointments-med-card-1 mb-3  pointer"
            style={{
              backgroundColor: "#9ec54b",
              color: "white",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            <div className="card-body text-white">
              <div className="d-flex">
                <div className="appointment-card-icon">
                  <BsFillPeopleFill className="appointments-card-file-icon " />
                </div>
                <div className="border-right ml-3"></div>
                <div className="ml-4">
                  <div className="admindashboard">
                    <h3 className="appointments-new-med">1198</h3>
                    <p>NEW PATIENTS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div
            className="card appointments-med-card-1 mb-3 pointer"
            style={{
              backgroundColor: "#ffa500",
              color: "white",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            <div className="card-body text-white">
              <div className="d-flex">
                <div className="appointment-card-icon">
                  <GiThreeFriends className="appointments-card-file-icon " />
                </div>
                <div className="border-right ml-3"></div>
                <div className="ml-4">
                  <div className="admindashboard">
                    <h3 className="appointments-new-med">229</h3>
                    <p>NEW DOCTORS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div
            className="card appointments-med-card-1 mb-3 pointer"
            style={{ backgroundColor: "#009fe3", color: "white" }}
          >
            <div className="card-body text-white">
              <div className="d-flex">
                <div className="appointment-card-icon">
                  <RiMoneyDollarCircleFill className="appointments-card-file-icon " />
                </div>
                <div className="border-right ml-3"></div>
                <div className="ml-4">
                  <div className="admindashboard">
                    <h3 className="appointments-new-med">$ 119</h3>
                    <p>EARNING</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Booked Appointments
              </Card.Title>
              <div id="chart">
                <ReactApexChart
                  options={Column_chart.options}
                  series={Column_chart.series}
                  height={400}
                  type="bar"
                />
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-6 col-md-12">
          <Card className="cards-styling doctor-appointments m-0">
            <Card.Header className="card-headers d-flex justify-content-between align-items-center">
              <div>Doctor's</div>
              <a href="/" className="text-white">
                View all
              </a>
            </Card.Header>
            <div className="card-scrollbar">
              <Card.Body style={{ height: "442px" }}>
                <Table className="doctor-dashboard-table" responsive>
                  <thead>
                    <tr>
                      <th>Pic</th>
                      <th>Name</th>
                      <th>Specialization</th>
                      <th>Phone</th>
                      <th>Profile Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctors.map((item, key) => {
                      return (
                        <tr>
                          <td>{item.dp}</td>
                          <td>{item.doctorName}</td>
                          <td>{item.specialization}</td>
                          <td>{item.phone}</td>
                          <td>
                            <button className="btn btn-sm primary-btn w-100 p-2">
                              {item.profileStatus}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </div>
          </Card>
        </div>
      </div>
      <div className=" row mt-3">
        <div className="col-md-6">
          <Card className="pie_chart_card">
            <Card.Body>
              <Card.Title>Region wise Doctor's</Card.Title>
              <div className="d-flex justify-content-md-center justify-content-sm-center m-auto">
                <div id="chart">
                  <ReactApexChart
                    options={Pie_chart.options}
                    series={Pie_chart.series}
                    type="pie"
                    width={340}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card className="pie_chart_card">
            <Card.Body>
              <Card.Title>Region wise Patient's</Card.Title>
              <div className="d-flex justify-content-md-center justify-content-sm-center m-auto">
                <div id="chart">
                  <ReactApexChart
                    options={Pie_chart.options}
                    series={Pie_chart.series}
                    type="pie"
                    width={340}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className=" row mt-3">
        <div className="col-md-12">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Earning Chart</Card.Title>
              <div id="chart">
                <ReactApexChart
                  options={Line_chart.options}
                  series={Line_chart.series}
                  type="line"
                  height={350}
                />
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
