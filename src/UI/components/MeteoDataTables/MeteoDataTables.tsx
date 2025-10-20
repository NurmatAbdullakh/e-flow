import React, { useState } from "react";
import { Table, Tabs, Select, Typography } from "antd";
import { createUseStyles } from "react-jss";
import {
  denovMaxTempData,
  denovMeanTempData,
  denovMeanWindSpeedData,
  denovMinTempData,
  denovPrecipitationData,
  shorchiMaxTempData,
  shorchiMeanTempData,
  shorchiMeanWindSpeedData,
  shorchiPrecipitationData,
  shorchiMinTempData,
  sherobodMaxTempData,
  sherobodMeanTempData,
  sherobodMeanWindSpeedData,
  sherobodPrecipitationData,
  sherobodMinTempData,
} from "./data";

const { Title } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

const useStyles = createUseStyles({
  container: {
    padding: "0",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  controls: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  tableContainer: {
    "& .ant-table-thead > tr > th": {
      backgroundColor: "#f5f5f5",
      fontWeight: "600",
    },
    "& .ant-table-tbody > tr:hover > td": {
      backgroundColor: "#f0f8ff",
    },
  },
  tabsContainer: {
    "& .ant-tabs-tab": {
      fontSize: "14px",
      fontWeight: "500",
    },
  },
});

interface MeteoDataTablesProps {
  stationId?: string;
}

const MeteoDataTables: React.FC<MeteoDataTablesProps> = ({ stationId }) => {
  const classes = useStyles();
  const [yearFilter, setYearFilter] = useState<string>("all");

  const createColumns = (unit: string) => [
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
      width: 80,
      sorter: (a: any, b: any) => a.year - b.year,
      fixed: "left" as const,
    },
    {
      title: "Jan",
      dataIndex: "jan",
      key: "jan",
      width: 80,
      sorter: (a: any, b: any) => parseFloat(a.jan) - parseFloat(b.jan),
      render: (value: string) => `${value} ${unit}`,
    },
    {
      title: "Feb",
      dataIndex: "feb",
      key: "feb",
      width: 80,
      sorter: (a: any, b: any) => parseFloat(a.feb) - parseFloat(b.feb),
      render: (value: string) => `${value} ${unit}`,
    },
    {
      title: "Mar",
      dataIndex: "mar",
      key: "mar",
      width: 80,
      sorter: (a: any, b: any) => parseFloat(a.mar) - parseFloat(b.mar),
      render: (value: string) => `${value} ${unit}`,
    },
    {
      title: "Apr",
      dataIndex: "apr",
      key: "apr",
      width: 80,
      sorter: (a: any, b: any) => parseFloat(a.apr) - parseFloat(b.apr),
      render: (value: string) => `${value} ${unit}`,
    },
    {
      title: "May",
      dataIndex: "may",
      key: "may",
      width: 80,
      sorter: (a: any, b: any) => parseFloat(a.may) - parseFloat(b.may),
      render: (value: string) => `${value} ${unit}`,
    },
    {
      title: "Jun",
      dataIndex: "jun",
      key: "jun",
      width: 80,
      sorter: (a: any, b: any) => parseFloat(a.jun) - parseFloat(b.jun),
      render: (value: string) => `${value} ${unit}`,
    },
    {
      title: "Jul",
      dataIndex: "jul",
      key: "jul",
      width: 80,
      sorter: (a: any, b: any) => parseFloat(a.jul) - parseFloat(b.jul),
      render: (value: string) => `${value} ${unit}`,
    },
    {
      title: "Aug",
      dataIndex: "aug",
      key: "aug",
      width: 80,
      sorter: (a: any, b: any) => parseFloat(a.aug) - parseFloat(b.aug),
      render: (value: string) => `${value} ${unit}`,
    },
    {
      title: "Sep",
      dataIndex: "sep",
      key: "sep",
      width: 80,
      sorter: (a: any, b: any) => parseFloat(a.sep) - parseFloat(b.sep),
      render: (value: string) => `${value} ${unit}`,
    },
    {
      title: "Oct",
      dataIndex: "oct",
      key: "oct",
      width: 80,
      sorter: (a: any, b: any) => parseFloat(a.oct) - parseFloat(b.oct),
      render: (value: string) => `${value} ${unit}`,
    },
    {
      title: "Nov",
      dataIndex: "nov",
      key: "nov",
      width: 80,
      sorter: (a: any, b: any) => parseFloat(a.nov) - parseFloat(b.nov),
      render: (value: string) => `${value} ${unit}`,
    },
    {
      title: "Dec",
      dataIndex: "dec",
      key: "dec",
      width: 80,
      sorter: (a: any, b: any) => parseFloat(a.dec) - parseFloat(b.dec),
      render: (value: string) => `${value} ${unit}`,
    },
  ];

  const filterData = (data: any[]) => {
    if (yearFilter === "all") return data;
    return data.filter((item) => item.year.toString().includes(yearFilter));
  };

  const handleYearFilter = (value: string) => {
    setYearFilter(value);
  };

  // Select data based on stationId
  const getMaxTempData = () => {
    if (stationId === "4-2") {
      return shorchiMaxTempData;
    }
    if (stationId === "3-2") {
      return sherobodMaxTempData;
    }
    return denovMaxTempData;
  };

  const getMeanTempData = () => {
    if (stationId === "4-2") {
      return shorchiMeanTempData;
    }
    if (stationId === "3-2") {
      return sherobodMeanTempData;
    }
    return denovMeanTempData;
  };

  const getWindSpeedData = () => {
    if (stationId === "4-2") {
      return shorchiMeanWindSpeedData;
    }
    if (stationId === "3-2") {
      return sherobodMeanWindSpeedData;
    }
    return denovMeanWindSpeedData;
  };

  const getPrecipitationData = () => {
    if (stationId === "4-2") {
      return shorchiPrecipitationData;
    }
    if (stationId === "3-2") {
      return sherobodPrecipitationData;
    }
    return denovPrecipitationData;
  };

  const getMinTempData = () => {
    if (stationId === "4-2") {
      return shorchiMinTempData;
    }
    if (stationId === "3-2") {
      return sherobodMinTempData;
    }
    return denovMinTempData;
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Title level={4} style={{ margin: 0 }}>
          Denov Meteo Station - Meteorological Data
        </Title>
        <div className={classes.controls}>
          <Select
            placeholder="Filter by year"
            style={{ width: 150 }}
            value={yearFilter}
            onChange={handleYearFilter}
          >
            <Option value="all">All Years</Option>
            <Option value="198">1980s</Option>
            <Option value="199">1990s</Option>
            <Option value="200">2000s</Option>
            <Option value="201">2010s</Option>
            <Option value="202">2020s</Option>
          </Select>
        </div>
      </div>

      <div className={classes.tabsContainer}>
        <Tabs defaultActiveKey="maxTemp" type="card">
          <TabPane tab="Max Air Temperature" key="maxTemp">
            <div className={classes.tableContainer}>
              <Table
                columns={createColumns("°C")}
                dataSource={filterData(getMaxTempData())}
                rowKey="year"
                scroll={{ x: 1200 }}
                pagination={{
                  pageSize: 10,
                  showSizeChanger: true,
                  showQuickJumper: true,
                  showTotal: (total, range) =>
                    `${range[0]}-${range[1]} of ${total} years`,
                }}
                size="small"
              />
            </div>
          </TabPane>

          <TabPane tab="Mean Air Temperature" key="meanTemp">
            <div className={classes.tableContainer}>
              <Table
                columns={createColumns("°C")}
                dataSource={filterData(getMeanTempData())}
                rowKey="year"
                scroll={{ x: 1200 }}
                pagination={{
                  pageSize: 10,
                  showSizeChanger: true,
                  showQuickJumper: true,
                  showTotal: (total, range) =>
                    `${range[0]}-${range[1]} of ${total} years`,
                }}
                size="small"
              />
            </div>
          </TabPane>

          <TabPane tab="Min Air Temperature" key="minTemp">
            <div className={classes.tableContainer}>
              <Table
                columns={createColumns("°C")}
                dataSource={filterData(getMinTempData())}
                rowKey="year"
                scroll={{ x: 1200 }}
                pagination={{
                  pageSize: 10,
                  showSizeChanger: true,
                  showQuickJumper: true,
                  showTotal: (total, range) =>
                    `${range[0]}-${range[1]} of ${total} years`,
                }}
                size="small"
              />
            </div>
          </TabPane>

          <TabPane tab="Mean Wind Speed" key="windSpeed">
            <div className={classes.tableContainer}>
              <Table
                columns={createColumns("m/s")}
                dataSource={filterData(getWindSpeedData())}
                rowKey="year"
                scroll={{ x: 1200 }}
                pagination={{
                  pageSize: 10,
                  showSizeChanger: true,
                  showQuickJumper: true,
                  showTotal: (total, range) =>
                    `${range[0]}-${range[1]} of ${total} years`,
                }}
                size="small"
              />
            </div>
          </TabPane>

          <TabPane tab="Precipitation" key="precipitation">
            <div className={classes.tableContainer}>
              <Table
                columns={createColumns("mm")}
                dataSource={filterData(getPrecipitationData())}
                rowKey="year"
                scroll={{ x: 1200 }}
                pagination={{
                  pageSize: 10,
                  showSizeChanger: true,
                  showQuickJumper: true,
                  showTotal: (total, range) =>
                    `${range[0]}-${range[1]} of ${total} years`,
                }}
                size="small"
              />
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default MeteoDataTables;
