import React from "react";
import { Tabs as AntdTabs, Flex, Skeleton, type TabsProps } from "antd";
import { createUseStyles } from "react-jss";
import { Color } from "../../../assets/colors";

interface CustomTabProps extends TabsProps {
  className?: string;
  tabBarGutter?: number;
  activeColor?: string;
  loading?: boolean;
  skeletonCount?: number;
}

const useStyles = createUseStyles({
  customTab: {
    "& .ant-tabs-nav-wrap": {},
    "& .ant-tabs-nav": {
      overflow: "hidden",
      borderRadius: "var(--radius-md, 8px)",
      border: "1px solid var(--Colors-Border-border-primary, #D5D7DA)",
    },
    "& .ant-tabs-nav:before": {
      display: "none",
    },
    "& .ant-tabs-tab": {
      padding: "10px 16px",
      transition: "0.5s",
      "&:hover": {
        background: Color.border.secondary,
      },
    },
    "& .ant-tabs-tab:not(:last-child)": {
      borderRight: "1px solid var(--Colors-Border-border-primary, #D5D7DA)",
    },
    "& .ant-tabs-tab-btn": {
      color: Color.text.quaternary[500],
      fontSize: 14,
    },
    "& .ant-tabs-tab-active": {
      background: Color.border.primary,
    },
    "& .ant-tabs-tab-active .ant-tabs-tab-btn": {
      color: `${Color.text.secaondaryHover} !important`,
    },
  },
});

const TabsLoader = ({ count = 5 }: { count: number }) => {
  return (
    <Flex gap={8} style={{ marginBottom: 24 }}>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton.Button
          key={index}
          active
          style={{ height: "40px", width: "120px" }}
        />
      ))}
    </Flex>
  );
};

const Tabs: React.FC<CustomTabProps> = ({
  className,
  loading = false,
  skeletonCount = 5,
  ...props
}) => {
  const classes = useStyles();

  if (loading) {
    return <TabsLoader count={skeletonCount} />;
  }

  return (
    <AntdTabs
      {...props}
      indicator={{ size: 0 }}
      className={`${classes.customTab} ${className || ""}`}
      tabBarGutter={0}
    />
  );
};

export default Tabs;
