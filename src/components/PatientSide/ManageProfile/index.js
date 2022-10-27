// import React, { useEffect, useState } from "react";
// import {
//   Accordion,
//   Button,
//   Card,
//   Col,
//   Form,
//   Image,
//   Modal,
//   Row,
// } from "react-bootstrap";
// import { IMAGES } from "../../../assets/images";
// import { FaAngleDown, FaCamera } from "react-icons/fa";
// import MyDataTableSimple from "../../../assets/genericComponents/MyDataTableSimple";
// import PhoneInput from "react-phone-input-2";

// const ManageProfile = () => {
//   useEffect(() => {
//     document.title = "MANAGE PROFILE|| INNOVA";
//   }, []);

//   const socialColumns = [
//     {
//       dataField: "socialMediaName",
//       text: "Name",
//     },
//     {
//       dataField: "socialMediaURL",
//       text: "URL",
//     },
//   ];
//   const socialProducts = [
//     {
//       id: "1",
//       socialMediaName: "Smith",
//       socialMediaURL: "smith@innova.com",
//     },
//   ];
//   const [lgShow, setLgShow] = useState(false);
//   const [image, setImage] = useState(IMAGES.AVATAR);

//   const onImageChange = (event) => {
//     if (event.target.files && event.target.files[0]) {
//       setImage(URL.createObjectURL(event.target.files[0]));
//     }
//   };

//   return (
//     <main className="h-100">
//       <div className="manage-profile h-100">
//         <Row className="h-100" style={{ "overflow-y": "auto" }}>
//           <Col lg={3}>
//             <div className="choose-profile-img mx-auto">
//               <FaCamera className="camera-icon" />
//               <Image
//                 src={image}
//                 className="rounded-circle w-100 avatar"
//                 accept="image/*"
//               />
//               <div className="choose-img-overlay my-auto">
//                 <small className="choose-img-text">Choose Image</small>
//               </div>
//               <input
//                 type="file"
//                 className="select-img rounded-circle w-100"
//                 onChange={onImageChange}
//                 accept="image/*"
//               />
//             </div>

