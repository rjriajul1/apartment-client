import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useAuth } from "../../../hooks/useAuth";
import { FaMoneyCheckAlt } from "react-icons/fa";

const MakePayment = () => {
  const [agreements, setAgreements] = useState([]);
  const agreement = agreements[0];
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedMonth, setSelectedMonth] = useState("");

  useEffect(() => {
    setSelectedMonth(agreement?.month);
  }, [agreement]);

  useEffect(() => {
    const fetchAgreement = async () => {
      const res = await axiosSecure.get(`/agreementByEmail/${user?.email}`);
      setAgreements(res?.data);
    };
    fetchAgreement();
  }, [axiosSecure, user]);

 
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-base-100 p-8 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-2 text-primary flex items-center gap-2">
        <FaMoneyCheckAlt /> Make a Payment
      </h2>
      <p className="text-gray-500 mb-6">Pay your rent securely and easily.</p>

      <form className="space-y-4">
        {/* Read-only fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="label">Member Email</label>
            <input
              type="email"
              readOnly
              value={agreement?.customer_email}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Floor</label>
            <input
              type="text"
              readOnly
              value={agreement?.floor_no}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Block</label>
            <input
              type="text"
              readOnly
              value={agreement?.block_name}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Room No</label>
            <input
              type="text"
              readOnly
              value={agreement?.apartment_no}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Rent Amount</label>
            <input
              type="text"
              readOnly
              value={`${agreement?.rent} BDT`}
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
        </div>

        {/* Submit button */}
        <div className="pt-4">
          <button
            disabled={agreement?.status === "pending"}
            className="btn btn-primary w-full"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakePayment;
