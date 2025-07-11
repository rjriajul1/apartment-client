import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import { FaCalendarCheck, FaEnvelope, FaUserAlt } from "react-icons/fa";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-100 rounded-2xl shadow-md">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <img
          src={user?.photoURL}
          alt="User Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-primary"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-primary">
            <FaUserAlt /> {user?.displayName}
          </h2>
          <p className="text-gray-600 flex items-center gap-2">
            <FaEnvelope /> {user?.email}
          </p>
          <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
            <FaCalendarCheck /> Agreement Date:{" "}
            {/* <span className="font-medium">{agreementDate || "none"}</span> */}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="divider my-6">Apartment Info</div>

      {/* Apartment Info */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="text-sm text-gray-500">Floor</p>
          <p className="text-lg font-semibold text-primary">
            {/* {apartment.floor} */}
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="text-sm text-gray-500">Block</p>
          <p className="text-lg font-semibold text-primary">
            {/* {apartment.block} */}
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="text-sm text-gray-500">Room No</p>
          <p className="text-lg font-semibold text-primary">
            {/* {apartment.roomNo} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