//             <Row>
//               <Col lg={12}>
//                 <hr></hr>
//               </Col>
//               <Col sm={4} md={4} lg={4} className="px-0">
//                 {/* <div className=""> */}
//                 <p>Name:</p>
//                 {/* </div> */}
//                 {/* <div className="d-flex"> */}
//                 <p>Gender:</p>
//                 {/* </div> */}
//                 {/* <div className="d-flex"> */}
//                 <p>Language:</p>
//                 {/* </div> */}
//                 {/* <div className="d-flex"> */}
//                 <p>Phone Number:</p>
//                 {/* </div> */}
//                 {/* <div className="d-flex"> */}
//                 <p>Address:</p>
//                 {/* </div> */}
//               </Col>
//               <Col sm={8} md={8} lg={8}>
//                 <p className="font-weight-bolder">Hana Baker</p>
//                 <p className="font-weight-bolder">Female</p>
//                 <p className="font-weight-bolder">English</p>
//                 <p className="font-weight-bolder">+12345678908</p>
//                 <p className="font-weight-bolder">
//                   21 Quiet Drive, Three Forks,mt, 59352 United States
//                 </p>
//               </Col>
//             </Row>
//           </Col>
//           <Col lg={9} className="rounded bg-white">
//             <div className="py-0 my-0">
//               <h4 className="font-weight-bolder pl-3 pt-2">Manage Profile</h4>
//               <hr className="mt-1"></hr>
//             </div>
//             <Accordion defaultActiveKey="0">
//               <Card className="pb-4 border-0">
//                 <Accordion.Toggle
//                   as={Card.Header}
//                   eventKey="0"
//                   className="d-flex justify-content-between"
//                 >
//                   <div>Personal Information</div>
//                   <div>
//                     <FaAngleDown fill="#09857c" />
//                   </div>
//                 </Accordion.Toggle>
//                 <Accordion.Collapse eventKey="0">
//                   <Card.Body>
//                     <Form>
//                       <Row>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <Form.Group>
//                             <label>Prefix</label>
//                             <select
//                               className="form-control"
//                               aria-label="Gender"
//                             >
//                               <option value="1">Mr</option>
//                               <option value="2">Ms</option>
//                               <option value="3">Mrs</option>
//                             </select>
//                           </Form.Group>
//                         </Col>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>First Name</label>
//                           <Form.Group>
//                             <Form.Control
//                               type="text"
//                               placeholder="First Name"
//                             />
//                           </Form.Group>
//                         </Col>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <Form.Group>
//                             <label>Last Name</label>
//                             <Form.Control type="text" placeholder="Last Name" />
//                           </Form.Group>
//                         </Col>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>Gender</label>
//                           <Form.Group>
//                             <select
//                               className="form-control"
//                               aria-label="Gender"
//                             >
//                               <option value="1">Male</option>
//                               <option value="2">Female</option>
//                               <option value="3">Other</option>
//                             </select>
//                           </Form.Group>
//                         </Col>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>Date Of Birth</label>
//                           <Form.Group>
//                             <Form.Control type="date" placeholder="D.O.B" />
//                           </Form.Group>
//                         </Col>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>Status</label>
//                           <Form.Group>
//                             <select
//                               className="form-control"
//                               aria-label="Gender"
//                             >
//                               <option value="1">Single</option>
//                               <option value="2">Married</option>
//                             </select>
//                           </Form.Group>
//                         </Col>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>Email</label>
//                           <Form.Group>
//                             <Form.Control type="email" placeholder="Email" />
//                           </Form.Group>
//                         </Col>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>Language</label>
//                           <Form.Group>
//                             <select
//                               className="form-control"
//                               aria-label="Language"
//                             >
//                               <option value="2">Posados</option>
//                               <option value="1">Masionos</option>
//                             </select>
//                           </Form.Group>
//                         </Col>
//                         <Col lg={6}>
//                           <label>Primary Address</label>
//                           <Form.Group controlId="exampleForm.ControlTextarea1">
//                             <Form.Control
//                               as="textarea"
//                               placeholder="Primary Address"
//                               rows={2}
//                             />
//                           </Form.Group>
//                         </Col>
//                         <Col lg={6}>
//                           <label>Secondary Address</label>
//                           <Form.Group controlId="exampleForm.ControlTextarea1">
//                             <Form.Control
//                               as="textarea"
//                               placeholder="Secondary Address"
//                               rows={2}
//                             />
//                           </Form.Group>
//                         </Col>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>Country</label>
//                           <Form.Group>
//                             <select
//                               className="form-control"
//                               aria-label="Country"
//                             >
//                               <option value="1">Pakistan</option>
//                               <option value="2">Argentina</option>
//                             </select>
//                           </Form.Group>
//                         </Col>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>State</label>
//                           <Form.Group>
//                             <select
//                               className="form-control"
//                               aria-label="Gender"
//                             >
//                               <option value="1">Masionos</option>
//                               <option value="2">Posados</option>
//                             </select>
//                           </Form.Group>
//                         </Col>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>City</label>
//                           <Form.Group>
//                             <select
//                               className="form-control"
//                               aria-label="Gender"
//                             >
//                               <option value="2">Posados</option>
//                               <option value="1">Masionos</option>
//                             </select>
//                           </Form.Group>
//                         </Col>

