import React, {  useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { FaCalendarCheck, FaEnvelope, FaUserAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Profile = () => {
  const [userData,setUserData] = useState({})
  const {name,email,accept_date,role,floor_no,block_name,image,apartment_no} = userData || {}
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()
  useEffect(()=>{
    const patchUser = async () => {
      const res = await axiosSecure.get(`/user/${user?.email}`)
      return setUserData(res?.data)
    }
    patchUser()
  },[axiosSecure,user])
  return (
    <div className="max-w-3xl mt-10 mx-auto p-6 bg-base-100 rounded-2xl shadow-md">
      <title>Dashboard || Profile</title>
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <img
          src={image}
          alt="User Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-primary"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-primary">
            <FaUserAlt /> {name}
          </h2>
          <p className="text-gray-600 flex items-center gap-2">
            <FaEnvelope /> {email}
          </p>
          <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
            <FaCalendarCheck /> Agreement Date:{" "}
            {role === "member" ?  <span className="font-medium">{accept_date && accept_date.split("T")[0].split("-").reverse().join("/") }</span> : "none"}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="divider my-6">Apartment Info</div>

      {/* Apartment Info */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="text-sm text-gray-500">Floor</p>
          {role === "member"? <p className="text-lg font-semibold text-primary">
            {floor_no }
          </p> : "none"}
        </div>
        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="text-sm text-gray-500">Block</p>
          {role === "member" ? <p className="text-lg font-semibold text-primary">
            {block_name || "none"}
          </p> : "none"}
        </div>
        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="text-sm text-gray-500">Room No</p>
          {role === "member" ? <p className="text-lg font-semibold text-primary">
            {apartment_no || "none"}
          </p> : "none"}
        </div>
      </div>
    </div>
  );
};

export default Profile;
