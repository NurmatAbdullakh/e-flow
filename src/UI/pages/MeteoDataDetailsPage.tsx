import {
  ArrowLeftOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Button, Card, Flex, Typography } from "antd";
import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Color } from "../../assets/colors";
import {
  AnnualBarChart,
  BoxplotChart,
  HeatmapChart,
  SeasonalBarChart,
  TimeSeriesChart,
} from "../components/MeteoCharts";
import MeteoDataTables from "../components/MeteoDataTables/MeteoDataTables";
import { useRiverSidebar } from "../layouts/Layout/SideBar/RiverSidebarContext";

const { Title, Text } = Typography;

// Mock data for meteo stations
const mockMeteoStations = [
  {
    id: "1",
    name: "Qoratog Weather Station",
    location: "Qoratog, Uzbekistan",
    coordinates: "39.1234°N, 66.7890°E",
    status: "active" as const,
    elevation: 1250,
    established: 1980,
  },
  {
    id: "1-2",
    name: "Denov Meteo Station",
    location: "Denov, Uzbekistan",
    coordinates: "38.3456°N, 67.2345°E",
    status: "active" as const,
    elevation: 850,
    established: 1988,
  },
  {
    id: "4-2",
    name: "Sho'rchi Meteo Station",
    location: "Sho'rchi, Uzbekistan",
    coordinates: "40.1234°N, 66.5678°E",
    status: "active" as const,
    elevation: 950,
    established: 1981,
  },
  {
    id: "3-2",
    name: "Sherobod Meteo Station",
    location: "Sherobod, Uzbekistan",
    coordinates: "37.9012°N, 67.3456°E",
    status: "active" as const,
    elevation: 750,
    established: 1981,
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

const MeteoDataDetailsPage: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const stationId = searchParams.get("stationId");
  const navigate = useNavigate();
  const { setRiverContext, clearRiverContext } = useRiverSidebar();

  // Get station data by ID
  const station = mockMeteoStations.find((s) => s.id === stationId);

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
    navigate(`/rivers/${id}/meteo-stations`);
  };

  // Only show data for specific meteo stations
  if (
    (stationId !== "1-2" && stationId !== "4-2" && stationId !== "3-2") ||
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
            Back to Meteo Stations
          </Button>
        </div>
        <Card className={classes.infoCard}>
          <Title level={3}>Meteorological Data Not Available</Title>
          <Text>
            Detailed meteorological data is currently only available for Denov
            Meteo Station.
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
          Back to Meteo Stations
        </Button>
        <div className={classes.riverInfo}>
          <h1 className={classes.riverName}>
            {station.name} - Meteorological Data
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
        <Flex justify="space-between" style={{ width: "100%" }}>
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
            <Text strong>Coordinates:</Text>
            <br />
            <Text type="secondary">{station.coordinates}</Text>
          </div>
          <div>
            <Text strong>Elevation:</Text>
            <br />
            <Text type="secondary">{station.elevation} m</Text>
          </div>
          <div>
            <Text strong>Status:</Text>
            <br />
            <Text type="secondary">{station.status}</Text>
          </div>
          <div>
            <Text strong>Established:</Text>
            <br />
            <Text type="secondary">{station.established}</Text>
          </div>
          <div>
            <Text strong>Data Period:</Text>
            <br />
            <Text type="secondary">1981 - 2024 (44 years)</Text>
          </div>
          <div>
            <Text strong>Data Types:</Text>
            <br />
            <Text type="secondary">
              Temperature (Max, Mean, Min), Wind Speed, Precipitation
            </Text>
          </div>
        </Flex>
      </Card>

      <Card title="Meteorological Data" className={classes.contentCard}>
        <MeteoDataTables stationId={stationId} />
      </Card>

      <Card title="Data Visualization" className={classes.contentCard}>
        <TimeSeriesChart stationId={stationId} />
        <BoxplotChart stationId={stationId} />
        <AnnualBarChart stationId={stationId} />
        <SeasonalBarChart stationId={stationId} />
        <HeatmapChart stationId={stationId} />
      </Card>
    </div>
  );
};

export default MeteoDataDetailsPage;
