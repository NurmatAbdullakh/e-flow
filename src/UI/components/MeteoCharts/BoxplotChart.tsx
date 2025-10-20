import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, Select, Space, Typography } from "antd";
import { createUseStyles } from "react-jss";
import {
  denovMaxTempData,
  denovMeanTempData,
  denovMinTempData,
  denovMeanWindSpeedData,
  denovPrecipitationData,
  shorchiMaxTempData,
  shorchiMeanTempData,
  shorchiMinTempData,
  shorchiMeanWindSpeedData,
  shorchiPrecipitationData,
  sherobodMaxTempData,
  sherobodMeanTempData,
  sherobodMinTempData,
  sherobodMeanWindSpeedData,
  sherobodPrecipitationData,
} from "../MeteoDataTables/data";

const { Title } = Typography;
const { Option } = Select;

const useStyles = createUseStyles({
  chartContainer: {
    marginBottom: "24px",
  },
  controls: {
    marginBottom: "16px",
    display: "flex",
    gap: "16px",
    alignItems: "center",
  },
  chart: {
    height: "400px",
  },
});

interface BoxplotChartProps {
  stationId?: string;
}

const BoxplotChart: React.FC<BoxplotChartProps> = ({ stationId }) => {
  const classes = useStyles();
  const [selectedParameter, setSelectedParameter] = React.useState("maxTemp");

  // Get data based on station ID
  const getData = () => {
    if (stationId === "4-2") {
      return {
        maxTemp: shorchiMaxTempData,
        meanTemp: shorchiMeanTempData,
        minTemp: shorchiMinTempData,
        windSpeed: shorchiMeanWindSpeedData,
        precipitation: shorchiPrecipitationData,
      };
    }
    if (stationId === "3-2") {
      return {
        maxTemp: sherobodMaxTempData,
        meanTemp: sherobodMeanTempData,
        minTemp: sherobodMinTempData,
        windSpeed: sherobodMeanWindSpeedData,
        precipitation: sherobodPrecipitationData,
      };
    }
    return {
      maxTemp: denovMaxTempData,
      meanTemp: denovMeanTempData,
      minTemp: denovMinTempData,
      windSpeed: denovMeanWindSpeedData,
      precipitation: denovPrecipitationData,
    };
  };

  const data = getData();

  const parameterOptions = [
    { value: "maxTemp", label: "Max Temperature (°C)" },
    { value: "meanTemp", label: "Mean Temperature (°C)" },
    { value: "minTemp", label: "Min Temperature (°C)" },
    { value: "windSpeed", label: "Wind Speed (m/s)" },
    { value: "precipitation", label: "Precipitation (mm)" },
  ].filter((option) => {
    return data[option.value as keyof typeof data].length > 0;
  });

  const months = [
    { key: "jan", label: "Jan" },
    { key: "feb", label: "Feb" },
    { key: "mar", label: "Mar" },
    { key: "apr", label: "Apr" },
    { key: "may", label: "May" },
    { key: "jun", label: "Jun" },
    { key: "jul", label: "Jul" },
    { key: "aug", label: "Aug" },
    { key: "sep", label: "Sep" },
    { key: "oct", label: "Oct" },
    { key: "nov", label: "Nov" },
    { key: "dec", label: "Dec" },
  ];

  const chartData = useMemo(() => {
    const selectedData = data[selectedParameter as keyof typeof data];
    if (!selectedData || selectedData.length === 0) return [];

    const result: any[] = [];

    months.forEach((month) => {
      const values = selectedData
        .map((item: any) => item[month.key])
        .filter((val: any) => val !== undefined);

      if (values.length > 0) {
        // Calculate statistics for boxplot-like representation
        const sortedValues = values.sort((a: number, b: number) => a - b);
        const q1 = sortedValues[Math.floor(sortedValues.length * 0.25)];
        const median = sortedValues[Math.floor(sortedValues.length * 0.5)];
        const q3 = sortedValues[Math.floor(sortedValues.length * 0.75)];
        const min = sortedValues[0];
        const max = sortedValues[sortedValues.length - 1];
        const mean =
          values.reduce((sum: number, val: number) => sum + val, 0) /
          values.length;

        result.push({
          month: month.label,
          min,
          q1,
          median,
          q3,
          max,
          mean,
        });
      }
    });

    return result;
  }, [selectedParameter, data, months]);

  const formatTooltipValue = (value: any) => {
    const unit =
      selectedParameter === "precipitation"
        ? " mm"
        : selectedParameter === "windSpeed"
        ? " m/s"
        : " °C";
    return `${value}${unit}`;
  };

  return (
    <Card className={classes.chartContainer}>
      <Title level={4}>Monthly Distribution (Boxplot)</Title>
      <div className={classes.controls}>
        <Space>
          <span>Parameter:</span>
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
                value:
                  parameterOptions.find((p) => p.value === selectedParameter)
                    ?.label || "Value",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip
              formatter={(value: any, name: string) => [
                formatTooltipValue(value),
                name,
              ]}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Legend />
            <Bar dataKey="mean" fill="#1890ff" name="Mean" />
            <Bar dataKey="median" fill="#52c41a" name="Median" />
            <Bar dataKey="q1" fill="#faad14" name="Q1" />
            <Bar dataKey="q3" fill="#f5222d" name="Q3" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default BoxplotChart;
