import React, { useState } from "react";
import { Card, Select, Typography, Space, Row, Col } from "antd";
import { createUseStyles } from "react-jss";
import { FlowDurationCalculator } from "../components/FlowDurationCalculator";
import { Color } from "../../assets/colors";

const { Title, Text } = Typography;
const { Option } = Select;

const useStyles = createUseStyles({
  container: {
    padding: "24px",
    backgroundColor: Color.background,
    minHeight: "100vh",
  },
  header: {
    marginBottom: "24px",
    textAlign: "center",
  },
  stationSelector: {
    marginBottom: "24px",
  },
  contentCard: {
    backgroundColor: Color.white,
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
});

const CalculatorPage: React.FC = () => {
  const classes = useStyles();
  const [selectedStation, setSelectedStation] = useState<string>("1-2");

  const stationOptions = [
    { value: "1-2", label: "Denov Meteo Station (Qoratog river)" },
    { value: "4-2", label: "Sho'rchi Meteo Station (Xalkadjar river)" },
    { value: "3-2", label: "Sherobod Meteo Station (Sherobod river)" },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Title level={1} style={{ margin: 0, color: Color.primary }}>
          Flow Duration Calculator
        </Title>
        <Text type="secondary" style={{ fontSize: "16px" }}>
          Environmental Management Classes (EMC) Calculator
        </Text>
      </div>

      <Card className={classes.stationSelector}>
        <Space>
          <Text strong>Select Meteo Station:</Text>
          <Select
            value={selectedStation}
            onChange={setSelectedStation}
            style={{ width: 300 }}
            size="large"
          >
            {stationOptions.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Space>
      </Card>

      <Card className={classes.contentCard}>
        <FlowDurationCalculator stationId={selectedStation} />
      </Card>
    </div>
  );
};

export default CalculatorPage;
