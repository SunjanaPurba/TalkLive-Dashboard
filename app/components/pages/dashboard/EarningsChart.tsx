import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface EarningsData {
  month: string;
  earnings: number;
}

const data: EarningsData[] = [
  { month: "Jan", earnings: 40000 },
  { month: "Feb", earnings: 50000 },
  { month: "Mar", earnings: 25000 },
  { month: "Apr", earnings: 45000 },
  { month: "May", earnings: 60000 },
  { month: "Jun", earnings: 30000 },
  { month: "Jul", earnings: 75745 }, 
  { month: "Aug", earnings: 65000 },
  { month: "Sep", earnings: 40000 },
  { month: "Oct", earnings: 35000 },
  { month: "Nov", earnings: 60000 },
  { month: "Dec", earnings: 45500 },
];

const formatK = (value: number) => {
  if (value >= 1000)
    return `${(value / 1000).toFixed(value % 1000 !== 0 ? 1 : 0)}k`;
  return value.toString();
};

const generateTicks = (max: number, step: number) => {
  const ticks = [];
  for (let i = 5000; i <= max; i += step) {
    ticks.push(i);
  }
  return ticks;
};

const EarningsChart: React.FC = () => {
  const maxValue = Math.max(...data.map((d) => d.earnings));
  const ticks = generateTicks(maxValue, 5000);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis dataKey="month" stroke="#081E37" />
        <YAxis
          stroke="#081E37"
          tickFormatter={formatK}
          domain={[5000, maxValue]}
          ticks={ticks}
        />
        <Tooltip formatter={(value: number) => `$${formatK(value)}`} />

        <Bar dataKey="earnings" radius={[8, 8, 0, 0]}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index === 6 ? "#144B8A" : "#F3F3FF"} 
              stroke="#E5E7EB"
              strokeWidth={1}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EarningsChart;
