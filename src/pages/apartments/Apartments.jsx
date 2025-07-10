import React, { useEffect, useState } from "react";
import ApartmentCard from "../apartmentCard/ApartmentCard";
import axios from "axios";
import { toast } from "react-toastify";

const Apartments = () => {
  // all apartment data
  const [apartments, setApartments] = useState([]);

  // total apartment count
  const [count, setCount] = useState(0);

  // per page data show
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // current page number
  const [currentPage, setCurrentPage] = useState(0);

  // how many page calculated by the total data and perPage
  const numberOfPages = Math.ceil(count / itemsPerPage);

  // page array ta converted
  const pages = [...Array(numberOfPages).keys()];

  // page and size ways data load
  useEffect(() => {
    const fetchApartment = async () => {
      try {
        const res = await axios(
          `${
            import.meta.env.VITE_URL
          }/apartments?page=${currentPage}&size=${itemsPerPage}`
        );
        setApartments(res?.data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchApartment();
  }, [currentPage, itemsPerPage]);

  // total data count load
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

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    console.log(val);
    setItemsPerPage(val);
    setCurrentPage(0);
  };
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }

    // aii vabe korla problem porta hobe
    // setCurrentPage(currentPage - 1)
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

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
        {apartments?.map((apartment) => (
          <ApartmentCard
            key={apartment._id}
            apartment={apartment}
          ></ApartmentCard>
        ))}
      </div>
      <div className="">
        <p className="text-center py-10">count page : {currentPage}</p>

        <div className="flex justify-center flex-wrap gap-2">
          <button className="btn " onClick={handlePrev}>
            Prev
          </button>

          {pages?.map((page) => (
            <button
              className={currentPage === page ? "btn bg-amber-200" : "btn "}
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}

          <button className="btn" onClick={handleNext}>
            Next
          </button>

          <select
            className=" outline rounded-md p-2"
            value={itemsPerPage}
            onChange={handleItemsPerPage}
          >
            <option value="5">6</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Apartments;
