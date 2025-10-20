import {
  ArrowLeftOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Button, Card, Flex, Typography } from "antd";
import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useRiverSidebar } from "../layouts/Layout/SideBar/RiverSidebarContext";
import HydroDataTable from "../components/HydroDataTable/HydroDataTable";
import KenguzarHydroDataTable from "../components/KenguzarHydroDataTable/KenguzarHydroDataTable";
import BazarjayHydroDataTable from "../components/BazarjayHydroDataTable/BazarjayHydroDataTable";
import {
  // TimeSeriesChart,
  BoxplotChart,
  AnnualBarChart,
  SeasonalBarChart,
  HeatmapChart,
} from "../components/HydroCharts";
import { Color } from "../../assets/colors";

const { Title, Text } = Typography;

// Mock data for hydro stations
const mockHydroStations = [
  {
    id: "1",
    name: "Qoratog Hydro Station",
    location: "Qoratog, Uzbekistan",
    capacity: 45,
    status: "operational",
    yearBuilt: 1985,
    river: "Qoratog river",
  },
  {
    id: "1-1",
    name: "Qoratog Uste Hydro Post",
    location: "Qoratog Uste, Uzbekistan",
    capacity: 0,
    status: "operational",
    yearBuilt: 1980,
    river: "Qoratog river",
  },
  {
    id: "2-1",
    name: "Kenguzar Hydro Post",
    location: "Kenguzar, Uzbekistan",
    capacity: 0,
    status: "operational",
    yearBuilt: 1928,
    river: "Sangardak river",
  },
  {
    id: "4-1",
    name: "Bazarjay Hydro Post",
    location: "Bazarjay, Uzbekistan",
    capacity: 0,
    status: "operational",
    yearBuilt: 1960,
    river: "Xalkadjar river",
  },
];

const useStyles = createUseStyles({
  pageContainer: {
    padding: "24px",
    backgroundColor: "#f5f5f5",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "24px",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  backButton: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  riverInfo: {
    flex: 1,
  },
  riverName: {
    fontSize: "28px",
    fontWeight: "600",
    color: Color.text.secondary[700],
    margin: 0,
  },
  riverLocation: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: Color.text.quaternary[500],
    fontSize: "16px",
    marginTop: "4px",
  },
  contentCard: {
    "& .ant-card-body": {
      padding: "24px",
    },
  },
  infoCard: {
    marginBottom: "24px",
    "& .ant-card-body": {
      padding: "24px",
    },
  },
});

const HydroDataDetailsPage: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const stationId = searchParams.get("stationId");
  const navigate = useNavigate();
  const { setRiverContext, clearRiverContext } = useRiverSidebar();

  // Get station data by ID
  const station = mockHydroStations.find((s) => s.id === stationId);

  // Set river context when component mounts
  useEffect(() => {
    if (id) {
      // Get river name based on ID
      const riverNames: { [key: string]: string } = {
        "1": "Qoratog river",
        "2": "Sangardak river",
        "3": "Sherobod river",
        "4": "Xalkadjar river",
        "5": "Boysun river",
        "6": "Denov river",
        "7": "Sho'rchi river",
      };
      setRiverContext(riverNames[id] || "Unknown river", id);
    } else {
      clearRiverContext();
    }

    return () => {
      clearRiverContext();
    };
  }, [id, setRiverContext, clearRiverContext]);

  const handleBack = () => {
    navigate(`/rivers/${id}/hydro-stations`);
  };

  // Only show data for specific hydro posts
  if (
    (stationId !== "1-1" && stationId !== "2-1" && stationId !== "4-1") ||
    !station
  ) {
    return (
      <div className={classes.pageContainer}>
        <div className={classes.header}>
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={handleBack}
            className={classes.backButton}
          >
            Back to Hydro Stations
          </Button>
        </div>
        <Card className={classes.infoCard}>
          <Title level={3}>Hydrological Data Not Available</Title>
          <Text>
            Detailed hydrological data is currently only available for Qoratog
            Uste Hydro Post.
          </Text>
        </Card>
      </div>
    );
  }

  return (
    <div className={classes.pageContainer}>
      <div className={classes.header}>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={handleBack}
          className={classes.backButton}
        >
          Back to Hydro Stations
        </Button>
        <div className={classes.riverInfo}>
          <h1 className={classes.riverName}>
            {station.name} - Hydrological Data
          </h1>
          <div className={classes.riverLocation}>
            <EnvironmentOutlined />
            <span>{station.location}</span>
            <GlobalOutlined />
            <span>Uzbekistan</span>
          </div>
        </div>
      </div>

      <Card title="Station Information" className={classes.infoCard}>
        <Flex style={{ width: "100%" }} wrap="wrap" flex={"1 0 500px"} gap={40}>
          <div>
            <Text strong>Station Name:</Text>
            <br />
            <Text type="secondary">{station.name}</Text>
          </div>
          <div>
            <Text strong>Location:</Text>
            <br />
            <Text type="secondary">{station.location}</Text>
          </div>
          <div>
            <Text strong>Status:</Text>
            <br />
            <Text type="secondary">{station.status}</Text>
          </div>
          <div>
            <Text strong>Established:</Text>
            <br />
            <Text type="secondary">{station.yearBuilt}</Text>
          </div>
          <div>
            <Text strong>Data Period:</Text>
            <br />
            <Text type="secondary">
              {stationId === "1-1"
                ? "1983 - 2020 (38 years)"
                : stationId === "2-1"
                ? "1928 - 2020 (93 years)"
                : stationId === "4-1"
                ? "1960 - 2020 (61 years)"
                : "N/A"}
            </Text>
          </div>
          <div>
            <Text strong>Measurement Unit:</Text>
            <br />
            <Text type="secondary">Cubic meters per second (m³/s)</Text>
          </div>
          <div>
            <Text strong>Data Type:</Text>
            <br />
            <Text type="secondary">Monthly average flow rates</Text>
          </div>
        </Flex>
      </Card>

      <Card title="Monthly Flow Rates" className={classes.contentCard}>
        {stationId === "1-1" && <HydroDataTable />}
        {stationId === "2-1" && <KenguzarHydroDataTable />}
        {stationId === "4-1" && <BazarjayHydroDataTable />}
      </Card>

      <Card title="Data Visualization" className={classes.contentCard}>
        {/* <TimeSeriesChart stationId={stationId} /> */}
        <BoxplotChart stationId={stationId} />
        <AnnualBarChart stationId={stationId} />
        <SeasonalBarChart stationId={stationId} />
        <HeatmapChart stationId={stationId} />
      </Card>
    </div>
  );
};

export default HydroDataDetailsPage;
