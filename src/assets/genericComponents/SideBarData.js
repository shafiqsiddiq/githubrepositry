import { PATH } from "../../config";
import { IMAGES } from "../images";
import {
  FaDollarSign,
  FaUserMd,
  FaUserTie,
  FaHistory,
  FaTasks,
} from "react-icons/fa";
import { Image } from "react-bootstrap";

export const AdminSidebarData = [
  {
    title: "Dashboard",
    path: PATH.ADMIN_DASHBOARD,
    icon: <Image className="sidebar-icons" src={IMAGES.SIDEBARDASHBOARDICON} />,
    eventKey: "adminDashboard",
  },
  {
    title: "Doctor",
    path: PATH.ADMIN_DOCTORLIST,
    icon: (
      <FaUserMd fill="var(--icon-fill-color)" className="fa-sidebar-icons" />
    ),
    eventKey: "adminDoctorList",
  },
  {
    title: "Patient",
    path: PATH.ADMIN_PATIENTLIST,
    icon: (
      <FaUserTie fill="var(--icon-fill-color)" className="fa-sidebar-icons" />
    ),
    eventKey: "adminPatientList",
  },

  {
    title: "Call Logs",
    path: PATH.ADMIN_CALLLOGS,
    icon: (
      <FaHistory fill="var(--icon-fill-color)" className="fa-sidebar-icons" />
    ),
    eventKey: "adminCallLogs",
  },
  {
    title: "Manage Query",
    path: PATH.ADMIN_MANAGEQUERY,
    icon: (
      <FaTasks fill="var(--icon-fill-color)" className="fa-sidebar-icons" />
    ),
    eventKey: "adminManageQuery",
  },
  {
    title: "Payment Details",
    path: PATH.ADMIN_PAYMENTDETAILS,
    icon: (
      <FaTasks fill="var(--icon-fill-color)" className="fa-sidebar-icons" />
    ),
    eventKey: "adminPaymentDetails",
  },
  {
    title: "FAQs",
    path: PATH.ADMIN_FAQS,
    icon: (
      <FaTasks fill="var(--icon-fill-color)" className="fa-sidebar-icons" />
    ),
    eventKey: "adminFAQs",
  },
  {
    title: "Manage Contact Us",
    path: PATH.ADMIN_MANAGECONTACTUS,
    icon: (
      <FaTasks fill="var(--icon-fill-color)" className="fa-sidebar-icons" />
    ),
    eventKey: "adminManageContactUs",
  },
];

export const DoctorSidebarData = [
  {
    title: "Dashboard",
    path: PATH.DOCOTOR_DASHBOARD,
    icon: <Image className="sidebar-icons" src={IMAGES.SIDEBARDASHBOARDICON} />,
    eventKey: "doctorDashboard",
  },
  {
    title: "Manage Profile",
    path: PATH.DOCTOR_MANAGEPROILE,
    icon: (
      <Image className="sidebar-icons" src={IMAGES.SIDEBARMANAGEPROFILEICON} />
    ),
    eventKey: "docManageProfile",
  },
  {
    title: "Income",
    path: PATH.DOCTOR_INCOME,
    icon: (
      <FaDollarSign
        fill="var(--icon-fill-color)"
        className="fa-sidebar-icons"
      />
    ),
    eventKey: "docIncome",
  },
  {
    title: "Prescription",
    path: PATH.DOCTOR_PRESCRIPTION,
    icon: (
      <Image className="sidebar-icons" src={IMAGES.SIDEBARPRESCRIPTIONICON} />
    ),
    eventKey: "docPrescription",
  },
  {
    title: "Community Forum",
    path: PATH.DOCTOR_COMMUNITYFORUM,
    icon: <Image className="sidebar-icons" src={IMAGES.SIDEBARCOMMUNITYICON} />,
    eventKey: "docCommunityForum",
  },
  {
    title: "Appointments",
    path: PATH.DOCTOR_APPOINTMENTS,
    icon: (
      <Image className="sidebar-icons" src={IMAGES.SIDEBARAPPOINTMENTSICON} />
    ),
    eventKey: "ManageAppointment",
    // subNav: [
    //     {
    //         title: "Manage Appointments",
    //         path: PATH.DOCTOR_APPOINTMENT_FEE,
    //         icon: IMAGES.AUTHLOGO,
    //         eventKey: "ManageAppointments",
    //     },
    //     {
    //         title: "List of Appointments",
    //         path: PATH.DOCTOR_COMMUNITYFORUM,
    //         icon: IMAGES.ASIALOGO,
    //         eventKey: "ListOfAppointments",
    //     },
    // ]
  },
  // {
  //   title: "Appointments List",
  //   path: PATH.DOCTOR_LIST_OF_APPOINTMENTS,
  //   icon: (
  //     <FaListUl fill="var(--icon-fill-color)" className="fa-sidebar-icons" />
  //   ),
  //   eventKey: "docListOfAppointments",
  // },
];

export const PatientSidebarData = [
  {
    title: "Dashboard",
    path: PATH.PATIENT_DASHBOARD,
    icon: <Image className="sidebar-icons" src={IMAGES.SIDEBARDASHBOARDICON} />,
    eventKey: "patientDashboard",
  },
  {
    title: "My Vitals",
    path: PATH.PATIENT_MYVITALS,
    icon: <Image className="sidebar-icons" src={IMAGES.SIDEBARDASHBOARDICON} />,
    eventKey: "patientMyVitals",
  },
  {
    title: "Payment Details",
    path: PATH.PATIENT_PAYMENTDETAILS,
    icon: <Image className="sidebar-icons" src={IMAGES.SIDEBARMEDCONVOICON} />,
    eventKey: "patientPaymentDetails",
  },
  {
    title: "Manage Profile",
    path: PATH.PATIENT_MANAGEPROFILE,
    icon: (
      <Image className="sidebar-icons" src={IMAGES.SIDEBARMANAGEPROFILEICON} />
    ),
    eventKey: "patientManageProfile",
  },
  {
    title: "Find a Doctor",
    path: PATH.PATIENT_SEARCHDOCTOR,
    icon: <Image className="sidebar-icons" src={IMAGES.SIDEBARSEARCHICON} />,
    eventKey: "patientSeachDoctor",
  },
  {
    title: "Appointment",
    path: PATH.PATIENT_APPOINTMENT,
    icon: (
      <Image className="sidebar-icons" src={IMAGES.SIDEBARAPPOINTMENTSICON} />
    ),
    eventKey: "patientAppointments",
  },
  {
    title: "Prescription",
    path: PATH.PATIENT_PRESCRIPTION,
    icon: (
      <Image className="sidebar-icons" src={IMAGES.SIDEBARPRESCRIPTIONICON} />
    ),
    eventKey: "patientPrescription",
  },
  {
    title: "Ask a Query",
    path: PATH.PATIENT_ASKQUERY,
    icon: <Image className="sidebar-icons" src={IMAGES.SIDEBAREMRICON} />,
    eventKey: "patientAskQuery",
  },
  {
    title: "Community Forum",
    path: PATH.PATIENT_COMMUNITYFORUM,
    icon: <Image className="sidebar-icons" src={IMAGES.SIDEBARCOMMUNITYICON} />,
    eventKey: "patientCommunityForum",
  },
];
