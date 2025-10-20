import React, { useState, useMemo } from "react";
import { Card, Table, Select, Typography, Space, Row, Col } from "antd";
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

const { Title, Text } = Typography;
const { Option } = Select;

const useStyles = createUseStyles({
  container: {
    padding: "20px",
  },
  chartContainer: {
    marginBottom: "20px",
  },
  tableContainer: {
    marginTop: "20px",
  },
  controls: {
    marginBottom: "20px",
  },
  chart: {
    height: "400px",
  },
});

interface FlowDurationCalculatorProps {
  stationId?: string;
}

const FlowDurationCalculator: React.FC<FlowDurationCalculatorProps> = ({
  stationId,
}) => {
  const classes = useStyles();
  const [selectedEMC, setSelectedEMC] = useState<string>("ref");
  const [selectedParameter, setSelectedParameter] =
    useState<string>("precipitation");

  // Get data based on station ID
  const getData = () => {
    if (stationId === "4-2") {
      return {
        precipitation: shorchiPrecipitationData,
        maxTemp: shorchiMaxTempData,
        meanTemp: shorchiMeanTempData,
        minTemp: shorchiMinTempData,
        windSpeed: shorchiMeanWindSpeedData,
      };
    }
    if (stationId === "3-2") {
      return {
        precipitation: sherobodPrecipitationData,
        maxTemp: sherobodMaxTempData,
        meanTemp: sherobodMeanTempData,
        minTemp: sherobodMinTempData,
        windSpeed: sherobodMeanWindSpeedData,
      };
    }
    return {
      precipitation: denovPrecipitationData,
      maxTemp: denovMaxTempData,
      meanTemp: denovMeanTempData,
      minTemp: denovMinTempData,
      windSpeed: denovMeanWindSpeedData,
    };
  };

  const data = getData();

  const parameterOptions = [
    { value: "precipitation", label: "Precipitation (mm)" },
    { value: "maxTemp", label: "Max Temperature (°C)" },
    { value: "meanTemp", label: "Mean Temperature (°C)" },
    { value: "minTemp", label: "Min Temperature (°C)" },
    { value: "windSpeed", label: "Wind Speed (m/s)" },
  ].filter((option) => data[option.value as keyof typeof data].length > 0);

  const emcOptions = [
    { value: "ref", label: "Original (REF)", color: "#000000", factor: 1.0 },
    { value: "a", label: "A: Natural", color: "#1890ff", factor: 0.8 },
    {
      value: "b",
      label: "B: Slightly Modified",
      color: "#52c41a",
      factor: 0.6,
    },
    {
      value: "c",
      label: "C: Moderately Modified",
      color: "#8c8c8c",
      factor: 0.4,
    },
    { value: "d", label: "D: Largely Modified", color: "#fa8c16", factor: 0.3 },
    {
      value: "e",
      label: "E: Seriously Modified",
      color: "#f5222d",
      factor: 0.2,
    },
    {
      value: "f",
      label: "F: Critically Modified",
      color: "#722ed1",
      factor: 0.1,
    },
  ];

  // Calculate Flow Duration Curve from real data
  const calculateFlowDurationCurve = useMemo(() => {
    const selectedData = data[selectedParameter as keyof typeof data];
    if (!selectedData || selectedData.length === 0) return [];

    // Extract all monthly values
    const allValues: number[] = [];
    selectedData.forEach((yearData: any) => {
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
      months.forEach((month) => {
        if (yearData[month] !== undefined && yearData[month] !== null) {
          allValues.push(yearData[month]);
        }
      });
    });

    // Sort values in descending order (highest to lowest)
    const sortedValues = allValues.sort((a, b) => b - a);
    const totalValues = sortedValues.length;

    // Calculate percentiles for Flow Duration Curve
    // These represent the percentage of time that a given flow is equaled or exceeded
    const percentiles = [
      0.1, 1.0, 5.0, 10.0, 20.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0, 90.0, 95.0,
      99.0,
    ];

    const result = percentiles.map((percentile) => {
      // For FDC, we want the value that is exceeded for this percentage of time
      // So for 10%, we want the value that is exceeded 10% of the time (90th percentile)
      const exceedancePercentile = 100 - percentile;
      const index = Math.floor(
        (exceedancePercentile / 100) * (totalValues - 1)
      );
      const value = sortedValues[index] || 0;

      // Apply EMC factors to create different curves
      const emcValues: { [key: string]: number } = { percentage: percentile };

      emcOptions.forEach((emc) => {
        emcValues[emc.value] = value * emc.factor;
      });

      return emcValues;
    });

    return result;
  }, [selectedParameter, data, emcOptions]);

  const chartData = calculateFlowDurationCurve;

  const tableColumns = [
    {
      title: "%",
      dataIndex: "percentage",
      key: "percentage",
      width: 80,
      render: (value: number) => value.toFixed(1),
    },
    ...emcOptions.map((emc) => ({
      title: emc.label,
      dataIndex: emc.value,
      key: emc.value,
      width: 120,
      render: (value: number) => value.toFixed(3),
    })),
  ];

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
    <div className={classes.container}>
      <Card className={classes.tableContainer}>
        <Title level={4}>
          Flow Duration Calculator -{" "}
          {parameterOptions.find((p) => p.value === selectedParameter)?.label}
        </Title>
        <Table
          dataSource={chartData}
          columns={tableColumns}
          rowKey="percentage"
          pagination={false}
          scroll={{ x: 1000 }}
          size="small"
        />
      </Card>
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={14}>
          <Card className={classes.chartContainer}>
            <Title level={4}>FLOW DURATION CURVE</Title>
            <div className={classes.controls}>
              <Space wrap>
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
                <Space>
                  <Text>EMC Class:</Text>
                  <Select
                    value={selectedEMC}
                    onChange={setSelectedEMC}
                    style={{ width: 200 }}
                  >
                    {emcOptions.map((option) => (
                      <Option key={option.value} value={option.value}>
                        {option.label}
                      </Option>
                    ))}
                  </Select>
                </Space>
              </Space>
            </div>
            <div className={classes.chart}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="percentage"
                    label={{
                      value: "% Time flow exceeded",
                      position: "insideBottom",
                      offset: -10,
                    }}
                    type="number"
                    domain={[0, 100]}
                    ticks={[0, 20, 40, 60, 80, 100]}
                  />
                  <YAxis
                    label={{
                      value: "Flow (m³/s)",
                      angle: -90,
                      position: "insideLeft",
                    }}
                    scale="log"
                    type="number"
                    domain={["dataMin", "dataMax"]}
                  />
                  <Tooltip
                    formatter={(value: any, name: string) => [
                      formatTooltipValue(value),
                      emcOptions.find((opt) => opt.value === name)?.label ||
                        name,
                    ]}
                    labelFormatter={(label) => `${label}% time exceeded`}
                  />
                  <Legend />
                  {emcOptions.map((option) => (
                    <Line
                      key={option.value}
                      type="monotone"
                      dataKey={option.value}
                      stroke={option.color}
                      strokeWidth={2}
                      dot={{ fill: option.color, strokeWidth: 2, r: 3 }}
                      activeDot={{ r: 5 }}
                      name={option.label}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={10}>
          <Card>
            <Title level={4}>EMC Classes Explanation</Title>
            <Space direction="vertical" size="middle">
              <Text>
                A flow duration curve (FDC) is a plot that shows percentage of
                time the flow in a river is likely to equal or exceed a given
                flow value. A FDC is a simple measure of historic flow
                variability which is the key component in any EF concept and
                method, as it indicates seasonal and inter-annual variability.
              </Text>
              <Text>
                These are then related to and represent prescribed / negotiated
                desired conditions of a river ecosystem i.e. the EMC.
              </Text>
              <Text>
                <strong>EMC Classes:</strong>
              </Text>
              <ul>
                <li>
                  <strong>REF:</strong> Original data (100%)
                </li>
                <li>
                  <strong>A - Natural:</strong> 80% of original values
                </li>
                <li>
                  <strong>B - Slightly Modified:</strong> 60% of original values
                </li>
                <li>
                  <strong>C - Moderately Modified:</strong> 40% of original
                  values
                </li>
                <li>
                  <strong>D - Largely Modified:</strong> 30% of original values
                </li>
                <li>
                  <strong>E - Seriously Modified:</strong> 20% of original
                  values
                </li>
                <li>
                  <strong>F - Critically Modified:</strong> 10% of original
                  values
                </li>
              </ul>
              <Text>
                In essence, it performs a stepwise shift of a FDC, so that the
                total EFs are reduced with declining EMC, while some features of
                natural flow variability are retained. The higher the EMC, the
                more water is needed for ecosystem maintenance and the more of
                the flow variability needs to be preserved.
              </Text>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FlowDurationCalculator;
