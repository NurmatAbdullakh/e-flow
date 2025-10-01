import React from "react";
import { Card, Typography } from "antd";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import {
  LineChart,
  Line,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { createUseStyles } from "react-jss";

const { Title, Text } = Typography;

interface StockData {
  name: string;
  value: number;
}

interface StockCardProps {
  title: string;
  percentage: number;
  data: StockData[];
  isPositive: boolean;
}

const useStyles = createUseStyles({
  stockCard: {
    borderRadius: "12px",
    border: "1px solid #f0f0f0",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
    overflow: "hidden",
    "&:hover": {
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
      transform: "translateY(-2px)",
      transition: "all 0.3s ease",
    },
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  title: {
    margin: "0 !important",
    fontSize: "18px",
    fontWeight: 600,
    color: "#262626",
  },
  performanceContainer: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  positivePercentage: {
    color: "#52c41a",
    fontSize: "16px",
    fontWeight: 600,
  },
  negativePercentage: {
    color: "#ff4d4f",
    fontSize: "16px",
    fontWeight: 600,
  },
  chartContainer: {
    height: "120px",
    width: "100%",
  },
  customTooltip: {
    backgroundColor: "white",
    border: "1px solid #d9d9d9",
    borderRadius: "6px",
    padding: "8px 12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
  tooltipLabel: {
    fontSize: "12px",
    color: "#666",
    marginBottom: "4px",
  },
  tooltipValue: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#262626",
  },
});

const CustomTooltip = ({ active, payload, label }: any) => {
  const classes = useStyles();

  if (active && payload && payload.length) {
    return (
      <div className={classes.customTooltip}>
        <div className={classes.tooltipLabel}>{label}</div>
        <div className={classes.tooltipValue}>
          {payload[0].value.toFixed(2)}
        </div>
      </div>
    );
  }
  return null;
};

export const StockCard: React.FC<StockCardProps> = ({
  title,
  percentage,
  data,
  isPositive,
}) => {
  const classes = useStyles();

  const IconComponent = isPositive ? CaretUpOutlined : CaretDownOutlined;
  const percentageClass = isPositive
    ? classes.positivePercentage
    : classes.negativePercentage;
  const strokeColor = isPositive ? "#52c41a" : "#ff4d4f";
  const fillColor = isPositive
    ? "rgba(82, 196, 26, 0.1)"
    : "rgba(255, 77, 79, 0.1)";

  return (
    <Card className={classes.stockCard} bodyStyle={{ padding: "20px" }}>
      <div className={classes.cardHeader}>
        <Title level={4} className={classes.title}>
          {title}
        </Title>
        <div className={classes.performanceContainer}>
          <IconComponent style={{ color: strokeColor }} />
          <Text className={percentageClass}>
            {Math.abs(percentage).toFixed(1)}%
          </Text>
        </div>
      </div>

      <div className={classes.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <defs>
              <linearGradient
                id={`gradient-${isPositive ? "positive" : "negative"}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor={strokeColor} stopOpacity={0.3} />
                <stop offset="95%" stopColor={strokeColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" hide axisLine={false} tickLine={false} />
            <YAxis
              hide
              axisLine={false}
              tickLine={false}
              domain={["dataMin - 10", "dataMax + 10"]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke={strokeColor}
              strokeWidth={2}
              fill={`url(#gradient-${isPositive ? "positive" : "negative"})`}
              dot={{ fill: strokeColor, strokeWidth: 2, r: 4 }}
              activeDot={{
                r: 6,
                stroke: strokeColor,
                strokeWidth: 2,
                fill: "white",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default StockCard;
