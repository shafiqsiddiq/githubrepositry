import React from 'react';
import { useCookies } from 'react-cookie';
import { FaSignOutAlt } from "react-icons/fa";
export function SignOut() {
  const [cookies, remove] = useCookies(['innova_user']);
  console.log("cookies:::", cookies)
  return (
    <div onClick={() => { remove('innova_user', { path: "/" }) }} className="signOutContent">
      <FaSignOutAlt />
      <div className="SidebarLabel">
        {"Sign Out"}
      </div>
    </div>

  )
}