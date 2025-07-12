import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Loading from "../../shared/loading/Loading";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const Managemembers = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: members,
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["member"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/members");
        return res?.data;
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  const handleRemove = async (email) => {
    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_URL}/updateRole/${email}`
      );
      console.log(res.data);
      if (res?.data?.modifiedCount) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch()
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (isPending) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-4 text-center">
        Manage Members
      </h2>
        {members.length > 0 ? <div className="overflow-x-auto p-4">
      
      <table className="table table-zebra w-full border">
        <thead className="bg-base-200 text-base font-semibold">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {members?.map((member, index) => (
            <tr key={member._id}>
              <td>{index + 1}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td className="text-center">
                <button
                  onClick={() => handleRemove(member.email)}
                  className="btn"
                >
                  <FaTrash color="red" className="mr-1" /> Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>: <p className="text-center py-5 font-bold text-xl">no found data now !</p>}
    </div>
  );
};

export default Managemembers;
