import React, { useState } from "react";
import { HiUserAdd } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Dashboard = () => {
  const [ActiveMenu, setActiveMenu] = useState("");
  const location = useLocation()
  console.log(location)
  const isActive = (tab) => {
    switch (tab) {
      case ActiveMenu:
        return true;

      default:
        break;
    }
  };
  return (
    <div className="content flex-column">
      <nav className="w-100 h--90 border"></nav>
      <div className="sidebar d-flex h-100 w--220 flex-column border">
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
        </div>
        <div
          className={`sidebar-item ${
            isActive("Demo3") ? "active" : ""
          } d-flex c--pointer h--60 gap-5`}
          onClick={() => setActiveMenu("Demo3")}
        >
          <div className="d-flex align-items-center ml--20">
            <HiUserAdd style={{ width: "20px", height: "20px" }} />
          </div>
          <h4 className="d-flex align-items-center justify-content-center">
            Demo 3
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
