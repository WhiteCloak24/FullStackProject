import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);

  const handleLogin = () => {
    if(email==='yash@gmail.com' && password==='111111'){
        setShowError(false)
    }else{
        setShowError(true)
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
        <div
          style={{
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:'column'
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
          {showError &&  <p style={{color:'red'}} >Invalid Credentials</p> }
        </div>
      </div>
    </div>
  );
};

export default Login;
