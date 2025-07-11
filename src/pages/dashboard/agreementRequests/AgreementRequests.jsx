import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

import AgreementReqCard from "../agreementReqCard/AgreementReqCard";

const AgreementRequests = () => {
  const axiosSecure = useAxiosSecure();
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const res = await axiosSecure.get("agreementByStatus");
        setRequests(res?.data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchRequest();
  }, [axiosSecure]);
  return (
    <div className="grid gap-6 p-4 sm:grid-cols-2 xl:grid-cols-3">
      {requests?.map((req) => (
        <AgreementReqCard setRequests={setRequests} req={req} key={req._id}></AgreementReqCard>
      ))}
    </div>
  );
};

export default AgreementRequests;
