import React, { useMemo } from "react";
import {
  LineChart,
  Line,
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

interface TimeSeriesChartProps {
  stationId?: string;
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ stationId }) => {
  const classes = useStyles();
  const [selectedParameter, setSelectedParameter] = React.useState("maxTemp");
  const [selectedMonth, setSelectedMonth] = React.useState("jan");

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

  const monthOptions = [
    { value: "jan", label: "January" },
    { value: "feb", label: "February" },
    { value: "mar", label: "March" },
    { value: "apr", label: "April" },
    { value: "may", label: "May" },
    { value: "jun", label: "June" },
    { value: "jul", label: "July" },
    { value: "aug", label: "August" },
    { value: "sep", label: "September" },
    { value: "oct", label: "October" },
    { value: "nov", label: "November" },
    { value: "dec", label: "December" },
  ];

  const chartData = useMemo(() => {
    const selectedData = data[selectedParameter as keyof typeof data];
    if (!selectedData || selectedData.length === 0) return [];

    return selectedData.map((item: any) => ({
      year: item.year,
      value: item[selectedMonth as keyof typeof item],
      month: monthOptions.find((m) => m.value === selectedMonth)?.label,
    }));
  }, [selectedParameter, selectedMonth, data, monthOptions]);

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
      <Title level={4}>Time Series Analysis</Title>
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
        <Space>
          <span>Month:</span>
          <Select
            value={selectedMonth}
            onChange={setSelectedMonth}
            style={{ width: 120 }}
          >
            {monthOptions.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Space>
      </div>
      <div className={classes.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="year"
              label={{ value: "Year", position: "insideBottom", offset: -10 }}
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
              formatter={(value: any) => [
                formatTooltipValue(value),
                `${
                  monthOptions.find((m) => m.value === selectedMonth)?.label
                } ${
                  parameterOptions.find((p) => p.value === selectedParameter)
                    ?.label
                }`,
              ]}
              labelFormatter={(label) => `Year: ${label}`}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#1890ff"
              strokeWidth={2}
              dot={{ fill: "#1890ff", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default TimeSeriesChart;
