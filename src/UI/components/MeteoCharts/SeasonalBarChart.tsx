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

interface SeasonalBarChartProps {
  stationId?: string;
}

const SeasonalBarChart: React.FC<SeasonalBarChartProps> = ({ stationId }) => {
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

  const seasons = [
    { name: "Winter", months: ["dec", "jan", "feb"], color: "#1890ff" },
    { name: "Spring", months: ["mar", "apr", "may"], color: "#52c41a" },
    { name: "Summer", months: ["jun", "jul", "aug"], color: "#faad14" },
    { name: "Autumn", months: ["sep", "oct", "nov"], color: "#f5222d" },
  ];

  const chartData = useMemo(() => {
    const selectedData = data[selectedParameter as keyof typeof data];
    if (!selectedData || selectedData.length === 0) return [];

    const result: any[] = [];

    seasons.forEach((season) => {
      const seasonValues: number[] = [];

      selectedData.forEach((item: any) => {
        const seasonSum = season.months.reduce((sum, month) => {
          return sum + (item[month] || 0);
        }, 0);

        if (selectedParameter === "precipitation") {
          seasonValues.push(seasonSum);
        } else {
          // For temperature and wind speed, calculate average
          seasonValues.push(seasonSum / season.months.length);
        }
      });

      const avgValue =
        seasonValues.reduce((sum, val) => sum + val, 0) / seasonValues.length;

      result.push({
        season: season.name,
        value: Math.round(avgValue * 100) / 100,
        color: season.color,
      });
    });

    return result;
  }, [selectedParameter, data, seasons]);

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
      <Title level={4}>Seasonal Average</Title>
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
              dataKey="season"
              label={{ value: "Season", position: "insideBottom", offset: -10 }}
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
                parameterOptions.find((p) => p.value === selectedParameter)
                  ?.label || "Value",
              ]}
              labelFormatter={(label) => `Season: ${label}`}
            />
            <Legend />
            <Bar dataKey="value" fill="#1890ff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default SeasonalBarChart;
