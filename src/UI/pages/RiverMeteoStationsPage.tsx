import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Table,
  Space,
  Modal,
  Form,
  Input,
  InputNumber,
  message,
  Popconfirm,
  Flex,
} from "antd";
import {
  ArrowLeftOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { createUseStyles } from "react-jss";
import { Color } from "../../assets/colors";
import { useRiverSidebar } from "../layouts/Layout/SideBar/RiverSidebarContext";

// Meteo station data type
interface MeteoStation {
  id: string;
  name: string;
  location: string;
  coordinates: string;
  status: "active" | "maintenance" | "inactive";
  elevation: number;
  established: number;
}

// Mock data for meteo stations
const mockMeteoStations = [
  {
    id: "1",
    name: "Cairo Weather Station",
    location: "Cairo, Egypt",
    coordinates: "30.0444°N, 31.2357°E",
    status: "active" as const,
    elevation: 23,
    established: 1950,
  },
  {
    id: "2",
    name: "Aswan Meteorological Station",
    location: "Aswan, Egypt",
    coordinates: "24.0889°N, 32.8997°E",
    status: "active" as const,
    elevation: 194,
    established: 1960,
  },
  {
    id: "3",
    name: "Khartoum Weather Center",
    location: "Khartoum, Sudan",
    coordinates: "15.5007°N, 32.5599°E",
    status: "active" as const,
    elevation: 381,
    established: 1940,
  },
  {
    id: "4",
    name: "Jinja Climate Station",
    location: "Jinja, Uganda",
    coordinates: "0.4244°N, 33.2042°E",
    status: "maintenance" as const,
    elevation: 1134,
    established: 1975,
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
  statusTag: {
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "500",
    textTransform: "uppercase",
  },
  activeStatus: {
    backgroundColor: "#f6ffed",
    color: "#52c41a",
    border: "1px solid #b7eb8f",
  },
  maintenanceStatus: {
    backgroundColor: "#fff2e8",
    color: "#fa8c16",
    border: "1px solid #ffd591",
  },
});

const RiverMeteoStationsPage: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setRiverContext, clearRiverContext } = useRiverSidebar();

  // State management
  const [stations, setStations] = useState<MeteoStation[]>(mockMeteoStations);
  const [filteredStations, setFilteredStations] =
    useState<MeteoStation[]>(mockMeteoStations);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingStation, setEditingStation] = useState<MeteoStation | null>(
    null
  );
  const [searchText, setSearchText] = useState("");
  const [form] = Form.useForm();

  // Set river context when component mounts
  useEffect(() => {
    if (id) {
      setRiverContext("Nile", id); // In real app, fetch river name by ID
    } else {
      clearRiverContext();
    }

    return () => {
      clearRiverContext();
    };
  }, [id, setRiverContext, clearRiverContext]);

  // Filter stations based on search text
  useEffect(() => {
    if (searchText) {
      const filtered = stations.filter(
        (station) =>
          station.name.toLowerCase().includes(searchText.toLowerCase()) ||
          station.location.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredStations(filtered);
    } else {
      setFilteredStations(stations);
    }
  }, [searchText, stations]);

  const handleBack = () => {
    navigate(`/rivers/${id}`);
  };

  // Handle add new station
  const handleAdd = () => {
    setEditingStation(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  // Handle edit station
  const handleEdit = (record: MeteoStation) => {
    setEditingStation(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  // Handle delete station
  const handleDelete = (stationId: string) => {
    setStations(stations.filter((station) => station.id !== stationId));
    message.success("Meteo station deleted successfully");
  };

  // Handle modal submit
  const handleModalSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (editingStation) {
        // Update existing station
        setStations(
          stations.map((station) =>
            station.id === editingStation.id
              ? { ...station, ...values }
              : station
          )
        );
        message.success("Meteo station updated successfully");
      } else {
        // Add new station
        const newStation: MeteoStation = {
          id: Date.now().toString(),
          ...values,
        };
        setStations([...stations, newStation]);
        message.success("Meteo station added successfully");
      }

      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  // Handle modal cancel
  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    setEditingStation(null);
  };

  const columns = [
    {
      title: "Station Name",
      dataIndex: "name",
      key: "name",
      sorter: (a: MeteoStation, b: MeteoStation) =>
        a.name.localeCompare(b.name),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      sorter: (a: MeteoStation, b: MeteoStation) =>
        a.location.localeCompare(b.location),
    },
    {
      title: "Coordinates",
      dataIndex: "coordinates",
      key: "coordinates",
    },
    {
      title: "Elevation (m)",
      dataIndex: "elevation",
      key: "elevation",
      sorter: (a: MeteoStation, b: MeteoStation) => a.elevation - b.elevation,
    },
    {
      title: "Established",
      dataIndex: "established",
      key: "established",
      sorter: (a: MeteoStation, b: MeteoStation) =>
        a.established - b.established,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <span
          className={`${classes.statusTag} ${
            status === "active"
              ? classes.activeStatus
              : classes.maintenanceStatus
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: MeteoStation) => (
        <Space>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this meteo station?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className={classes.pageContainer}>
      <div className={classes.header}>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={handleBack}
          className={classes.backButton}
        >
          Back to River Details
        </Button>
        <div className={classes.riverInfo}>
          <h1 className={classes.riverName}>Meteo Stations</h1>
          <div className={classes.riverLocation}>
            <EnvironmentOutlined />
            <span>Nile River Basin</span>
            <GlobalOutlined />
            <span>Multiple Countries</span>
          </div>
        </div>
      </div>

      <Card
        title={
          <Flex justify="space-between" align="center">
            <h2 style={{ margin: 0 }}>Meteorological Stations</h2>
            <Flex gap={16}>
              <Input.Search
                placeholder="Search meteo stations..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={{ width: 300 }}
                enterButton={<SearchOutlined />}
              />
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={handleAdd}
              >
                Add Station
              </Button>
            </Flex>
          </Flex>
        }
        className={classes.contentCard}
      >
        <Table
          columns={columns}
          dataSource={filteredStations}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} meteo stations`,
          }}
        />
      </Card>

      <Modal
        title={editingStation ? "Edit Meteo Station" : "Add New Meteo Station"}
        open={isModalVisible}
        onOk={handleModalSubmit}
        onCancel={handleModalCancel}
        okText={editingStation ? "Update" : "Add"}
        cancelText="Cancel"
        width={600}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Station Name"
            rules={[
              { required: true, message: "Please enter station name" },
              { min: 2, message: "Name must be at least 2 characters" },
            ]}
          >
            <Input placeholder="Enter station name" />
          </Form.Item>

          <Form.Item
            name="location"
            label="Location"
            rules={[
              { required: true, message: "Please enter location" },
              { min: 2, message: "Location must be at least 2 characters" },
            ]}
          >
            <Input placeholder="Enter location" />
          </Form.Item>

          <Form.Item
            name="coordinates"
            label="Coordinates"
            rules={[
              { required: true, message: "Please enter coordinates" },
              {
                pattern: /^-?\d+\.?\d*°[NS],\s*-?\d+\.?\d*°[EW]$/,
                message:
                  "Please enter coordinates in format: 30.0444°N, 31.2357°E",
              },
            ]}
          >
            <Input placeholder="Enter coordinates (e.g., 30.0444°N, 31.2357°E)" />
          </Form.Item>

          <Form.Item
            name="elevation"
            label="Elevation (m)"
            rules={[
              { required: true, message: "Please enter elevation" },
              {
                type: "number",
                min: -1000,
                max: 10000,
                message: "Please enter a valid elevation",
              },
            ]}
          >
            <InputNumber
              placeholder="Enter elevation in meters"
              style={{ width: "100%" }}
              min={-1000}
              max={10000}
            />
          </Form.Item>

          <Form.Item
            name="established"
            label="Established Year"
            rules={[
              { required: true, message: "Please enter established year" },
              {
                type: "number",
                min: 1800,
                max: new Date().getFullYear(),
                message: "Please enter a valid year",
              },
            ]}
          >
            <InputNumber
              placeholder="Enter established year"
              style={{ width: "100%" }}
              min={1800}
              max={new Date().getFullYear()}
            />
          </Form.Item>

          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Please select status" }]}
          >
            <Input placeholder="Enter status (active/maintenance/inactive)" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default RiverMeteoStationsPage;
