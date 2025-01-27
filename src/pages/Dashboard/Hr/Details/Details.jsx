import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartContainer } from "@/components/ui/chart";
const Details = () => {
  const data = useLoaderData();
  const formatPayment = data.paymentDetails.map((payment) => ({
    ...payment,
    combinedDate: `${payment.month} ${payment.year}`, // Example: "January 2025"
  }));
  const chartConfig = {
    salary: {
      label: "Salary",
      color: "#ff63db",
    },
  };
  return (
    <div>
      <section>
        <img
          src={data.employeeDetails.photoURL}
          className="w-20  h-20 border-2 rounded-full mx-auto border-secondary-1 shadow-lg"
          alt=""
        />
        <h4 className="font-bold text-primary-1 text-xl text-center mt-2">
          {data.employeeDetails.name}
        </h4>
        <p className="text-center text-gray-600">
          {data.employeeDetails.designation}
        </p>
        <div className="w-full h-28 bg-banner -mt-24"></div>
      </section>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full mt-10">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={formatPayment} maxBarSize={90}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="combinedDate"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              dataKey="salary"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <Tooltip />
            <Bar dataKey="salary" fill={chartConfig.salary.color} radius={4} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default Details;
