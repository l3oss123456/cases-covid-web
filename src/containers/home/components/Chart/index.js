import React from "react";
import {
  BarChart,
  Bar,
  // Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  // ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const Covid19Chart = ({ chartData }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={600}
        height={300}
        data={chartData}
        layout="vertical"
        // layout="horizontal"
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis type="number" />
        <YAxis type="category" dataKey="country" />
        {/* <XAxis type="number" />
        <YAxis type="category" dataKey="country" /> */}
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="cases" fill="#8884d8" />
        <Bar dataKey="deaths" fill="red" />
        <Bar dataKey="recovered" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default Covid19Chart;
