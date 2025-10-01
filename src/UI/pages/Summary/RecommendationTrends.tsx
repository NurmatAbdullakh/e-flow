import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, Select, Space } from "antd";

interface DataItem {
  name: string;
  positive: number;
  neutral: number;
}

const data: DataItem[] = [
  { name: "Jan", positive: 180, neutral: 60 },
  { name: "Feb", positive: 220, neutral: 40 },
  { name: "Mar", positive: 160, neutral: 80 },
  { name: "Apr", positive: 210, neutral: 50 },
  { name: "May", positive: 170, neutral: 70 },
  { name: "Jun", positive: 200, neutral: 90 },
  { name: "Jul", positive: 180, neutral: 70 },
  { name: "Aug", positive: 190, neutral: 80 },
  { name: "Sep", positive: 195, neutral: 75 },
  { name: "Oct", positive: 220, neutral: 85 },
  { name: "Nov", positive: 210, neutral: 95 },
  { name: "Dec", positive: 185, neutral: 65 },
];

export const RecommendationTrends = () => {
  const [chartType, setChartType] = useState("Bar Chart");
  const [period, setPeriod] = useState("1 year");

  return (
    <Card
      title="Recommendation Trends"
      bordered={false}
      style={{
        borderRadius: 12,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
      extra={
        <Space>
          <Select
            value={chartType}
            onChange={setChartType}
            options={[
              { value: "Bar Chart", label: "Bar Chart" },
              { value: "Line Chart", label: "Line Chart" },
            ]}
            style={{ width: 130 }}
          />
          <Select
            value={period}
            onChange={setPeriod}
            options={[
              { value: "1 year", label: "1 year" },
              { value: "6 months", label: "6 months" },
              { value: "3 months", label: "3 months" },
            ]}
            style={{ width: 110 }}
          />
        </Space>
      }
    >
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
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
              contentStyle={{
                background: "#fff",
                borderRadius: 8,
                border: "1px solid #eee",
                fontSize: 12,
              }}
            />
            <Bar
              dataKey="positive"
              stackId="a"
              fill="#8B5CF6"
              radius={[6, 6, 0, 0]}
            />
            <Bar
              dataKey="neutral"
              stackId="a"
              fill="#E5E7EB"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
