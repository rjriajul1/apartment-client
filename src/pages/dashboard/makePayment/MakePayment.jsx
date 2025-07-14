import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useAuth } from "../../../hooks/useAuth";
import { FaMoneyCheckAlt } from "react-icons/fa";
import Loading from "../../shared/loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const MakePayment = () => {
  const [agreements, setAgreements] = useState({});
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedMonth, setSelectedMonth] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState({});
  const [couponCode, setCouponCode] = useState("");

  useEffect(() => {
    if (agreements || user) {
      setOrderData({
        apartmentId: agreements?._id,
        apartment_no: agreements.apartment_no,
        block_name: agreements.block_name,
        floor_no: agreements?.floor_no,
        month: selectedMonth,
        customer_email: user?.email,
        customer_name: user?.displayName,
        customer_photo: user?.photoURL,
      });
    }
  }, [agreements, selectedMonth, user]);

  useEffect(() => {
    setSelectedMonth(agreements?.month);
  }, [agreements]);

  useEffect(() => {
    setLoading(true);
    const fetchAgreement = async () => {
      const res = await axiosSecure.get(`/agreementByEmail/${user?.email}`);
      setAgreements(res?.data);
    };
    fetchAgreement();
    setLoading(false);
  }, [axiosSecure, user]);

  const {
    data: coupon,
  } = useQuery({
    queryKey: ["couponsCode", couponCode],
    // enabled: !!couponCode,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_URL}/coupon-code?code=${couponCode}`
      );
      return res.data;
    },
  });

  const handleCoupon = (e) => {
    setCouponCode("");
    e.preventDefault();
    const code = e.target.code.value;
    setCouponCode(code);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-base-100 p-8 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-2 text-primary flex items-center gap-2">
        <FaMoneyCheckAlt /> Make a Payment
      </h2>
      <p className="text-gray-500 mb-6">Pay your rent securely and easily.</p>

      <div className="space-y-4">
        {/* Read-only fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="label">Member Email</label>
            <input
              type="email"
              readOnly
              value={agreements?.customer_email}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Floor</label>
            <input
              type="text"
              readOnly
              value={agreements?.floor_no}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Block</label>
            <input
              type="text"
              readOnly
              value={agreements?.block_name}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Room No</label>
            <input
              type="text"
              readOnly
              value={agreements?.apartment_no}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Rent Amount</label>
            <input
              type="text"
              readOnly
              value={`${agreements?.rent} BDT`}
              className="input input-bordered w-full"
            />
          </div>

          {/* Month selector */}
          <div>
            <label className="label">Month</label>
            <select
              className="select select-bordered w-full"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              required
            >
              <option disabled value="">
                Select month
              </option>
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month) => (
                <option key={month}>{month}</option>
              ))}
            </select>
          </div>
          <form className="grid md:grid-cols-2 gap-2" onSubmit={handleCoupon}>
            <input
              name="code"
              className="border p-2 rounded-md"
              placeholder="apply coupon code"
              type="text"
            />
            <button type="submit" className="btn ">
              Add Coupon
            </button>
          </form>
        </div>

        {/* Submit button */}
        {loading ? (
          <Loading />
        ) : (
          <div className="pt-4">
            <Elements stripe={stripePromise}>
              <CheckoutForm
                coupon={coupon}
                rent={agreements?.rent}
                status={agreements?.status}
                orderData={orderData}
              />
            </Elements>
          </div>
        )}
      </div>
    </div>
  );
};

export default MakePayment;
