import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceDot,
  Label,
} from "recharts";
import { Card, Segmented } from "antd";

interface DataPoint {
  name: string;
  value: number;
}

const realData: DataPoint[] = [
  { name: "Oct 2024", value: 295 },
  { name: "Nov 2024", value: 298 },
  { name: "Dec 2024", value: 300 },
  { name: "Jan 2025", value: 302 },
  { name: "Feb 2025", value: 305 },
  { name: "Mar 2025", value: 308 },
  { name: "Apr 2025", value: 310 },
  { name: "May 2025", value: 309 },
  { name: "Jun 2025", value: 311 },
  { name: "Jul 2025", value: 312 },
];

const forecastData = [
  { name: "Jul 2025", high: 312, avg: 312, low: 312 },
  { name: "Jul 2026", high: 305, avg: 247, low: 195 },
];

export const AmazonForecastChart = () => {
  const [view, setView] = useState("All analysts");

  return (
    <Card
      title="Amazon Stock Forecast"
      bordered={false}
      style={{
        borderRadius: 12,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
      extra={
        <Segmented
          options={["All analysts", "Top analysts"]}
          value={view}
          onChange={setView}
        />
      }
    >
      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <LineChart>
            <CartesianGrid stroke="#eee" />
            <XAxis
              dataKey="name"
              type="category"
              tick={{ fill: "#888", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              allowDuplicatedCategory={false}
            />
            <YAxis
              domain={[150, 400]}
              tick={{ fill: "#888", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: 8,
              }}
            />

            {/* Реальные данные */}
            <Line
              data={realData}
              type="monotone"
              dataKey="value"
              stroke="#8B5CF6"
              strokeWidth={3}
              dot={false}
              isAnimationActive
            />

            {/* Прогноз: High */}
            <Line
              data={forecastData}
              type="monotone"
              dataKey="high"
              stroke="#16A34A"
              strokeDasharray="5 5"
              dot={{ stroke: "#16A34A", r: 3 }}
            />

            {/* Прогноз: Average */}
            <Line
              data={forecastData}
              type="monotone"
              dataKey="avg"
              stroke="#000"
              strokeDasharray="4 4"
              dot={{ stroke: "#000", r: 3 }}
            />

            {/* Прогноз: Low */}
            <Line
              data={forecastData}
              type="monotone"
              dataKey="low"
              stroke="#DC2626"
              strokeDasharray="5 5"
              dot={{ stroke: "#DC2626", r: 3 }}
            />

            {/* Подписи справа */}
            <ReferenceDot x="Jul 2026" y={305} r={0}>
              <Label
                value="High $305"
                position="right"
                fill="#16A34A"
                fontSize={13}
              />
            </ReferenceDot>
            <ReferenceDot x="Jul 2026" y={247} r={0}>
              <Label
                value="Average $247"
                position="right"
                fill="#000"
                fontSize={13}
              />
            </ReferenceDot>
            <ReferenceDot x="Jul 2026" y={195} r={0}>
              <Label
                value="Low $195"
                position="right"
                fill="#DC2626"
                fontSize={13}
              />
            </ReferenceDot>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
