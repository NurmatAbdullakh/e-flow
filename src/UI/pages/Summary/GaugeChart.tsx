import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Card, Typography } from "antd";

const { Title, Text } = Typography;

const GaugeChart: React.FC = () => {
  const stockPrice = 193.27;
  const targetPrice = 247.59;
  const growth = ((targetPrice - stockPrice) / stockPrice) * 100;

  // Данные для gauge (полукруг)
  const data = [
    { value: 50, color: "#ff4d4f" }, // красный (undervalued)
    { value: 50, color: "#fa8c16" }, // оранжевый
    { value: 50, color: "#a0d911" }, // светло-зеленый
    { value: 50, color: "#52c41a" }, // зеленый (overvalued)
  ];

  // Угол заполнения (позиция стрелки)
  const angle = (stockPrice / targetPrice) * 180; // простая пропорция
  const needleLength = 120;

  return (
    <Card style={{ width: 400, textAlign: "center" }}>
      <Title level={4}>
        Price Target:{" "}
        <span style={{ color: "green" }}>
          ${targetPrice.toFixed(2)} ({growth.toFixed(2)}%)
        </span>
      </Title>

      <PieChart width={400} height={250}>
        <Pie
          data={data}
          dataKey="value"
          startAngle={180}
          endAngle={0}
          cx="50%"
          cy="100%"
          innerRadius={80}
          outerRadius={120}
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>

        {/* Стрелка */}
        <g transform={`translate(200, 100)`}>
          <line
            x1={0}
            y1={0}
            x2={needleLength * Math.cos(Math.PI - (angle * Math.PI) / 180)}
            y2={needleLength * Math.sin(Math.PI - (angle * Math.PI) / 180)}
            stroke="black"
            strokeWidth={3}
          />
          <circle cx={0} cy={0} r={6} fill="black" />
        </g>
      </PieChart>

      <Text strong style={{ fontSize: 18 }}>
        Stock Price: ${stockPrice}
      </Text>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 8,
        }}
      >
        <Text type="danger">Undervalued</Text>
        <Text type="success">Overvalued</Text>
      </div>
    </Card>
  );
};

export default GaugeChart;
