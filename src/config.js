const ERROR = {
  SYSTEM_ERROR: "System error. Please try again later!",
};
const PATH = {
  NOPAGE: "*",
  LANDINGPAGE: "/",
  LOGIN: "/login",
  PATIENT_DASHBOARD: "/Patient/Dashboard",
  PATIENT_MYVITALS: "/Patient/MyVitals",
  PATIENT_MANAGEPROFILE: "/Patient/ManageProfile",
  PATIENT_PRESCRIPTION: "/Patient/Prescription",
  PATIENT_PAYMENTDETAILS: "/Patient/PaymentDetails",
  PATIENT_SEARCHDOCTOR: "/Patient/SearchDoctor",
  PATIENT_COMMUNITYFORUM: "/Patient/CommunityForum",
  PATIENT_ASKQUERY: "/Patient/AskQuery",
  PATIENT_APPOINTMENT: "/Patient/PatientAppointments",
  PATIENT_BOOKAPPOINTMENT: "/Patient/SearchDoctor",

  DOCOTOR_DASHBOARD: "/Doctor/Dashboard",
  DOCTOR_MANAGEPROILE: "/Doctor/ManageProfile",
  DOCTOR_INCOME: "/Doctor/Income",
  DOCTOR_PRESCRIPTION: "/Doctor/Prescription",
  DOCTOR_APPOINTMENT_FEE: "/Doctor/AppointmentFee",
  DOCTOR_COMMUNITYFORUM: "/Doctor/CommunityForum",
  DOCTOR_APPOINTMENTS: "/Doctor/Appointments",
  // DOCTOR_MANAGE_APPOINTMENT: "/Doctor/ManageAppointment",
  // DOCTOR_LIST_OF_APPOINTMENTS: "/Doctor/ListOfAppointmnents",
  ADMIN_DASHBOARD: "/Admin/Dashboard",
  ADMIN_DOCTORLIST: "/Admin/DoctorList",
  ADMIN_PATIENTLIST: "/Admin/PatientsList",
  ADMIN_CALLLOGS: "/Admin/CallLogs",
  ADMIN_MANAGEQUERY: "/Admin/ManageQuery",
  ADMIN_PAYMENTDETAILS: "/Admin/PaymentDetails",
  ADMIN_FAQS: "/Admin/FAQs",
  ADMIN_MANAGECONTACTUS: "/Admin/ManageContactUs",
  CHAT: "/:role/ChatScreen",
};

const baseUrl = "";
const APP_SETTINGS = {
  API_PATH: {
    LOGIN: {
      login: baseUrl + "login/post",
    },
  },
};
export { ERROR, PATH, APP_SETTINGS };
