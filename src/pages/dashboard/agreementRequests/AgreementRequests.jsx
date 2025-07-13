import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

import AgreementReqCard from "../agreementReqCard/AgreementReqCard";
import {
  useQuery,
} from '@tanstack/react-query'
import Loading from "../../shared/loading/Loading";
const AgreementRequests = () => {
  const axiosSecure = useAxiosSecure();

  const {data:requests,isPending,refetch} = useQuery({
      queryKey: ['agreementByStatus'],
      queryFn: async () => {
         try {
        const res = await axiosSecure.get("agreementByStatus");
        return res.data
      } catch (error) {
        toast.error(error.message);
      }
      }
  })
  if(isPending){
    return <Loading/>
  }
 
  return (
    <div>
      {requests.length > 0 ? <div className="grid gap-6 p-4 sm:grid-cols-2 xl:grid-cols-3">
      {requests?.map((req) => (
        <AgreementReqCard refetch={refetch}  req={req} key={req._id}></AgreementReqCard>
      ))}
    </div> : <p className="py-6 text-center font-bold text-2xl">not found any requests now !!</p>}
    </div>
  );
};

export default AgreementRequests;
