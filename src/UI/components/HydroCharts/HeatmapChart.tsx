import React, { useState, useMemo } from "react";
import { Card, Select, Space, Typography } from "antd";
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
import { createUseStyles } from "react-jss";

const { Title, Text } = Typography;
const { Option } = Select;

const useStyles = createUseStyles({
  chartContainer: {
    marginBottom: "20px",
  },
  controls: {
    marginBottom: "20px",
  },
  chart: {
    height: "400px",
  },
});

interface HeatmapChartProps {
  stationId: string;
}

// Mock data for hydro stations
const qoratogHydroData = [
  {
    year: 1983,
    jan: 2.5,
    feb: 3.1,
    mar: 4.2,
    apr: 5.8,
    may: 7.2,
    jun: 8.9,
    jul: 10.5,
    aug: 9.8,
    sep: 7.4,
    oct: 5.1,
    nov: 3.8,
    dec: 2.9,
  },
  {
    year: 1984,
    jan: 2.8,
    feb: 3.4,
    mar: 4.5,
    apr: 6.1,
    may: 7.8,
    jun: 9.2,
    jul: 11.1,
    aug: 10.2,
    sep: 8.1,
    oct: 5.6,
    nov: 4.1,
    dec: 3.2,
  },
  {
    year: 1985,
    jan: 2.3,
    feb: 2.9,
    mar: 3.9,
    apr: 5.4,
    may: 6.8,
    jun: 8.3,
    jul: 9.7,
    aug: 9.1,
    sep: 6.9,
    oct: 4.8,
    nov: 3.5,
    dec: 2.7,
  },
  // Add more years as needed...
];

const kenguzarHydroData = [
  {
    year: 1928,
    jan: 1.8,
    feb: 2.2,
    mar: 3.1,
    apr: 4.2,
    may: 5.5,
    jun: 6.8,
    jul: 8.1,
    aug: 7.5,
    sep: 5.9,
    oct: 4.1,
    nov: 2.8,
    dec: 2.1,
  },
  {
    year: 1929,
    jan: 2.0,
    feb: 2.4,
    mar: 3.3,
    apr: 4.5,
    may: 5.8,
    jun: 7.1,
    jul: 8.4,
    aug: 7.8,
    sep: 6.2,
    oct: 4.3,
    nov: 3.0,
    dec: 2.3,
  },
  // Add more years as needed...
];

const bazarjayHydroData = [
  {
    year: 1960,
    jan: 1.5,
    feb: 1.9,
    mar: 2.7,
    apr: 3.8,
    may: 4.9,
    jun: 6.1,
    jul: 7.3,
    aug: 6.7,
    sep: 5.2,
    oct: 3.6,
    nov: 2.4,
    dec: 1.8,
  },
  {
    year: 1961,
    jan: 1.7,
    feb: 2.1,
    mar: 2.9,
    apr: 4.0,
    may: 5.1,
    jun: 6.3,
    jul: 7.5,
    aug: 6.9,
    sep: 5.4,
    oct: 3.8,
    nov: 2.6,
    dec: 2.0,
  },
  // Add more years as needed...
];

const HeatmapChart: React.FC<HeatmapChartProps> = ({ stationId }) => {
  const classes = useStyles();
  const [selectedParameter, setSelectedParameter] =
    useState<string>("discharge");

  // Get data based on station ID
  const getData = () => {
    if (stationId === "2-1") {
      return kenguzarHydroData;
    }
    if (stationId === "4-1") {
      return bazarjayHydroData;
    }
    return qoratogHydroData;
  };

  const data = getData();

  const parameterOptions = [
    { value: "discharge", label: "Monthly Average Discharge (m³/s)" },
  ];

  const chartData = useMemo(() => {
    if (!data || data.length === 0) return [];

    const months = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];

    return months.map((month) => {
      const values = data.map((yearData: any) => yearData[month] || 0);
      const averageValue =
        values.reduce((sum, val) => sum + val, 0) / values.length;

      return {
        month: month.toUpperCase(),
        discharge: averageValue,
      };
    });
  }, [data]);

  const getColor = (value: number) => {
    const maxValue = Math.max(...chartData.map((d) => d.discharge));
    const intensity = value / maxValue;

    if (intensity > 0.8) return "#ff4d4f";
    if (intensity > 0.6) return "#ff7a45";
    if (intensity > 0.4) return "#fa8c16";
    if (intensity > 0.2) return "#52c41a";
    return "#1890ff";
  };

  const formatTooltipValue = (value: any) => {
    return `${value} m³/s`;
  };

  return (
    <Card className={classes.chartContainer}>
      <Title level={4}>Monthly Average Values</Title>
      <div className={classes.controls}>
        <Space>
          <Text>Parameter:</Text>
          <Select
            value={selectedParameter}
            onChange={setSelectedParameter}
            style={{ width: 200 }}
          >
            {parameterOptions.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Space>
      </div>
      <div className={classes.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              label={{ value: "Month", position: "insideBottom", offset: -10 }}
            />
            <YAxis
              label={{
                value: "Average Discharge (m³/s)",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip
              formatter={(value: any) => [
                formatTooltipValue(value),
                "Monthly Average",
              ]}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Bar dataKey="discharge" name="Monthly Average Discharge">
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getColor(entry.discharge)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default HeatmapChart;
