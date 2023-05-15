import React, { useEffect, useState } from "react";
import { HiUserAdd } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Dashboard = () => {
  const [ActiveMenu, setActiveMenu] = useState("");
  const [role, setRole] = useState("");
  const[aadhar,setAadhar] = useState('')
  const location = useLocation();
  useEffect(() => {
    if (location?.state && location.state?.role) {
      setRole(location.state.role);
    }
  }, [location?.state]);
  const isActive = (tab) => {
    switch (tab) {
      case ActiveMenu:
        return true;

      default:
        break;
    }
  };
  const setAddharHandler=(e)=>{
      setAadhar(e.target.value)
  }
  return (
    <div className="content flex-column">
      <nav className="w-100 h--90 border">
        {" "}
        <h3>{role}</h3>
      </nav>
      <div className="d-flex h-100">
        <div className="sidebar d-flex h-100 w--220 flex-column border">
          {role === "staff" && (
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
          {role === "hr" && (
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
                Add User
              </h4>
            </div>
          )}
        </div>
        <div className="d-flex justify-content-center">
          <div>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Please enter Name.."
            />
          </div>
          <div>
            <input
              type="number"
              name="name"
              id=""
              placeholder="Please enter age"
            />
          </div>
          <div>
            <textarea
              name="address"
              id=""
              cols="30"
              rows="5"
              placeholder="Enter Address"
            ></textarea>
          </div>
          <div>
            <input type="text" value={aadhar} name="aadhar" id="" onChange={setAddharHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