//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>Ethnicity</label>
//                           <Form.Group>
//                             <select
//                               className="form-control"
//                               aria-label="Ethnicity"
//                             >
//                               <option value="2">German</option>
//                               <option value="1">Italian</option>
//                             </select>
//                           </Form.Group>
//                         </Col>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>Cell Phone No</label>
//                           <PhoneInput
//                             inputClass="react-phone-input-custom"
//                             country="pk"
//                             inputProps={{
//                               name: "phone",
//                               required: true,
//                               autoFocus: true,
//                             }}
//                           />
//                         </Col>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>Home Phone No</label>
//                           <PhoneInput
//                             inputClass="react-phone-input-custom"
//                             country="pk"
//                             inputProps={{
//                               name: "phone",
//                               required: true,
//                               autoFocus: true,
//                             }}
//                           />
//                         </Col>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>Office Phone No</label>
//                           <PhoneInput
//                             inputClass="react-phone-input-custom"
//                             country="pk"
//                             inputProps={{
//                               name: "phone",
//                               required: true,
//                               autoFocus: true,
//                             }}
//                           />
//                         </Col>
//                         {/* <Col sm={6} md={4} lg={4} xl={3}>
//                                                 <label>Email</label>
//                                                     <Form.Group>
//                                                         <Form.Control type="email" placeholder="hdev@getnada.com" disabled />
//                                                     </Form.Group>
//                                                 </Col> */}
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>BloodGroup</label>
//                           <Form.Group>
//                             <select
//                               className="form-control"
//                               aria-label="BloodGroup"
//                             >
//                               <option value="2">AB+</option>
//                               <option value="1">O+</option>
//                             </select>
//                           </Form.Group>
//                         </Col>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>Current Occupation</label>
//                           <Form.Group>
//                             <select
//                               className="form-control"
//                               aria-label="BloodGroup"
//                             >
//                               <option value="2">Farmer</option>
//                               <option value="1">Businessman</option>
//                               <option value="1">Doctor</option>
//                               <option value="1">Others</option>
//                             </select>
//                           </Form.Group>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col lg={12} className="d-flex justify-content-end">
//                           <Button
//                             variant="none"
//                             className="mx-1 rounded-pill py-2 change-pwd-btn"
//                             onClick={() => setLgShow(true)}
//                           >
//                             Change Password
//                           </Button>
//                           <Button
//                             variant="none"
//                             className="mx-1 rounded-pill py-2 save-btn"
//                           >
//                             Save
//                           </Button>
//                           <Button
//                             variant="none"
//                             className="mx-1 rounded-pill py-2 cancel-btn"
//                           >
//                             Cancel
//                           </Button>
//                           <Modal
//                             size="lg"
//                             show={lgShow}
//                             onHide={() => setLgShow(false)}
//                             aria-labelledby="contained-modal-title-vcenter"
//                             centered
//                           >
//                             <Modal.Header>
//                               <Modal.Title id="example-modal-sizes-title-lg">
//                                 Reset Your Password
//                               </Modal.Title>
//                             </Modal.Header>
//                             <Modal.Body>
//                               <Row>
//                                 <Col sm={4}>
//                                   <Form.Group>
//                                     <Form.Control
//                                       type="password"
//                                       placeholder="Old Password"
//                                     />
//                                   </Form.Group>
//                                 </Col>
//                                 <Col sm={4}>
//                                   <Form.Group>
//                                     <Form.Control
//                                       type="password"
//                                       placeholder="New Password"
//                                     />
//                                   </Form.Group>
//                                 </Col>
//                                 <Col sm={4}>
//                                   <Form.Group>
//                                     <Form.Control
//                                       type="password"
//                                       placeholder="Confirm Password"
//                                     />
//                                   </Form.Group>
//                                 </Col>
//                                 <Col className="d-flex justify-content-end">
//                                   <Button
//                                     variant="none"
//                                     className=""
//                                     style={{
//                                       "background-color": "#696969",
//                                       border: "none",
//                                       color: "white",
//                                       width: "100px",
//                                     }}
//                                     onClick={() => setLgShow(false)}
//                                   >
//                                     Reset
//                                   </Button>
//                                 </Col>
//                               </Row>
//                             </Modal.Body>
//                           </Modal>
//                         </Col>
//                       </Row>
//                     </Form>
//                   </Card.Body>
//                 </Accordion.Collapse>
//               </Card>
//               <Card className="pb-4 border-0">
//                 <Accordion.Toggle
//                   as={Card.Header}
//                   eventKey="1"
//                   className="d-flex justify-content-between"
//                 >
//                   <div>Emergency Contact</div>
//                   <div>
//                     <FaAngleDown fill="#09857c" />
//                   </div>
//                 </Accordion.Toggle>
//                 <Accordion.Collapse eventKey="1">
//                   <Card.Body>
//                     <Form>
//                       <Row>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>Contact Number</label>
//                           <PhoneInput
//                             inputClass="react-phone-input-custom"
//                             country="pk"
//                             inputProps={{
//                               name: "phone",
//                               required: true,
//                               autoFocus: true,
//                             }}
//                           />
//                         </Col>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>Name</label>
//                           <Form.Group>
//                             <Form.Control type="text" placeholder="Name" />
//                           </Form.Group>
//                         </Col>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>Relation</label>
//                           <Form.Group>
//                             <select
//                               className="form-control"
//                               aria-label="relation"
//                             >
//                               <option value="1">Father</option>
//                               <option value="1">Brother</option>
//                               <option value="1">Mother</option>
//                               <option value="1">Husband</option>
//                               <option value="1">Wife</option>
//                               <option value="1">Son</option>
//                               <option value="1">Daughter</option>
//                             </select>
//                           </Form.Group>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col lg={12} className="d-flex justify-content-end">
//                           <button className="mx-1 rounded-pill py-2 save-btn">
//                             Save
//                           </button>
//                           <button className="mx-1 rounded-pill py-2 cancel-btn">
//                             Cancel
//                           </button>
//                         </Col>
//                       </Row>
//                     </Form>
//                   </Card.Body>
//                 </Accordion.Collapse>
//               </Card>
//               <Card className="pb-4 border-0">
//                 <Accordion.Toggle
//                   as={Card.Header}
//                   eventKey="2"
//                   className="d-flex justify-content-between"
//                 >
//                   <div>Patient Guardian</div>
//                   <div>
//                     <FaAngleDown fill="#09857c" />
//                   </div>
//                 </Accordion.Toggle>
//                 <Accordion.Collapse eventKey="2">
//                   <Card.Body>
//                     <Form>
//                       <Row>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>Contact</label>
//                           <PhoneInput
//                             inputClass="react-phone-input-custom"
//                             country="pk"
//                             inputProps={{
//                               name: "phone",
//                               required: true,
//                               autoFocus: true,
//                             }}
//                           />
//                         </Col>

