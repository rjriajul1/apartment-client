
import { useEffect, useState } from "react";
import {
  FaUserShield,
  FaUsers,
  FaUserFriends,
  FaBuilding,
  FaCheckCircle,
  FaDoorOpen,
} from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useAuth } from "../../../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";

const AdminProfile = () => {
  const [userData, setUserData] = useState({});
   const [totalRooms, setTotalRooms] = useState(0);
   const [bookingRooms,setBookingRooms] = useState(0)
   const [totalUsers,setTotalUsers] = useState(0)
   const [totalMembers,setTotalMembers] = useState(0)
   const axiosSecure = useAxiosSecure();
   const { user } = useAuth();
 
  const {
    name,
    email,
    role,
    image,
  } = userData || {};
  
//   user data load
  useEffect(() => {
    const patchUser = async () => {
      const res = await axiosSecure.get(`/user/${user?.email}`);
      return setUserData(res?.data);
    };
    patchUser();
  }, [axiosSecure, user]);

// total agreement count load
  useEffect(() => {
    const fetchApartmentCount = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_URL}/apartment-count`
        );
        setTotalRooms(data?.count);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchApartmentCount();
  }, []);

//  booking apartment total count load
  useEffect(() => {
    const fetchAgreementCount = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_URL}/agreement-count`
        );
        setBookingRooms(data?.count);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchAgreementCount();
  }, []);


//   total user  count 
  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_URL}/user-count`
        );
        setTotalUsers(data?.count);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchUserCount();
  }, []);
  
//   total member count
  useEffect(() => {
    const fetchMemberCount = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_URL}/member-count`
        );
        setTotalMembers(data?.count);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchMemberCount();
  }, []);

 const availableRooms = totalRooms - bookingRooms;
 


  const availablePercentage = ((availableRooms / totalRooms) * 100).toFixed(1);
  const agreedPercentage = ((bookingRooms / totalRooms) * 100).toFixed(1);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      {/* Profile Info */}
      <div className="bg-base-100 p-6 rounded-xl shadow-lg flex items-center gap-6">
        <img
          src={image}
          alt="Admin"
          className="w-20 h-20 rounded-full border-4 border-primary"
        />
        <div>
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <FaUserShield className="text-primary" /> {name}
          </h2>
          <p className="text-gray-500 text-lg">{email}</p>
          <p className="text-sm text-primary">Role: {role}</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Rooms */}
        <div className="bg-base-100 rounded-xl shadow-md p-5 text-center">
          <FaBuilding className="text-4xl text-secondary mx-auto mb-2" />
          <h3 className="text-xl font-semibold">Total Rooms</h3>
          <p className="text-3xl font-bold">{totalRooms}</p>
        </div>

        {/* Available Percentage */}
        <div className="bg-base-100 rounded-xl shadow-md p-5 text-center">
          <FaDoorOpen className="text-4xl text-green-500 mx-auto mb-2" />
          <h3 className="text-xl font-semibold">Available Rooms</h3>
          <p className="text-2xl font-bold text-green-600">
            {availablePercentage}%
          </p>
        </div>

        {/* Agreed Percentage */}
        <div className="bg-base-100 rounded-xl shadow-md p-5 text-center">
          <FaCheckCircle className="text-4xl text-red-500 mx-auto mb-2" />
          <h3 className="text-xl font-semibold">Agreed Rooms</h3>
          <p className="text-2xl font-bold text-red-600">{agreedPercentage}%</p>
        </div>

        {/* Total Users */}
        <div className="bg-base-100 rounded-xl shadow-md p-5 text-center">
          <FaUsers className="text-4xl text-blue-600 mx-auto mb-2" />
          <h3 className="text-xl font-semibold">Total Users</h3>
          <p className="text-3xl font-bold">{totalUsers}</p>
        </div>

        {/* Total Members */}
        <div className="bg-base-100 rounded-xl shadow-md p-5 text-center">
          <FaUserFriends className="text-4xl text-violet-600 mx-auto mb-2" />
          <h3 className="text-xl font-semibold">Total Members</h3>
          <p className="text-3xl font-bold">{totalMembers}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
