import React, { useEffect, useState } from "react";
import ApartmentCard from "../apartmentCard/ApartmentCard";
import axios from "axios";
import { toast } from "react-toastify";
// import { useQuery } from "@tanstack/react-query";
import Loading from "../shared/loading/Loading";

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

  // const {
  //   data: apartments,
  //   refetch,
  //   error,
  //   isPending,
  // } = useQuery({
  //   queryKey: ["apartments"],
  //   queryFn: async () => {
  //     try {
  //       const res = await axios(
  //         `${
  //           import.meta.env.VITE_URL
  //         }/apartments?page=${currentPage}&size=${itemsPerPage}`
  //       );
      
  //       return res?.data;
  //     } catch {
  //       toast.error(error.message);
  //     }
  //   },
  // });

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
    // refetch();
    setItemsPerPage(val);
    setCurrentPage(0);
  };
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
    // refetch();

    // aii vabe korla problem porta hobe
    // setCurrentPage(currentPage - 1)
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
    // refetch();
  };

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
    // refetch();
  };

  // if (isPending) {
  //   return <Loading />;
  // }

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
            // refetch={refetch}
            setCurrentPage={setCurrentPage}
            key={apartment._id}
            apartment={apartment}
          ></ApartmentCard>
        ))}
      </div>
      <div className="mt-4">
        <div className="flex justify-center flex-wrap gap-2">
          <button className="btn " onClick={handlePrev}>
            Prev
          </button>

          {pages?.map((page) => (
            <button
              className={currentPage === page ? "btn bg-amber-200" : "btn "}
              key={page}
              onClick={() => handleCurrentPage(page)}
            >
              {page + 1}
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
