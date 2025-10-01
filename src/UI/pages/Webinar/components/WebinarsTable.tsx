import { EyeOutlined } from "@ant-design/icons";
import { Space, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { EditIcon, TrashtIcon } from "../../../../assets/icons";
import { PathGenerators } from "../../../../router/paths";
import { Table } from "../../../components/CustomAntdComponents/Table";
import { TableActionButton } from "../../../components/TableValues/TableActionButton/TableActionButton";
import type { Webinar } from "../types";

interface WebinarsTableProps {
  webinars: Webinar[];
  onEdit: (record: Webinar) => void;
  onDelete: (record: Webinar) => void;
  onView: (record: Webinar) => void;
}

export function WebinarsTable({ webinars }: WebinarsTableProps) {
  const columns: ColumnsType<Webinar> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text: string) => (
        <div style={{ maxWidth: "300px" }}>
          <div
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontWeight: "500",
            }}
          >
            {text}
          </div>
        </div>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category: string) => <Tag color="blue">{category}</Tag>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        const colorMap: Record<string, string> = {
          Live: "red",
          Scheduled: "orange",
          Completed: "green",
        };
        return <Tag color={colorMap[status] || "default"}>{status}</Tag>;
      },
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Attendees",
      dataIndex: "attendees",
      key: "attendees",
      render: (attendees: number) => attendees || 0,
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Actions",
      key: "actions",
      fixed: "right",
      render: () => (
        <Space size="small">
          <Link to={PathGenerators.WEBINAR_DETAIL_ID("1")}>
            <TableActionButton icon={<EyeOutlined />} title="View" />
          </Link>
          <Link to={PathGenerators.WEBINARS_CREATE_ID("1")}>
            <TableActionButton icon={<EditIcon />} title="Edit" />
          </Link>
          <TableActionButton icon={<TrashtIcon />} title="Delete" />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={webinars}
        rowKey="id"
        bordered
        scroll={{ x: 1200 }}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
      />
    </div>
  );
}
