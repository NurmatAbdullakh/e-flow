import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  Input,
  Form,
  message,
  Popconfirm,
  Flex,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { Color } from "../../assets/colors";
import { PathGenerators } from "../../router/paths";

// River data type
interface River {
  id: string;
  name: string;
  length: number;
  country: string;
  continent: string;
  description: string;
  status: "active" | "inactive";
}

// Mock data
const mockRivers: River[] = [
  {
    id: "1",
    name: "Nile",
    length: 6650,
    country: "Egypt",
    continent: "Africa",
    description: "The longest river in the world",
    status: "active",
  },
  {
    id: "2",
    name: "Amazon",
    length: 6400,
    country: "Brazil",
    continent: "South America",
    description: "The largest river by discharge volume",
    status: "active",
  },
  {
    id: "3",
    name: "Yangtze",
    length: 6300,
    country: "China",
    continent: "Asia",
    description: "The longest river in Asia",
    status: "active",
  },
  {
    id: "4",
    name: "Mississippi",
    length: 6275,
    country: "United States",
    continent: "North America",
    description: "The second longest river in North America",
    status: "inactive",
  },
];

const useStyles = createUseStyles({
  pageContainer: {
    padding: "24px",
  },
  pageHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  pageTitle: {
    fontSize: "24px",
    fontWeight: "600",
    color: Color.text.secondary[700],
    margin: 0,
  },
  searchContainer: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  tableContainer: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
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
  inactiveStatus: {
    backgroundColor: "#fff2e8",
    color: "#fa8c16",
    border: "1px solid #ffd591",
  },
  actionButtons: {
    display: "flex",
    gap: "8px",
  },
  modalForm: {
    "& .ant-form-item": {
      marginBottom: "16px",
    },
    "& .ant-form-item-label": {
      fontWeight: "500",
    },
  },
});

const RiversPage: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [rivers, setRivers] = useState<River[]>(mockRivers);
  const [filteredRivers, setFilteredRivers] = useState<River[]>(mockRivers);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingRiver, setEditingRiver] = useState<River | null>(null);
  const [searchText, setSearchText] = useState("");
  const [form] = Form.useForm();

  // Filter rivers based on search text
  useEffect(() => {
    if (searchText) {
      const filtered = rivers.filter(
        (river) =>
          river.name.toLowerCase().includes(searchText.toLowerCase()) ||
          river.country.toLowerCase().includes(searchText.toLowerCase()) ||
          river.continent.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRivers(filtered);
    } else {
      setFilteredRivers(rivers);
    }
  }, [searchText, rivers]);

  // Handle add new river
  const handleAdd = () => {
    setEditingRiver(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  // Handle edit river
  const handleEdit = (record: River) => {
    setEditingRiver(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  // Handle delete river
  const handleDelete = (id: string) => {
    setRivers(rivers.filter((river) => river.id !== id));
    message.success("River deleted successfully");
  };

  // Handle modal submit
  const handleModalSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (editingRiver) {
        // Update existing river
        setRivers(
          rivers.map((river) =>
            river.id === editingRiver.id ? { ...river, ...values } : river
          )
        );
        message.success("River updated successfully");
      } else {
        // Add new river
        const newRiver: River = {
          id: Date.now().toString(),
          ...values,
        };
        setRivers([...rivers, newRiver]);
        message.success("River added successfully");
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
    setEditingRiver(null);
  };

  // Handle row click to navigate to river details
  const handleRowClick = (record: River) => {
    navigate(PathGenerators.RIVER_DETAILS(record.id));
  };

  // Table columns configuration
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a: River, b: River) => a.name.localeCompare(b.name),
    },
    {
      title: "Length (km)",
      dataIndex: "length",
      key: "length",
      sorter: (a: River, b: River) => a.length - b.length,
      render: (length: number) => length.toLocaleString(),
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      sorter: (a: River, b: River) => a.country.localeCompare(b.country),
    },
    {
      title: "Continent",
      dataIndex: "continent",
      key: "continent",
      sorter: (a: River, b: River) => a.continent.localeCompare(b.continent),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <span
          className={`${classes.statusTag} ${
            status === "active" ? classes.activeStatus : classes.inactiveStatus
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: River) => (
        <div className={classes.actionButtons}>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={(e) => {
              e.stopPropagation();
              handleEdit(record);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this river?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              onClick={(e) => {
                e.stopPropagation();
              }}
              type="link"
              danger
              icon={<DeleteOutlined />}
            >
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className={classes.pageContainer}>
      <div className={classes.tableContainer}>
        <Table
          title={() => (
            <Flex justify="space-between" align="center">
              <h1 className={classes.pageTitle}>Rivers Management</h1>
              <Flex gap={16}>
                <Input.Search
                  placeholder="Search rivers..."
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
                  Add River
                </Button>
              </Flex>
            </Flex>
          )}
          columns={columns}
          dataSource={filteredRivers}
          rowKey="id"
          onRow={(record) => ({
            onClick: () => handleRowClick(record),
            style: { cursor: "pointer" },
          })}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} rivers`,
          }}
        />
      </div>

      <Modal
        title={editingRiver ? "Edit River" : "Add New River"}
        open={isModalVisible}
        onOk={handleModalSubmit}
        onCancel={handleModalCancel}
        okText={editingRiver ? "Update" : "Add"}
        cancelText="Cancel"
        width={600}
      >
        <Form form={form} layout="vertical" className={classes.modalForm}>
          <Form.Item
            name="name"
            label="River Name"
            rules={[
              { required: true, message: "Please enter river name" },
              { min: 2, message: "Name must be at least 2 characters" },
            ]}
          >
            <Input placeholder="Enter river name" />
          </Form.Item>

          <Form.Item
            name="length"
            label="Length (km)"
            rules={[
              { required: true, message: "Please enter river length" },
              {
                type: "number",
                min: 1,
                message: "Length must be greater than 0",
              },
            ]}
          >
            <Input type="number" placeholder="Enter length in kilometers" />
          </Form.Item>

          <Form.Item
            name="country"
            label="Country"
            rules={[
              { required: true, message: "Please enter country" },
              { min: 2, message: "Country must be at least 2 characters" },
            ]}
          >
            <Input placeholder="Enter country" />
          </Form.Item>

          <Form.Item
            name="continent"
            label="Continent"
            rules={[
              { required: true, message: "Please enter continent" },
              { min: 2, message: "Continent must be at least 2 characters" },
            ]}
          >
            <Input placeholder="Enter continent" />
          </Form.Item>

          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Please select status" }]}
          >
            <Input placeholder="Enter status (active/inactive)" />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[
              { required: true, message: "Please enter description" },
              {
                min: 10,
                message: "Description must be at least 10 characters",
              },
            ]}
          >
            <Input.TextArea placeholder="Enter river description" rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default RiversPage;
