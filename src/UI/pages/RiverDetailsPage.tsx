import {
  ArrowLeftOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Button, Card, Descriptions, Divider, Space, Typography } from "antd";
import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useNavigate, useParams } from "react-router-dom";
import { Color } from "../../assets/colors";
import { useRiverSidebar } from "../layouts/Layout/SideBar/RiverSidebarContext";

const { Title, Text } = Typography;

// Mock data - in real app this would come from API
const mockRivers = [
  {
    id: "1",
    name: "Nile",
    length: 6650,
    country: "Egypt",
    continent: "Africa",
    description: "The longest river in the world",
    status: "active",
    source: "Lake Victoria",
    mouth: "Mediterranean Sea",
    basinSize: 3254555,
    averageDischarge: 2830,
  },
  {
    id: "2",
    name: "Amazon",
    length: 6400,
    country: "Brazil",
    continent: "South America",
    description: "The largest river by discharge volume",
    status: "active",
    source: "Mantaro River",
    mouth: "Atlantic Ocean",
    basinSize: 7050000,
    averageDischarge: 209000,
  },
  {
    id: "3",
    name: "Yangtze",
    length: 6300,
    country: "China",
    continent: "Asia",
    description: "The longest river in Asia",
    status: "active",
    source: "Jari Hill",
    mouth: "East China Sea",
    basinSize: 1800000,
    averageDischarge: 31900,
  },
  {
    id: "4",
    name: "Mississippi",
    length: 6275,
    country: "United States",
    continent: "North America",
    description: "The second longest river in North America",
    status: "inactive",
    source: "Lake Itasca",
    mouth: "Gulf of Mexico",
    basinSize: 2980000,
    averageDischarge: 16792,
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
  contentContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
  },
  detailsCard: {
    "& .ant-card-body": {
      padding: "24px",
    },
  },
  statusTag: {
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "500",
    textTransform: "uppercase",
  },
  activeStatus: {
    backgroundColor: "#f6ffed",
    color: "#52c41a",
    border: "1px solid #b7eb8f",
  },
  inactiveStatus: {
    backgroundColor: "#fff2e8",
    color: "#fa8c16",
    border: "1px solid #ffd591",
  },
  descriptionCard: {
    gridColumn: "1 / -1",
    "& .ant-card-body": {
      padding: "24px",
    },
  },
  descriptionText: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: Color.text.secondary[700],
  },
});

const RiverDetailsPage: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setRiverContext, clearRiverContext } = useRiverSidebar();

  const river = mockRivers.find((r) => r.id === id);

  // Set river context when component mounts
  useEffect(() => {
    if (river) {
      setRiverContext(river.name, river.id);
    } else {
      clearRiverContext();
    }

    // Cleanup when component unmounts
    return () => {
      clearRiverContext();
    };
  }, [river, setRiverContext, clearRiverContext]);

  if (!river) {
    return (
      <div className={classes.pageContainer}>
        <div className={classes.header}>
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate("/rivers")}
            className={classes.backButton}
          >
            Back to Rivers
          </Button>
        </div>
        <Card>
          <Title level={3}>River not found</Title>
          <Text>The river you're looking for doesn't exist.</Text>
        </Card>
      </div>
    );
  }

  const handleBack = () => {
    navigate("/rivers");
  };

  return (
    <div className={classes.pageContainer}>
      <div className={classes.header}>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={handleBack}
          className={classes.backButton}
        >
          Back to Rivers
        </Button>
        <div className={classes.riverInfo}>
          <h1 className={classes.riverName}>{river.name}</h1>
          <div className={classes.riverLocation}>
            <EnvironmentOutlined />
            <span>{river.country}</span>
            <Divider type="vertical" />
            <GlobalOutlined />
            <span>{river.continent}</span>
            <Divider type="vertical" />
            <span
              className={`${classes.statusTag} ${
                river.status === "active"
                  ? classes.activeStatus
                  : classes.inactiveStatus
              }`}
            >
              {river.status}
            </span>
          </div>
        </div>
      </div>

      <div className={classes.contentContainer}>
        <Card title="Basic Information" className={classes.detailsCard}>
          <Descriptions column={1} size="middle">
            <Descriptions.Item label="Length">
              {river.length.toLocaleString()} km
            </Descriptions.Item>
            <Descriptions.Item label="Source">{river.source}</Descriptions.Item>
            <Descriptions.Item label="Mouth">{river.mouth}</Descriptions.Item>
            <Descriptions.Item label="Basin Size">
              {river.basinSize.toLocaleString()} km²
            </Descriptions.Item>
            <Descriptions.Item label="Average Discharge">
              {river.averageDischarge.toLocaleString()} m³/s
            </Descriptions.Item>
          </Descriptions>
        </Card>

        <Card title="Quick Stats" className={classes.detailsCard}>
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <div>
              <Text strong>Length Rank</Text>
              <br />
              <Text type="secondary">1st longest river globally</Text>
            </div>
            <div>
              <Text strong>Discharge Volume</Text>
              <br />
              <Text type="secondary">2nd highest globally</Text>
            </div>
            <div>
              <Text strong>Countries</Text>
              <br />
              <Text type="secondary">11 countries</Text>
            </div>
            <div>
              <Text strong>Major Cities</Text>
              <br />
              <Text type="secondary">Cairo, Alexandria, Luxor</Text>
            </div>
          </Space>
        </Card>

        <Card title="Description" className={classes.descriptionCard}>
          <Text className={classes.descriptionText}>
            {river.description}. The {river.name} River is one of the most
            significant waterways in the world, playing a crucial role in the
            ecosystems, economies, and cultures of the regions it flows through.
            It has been a source of life, transportation, and inspiration for
            countless civilizations throughout history.
          </Text>
        </Card>
      </div>
    </div>
  );
};

export default RiverDetailsPage;
