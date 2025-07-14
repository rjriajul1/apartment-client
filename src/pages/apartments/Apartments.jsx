import React, { useEffect, useState } from "react";
import ApartmentCard from "../apartmentCard/ApartmentCard";
import axios from "axios";
import { toast } from "react-toastify";

const Apartments = () => {
  // State to hold apartment data fetched from backend
  const [apartments, setApartments] = useState([]);

  // State to hold total apartment count (used for pagination)
  const [count, setCount] = useState(0);

  // State to control how many items are shown per page
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // State to track the current page number
  const [currentPage, setCurrentPage] = useState(0);

  // States for rent range filtering
  const [minRent, setMinRent] = useState("");
  const [maxRent, setMaxRent] = useState("");

  // Calculate total number of pages
  const numberOfPages = Math.ceil(count / itemsPerPage);

  // Create an array of page numbers
  const pages = [...Array(numberOfPages).keys()];

  // Fetch paginated apartment data from backend
  useEffect(() => {
    const fetchApartment = async () => {
      try {
        const res = await axios(
          `${import.meta.env.VITE_URL}/apartments?page=${currentPage}&size=${itemsPerPage}`
        );
        setApartments(res?.data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchApartment();
  }, [currentPage, itemsPerPage]);

  // Fetch total apartment count for pagination
  useEffect(() => {
    const fetchApartmentCount = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_URL}/apartment-count`
        );
        setCount(data?.count);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchApartmentCount();
  }, []);

  // Handle per page change
  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0); // reset to page 0
  };

  // Go to previous page
  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  // Go to next page
  const handleNext = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
  };

  // Jump to selected page
  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  // Filter apartments based on rent range (client-side filtering)
  const filteredApartments = apartments.filter((apt) => {
    const min = parseInt(minRent) || 0;
    const max = parseInt(maxRent) || Infinity;
    return apt.rent >= min && apt.rent <= max;
  });

  return (
    <div className="max-w-[1600px] mx-auto py-20 px-4">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Available Apartments for Rent
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Browse our selection of comfortable and modern apartments. Find the
          perfect match for your lifestyle and budget — agreements are just one
          click away!
        </p>
      </div>

      {/* Rent filter input section */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <input
          type="number"
          placeholder="Min Rent"
          value={minRent}
          onChange={(e) => setMinRent(e.target.value)}
          className="input input-bordered w-36"
        />
        <input
          type="number"
          placeholder="Max Rent"
          value={maxRent}
          onChange={(e) => setMaxRent(e.target.value)}
          className="input input-bordered w-36"
        />
        <button
          className="btn btn-outline btn-sm"
          onClick={() => {
            setMinRent("");
            setMaxRent("");
          }}
        >
          Clear Filter
        </button>
      </div>

      {/* Apartment Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredApartments?.map((apartment) => (
          <ApartmentCard
            setCurrentPage={setCurrentPage}
            key={apartment._id}
            apartment={apartment}
          />
        ))}
      </div>

      {/* Pagination and items-per-page controller */}
      <div className="mt-10 flex justify-center items-center gap-2 flex-wrap">
        <button className="btn" onClick={handlePrev}>
          Prev
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handleCurrentPage(page)}
            className={
              currentPage === page
                ? "btn bg-primary text-white"
                : "btn btn-outline"
            }
          >
            {page + 1}
          </button>
        ))}

        <button className="btn" onClick={handleNext}>
          Next
        </button>

        {/* Items per page dropdown */}
        <select
          className="outline rounded-md p-2"
          value={itemsPerPage}
          onChange={handleItemsPerPage}
        >
          <option value="6">6</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Apartments;
