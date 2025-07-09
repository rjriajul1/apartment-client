import React from "react";
import { useLoaderData } from "react-router";
import ApartmentCard from "../apartmentCard/ApartmentCard";

const Apartments = () => {
  const apartments = useLoaderData();
  console.log(apartments);
  return (
    <div className=" max-w-[1600px] mx-auto py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Available Apartments for Rent
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Browse our selection of comfortable and modern apartments. Find the
          perfect match for your lifestyle and budget — agreements are just one
          click away!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
       {apartments?.map(apartment=><ApartmentCard key={apartment._id} apartment={apartment}></ApartmentCard>)}
      </div>
    </div>
  );
};

export default Apartments;
