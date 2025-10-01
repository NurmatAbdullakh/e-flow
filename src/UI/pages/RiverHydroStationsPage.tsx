import {
  ArrowLeftOutlined,
  DeleteOutlined,
  EditOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Flex,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Popconfirm,
  Space,
  Table,
} from "antd";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useNavigate, useParams } from "react-router-dom";
import { Color } from "../../assets/colors";
import { useRiverSidebar } from "../layouts/Layout/SideBar/RiverSidebarContext";

// Hydro station data type
interface HydroStation {
  id: string;
  name: string;
  location: string;
  capacity: number;
  status: "operational" | "maintenance" | "inactive";
  yearBuilt: number;
  river: string;
}

// Mock data for hydro stations
const mockHydroStations = [
  {
    id: "1",
    name: "Aswan High Dam",
    location: "Aswan, Egypt",
    capacity: 2100,
    status: "operational",
    yearBuilt: 1970,
    river: "Nile",
  },
  {
    id: "2",
    name: "Roseires Dam",
    location: "Blue Nile, Sudan",
    capacity: 1800,
    status: "operational",
    yearBuilt: 1966,
    river: "Nile",
  },
  {
    id: "3",
    name: "Sennar Dam",
    location: "Blue Nile, Sudan",
    capacity: 15,
    status: "operational",
    yearBuilt: 1925,
    river: "Nile",
  },
  {
    id: "4",
    name: "Jinja Dam",
    location: "Jinja, Uganda",
    capacity: 180,
    status: "operational",
    yearBuilt: 1954,
    river: "Nile",
  },
];

const useStyles = createUseStyles({
  pageContainer: {
    padding: "24px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
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
  operationalStatus: {
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

const RiverHydroStationsPage: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setRiverContext, clearRiverContext } = useRiverSidebar();

  // State management
  const [stations, setStations] = useState<HydroStation[]>(() =>
    mockHydroStations.map((station) => ({
      ...station,
      status: station.status as "operational" | "maintenance" | "inactive",
    }))
  );
  const [filteredStations, setFilteredStations] = useState<HydroStation[]>(() =>
    mockHydroStations.map((station) => ({
      ...station,
      status: station.status as "operational" | "maintenance" | "inactive",
    }))
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingStation, setEditingStation] = useState<HydroStation | null>(
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
  const handleEdit = (record: HydroStation) => {
    setEditingStation(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  // Handle delete station
  const handleDelete = (stationId: string) => {
    setStations(stations.filter((station) => station.id !== stationId));
    message.success("Hydro station deleted successfully");
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
        message.success("Hydro station updated successfully");
      } else {
        // Add new station
        const newStation: HydroStation = {
          id: Date.now().toString(),
          river: "Nile", // In real app, get from context
          ...values,
        };
        setStations([...stations, newStation]);
        message.success("Hydro station added successfully");
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
      sorter: (a: HydroStation, b: HydroStation) =>
        a.name.localeCompare(b.name),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      sorter: (a: HydroStation, b: HydroStation) =>
        a.location.localeCompare(b.location),
    },
    {
      title: "Capacity (MW)",
      dataIndex: "capacity",
      key: "capacity",
      sorter: (a: HydroStation, b: HydroStation) => a.capacity - b.capacity,
      render: (capacity: number) => capacity.toLocaleString(),
    },
    {
      title: "Year Built",
      dataIndex: "yearBuilt",
      key: "yearBuilt",
      sorter: (a: HydroStation, b: HydroStation) => a.yearBuilt - b.yearBuilt,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <span
          className={`${classes.statusTag} ${
            status === "operational"
              ? classes.operationalStatus
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
      render: (_: any, record: HydroStation) => (
        <Space>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this hydro station?"
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
          <h1 className={classes.riverName}>Hydro Stations</h1>
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
            <h2 style={{ margin: 0 }}>Hydroelectric Power Stations</h2>
            <Flex gap={16}>
              <Input.Search
                placeholder="Search hydro stations..."
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
              `${range[0]}-${range[1]} of ${total} hydro stations`,
          }}
        />
      </Card>

      <Modal
        title={editingStation ? "Edit Hydro Station" : "Add New Hydro Station"}
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
            name="capacity"
            label="Capacity (MW)"
            rules={[
              { required: true, message: "Please enter capacity" },
              {
                type: "number",
                min: 1,
                message: "Capacity must be greater than 0",
              },
            ]}
          >
            <InputNumber
              placeholder="Enter capacity in MW"
              style={{ width: "100%" }}
              min={1}
            />
          </Form.Item>

          <Form.Item
            name="yearBuilt"
            label="Year Built"
            rules={[
              { required: true, message: "Please enter year built" },
              {
                type: "number",
                min: 1800,
                max: new Date().getFullYear(),
                message: "Please enter a valid year",
              },
            ]}
          >
            <InputNumber
              placeholder="Enter year built"
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
            <Input placeholder="Enter status (operational/maintenance/inactive)" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default RiverHydroStationsPage;
