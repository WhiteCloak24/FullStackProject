import React, { useState } from "react";
import { HiUserAdd } from "react-icons/hi";
const role = localStorage.getItem("role");
const Sidebar = ({ ActiveMenu, setActiveMenu }) => {
  const isActive = (tab) => {
    switch (tab) {
      case ActiveMenu:
        return true;

      default:
        break;
    }
  };

  return (
    <div className="sidebar d-flex h-100 w--220 flex-column border">
      {role === "STAFF" && (
        <>
          {" "}
          <div
            className={`sidebar-item ${
              isActive("AddPatient") ? "active" : ""
            } d-flex c--pointer h--60 gap-5`}
            onClick={() => setActiveMenu("AddPatient")}
          >
            <div className="d-flex align-items-center ml--20">
              <HiUserAdd style={{ width: "20px", height: "20px" }} />
            </div>
            <h4 className="d-flex align-items-center justify-content-center">
              Patient Admission
            </h4>
          </div>
          <div
            className={`sidebar-item ${
              isActive("Demo2") ? "active" : ""
            } d-flex c--pointer h--60 gap-5`}
            onClick={() => setActiveMenu("Demo2")}
          >
            <div className="d-flex align-items-center ml--20">
              <HiUserAdd style={{ width: "20px", height: "20px" }} />
            </div>
            <h4 className="d-flex align-items-center justify-content-center">
              Demo 2
            </h4>
          </div>{" "}
        </>
      )}
      {role === "HR" && (
        <>
          <div
            className={`sidebar-item ${
              isActive("add_user") ? "active" : ""
            } d-flex c--pointer h--60 gap-5`}
            onClick={() => setActiveMenu("add_user")}
          >
            <div className="d-flex align-items-center ml--20">
              <HiUserAdd style={{ width: "20px", height: "20px" }} />
            </div>
            <h4 className="d-flex align-items-center justify-content-center">
              Add User
            </h4>
          </div>
          <div
            className={`sidebar-item ${
              isActive("doctors") ? "active" : ""
            } d-flex c--pointer h--60 gap-5`}
            onClick={() => setActiveMenu("doctors")}
          >
            <div className="d-flex align-items-center ml--20">
              <HiUserAdd style={{ width: "20px", height: "20px" }} />
            </div>
            <h4 className="d-flex align-items-center justify-content-center">
              DOCTORS
            </h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
