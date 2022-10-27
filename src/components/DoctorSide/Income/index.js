import React, { useEffect } from 'react'
import { Card, Col, Row} from 'react-bootstrap';
import MyDataTableCustom from '../../../assets/genericComponents/MyDataTableCustom';


const columns = [{
  dataField: 'serialNumber',
  text: 'SrNo.',
},
{
  dataField: 'patientName',
  text: 'Patient Name'
}, 
{
  dataField: 'appointmentDateTime',
  text: 'Appointment Date & Time'
},
{
  dataField: 'appointmentType',
  text: 'Appointment Type'
},
{
  dataField: 'earnedAmount',
  text: 'Earned Amount'
},
{
  dataField: 'paymentState',
  text: 'Payment State'
},
// {
//   text: "Action",
//   dataField: "isSuspended",
//   formatter: (cell, row, index) => {
//     return (
//       <>
//         <FaTrashAlt fill="red" />
//       </>
//     )
//   }

];

const products = [
  {
    serialNumber: '1',
    patientName: 'John Doe',
    appointmentDateTime: '12/12/2020 12:12pm',
    appointmentType: "Chat",
    earnedAmount: '$500',
    paymentState: 'Paid',

  }, {
    serialNumber: '2',
    patientName: 'John Doe',
    appointmentDateTime: '12/12/2020 12:12pm',
    appointmentType: "Physical",
    earnedAmount: '$500',
    paymentState: 'Paid',

  }, {
    serialNumber: '3',
    patientName: 'John Doe',
    appointmentDateTime: '12/12/2020 12:12pm',
    appointmentType: "Physical",
    earnedAmount: '$500',
    paymentState: 'Paid',

  }, {
    serialNumber: '4',
    patientName: 'John Doe',
    appointmentDateTime: '12/12/2020 12:12pm',
    appointmentType: "Chat",
    earnedAmount: '$500',
    paymentState: 'Paid',

  }, {
    serialNumber: '5',
    patientName: 'John Doe',
    appointmentDateTime: '12/12/2020 12:12pm',
    appointmentType: "Chat",
    earnedAmount: '$500',
    paymentState: 'Paid',

  }, {
    serialNumber: '6',
    patientName: 'John Doe',
    appointmentDateTime: '12/12/2020 12:12pm',
    appointmentType: "Chat",
    earnedAmount: '$500',
    paymentState: 'Paid',

  },
];
const Income = () => {
  useEffect(() => {
    document.title = "INCOME || INNOVA";
  }, []);
  return (
    <div className="doctor-income">
      <h2 className="pl-3">Income</h2>
      <Row className="pb-5">
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card className="py-4 px-4 my-2">
            <h2>$2200</h2>
            <p>Total Income</p>
          </Card>
        </Col>
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card className="py-4 px-4 my-2">
            <h2>350</h2>
            <p>Total Consultation done</p>
          </Card>
        </Col>
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card className="py-4 px-4 my-2">
            <h2>$2200</h2>
            <p>Amount Withdrawn</p>
          </Card>
        </Col>
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card className="py-4 px-4 my-2">
            <h2>$2200</h2>
            <p>Amount to be paid</p>
          </Card>
        </Col>
      </Row>

      <div>
        <MyDataTableCustom data={products} columns={columns} search={true} className="align-middle" tableHeading={<h4 className="mb-0 pb-2">Income List</h4>} />
      </div>
    </div>
  )
}

export default Income