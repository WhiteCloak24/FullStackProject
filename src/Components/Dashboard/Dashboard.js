import React, { useEffect, useState } from "react";
import { HiUserAdd } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import AddUser from "./AddUser";
import Sidebar from "../Sidebar";
import Doctors from "./Doctors";

const Dashboard = () => {
  const [role, setRole] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [ActiveMenu, setActiveMenu] = useState("");

  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, []);

  const setAddharHandler = (e) => {
    setAadhar(e.target.value);
  };
  return (
    <div className="content flex-column">
      <nav className="w-100 h--90 border">
        {" "}
        <h3>{role}</h3>
      </nav>
      <div className="d-flex h-100">
        <Sidebar ActiveMenu={ActiveMenu} setActiveMenu={setActiveMenu} />
        <div className="d-flex justify-content-center w-100">
          {role === "HR" && (
            <>
              {ActiveMenu === "add_user" && <AddUser />}
              {ActiveMenu === "doctors" && <Doctors />}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
