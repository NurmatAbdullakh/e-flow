import { EyeOutlined } from "@ant-design/icons";
import { Progress, Space, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { EditIcon, TrashtIcon } from "../../../../assets/icons";
import { PathGenerators } from "../../../../router/paths";
import { Table } from "../../../components/CustomAntdComponents/Table";
import { TableActionButton } from "../../../components/TableValues/TableActionButton/TableActionButton";
import type { Course } from "../types";

interface AcademyTableProps {
  courses: Course[];
  onEdit: (record: Course) => void;
  onDelete: (record: Course) => void;
  onView: (record: Course) => void;
}

export function AcademyTable({ courses }: AcademyTableProps) {
  const columns: ColumnsType<Course> = [
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
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        const colorMap: Record<string, string> = {
          Published: "green",
          Draft: "orange",
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
      title: "Progress",
      dataIndex: "progress",
      key: "progress",
      render: (progress: number) => (
        <Progress
          percent={progress || 0}
          size="small"
          style={{ minWidth: "80px" }}
        />
      ),
    },
    {
      title: "Students",
      dataIndex: "enrolledStudents",
      key: "enrolledStudents",
      render: (students: number) => students || 0,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating: number) => (rating ? `${rating}/5` : "N/A"),
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
          <Link to={PathGenerators.COURSES_DETAIL_ID("1")}>
            <TableActionButton icon={<EyeOutlined />} title="View" />
          </Link>
          <Link to={PathGenerators.COURSES_CREATE_ID("1")}>
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
        dataSource={courses}
        rowKey="id"
        bordered
        scroll={{ x: 1400 }}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
      />
    </div>
  );
}
