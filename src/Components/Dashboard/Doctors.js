import React from "react";
import { useQuery } from "react-query";
import { getDoctors } from "../../Helpers/apiFunctions";

const Doctors = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users-list"],
    queryFn: getDoctors,
  });
console.log(data)
  return <div>Doctors</div>;
};

export default Doctors;
