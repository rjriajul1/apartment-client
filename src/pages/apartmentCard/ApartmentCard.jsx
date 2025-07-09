import { FaHouseUser, FaMoneyBillWave, FaLayerGroup } from "react-icons/fa";

const ApartmentCard = ({ apartment }) => {
  const { apartmentImage, floorNo, blockName, apartmentNo, rent } = apartment;

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
            <span className="text-base font-semibold text-green-600">৳{rent}</span>
          </div>
        </div>

        <button className="btn btn-sm btn-accent w-full mt-2 rounded-xl">
          Agreement
        </button>
      </div>
    </div>
  );
};

export default ApartmentCard;
