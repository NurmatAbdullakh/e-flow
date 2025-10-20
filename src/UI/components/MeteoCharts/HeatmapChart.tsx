import React, { useMemo } from "react";
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
    height: "500px",
  },
});

interface HeatmapChartProps {
  stationId?: string;
}

const HeatmapChart: React.FC<HeatmapChartProps> = ({ stationId }) => {
  const classes = useStyles();
  const [selectedParameter, setSelectedParameter] =
    React.useState("precipitation");

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
    { value: "precipitation", label: "Precipitation (mm)" },
    { value: "maxTemp", label: "Max Temperature (°C)" },
    { value: "meanTemp", label: "Mean Temperature (°C)" },
    { value: "minTemp", label: "Min Temperature (°C)" },
    { value: "windSpeed", label: "Wind Speed (m/s)" },
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

    // Create a simple heatmap structure - show average values by month
    const result: any[] = [];

    months.forEach((month) => {
      const monthValues: number[] = [];

      // Collect all values for this month across all years
      selectedData.forEach((item: any) => {
        if (item[month.key] !== undefined) {
          monthValues.push(item[month.key]);
        }
      });

      // Calculate average for this month
      const average =
        monthValues.length > 0
          ? monthValues.reduce((sum, val) => sum + val, 0) / monthValues.length
          : 0;

      result.push({
        month: month.label,
        monthKey: month.key,
        value: Math.round(average * 100) / 100,
        count: monthValues.length,
      });
    });

    return result;
  }, [selectedParameter, data, months]);

  // Get color based on value
  const getColor = (value: number) => {
    if (chartData.length === 0) return "#f7fbff";

    const allValues = chartData.map((d) => d.value);
    const max = Math.max(...allValues);
    const min = Math.min(...allValues);
    const normalized = (value - min) / (max - min);

    if (normalized < 0.2) return "#f7fbff";
    if (normalized < 0.3) return "#deebf7";
    if (normalized < 0.4) return "#c6dbef";
    if (normalized < 0.5) return "#9ecae1";
    if (normalized < 0.6) return "#6baed6";
    if (normalized < 0.7) return "#4292c6";
    if (normalized < 0.8) return "#2171b5";
    if (normalized < 0.9) return "#08519c";
    return "#08306b";
  };

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
      <Title level={4}>Monthly Average Values</Title>
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
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
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
              formatter={(value: any) => [
                formatTooltipValue(value),
                `Average ${
                  parameterOptions.find((p) => p.value === selectedParameter)
                    ?.label || "Value"
                }`,
              ]}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Bar dataKey="value" fill="#1890ff">
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getColor(entry.value)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default HeatmapChart;
