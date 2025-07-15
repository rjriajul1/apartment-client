import axios from "axios";
import React from "react";
import { useAuth } from "./useAuth";
const axiosSecure = axios.create({
  baseURL: "https://apartment-server.vercel.app",
});
const useAxiosSecure = () => {
  const { user } = useAuth();
  axiosSecure.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${user?.accessToken}`;
    return config;
  });
  return axiosSecure;
};
export default useAxiosSecure;
