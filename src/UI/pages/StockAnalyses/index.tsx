import { Link } from "react-router-dom";
import { Color } from "../../../assets/colors";
import { EditIcon } from "../../../assets/icons";
import { PathGenerators } from "../../../router/paths";
import Table from "../../components/CustomAntdComponents/Table";
import { TableActionButton } from "../../components/TableValues/TableActionButton/TableActionButton";
import { TextTableValue } from "../../components/TableValues/TextTableValue/TextTableValue";
import { StockAnalysesTableTitle } from "./StockAnalysesTableTitle";
import { useAuth } from "../../../api/auth/hooks";

export default function StockAnalyses() {
  const { user } = useAuth();
  const userRole = user?.role?.name;
  const showDataMonipulationButtons = userRole === "super-admin";

  const baseColumns = [
    {
      title: "Company",
      key: "name",
      render: () => "-",
    },
    {
      title: "Sector",
      dataIndex: "optOut",
      key: "optOut",
      render: () => "-",
    },
    {
      title: "Market Cap",
      dataIndex: "purchases",
      key: "purchases",
      render: () => "-",
    },
    {
      title: "Ticker",
      dataIndex: "status",
      key: "status",
      render: () => "-",
    },
    {
      title: "Given By",
      dataIndex: "lastLogin",
      key: "lastLogin",
      render: () => "-",
    },
    {
      title: "Signal",
      dataIndex: "lastLogin",
      key: "lastLogin",
      render: () => "-",
    },
    {
      title: "Date",
      dataIndex: "lastLogin",
      key: "lastLogin",
      render: () => "-",
    },
    {
      title: "Update",
      dataIndex: "lastLogin",
      key: "lastLogin",
      render: () => "-",
    },
    {
      title: "Result",
      dataIndex: "lastLogin",
      key: "lastLogin",
      render: () => "-",
    },
    {
      key: "actions",
      fixed: "right" as const,
      render: (record: { id: string }) => (
        <Link to={PathGenerators.REPORT_DETAIL_ID(record.id)}>
          <TextTableValue color={Color.brand.secondary} text={"Report"} />
        </Link>
      ),
    },
  ];

  const editActionColumn = {
    key: "actions-edit",
    fixed: "right" as const,
    render: (record: { key: string }) => (
      <Link to={PathGenerators.REPORT_DETAIL_ID(record.key)}>
        <TableActionButton icon={<EditIcon />} title="Edit" />
      </Link>
    ),
  };

  const columns = showDataMonipulationButtons
    ? [...baseColumns, editActionColumn]
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
    <Table
      bordered
      scroll={{ x: 1600 }}
      columns={columns}
      dataSource={mockData}
      title={() => <StockAnalysesTableTitle />}
    />
  );
}
