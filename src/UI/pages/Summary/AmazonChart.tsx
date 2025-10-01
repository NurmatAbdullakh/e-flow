import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface DataPoint {
  name: string;
  value: number;
}

const data12Months: DataPoint[] = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 120 },
  { name: "Mar", value: 130 },
  { name: "Apr", value: 150 },
  { name: "May", value: 170 },
  { name: "Jun", value: 190 },
  { name: "Jul", value: 220 },
  { name: "Aug", value: 250 },
  { name: "Sep", value: 280 },
  { name: "Oct", value: 300 },
  { name: "Nov", value: 320 },
  { name: "Dec", value: 350 },
];

const ranges = [
  { label: "12 months", key: "12m" },
  { label: "30 days", key: "30d" },
  { label: "7 days", key: "7d" },
  { label: "24 hours", key: "24h" },
];

export const AmazonChart = () => {
  const [activeRange, setActiveRange] = useState("12m");
  const [data, setData] = useState(data12Months);

  const handleRangeChange = (key: string) => {
    setActiveRange(key);
    // Здесь можно переключать реальные данные
    setData(data12Months);
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <h3 style={{ marginBottom: 10 }}>Amazon Chart</h3>

      {/* Кнопки диапазона */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {ranges.map((r) => (
          <button
            key={r.key}
            onClick={() => handleRangeChange(r.key)}
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              background: activeRange === r.key ? "#F3E8FF" : "#fff",
              color: activeRange === r.key ? "#6B21A8" : "#555",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* График */}
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid vertical={false} stroke="#eee" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#888", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#888", fontSize: 12 }}
            />
            <Tooltip
              cursor={{ stroke: "#E9D5FF", strokeWidth: 2 }}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #eee",
                borderRadius: 8,
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8B5CF6"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 5, stroke: "#8B5CF6", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
