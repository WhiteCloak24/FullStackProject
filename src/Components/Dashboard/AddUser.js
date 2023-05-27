import React, { useState } from "react";
import { useMutation } from "react-query";
import { register } from "../../Helpers/apiFunctions";
import swal from "sweetalert";

const Roles = [
  { name: "Doctor", value: "DOCTOR" },
  { name: "Staff", value: "STAFF" },
];

const AddUser = () => {
  const [role, setRole] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { mutateAsync } = useMutation({
    mutationKey: ["register"],
    mutationFn: register,
  });

  const addNewUserHandler = async () => {
    let payload = {
      user_name: userName,
      email,
      phone,
      role,
    };
    let res = await mutateAsync(payload);
    if (res?.ResponseCode === "1") {
      swal({ icon: "success", text: res?.ResponseText });
    } else {
      swal({ icon: "error", text: res?.ResponseText });
    }
  };
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center w-100">
        <div>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Enter Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="phone"
            placeholder="Enter Phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label for="role">Select Role</label>
          <select
            name="role"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Option</option>
            {Roles &&
              Roles.map((role) => {
                return <option value={role.value}>{role.name}</option>;
              })}
          </select>
        </div>
        <div className="d-flex justify-content-center">
          <button type="button border-0" onClick={() => addNewUserHandler()}>
            Add New User
          </button>
        </div>
      </div>
    </>
  );
};

export default AddUser;
