import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import AuthContext from "@/provider/AuthContext";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {
    data: userData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users/${user?.email}`);
      return data;
    },
  });
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <section>
        <img
          src={userData?.photoURL}
          className="w-20  h-20  rounded-full mx-auto "
          alt=""
        />
        <h4 className="font-bold text-primary-1 text-xl text-center mt-2">
          {userData?.name}
        </h4>

        <div className="bg-banner shadow-xl rounded-lg -mt-16 pt-20 p-6 max-w-lg mx-auto border-t-4 border-primary-1">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-700 font-medium">Email:</p>
              <p className="text-gray-900">{userData?.email}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-700 font-medium">Account Number:</p>
              <p className="text-gray-900">{userData?.account}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-700 font-medium">Salary:</p>
              <p className="text-gray-900">${userData?.salary}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-700 font-medium">Role:</p>
              <p className="text-gray-900">{userData?.role}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-700 font-medium">Designation:</p>
              <p className="text-gray-900">{userData?.designation}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
