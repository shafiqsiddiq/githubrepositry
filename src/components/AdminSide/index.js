import React from "react";
const Doctor = React.lazy(() => import("./Doctor"));
const Dashboard = React.lazy(() => import("./Dashboard"));
const Patient = React.lazy(() => import("./Patient"));
const CallLogs = React.lazy(() => import("./CallLogs"));
const ManageQuery = React.lazy(() => import("./ManageQuery"));
const PaymentDetails = React.lazy(() => import("./PaymentDetails"));
const FAQs = React.lazy(() => import("./FAQs"));
const ManageContactUs = React.lazy(() => import("./ManageContactUs"));

const ADMIN_WEB_PAGES = {
  ADMIN_DOCTORLIST: Doctor,
  DASHBOARD: Dashboard,
  ADMIN_PATIENTLIST: Patient,
  ADMIN_CALLLOGS: CallLogs,
  ADMIN_MANAGEQUERY: ManageQuery,
  ADMIN_PAYMENTDETAILS: PaymentDetails,
  ADMIN_FAQS: FAQs,
  ADMIN_MANAGECONTACTUS: ManageContactUs,
};

export { ADMIN_WEB_PAGES };
