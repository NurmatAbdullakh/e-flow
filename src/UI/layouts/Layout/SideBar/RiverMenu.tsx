import {
  ArrowLeftOutlined,
  CloudOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Button, Divider, Typography } from "antd";
import React from "react";
import { createUseStyles } from "react-jss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Color } from "../../../../assets/colors";
import { PathGenerators } from "../../../../router/paths";
import { useRiverSidebar } from "./RiverSidebarContext";

const { Text } = Typography;

const useStyles = createUseStyles({
  riverMenuContainer: {},
  backButton: {
    width: "100%",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    justifyContent: "flex-start",
  },
  riverName: {
    fontSize: "18px",
    fontWeight: "600",
    color: Color.text.secondary[700],
    marginBottom: "8px",
    textAlign: "center",
  },
  divider: {
    margin: "16px 0",
    borderColor: Color.border.secondary,
  },
  menuItem: {
    width: "100%",
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    justifyContent: "flex-start",
    textAlign: "left",
    height: "40px",
    padding: "0 16px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    textDecoration: "none",
    color: Color.text.secondary[700],
    "&:hover": {
      backgroundColor: "#f5f5f5",
      color: Color.text.secondary[700],
      textDecoration: "none",
    },
    "&.active": {
      backgroundColor: "#F5F5F5",
      textDecoration: "none",
    },
  },
  menuItemCollapsed: {
    width: "100%",
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    textDecoration: "none",
    color: Color.text.secondary[700],
    "&:hover": {
      backgroundColor: "#f5f5f5",
      color: Color.text.secondary["700"],
      textDecoration: "none",
    },
    "&.active": {
      backgroundColor: "#F5F5F5",
      color: Color.brand.solid,
      textDecoration: "none",
    },
  },
});

interface RiverMenuProps {
  isCollapsed?: boolean;
}

export const RiverMenu: React.FC<RiverMenuProps> = ({
  isCollapsed = false,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { riverName, riverId } = useRiverSidebar();

  const handleBackToRivers = () => {
    navigate("/rivers");
  };

  const menuItems = [
    {
      key: "hydro-stations",
      label: "Hydro Stations",
      icon: <EnvironmentOutlined />,
      path: riverId ? PathGenerators.RIVER_HYDRO_STATIONS(riverId) : "",
    },
    {
      key: "meteo-stations",
      label: "Meteo Stations",
      icon: <CloudOutlined />,
      path: riverId ? PathGenerators.RIVER_METEO_STATIONS(riverId) : "",
    },
  ];

  if (!riverName || !riverId) {
    return null;
  }

  if (isCollapsed) {
    return (
      <div className={classes.riverMenuContainer}>
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={handleBackToRivers}
          className={classes.backButton}
          title="Back to Rivers"
        />
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <Link to={PathGenerators.RIVER_DETAILS(riverId)}>
            <Text strong style={{ fontSize: "12px" }}>
              {riverName.substring(0, 3).toUpperCase()}
            </Text>
          </Link>
        </div>
        <Divider className={classes.divider} />
        {menuItems.map((item) => (
          <NavLink
            key={item.key}
            to={item.path}
            className={({ isActive }) =>
              `${classes.menuItemCollapsed} ${isActive ? "active" : ""}`
            }
            title={item.label}
          >
            {item.icon}
          </NavLink>
        ))}
      </div>
    );
  }

  return (
    <div className={classes.riverMenuContainer}>
      <Button
        type="text"
        icon={<ArrowLeftOutlined />}
        onClick={handleBackToRivers}
        className={classes.backButton}
      >
        Back to Rivers
      </Button>

      <Link to={PathGenerators.RIVER_DETAILS(riverId)}>
        <div className={classes.riverName}>{riverName}</div>
      </Link>

      <Divider className={classes.divider} />

      {menuItems.map((item) => (
        <NavLink
          key={item.key}
          to={item.path}
          className={({ isActive }) =>
            `${classes.menuItem} ${isActive ? "active" : ""}`
          }
        >
          {item.icon}
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};
