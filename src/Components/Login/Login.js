import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../../Helpers/apiFunctions";
import swal from "sweetalert";

const Roles = [
  { name: "Doctor", value: "DOCTOR" },
  { name: "HR", value: "HR" },
  { name: "Staff", value: "STAFF" },
];
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
  });
  const handleLogin = async () => {
    let payload = { email, password, role };
    let res = await mutateAsync(payload);
    if (res?.ResponseCode === "1") {
      localStorage.setItem("role", res.role);
      navigate("/dashboard");
    } else {
      swal({ icon: "error", text: "Invalid Credentials" });
    }
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "2px solid",
          height: "360px",
          width: "325px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", height: "60px" }}
        >
          Login
        </div>
        <div
          style={{
            height: "200px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "80%" }}
              type="email"
              placeholder="Enter Email"
              name="email"
              id=""
            />
          </div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "80%" }}
              type="password"
              placeholder="Enter Password"
              name="password"
              id=""
            />
          </div>
        </div>
        <div className="d-flex justify-content-center gap-5">
          <div className="d-flex bg--blue-1 pt-1 pb-1 px-3 w-20 ">Role</div>
          <div className="d-flex">
            <select
              name="role"
              id="role"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Option</option>
              {Roles &&
                Roles.map((role) => {
                  return <option value={role.value}>{role.name}</option>;
                })}
            </select>
          </div>
        </div>
        <div
          style={{
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              cursor: "pointer",
              background: "#3beb3b",
              padding: "5px 15px",
            }}
            onClick={() => handleLogin()}
          >
            Login
          </div>
          {showError && <p style={{ color: "red" }}>Invalid Credentials</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
