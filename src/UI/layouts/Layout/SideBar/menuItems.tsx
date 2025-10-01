import {
  BarChartSquareIcon,
  BarLineChartDottedIcon,
  HelpCircleIcon,
  LineChartUpIcon,
  LineChartUpSquareIcon,
} from "../../../../assets/icons";
import { Paths } from "../../../../router/paths";

const mainMenuItems = [
  {
    key: Paths.HOME,
    label: "Dashboard",
    icon: <BarChartSquareIcon />,
  },
  {
    key: Paths.RIVERS,
    label: "Rivers",
    icon: <LineChartUpIcon />,
  },
  {
    key: Paths.CALCULATOR,
    label: "Calculator",
    icon: <BarLineChartDottedIcon />,
  },
  {
    key: Paths.MAP,
    label: "Map",
    icon: <LineChartUpSquareIcon />,
  },
  {
    key: Paths.DATA,
    label: "Data",
    icon: <LineChartUpIcon />,
  },

  {
    key: Paths.ABOUT,
    label: "About",
    icon: <HelpCircleIcon />,
  },
];

export const menuItems = [mainMenuItems];