//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>Name</label>
//                           <Form.Group>
//                             <Form.Control type="text" placeholder="Father" />
//                           </Form.Group>
//                         </Col>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>Relation</label>
//                           <Form.Group>
//                             <select
//                               className="form-control"
//                               aria-label="relation"
//                             >
//                               <option value="1">Father</option>
//                               <option value="2">Mother</option>
//                             </select>
//                           </Form.Group>
//                         </Col>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>Email</label>
//                           <Form.Group>
//                             <Form.Control type="email" placeholder="Email" />
//                           </Form.Group>
//                         </Col>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>Country</label>
//                           <Form.Group>
//                             <select
//                               className="form-control"
//                               aria-label="country"
//                             >
//                               <option value="1">Austria</option>
//                               <option value="2">UK</option>
//                               <option value="3">Other</option>
//                             </select>
//                           </Form.Group>
//                         </Col>
//                         {/* <Col lg={3}>
//                                                 <label>Status</label>
//                                                     <Form.Group>
//                                                         <select className="form-control" aria-label="Gender">
//                                                             <option value="1">Single</option>
//                                                             <option value="2">Married</option>
//                                                         </select>
//                                                     </Form.Group>
//                                                 </Col> */}
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>State</label>
//                           <Form.Group>
//                             <select className="form-control" aria-label="area">
//                               <option value="1">Formosa</option>
//                               <option value="2">Adola</option>
//                             </select>
//                           </Form.Group>
//                         </Col>
//                         <Col sm={6} md={4} lg={4} xl={3}>
//                           <label>City</label>
//                           <Form.Group controlId="exampleForm.ControlTextarea1">
//                             <Form.Control type="text" placeholder="" />
//                           </Form.Group>
//                         </Col>

