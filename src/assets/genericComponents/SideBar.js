import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { IMAGES } from "../../assets/images/index.js";
import { Image } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { useAuth } from "../../Navigation/Auth/ProvideAuth";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import {
  PatientSidebarData,
  DoctorSidebarData,
  AdminSidebarData,
} from "./SideBarData";
import { PATH } from "../../config.js";
import { BsChatDots } from "react-icons/bs";
// console.log("cookies:::", cookies);
function SideBar({
  sideBarState,
  setsideBarState,
  mobileHeader,
  setMobileHeader,
  windowWidth,
}) {
  let history = useHistory();
  const ChangePath = (path) => {
    history.push(path);
  };
  let auth = useAuth();
  // eslint-disable-next-line
  const [cookies, remove] = useCookies(["innova_user"]);

  return (
    <SideNav
      style={{
        display: windowWidth > 992 || mobileHeader ? "block" : "none",
      }}
      className={`${
        windowWidth > 992 || mobileHeader
          ? "drop-down-shadow-sidebar"
          : "no-drop-down-shadow-sidebar"
      } sidebar_nav`}
      onSelect={(selected) => {
        // Add your code heres
      }}
      onToggle={(toggleState) => {
        setsideBarState(toggleState);
        setMobileHeader(toggleState);
      }}
      expanded={mobileHeader}
    >
      <SideNav.Toggle className="toggle-btn" />
      <SideNav.Nav
        // defaultSelected={
        //   auth &&
        //   auth.innova_user.role &&
        //   auth.innova_user.role.toLowerCase() + "Dashboard"
        // }
        className="menu-list"
      >
        <NavItem className="sidebar-top">
          <div>
            {auth &&
            auth.innova_user &&
            auth.innova_user.role &&
            auth.innova_user.role === "Doctor" ? (
              <Image
                src={IMAGES.DOCTORPROFILEIMAGE}
                className="my-2 dashboard_avatar"
              />
            ) : auth &&
              auth.innova_user &&
              auth.innova_user.role &&
              auth.innova_user.role === "Patient" ? (
              <Image
                src={IMAGES.PATIENTPROFILEIMAGE}
                className="my-2 dashboard_avatar"
              />
            ) : auth &&
              auth.innova_user &&
              auth.innova_user.role &&
              auth.innova_user.role === "Admin" ? (
              <Image
                src={IMAGES.PATIENTPROFILEIMAGE}
                className="my-2 dashboard_avatar"
              />
            ) : (
              "No role is identified"
            )}

            <h6>{auth.innova_user.role} Name</h6>
            <p>{auth.innova_user.role}</p>
            {auth && auth.innova_user && auth.innova_user.role === "Patient" ? (
              <>
                <Link to="/Patient/ManageProfile" className="dashboard_btn">
                  Edit Profile
                </Link>

                <Link to="/Patient/ManageProfile">
                  <FaEdit
                    fill="var(--icon-fill-color)"
                    className="mb-3 edit-icon"
                  />
                </Link>
              </>
            ) : auth &&
              auth.innova_user &&
              auth.innova_user.role === "Doctor" ? (
              <>
                <Link to="/Doctor/ManageProfile" className="dashboard_btn">
                  Edit Profile
                </Link>

                <Link to="/Doctor/ManageProfile">
                  <FaEdit
                    fill="var(--icon-fill-color)"
                    className="mb-3 edit-icon"
                  />
                </Link>
              </>
            ) : (
              <>
                <Link to="" className="dashboard_btn">
                  Edit Profile
                </Link>

                <Link to="">
                  <FaEdit
                    fill="var(--icon-fill-color)"
                    className="mb-3 edit-icon"
                  />
                </Link>
              </>
            )}
          </div>
        </NavItem>
        {auth &&
        auth.innova_user &&
        auth.innova_user.role &&
        auth.innova_user.role === "Doctor"
          ? DoctorSidebarData.map((item, key) => {
              return (
                <NavItem
                  eventKey={item.eventKey}
                  onClick={() => ChangePath(item.path)}
                  active={
                    history.location.pathname.toLowerCase() ===
                    item.path.toLowerCase()
                      ? true
                      : false
                  }
                >
                  <NavIcon>{item.icon}</NavIcon>
                  <NavText className="sidebar-tab-text">{item.title}</NavText>
                </NavItem>
              );
            })
          : auth &&
            auth.innova_user &&
            auth.innova_user.role &&
            auth.innova_user.role === "Patient"
          ? PatientSidebarData.map((item, key) => {
              return (
                <NavItem
                  eventKey={item.eventKey}
                  onClick={() => ChangePath(item.path)}
                  active={
                    history.location.pathname.toLowerCase() ===
                    item.path.toLowerCase()
                      ? true
                      : false
                  }
                >
                  <NavIcon>{item.icon}</NavIcon>
                  <NavText className="sidebar-tab-text">{item.title}</NavText>
                </NavItem>
              );
            })
          : auth &&
            auth.innova_user &&
            auth.innova_user.role &&
            auth.innova_user.role === "Admin"
          ? AdminSidebarData.map((item, key) => {
              return (
                <NavItem
                  eventKey={item.eventKey}
                  onClick={() => ChangePath(item.path)}
                  active={
                    history.location.pathname.toLowerCase() ===
                    item.path.toLowerCase()
                      ? true
                      : false
                  }
                >
                  <NavIcon>{item.icon}</NavIcon>
                  <NavText className="sidebar-tab-text">{item.title}</NavText>
                </NavItem>
              );
            })
          : ""}
        {auth &&
          auth.innova_user &&
          auth.innova_user.role &&
          auth.innova_user.role === "Doctor" &&
          ""}
        {auth &&
          auth.innova_user &&
          auth.innova_user.role &&
          (auth.innova_user.role === "Doctor" ||
            auth.innova_user.role === "Patient") && (
            <NavItem
              eventKey="chat"
              onClick={() =>
                ChangePath(
                  PATH.CHAT.replace(
                    ":role",
                    auth.innova_user && auth.innova_user.role
                  )
                )
              }
              active={
                history.location.pathname.toLowerCase() ===
                PATH.CHAT.replace(
                  ":role",
                  auth.innova_user && auth.innova_user.role
                ).toLowerCase()
                  ? true
                  : false
              }
            >
              <NavIcon>
                <BsChatDots
                  fill="var(--icon-fill-color)"
                  style={{ width: "1.7em", height: "1.7em" }}
                />
              </NavIcon>
              <NavText className="sidebar-tab-text">Chat</NavText>
            </NavItem>
          )}
        <NavItem
          eventKey="logout"
          onClick={() => {
            remove("innova_user", { path: "/login" });
          }}
        >
          <NavIcon>
            <Image className="sidebar-icons" src={IMAGES.SIDEBARLOGOUTICON} />
          </NavIcon>
          <NavText className="sidebar-tab-text">Logout</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default SideBar;
