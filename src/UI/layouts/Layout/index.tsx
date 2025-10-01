import { Layout as AntLayout } from "antd";
import { createUseStyles } from "react-jss";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./SideBar";
import { Header } from "./Header";
import { SidebarProvider, useSidebar } from "./SideBar/SidebarContext";

const { Content } = AntLayout;

const useStyles = createUseStyles({
  layout: {
    padding: 0,
    background: "#fff",
    position: "sticky",
    height: "100vh",
    overflow: "hidden",
  },
  content: {
    background: "#fff",
    height: "100vh",
    overflowY: "auto",
    // transition: "margin-left 0.3s ease",
  },
  contentWrapper: {
    padding: "32px",
    // animation: "$fadeIn 0.3s ease-in-out",
    "@media (max-width: 992px)": {
      padding: "16px",
    },
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0.8,
      transform: "translateY(20px)",
    },
    "50%": {
      opacity: 0.8,
      transform: "translateY(10px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
});

const LayoutContent = () => {
  const classes = useStyles();
  const location = useLocation();
  const { isCollapsed } = useSidebar();

  return (
    <AntLayout className={classes.layout}>
      <Sidebar />
      <Content className={classes.content}>
        <Header />
        <div className={classes.contentWrapper} key={location.pathname}>
          <Outlet />
        </div>
      </Content>
    </AntLayout>
  );
};

export const Layout = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};