//                         <Col lg={6}>
//                           <label>Primary Address</label>
//                           <Form.Group>
//                             <Form.Control
//                               as="textarea"
//                               row={2}
//                               placeholder="Primary Address"
//                             />
//                           </Form.Group>
//                         </Col>
//                         <Col lg={6}>
//                           <label>Secondary Address</label>
//                           <Form.Group>
//                             <Form.Control
//                               as="textarea"
//                               row={2}
//                               placeholder="Secondary Address"
//                             />
//                           </Form.Group>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col lg={12} className="d-flex justify-content-end">
//                           <button className="mx-1 rounded-pill py-2 save-btn">
//                             Save
//                           </button>
//                           <button className="mx-1 rounded-pill py-2 cancel-btn">
//                             Cancel
//                           </button>
//                         </Col>
//                       </Row>
//                     </Form>
//                   </Card.Body>
//                 </Accordion.Collapse>
//               </Card>
//               <Card className="pb-4 border-0">
//                 <Accordion.Toggle
//                   as={Card.Header}
//                   eventKey="3"
//                   className="d-flex justify-content-between"
//                 >
//                   <div>Social Information</div>
//                   <div>
//                     <FaAngleDown fill="#09857c" />
//                   </div>
//                 </Accordion.Toggle>
//                 <Accordion.Collapse eventKey="3">
//                   <Card.Body>
//                     <Row>
//                       <Col lg={6}>
//                         <label>Social Media</label>
//                         <Form.Group>
//                           <select
//                             className="form-control"
//                             aria-label="social media"
//                           >
//                             <option value="1">Facebook</option>
//                             <option value="2">LinkedIn</option>
//                             <option value="3">Other</option>
//                           </select>
//                         </Form.Group>
//                       </Col>
//                       <Col lg={6}>
//                         <label>URL</label>
//                         <Form.Group>
//                           <Form.Control type="text" placeholder="URL" />
//                         </Form.Group>
//                       </Col>
//                     </Row>
//                     <Row>
//                       <Col lg={12} className="d-flex justify-content-end">
//                         <button className="mx-1 rounded-pill py-2 save-btn">
//                           Add
//                         </button>
//                         <button className="mx-1 rounded-pill py-2 cancel-btn">
//                           Cancel
//                         </button>
//                       </Col>

//                       <Col lg={12} className="mt-3">
//                         <MyDataTableSimple
//                           tablePagination="false"
//                           data={socialProducts}
//                           columns={socialColumns}
//                         />
//                       </Col>
//                     </Row>
//                   </Card.Body>
//                 </Accordion.Collapse>
//               </Card>
//               <Card className="pb-4 border-0">
//                 <Accordion.Toggle
//                   as={Card.Header}
//                   eventKey="4"
//                   className="d-flex justify-content-between"
//                 >
//                   <div>Journal & Content Categories</div>
//                   <div>
//                     <FaAngleDown fill="#09857c" />
//                   </div>
//                 </Accordion.Toggle>
//                 <Accordion.Collapse eventKey="4">
//                   <Card.Body>
//                     <Row>
//                       <Col md={6}>
//                         <label>Journal</label>
//                         <Form.Group>
//                           <Form.Control
//                             as="textarea"
//                             row={2}
//                             placeholder="Journal"
//                           />
//                         </Form.Group>
//                       </Col>
//                       <Col md={6}>
//                         <label>Content Category</label>
//                         <Form.Group>
//                           <Form.Control
//                             as="textarea"
//                             row={2}
//                             placeholder="Content Category"
//                           />
//                         </Form.Group>
//                       </Col>
//                     </Row>
//                     <Row>
//                       <Col lg={12} className="d-flex justify-content-end">
//                         <button className="mx-1 rounded-pill py-2 save-btn">
//                           Save
//                         </button>
//                         <button className="mx-1 rounded-pill py-2 cancel-btn">
//                           Cancel
//                         </button>
//                       </Col>
//                     </Row>
//                   </Card.Body>
//                 </Accordion.Collapse>
//               </Card>
//             </Accordion>
//           </Col>
//         </Row>
//       </div>
//     </main>
//   );
// };

// export default ManageProfile;

import React, { useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Overview from "./Overview";
import MedicalHistory from "./MedicalHistory";
import PatientInsurance from "./PatientInsurance";
import Pharmacy from "./Pharmacy";
import Documents from "./Documents";

const ManageProfile = () => {
  useEffect(() => {
    document.title = "MANAGE PROFILE|| INNOVA";
  }, []);

  return (
    <main className="h-100 manage-profile patient-manage-profile">
      <Tabs
        defaultActiveKey="Overview"
        id="patient-manage-profile"
        className="mb-3 pb-3"
      >
        <Tab eventKey="Overview" title="Overview">
          <Overview />
        </Tab>
        <Tab eventKey="MedicalHistory" title="Medical History">
          <MedicalHistory />
        </Tab>
        <Tab eventKey="PatientInsurance" title="Patient Insurance">
          <PatientInsurance />
        </Tab>
        <Tab eventKey="Documents" title="Documents">
          <Documents />
        </Tab>
        <Tab eventKey="Pharmacy" title="Pharmacy">
          <Pharmacy />
        </Tab>
      </Tabs>
    </main>
  );
};

export default ManageProfile;
