import { Table as AntTable, type TableProps } from "antd";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { Color } from "../../../assets/colors";

const useStyles = createUseStyles({
  customTable: {
    "& .ant-table-title": {
      fontSize: "18px",
      fontWeight: "600",
      borderRadius: "12px 12px 0 0 !important",
      padding: "0 !important",
    },

    "& .ant-table-cell": {
      border: "none !important",
      borderBottom: "1px solid #E9EAEB !important",
    },
    "& .ant-table-cell:last-child": {
      borderRight: "1px solid #E9EAEB !important",
    },
    "& .ant-table-thead": {
      "& .ant-table-cell": {
        background: "white !important",
        padding: "13px 24px",
        color: Color.text.quaternary[500],
        fontWeight: "600",
        fontSize: "12px",
        border: "none",
      },
    },
    "& .ant-table-tbody": {
      "& .ant-table-cell": {
        padding: "26px 24px !important",
      },
    },
    "& ant-table-row:last-child": {
      borderRadius: "12px 12px 0 0 !important",
    },

    "& .ant-table-cell-row-hover": {
      background: "white !important",
    },
  },
});

export interface CustomTableProps<T> extends TableProps<T> {
  className?: string;
}

export function Table<T extends object = {}>(props: CustomTableProps<T>) {
  const { className, ...restProps } = props;
  const classes = useStyles();

  return (
    <AntTable
      {...restProps}
      className={classNames(classes.customTable, className)}
      pagination={{
        showSizeChanger: true,
        showQuickJumper: true,
        ...props.pagination,
      }}
    />
  );
}

export default Table;
