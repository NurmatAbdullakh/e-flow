import { Layout as AntLayout, Button, Drawer, Flex, Image } from "antd";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Color } from "../../../../assets/colors";
import { MenuIcon } from "../../../../assets/icons";
import { useIsMobile } from "../../../../hooks/useIsMobile";
import { Paths } from "../../../../router/paths";
import { Menu } from "./Menu";
import { menuItems } from "./menuItems";
import { useSidebar } from "./SidebarContext";
import classNames from "classnames";

const useStyle = createUseStyles(() => ({
  header: {
    padding: "16px",
    borderBottom: `1px solid ${Color.border.secondary}`,
  },
  contentBlock: {
    border: "1px solid #e8e8e8",
    borderRadius: "20px",
    height: "calc(100% - 8px)",
    width: "100%",
    maxHeight: "932px",
    padding: "20px",
    overflow: "auto",
  },
  logo: {
    marginBottom: "20px",
    height: "120px",
    "& img": {
      width: "260px",
      height: "100%",
    },
  },
  sidebar: {
    position: "relative",
    top: "4px",
    left: "4px",
    zIndex: 4,
    transition: "all 0.3s ease",
    alignSelf: "stretch",
    "& .ant-layout-sider": {
      height: "100%",
    },
  },
  toggleButton: {
    position: "absolute",
    top: "20px",
    right: "-12px",
    zIndex: 10,
    background: "#fff",
    border: "1px solid #e8e8e8",
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      background: "#f5f5f5",
    },
  },
  collapsedSidebar: {
    width: "80px !important",
    minWidth: "80px !important",
    maxWidth: "80px !important",
  },
  logoCollapsed: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  logoImage: {
    transition: "all 0.3s ease-in-out",
  },
  logoImageCollapsed: {
    width: "80px",
    height: "32px",
  },
}));

export const Sidebar = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();
  const classes = useStyle();
  const isMobile = useIsMobile();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const { Sider } = AntLayout;

  return isMobile ? (
    <>
      <Flex justify="space-between" align="center" className={classes.header}>
        <Image
          preview={false}
          src="/Logo.jpeg"
          alt="logo"
          width={160}
          height={32}
        />
        <Link to={Paths.HOME}>
          <Button
            type="text"
            icon={<MenuIcon />}
            onClick={() => setDrawerOpen(true)}
          />
        </Link>
      </Flex>
      <Drawer
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        width={300}
      >
        {menuItems?.map((item) => (
          <Menu items={item} />
        ))}
      </Drawer>
    </>
  ) : (
    <motion.div
      className={classes.sidebar}
      animate={{
        width: isCollapsed ? 80 : 300,
      }}
      transition={{
        duration: 0.3,
        ease: "linear",
      }}
    >
      <Sider
        width={isCollapsed ? 80 : 300}
        theme="light"
        className={isCollapsed ? classes.collapsedSidebar : ""}
        style={{ position: "relative", top: "4px", left: "4px", zIndex: 4 }}
      >
        <div className={classes.contentBlock}>
          <div className={isCollapsed ? classes.logoCollapsed : classes.logo}>
            <Link to={Paths.HOME}>
              <img
                src="/Logo.jpeg"
                alt="logo"
                className={classNames(classes.logoImage, {
                  [classes.logoImageCollapsed]: isCollapsed,
                })}
              />
            </Link>
          </div>
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {menuItems?.map((item) => (
                  <Menu items={item} isCollapsed={false} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          {isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {menuItems?.map((item) => (
                <Menu items={item} isCollapsed={true} />
              ))}
            </motion.div>
          )}
        </div>

        <motion.div
          className={classes.toggleButton}
          onClick={toggleSidebar}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </motion.div>
      </Sider>
    </motion.div>
  );
};
