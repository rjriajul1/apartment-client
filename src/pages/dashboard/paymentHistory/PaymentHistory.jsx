import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useAuth } from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { FaReceipt } from "react-icons/fa";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    const fetchingPayment = async () => {
      try {
        const { data } = await axiosSecure.get(
          `/paymentHistory/${user?.email}`
        );
        setPayments(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchingPayment();
  }, [axiosSecure, user]);
  return (
    <div className="overflow-x-auto p-6">
      <title>Dashboard || Payment History</title>
      <h2 className="text-3xl font-bold text-primary mb-6 text-center flex items-center justify-center gap-2">
        <FaReceipt /> My Payment History
      </h2>

      <table className="table table-zebra w-full border rounded-xl shadow">
        <thead className="bg-base-200">
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Apartment</th>
            <th>Floor</th>
            <th>Block</th>
            <th>Month</th>
            <th>Amount</th>
            <th>Transaction ID</th>
          </tr>
        </thead>
        <tbody>
          {payments?.map((payment, idx) => (
            <tr key={payment._id || idx}>
              <td>{idx + 1}</td>
              <td className="flex items-center gap-2">
                <img

                  src={payment.customer_photo}
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{payment.customer_name}</p>
                  <p className="text-sm text-gray-500">
                    {payment.customer_email}
                  </p>
                </div>
              </td>
              <td>{payment.apartment_no}</td>
              <td>{payment.floor_no}</td>
              <td>{payment.block_name}</td>
              <td>{payment.month}</td>
              <td className="text-green-600 font-semibold">
                ৳ {payment.amount}
              </td>
              <td className="text-sm break-all text-blue-600 font-mono">
                {payment.transactionId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
