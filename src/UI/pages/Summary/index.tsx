import ModalDemo from "../../components/CustomAntdComponents/ModalDemo";
import { AmazonChart } from "./AmazonChart";
import { AmazonForecastChart } from "./AmazonForecastChart";
import GaugeChart from "./GaugeChart";
import { RecommendationTrends } from "./RecommendationTrends";

interface DataPoint {
  name: string;
  value: number;
}

const data12Months: DataPoint[] = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 120 },
  { name: "Mar", value: 130 },
  { name: "Apr", value: 150 },
  { name: "May", value: 170 },
  { name: "Jun", value: 190 },
  { name: "Jul", value: 220 },
  { name: "Aug", value: 250 },
  { name: "Sep", value: 280 },
  { name: "Oct", value: 300 },
  { name: "Nov", value: 320 },
  { name: "Dec", value: 350 },
];

const ranges = [
  { label: "12 months", key: "12m" },
  { label: "30 days", key: "30d" },
  { label: "7 days", key: "7d" },
  { label: "24 hours", key: "24h" },
];

export default function Summary() {
  return (
    <>
      <AmazonChart />
      <AmazonForecastChart />
      <RecommendationTrends />
      <GaugeChart />
    </>
  );
}
