import AuthContext from "@/provider/AuthContext";
import axios from "axios";
import React, { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          logOut()
            .then(() => {
              // redirect to the login page
              navigate("/login");
            })
            .catch((err) => {
              // console.log(err)
            });
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return axiosInstance;
};

export default useAxiosSecure;
