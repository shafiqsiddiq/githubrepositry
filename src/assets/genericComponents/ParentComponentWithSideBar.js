
import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import SideBar from "./SideBar.js";
import Header from "./header.js";
export function ParentComponentWithSideBar({ children, ...rest }) {
  
// function SideBarWithHeader() {
  const [sideBarState, setsideBarState] = useState(false);
  const [mobileHeader, setMobileHeader] = useState(null);
  const [windowWidth, setWindowWidth] = useState(null);

  const resizeFunction = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

    useEffect(() => {
      window.addEventListener('resize', resizeFunction)
      window.addEventListener('DOMContentLoaded', resizeFunction)
    })

  return (
    <div
      className={`${
        sideBarState === true ? "sideBar-expanded" : "sideBar-collapsed"
      } page-content`}
    >
      <SideBar sideBarState={sideBarState} setsideBarState={setsideBarState} mobileHeader={mobileHeader} setMobileHeader={setMobileHeader} windowWidth={windowWidth} />
      <Header  value={mobileHeader} setFunc={setMobileHeader} windowWidth={windowWidth} 
      />
      <main className="main-area">
        <Container fluid className="container-dashboard-inside p-3">
          {children}
        </Container>
      </main>
    </div>
  );
}
