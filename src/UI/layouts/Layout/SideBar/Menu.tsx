import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import { Tooltip } from "antd";
import { Color } from "../../../../assets/colors";

export interface MenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
}

const useStyle = createUseStyles(() => ({
  menu: {
    "&:not(:last-child)": {
      marginBottom: "8px",
      paddingBottom: "8px",
      borderBottom: `1px solid ${Color.border.secondary}`,
    },
  },
  menuLink: {
    display: "block",
    padding: "11px",
    borderRadius: "8px",
    marginBottom: "2px",
    transition: "background-color 0.3s ease",
    color: Color.text.secondary["700"],
    "&:hover": {
      color: Color.text.secaondaryHover,
    },
  },
  menuLinkCollapsed: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "11px 8px",
  },
  menuLinkActive: {
    background: "#F5F5F5",
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  menuItemCollapsed: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  menuItemIcon: {
    marginRight: "10px",
  },
  menuItemIconCollapsed: {
    marginRight: "0",
  },
  menuItemLabel: {
    fontSize: "14px",
    fontWeight: "bold",
  },
}));

export const Menu = ({
  items,
  isCollapsed = false,
}: {
  items: MenuItem[];
  isCollapsed?: boolean;
}) => {
  const classes = useStyle();

  return (
    <ul className={classes.menu}>
      {items.map((item) => {
        const menuContent = (
          <li
            key={item.key}
            className={classNames(classes.menuItem, {
              [classes.menuItemCollapsed]: isCollapsed,
            })}
          >
            <div
              className={classNames(classes.menuItemIcon, {
                [classes.menuItemIconCollapsed]: isCollapsed,
              })}
            >
              {item.icon}
            </div>
            {!isCollapsed && (
              <div className={classes.menuItemLabel}>{item.label}</div>
            )}
          </li>
        );

        return (
          <NavLink
            to={item.key}
            key={item.key}
            className={({ isActive }) =>
              classNames(
                isCollapsed ? classes.menuLinkCollapsed : classes.menuLink,
                {
                  [classes.menuLinkActive]: isActive,
                }
              )
            }
          >
            {isCollapsed ? (
              <Tooltip title={item.label} placement="right">
                {menuContent}
              </Tooltip>
            ) : (
              menuContent
            )}
          </NavLink>
        );
      })}
    </ul>
  );
};
