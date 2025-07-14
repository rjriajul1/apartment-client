import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaPlus} from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loading from "../../shared/loading/Loading";
import { useState } from "react";

const ManageCoupons = () => {
  const [processing, setProcessing] = useState(false);


  const {data:coupons,refetch,isPending} = useQuery({
    queryKey: ['coupon'],
    queryFn: async () => {
        const {data} = await axios.get(`${import.meta.env.VITE_URL}/coupons`)
      return data
    }
    
  })


  const handleSubmit = async (e) => {
    setProcessing(true)
    e.preventDefault();
    const form = e.target;
    const code = form.code.value;
    const discount = parseFloat(form.discount.value);
    const description = form.description.value;

    const newCoupon = { code, discount, description };
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_URL}/add-coupon`,
        newCoupon
      );
      if (res?.data?.insertedId) {
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
    }finally{
      setProcessing(false)
    }
   
    // Close modal
    document.getElementById("add_coupon_modal").checked = false;
    form.reset();
  };
  if(isPending){
    return <Loading/>
  }
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Manage Coupons </h2>
        <label htmlFor="add_coupon_modal" className="btn btn-primary">
          <FaPlus /> Add Coupon
        </label>
      </div>

      <div className="overflow-x-auto rounded-xl shadow">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Coupon Code</th>
              <th>Discount (%)</th>
              <th className="text-center">Description</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td className="font-bold text-primary">{coupon.code}</td>
                <td>{coupon.discount}%</td>
                <td className="whitespace-nowrap overflow-hidden">
                  {coupon.description}
                </td>
              </tr>
            ))}
            {!coupons.length && (
              <tr>
                <td colSpan={5} className="text-center text-gray-500 py-6">
                  No coupons found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <input type="checkbox" id="add_coupon_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Add New Coupon</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="code"
              type="text"
              className="input input-bordered w-full"
              placeholder="Coupon Code"
              required
            />
            <input
              name="discount"
              type="number"
              className="input input-bordered w-full"
              placeholder="Discount %"
              required
            />
            <textarea
              name="description"
              className="textarea textarea-bordered w-full"
              placeholder="Description"
              required
            />
            <div className="modal-action">
              <button disabled={processing} type="submit" className="btn btn-primary">
                Submit
              </button>
              <label htmlFor="add_coupon_modal" className="btn">
                Cancel
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageCoupons;
