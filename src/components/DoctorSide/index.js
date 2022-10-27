import React from "react";

const Dashboard = React.lazy(() => import("./Dashboard"));
const ManageProfile = React.lazy(() => import("./ManageProfile"));
const Income = React.lazy(() => import("./Income"));
const Prescription = React.lazy(() => import("./Prescription"));
const AppointmentFee = React.lazy(() => import("./AppointmentFee"));
const CommunityForum = React.lazy(() => import("./CommunityForum"));
// const ManageAppointments = React.lazy(() =>
//   import("./Appointments/ManageAppointment")
// );
// const ListOfAppointments = React.lazy(() =>
//   import("./Appointments/ListOfAppointments")
// );
const Appointments = React.lazy(() => import("./Appointments"));
const DOCTOR_WEB_PAGES = {
  DASHBOARD: Dashboard,
  MANAGEPROFILE: ManageProfile,
  INCOME: Income,
  PRESCRIPTION: Prescription,
  APPOINTMENTFEE: AppointmentFee,
  COMMUNITYFORUM: CommunityForum,
  // MANAGEAPPOINTMENTS: ManageAppointments,
  // LISTOFAPPOINTMENTS: ListOfAppointments,
  APPOINTMENTS: Appointments,
};

export { DOCTOR_WEB_PAGES };
