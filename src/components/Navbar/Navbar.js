import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h1>Admin Dashboard</h1>
        <div className="icons">
          <IoMdNotifications />
          <CgProfile />
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default Navbar;
