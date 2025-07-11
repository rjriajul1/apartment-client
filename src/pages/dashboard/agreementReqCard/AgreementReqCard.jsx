import axios from "axios";
import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
const AgreementReqCard = ({ req }) => {
  const handleAccept = async (id) => {
    try {
      const res = await axios.patch(`${import.meta.env.VITE_URL}/accept/${id}`);
      console.log(res.data);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleReject = (id) => {};

  return (
    <div className="bg-white shadow-md rounded-xl border border-gray-200 p-5 hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-primary mb-1">
        {req?.customer_name}
      </h3>
      <p className="text-sm text-gray-600 mb-2">{req?.customer_email}</p>

      <div className="grid grid-cols-2 text-sm text-gray-700 gap-x-2 gap-y-1 mb-3">
        <span>Floor:</span> <span>{req.floor_no}</span>
        <span>Block:</span> <span>{req.block_name}</span>
        <span>Room No:</span> <span>{req.apartment_no}</span>
        <span>Rent:</span> <span>{req.rent} BDT</span>
        <span>Date:</span>{" "}
        <span>{req?.request_date ? req?.request_date.split("T")[0] : ""}</span>
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <button
          onClick={() => handleAccept(req._id)}
          className="btn btn-success "
        >
          <FaCheck size={14} /> Accept
        </button>
        <button
          onClick={() => handleReject(req._id)}
          className="btn btn-error "
        >
          <FaTimes size={14} /> Reject
        </button>
      </div>
    </div>
  );
};

export default AgreementReqCard;
