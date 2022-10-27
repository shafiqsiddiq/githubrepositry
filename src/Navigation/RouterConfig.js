import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { WEB_PAGES } from "../components";
import { PATH } from "../config";
import PublicRoute from "./Auth/PublicRoute";
import PrivateRoute from "./Auth/PrivateRoute";
import { useLocation } from "react-router-dom";
export const RouterConfig = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Switch>
        {/* List all public routes here */}

        <PublicRoute exact path={PATH.LANDINGPAGE}>
          <WEB_PAGES.LANDINGPAGE />
        </PublicRoute>

        <PublicRoute exact path={PATH.LOGIN}>
          <WEB_PAGES.LOGIN />
        </PublicRoute>
        <PrivateRoute exact path={PATH.PATIENT_DASHBOARD}>
          <WEB_PAGES.PATIENT_DASHBOARD />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.DOCOTOR_DASHBOARD}>
          <WEB_PAGES.DOCTOR_DASHBOARD />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.PATIENT_MYVITALS}>
          <WEB_PAGES.PATIENT_MYVITALS />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.PATIENT_MANAGEPROFILE}>
          <WEB_PAGES.PATIENT_MANAGEPROFILE />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.PATIENT_PRESCRIPTION}>
          <WEB_PAGES.PATIENT_PRESCRIPTION />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.PATIENT_PAYMENTDETAILS}>
          <WEB_PAGES.PATIENT_PAYMENTDETAILS />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.PATIENT_SEARCHDOCTOR}>
          <WEB_PAGES.PATIENT_SEARCHDOCTOR />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.PATIENT_COMMUNITYFORUM}>
          <WEB_PAGES.PATIENT_COMMUNITYFORUM />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.PATIENT_ASKQUERY}>
          <WEB_PAGES.PATIENT_ASKQUERY />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.PATIENT_APPOINTMENT}>
          <WEB_PAGES.PATIENT_APPOINTMENT />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.PATIENT_BOOKAPPOINTMENT}>
          <WEB_PAGES.PATIENT_BOOKAPPOINTMENT />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.DOCTOR_MANAGEPROILE}>
          <WEB_PAGES.DOCTOR_MANAGEPROILE />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.DOCTOR_INCOME}>
          <WEB_PAGES.DOCTOR_INCOME />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.DOCTOR_PRESCRIPTION}>
          <WEB_PAGES.DOCTOR_PRESCRIPTION />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.DOCTOR_APPOINTMENT_FEE}>
          <WEB_PAGES.DOCTOR_APPOINTMENT_FEE />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.DOCTOR_COMMUNITYFORUM}>
          <WEB_PAGES.DOCTOR_COMMUNITYFORUM />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.DOCTOR_APPOINTMENTS}>
          <WEB_PAGES.DOCTOR_APPOINTMENTS />
        </PrivateRoute>

        {/* <PrivateRoute exact path={PATH.DOCTOR_MANAGE_APPOINTMENT}>
          <WEB_PAGES.DOCTOR_MANAGE_APPOINTMENTS />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.DOCTOR_LIST_OF_APPOINTMENTS}>
          <WEB_PAGES.DOCTOR_LIST_OF_APPOINTMENTS />
        </PrivateRoute> */}
        <PrivateRoute exact path={PATH.ADMIN_DASHBOARD}>
          <WEB_PAGES.ADMIN_DASHBOARD />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.ADMIN_DOCTORLIST}>
          <WEB_PAGES.ADMIN_DOCTORLIST />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.ADMIN_PATIENTLIST}>
          <WEB_PAGES.ADMIN_PATIENTLIST />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.ADMIN_CALLLOGS}>
          <WEB_PAGES.ADMIN_CALLLOGS />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.ADMIN_MANAGEQUERY}>
          <WEB_PAGES.ADMIN_MANAGEQUERY />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.ADMIN_PAYMENTDETAILS}>
          <WEB_PAGES.ADMIN_PAYMENTDETAILS />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.ADMIN_FAQS}>
          <WEB_PAGES.ADMIN_FAQS />
        </PrivateRoute>

        <PrivateRoute exact path={PATH.ADMIN_MANAGECONTACTUS}>
          <WEB_PAGES.ADMIN_MANAGECONTACTUS />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.CHAT}>
          <WEB_PAGES.CHATSCREEN />
        </PrivateRoute>
        <Route path={PATH.NOPAGE} component={WEB_PAGES.NOPAGE} />
      </Switch>
    </div>
  );
};
