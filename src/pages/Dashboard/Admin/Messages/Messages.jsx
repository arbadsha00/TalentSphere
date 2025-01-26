import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { Separator } from "@/components/ui/separator";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import AuthContext from "@/provider/AuthContext";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const Messages = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: messages = [], isLoading } = useQuery({
    queryKey: ["messages", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/messages`);
      return data;
    },
  });
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div>
      <h3 className="text-primary-2 bg-sec text-center mb-3 text-2xl md:text-3xl font-bold">
        All Messages
      </h3>
      <Separator className="my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {messages.map((message) => (
          <Card key={message._id} className="w-full shadow-xl ">
            <CardHeader>
              <CardTitle className="text-base text-secondary-1">
                {message.email}
              </CardTitle>
              <CardDescription>{message.message}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Messages;
