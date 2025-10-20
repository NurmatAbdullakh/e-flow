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

interface AnnualBarChartProps {
  stationId?: string;
}

const AnnualBarChart: React.FC<AnnualBarChartProps> = ({ stationId }) => {
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
    { value: "precipitation", label: "Annual Precipitation (mm)" },
    { value: "maxTemp", label: "Annual Max Temperature (°C)" },
    { value: "meanTemp", label: "Annual Mean Temperature (°C)" },
    { value: "minTemp", label: "Annual Min Temperature (°C)" },
    { value: "windSpeed", label: "Annual Mean Wind Speed (m/s)" },
  ].filter((option) => {
    return data[option.value as keyof typeof data].length > 0;
  });

  const chartData = useMemo(() => {
    const selectedData = data[selectedParameter as keyof typeof data];
    if (!selectedData || selectedData.length === 0) return [];

    return selectedData.map((item: any) => {
      let annualValue = 0;

      if (selectedParameter === "precipitation") {
        // Sum all months for precipitation
        annualValue =
          item.jan +
          item.feb +
          item.mar +
          item.apr +
          item.may +
          item.jun +
          item.jul +
          item.aug +
          item.sep +
          item.oct +
          item.nov +
          item.dec;
      } else if (selectedParameter === "windSpeed") {
        // Average for wind speed
        annualValue =
          (item.jan +
            item.feb +
            item.mar +
            item.apr +
            item.may +
            item.jun +
            item.jul +
            item.aug +
            item.sep +
            item.oct +
            item.nov +
            item.dec) /
          12;
      } else {
        // Average for temperature
        annualValue =
          (item.jan +
            item.feb +
            item.mar +
            item.apr +
            item.may +
            item.jun +
            item.jul +
            item.aug +
            item.sep +
            item.oct +
            item.nov +
            item.dec) /
          12;
      }

      return {
        year: item.year,
        value: Math.round(annualValue * 100) / 100,
      };
    });
  }, [selectedParameter, data]);

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
      <Title level={4}>Annual Summary</Title>
      <div className={classes.controls}>
        <Space>
          <span>Parameter:</span>
          <Select
            value={selectedParameter}
            onChange={setSelectedParameter}
            style={{ width: 250 }}
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
                parameterOptions.find((p) => p.value === selectedParameter)
                  ?.label || "Value",
              ]}
              labelFormatter={(label) => `Year: ${label}`}
            />
            <Legend />
            <Bar dataKey="value" fill="#1890ff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default AnnualBarChart;
