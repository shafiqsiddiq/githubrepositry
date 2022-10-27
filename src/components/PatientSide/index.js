import React from "react";

const Dashboard = React.lazy(() => import("./Dashboard"));
const MyVitals = React.lazy(() => import("./MyVitals"));
const ManageProfile = React.lazy(() => import("./ManageProfile"));
const PatientPrescription = React.lazy(() => import("./PatientPrescription"));
const SearchDoctor = React.lazy(() => import("./SearchDoctor"));
const CommunityForum = React.lazy(() => import("./CommunityForum"));
const PaymentDetails = React.lazy(() => import("./PaymentDetails"));
const AskQuery = React.lazy(() => import("./AskQuery"));
const PatientAppointment = React.lazy(() => import("./PatientAppointments"));
const BookAppointment = React.lazy(() => import("./BookAppointment"));

const PATIENT_WEB_PAGES = {
  DASHBOARD: Dashboard,
  MYVITALS: MyVitals,
  MANAGEPROFILE: ManageProfile,
  PATIENTPRESCRIPTION: PatientPrescription,
  PAYMENTDETAILS: PaymentDetails,
  SEARCHDOCTOR: SearchDoctor,
  COMMUNITYFORUM: CommunityForum,
  ASKQUERY: AskQuery,
  PATIENTAPPOINTMENT: PatientAppointment,
  BOOKAPPOINTMENT: BookAppointment,
};

export { PATIENT_WEB_PAGES };
