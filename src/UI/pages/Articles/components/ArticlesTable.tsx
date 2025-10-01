import { EyeOutlined } from "@ant-design/icons";
import { Space, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { EditIcon, TrashtIcon } from "../../../../assets/icons";
import { PathGenerators } from "../../../../router/paths";
import { Table } from "../../../components/CustomAntdComponents/Table";
import { TableActionButton } from "../../../components/TableValues/TableActionButton/TableActionButton";
import type { Article } from "../types";

interface ArticlesTableProps {
  articles: Article[];
  onEdit: (record: Article) => void;
  onDelete: (record: Article) => void;
  onView: (record: Article) => void;
}

export function ArticlesTable({ articles }: ArticlesTableProps) {
  const columns: ColumnsType<Article> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "40%",
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
      width: "15%",
      render: (category: string) => <Tag color="blue">{category}</Tag>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "12%",
      render: (status: string) => (
        <Tag color={status === "Published" ? "green" : "orange"}>{status}</Tag>
      ),
    },
    {
      title: "Read Time",
      dataIndex: "readTime",
      key: "readTime",
      width: "10%",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      width: "12%",
    },
    {
      title: "Actions",
      key: "actions",
      width: "11%",
      fixed: "right",
      render: () => (
        <Space size="small">
          <Link to={PathGenerators.ARTICLE_DETAIL_ID("1")}>
            <TableActionButton icon={<EyeOutlined />} title="View" />
          </Link>
          <Link to={PathGenerators.ARTICLES_CREATE_ID("1")}>
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
        dataSource={articles}
        rowKey="id"
        bordered
        scroll={{ x: 1600 }}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
      />
    </div>
  );
}
