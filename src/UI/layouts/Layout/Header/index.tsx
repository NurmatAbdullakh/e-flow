import { Layout } from "antd";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../api/auth/AuthProvider";
import { Color } from "../../../../assets/colors";
import { SearchIcon } from "../../../../assets/icons";
import { useIsMobile } from "../../../../hooks/useIsMobile";
import { Button } from "../../../components/CustomAntdComponents/Button";
import { Input } from "../../../components/CustomAntdComponents/Input";
import { NotificationsMenu } from "./NotificationsMenu";
import { ProfileMenu } from "./ProfileMenu";

const { Header: AntdHeader } = Layout;

interface StyleProps {
  borderColor: string;
}

const useStyles = createUseStyles({
  header: {
    position: "sticky",
    top: "0",
    zIndex: 3,
    background: "#fff",
    borderBottom: (props: StyleProps) => `1px solid ${props.borderColor}`,
    height: "72px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "0 32px",
  },
  headerContent: {
    width: "100%",
    display: "flex",
    gap: "20px",
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
  headerRight: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  avatar: {
    cursor: "pointer",
    width: "40px",
    height: "40px",
  },
  searchInput: {
    width: "320px",
  },
});

export const Header = () => {
  const { user } = useAuth();
  const classes = useStyles({ borderColor: Color.border.secondary });

  const isMobile = useIsMobile();

  return (
    !isMobile && (
      <AntdHeader className={classes.header}>
        <div className={classes.headerContent}>
          <div className={classes.headerLeft}>
            <Input
              prefix={<SearchIcon />}
              placeholder="Search"
              width={"320px"}
              className={classes.searchInput}
            />
          </div>
          <div className={classes.headerRight}>
            {user ? (
              <>
                <NotificationsMenu />
                <ProfileMenu />
              </>
            ) : (
              <>
                <NotificationsMenu />
                <Link to={" "}>
                  <Button type="default">Login</Button>
                </Link>
                <Link to={" "}>
                  <Button type="primary">Sign up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </AntdHeader>
    )
  );
};
