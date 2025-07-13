import { FaHouseUser, FaMoneyBillWave, FaLayerGroup } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ApartmentCard = ({ apartment, setCurrentPage }) => {
  const { apartmentImage, floorNo, blockName, apartmentNo, _id, rent, status } =
    apartment;
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const handleAgreement = async () => {
    if (!user) {
     return navigate("/login");
    }
    const d = new Date();
    const month = d.toLocaleString("default", { month: "long" });
    const agreementData = {
      apartmentId: _id,
      customer_name: user?.displayName,
      customer_email: user?.email,
      floor_no: floorNo,
      block_name: blockName,
      apartment_no: apartmentNo,
      rent: rent,
      month,
      request_date: new Date().toISOString(),
      status: "pending",
    };

    try {
      const res = await axiosSecure.post("/agreement-add", agreementData);

      if (res?.data?.status === 200) {
        return toast.warn(res.data.message);
      }
      if (res?.data?.result?.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your apartment booking requested successful",
          showConfirmButton: false,
          timer: 1500,
        });
        setCurrentPage()
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="rounded-2xl shadow-lg bg-base-100 transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
      <div className="relative">
        <img
          src={apartmentImage}
          alt="Apartment"
          className="rounded-t-2xl h-48 w-full object-cover"
        />
        <span className="absolute top-2 right-2 badge badge-primary text-white">
          {apartmentNo}
        </span>
      </div>

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-bold flex items-center gap-2 text-primary">
          <FaHouseUser className="text-xl" />
          Block {blockName} - Floor {floorNo}
        </h2>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <FaLayerGroup className="text-primary" />
            <span>Floor: {floorNo}</span>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-500">
            <FaMoneyBillWave className="text-green-500" />
            <span className="text-base font-semibold text-green-600">
              ৳{rent}
            </span>
          </div>
        </div>

        <button
          disabled={status === "requested"}
          onClick={handleAgreement}
          className="btn btn-sm btn-accent w-full mt-2 rounded-xl"
        >
          {status === "requested" ? "already book" : "Agreement"}
        </button>
      </div>
    </div>
  );
};

export default ApartmentCard;
