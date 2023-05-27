export const login = async (data) => {
  let res = await fetch("http://localhost:4000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  res = await res.json()
  return res;
};
export const register = async (data) => {
  let res = await fetch("http://localhost:4000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  res = await res.json()
  return res;
};
export const getDoctors = async (data) => {
  let res = await fetch("http://localhost:4000/users/doctors-list", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  res = await res.json()
  return res;
};
