import { Flex, Modal } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../api/auth/AuthProvider";
import { EditIcon, SearchIcon, TrashtIcon } from "../../../assets/icons";
import { PathGenerators } from "../../../router/paths";
import { Button } from "../../components/CustomAntdComponents/Button";
import { Input } from "../../components/CustomAntdComponents/Input";
import Table from "../../components/CustomAntdComponents/Table";
import { TableActionButton } from "../../components/TableValues/TableActionButton/TableActionButton";
import { TopHalalStockTableTitle } from "./TopHalalStockTableTitle";

export default function TopHalalStock() {
  const { user } = useAuth();
  const userRole = user?.role?.name;
  const showDataMonipulationButtons = userRole === "super-admin";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDone = () => {
    // Handle adding stock logic here
    setIsModalOpen(false);
  };

  const baseColumns = [
    {
      title: "Ticker",
      render: () => "-",
    },
    {
      title: "Company Name",
      render: () => "-",
    },
    {
      title: "Sector",
      render: () => "-",
    },
    {
      title: "Country",
      render: () => "-",
    },
    {
      title: "Market Cap",
      render: () => "-",
    },
    {
      title: "P/E",
      render: () => "-",
    },
    {
      title: "Price",
      render: () => "-",
    },
    {
      title: "Change",
      render: () => "-",
    },
    {
      title: "Target Price",
      render: () => "-",
    },
    {
      title: "Analyst Rating",
      render: () => "-",
    },
    {
      title: "Ranking",
      render: () => "-",
    },
  ];

  const actionColumn = {
    key: "actions",
    fixed: "right" as const,
    render: (record: any) => (
      <Flex gap={2} align="center">
        <TableActionButton icon={<TrashtIcon />} title="Delete" />
        <Link to={PathGenerators.USERS_DETAILS_ID(record.key)}>
          <TableActionButton icon={<EditIcon />} title="Edit" />
        </Link>
      </Flex>
    ),
  };

  const columns = showDataMonipulationButtons
    ? [...baseColumns, actionColumn]
    : baseColumns;

  const mockData = [
    {
      key: "1",
      name: "John Doe",
      avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel",
      email: "john@example.com",
      optOut: false,
      purchases: 100.14,
      status: "no",
      lastLogin: "2025-01-16",
      joined: "2025-01-16",
    },
    {
      key: "1",
      name: "John Doe",
      avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel",
      email: "john@example.com",
      optOut: true,
      purchases: 100.14,
      status: "paid",
      lastLogin: "2025-01-16",
      joined: "2025-01-16",
    },
  ];

  return (
    <>
      <Table
        bordered
        scroll={{ x: 1600 }}
        columns={columns}
        dataSource={mockData}
        title={() => <TopHalalStockTableTitle onAddClick={showModal} />}
      />

      <Modal
        title="Add Halal Stock"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="done" type="primary" onClick={handleDone}>
            Done
          </Button>,
        ]}
      >
        <Input
          prefix={<SearchIcon />}
          placeholder="Search for stock"
          style={{ marginTop: 16 }}
        />
      </Modal>
    </>
  );
}
