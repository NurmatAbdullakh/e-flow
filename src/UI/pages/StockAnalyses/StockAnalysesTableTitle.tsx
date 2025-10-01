import { Flex, Tag } from "antd";
import dayjs from "dayjs";
import Tabs from "../../components/CustomAntdComponents/Tabs";

export const StockAnalysesTableTitle = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      gap={8}
      style={{ padding: "20px 24px" }}
    >
      <Flex align="center" gap={8}>
        Stock Analyses
        <Tag
          style={{
            padding: "2px 8px",
            borderRadius: "9999px",
            textTransform: "capitalize",
          }}
          color="purple"
        >
          Updated: {dayjs(new Date()).format("MMM DD, YYYY")}
        </Tag>
      </Flex>
      <Tabs
        items={[
          {
            label: "All",
            key: "all",
          },
          {
            label: "Cheap Stocks",
            key: "CheapStocks",
          },
          {
            label: "Big Stocks",
            key: "BigStocks",
          },
          {
            label: "Investors",
            key: "Investors",
          },
        ]}
      />
    </Flex>
  );
};
