import React from "react";
import { HiUserAdd } from "react-icons/hi";
import { Tooltip } from "react-tooltip";

const Dashboard = () => {
  return (
    <div className="content flex-column">
      <nav className="w-100 h--90 border"></nav>
      <div className="sidebar d-flex h-100 w--220 flex-column border">
        <div className="sidebar-item d-flex c--pointer h--60 gap-5">
          <div className="d-flex align-items-center ml--20">
            <HiUserAdd style={{ width: "20px", height: "20px" }} />
          </div>
          <h4 className="d-flex align-items-center justify-content-center">Patient Admission</h4>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
