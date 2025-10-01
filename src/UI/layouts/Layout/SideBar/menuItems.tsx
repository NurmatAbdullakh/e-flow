import {
  BarChartSquareIcon,
  BarLineChartDottedIcon,
  BeakerIcon,
  BellIcon,
  BookOpenIcon,
  BriefCaseIcon,
  BriefCaseLinesIcon,
  CalculatorIcon,
  CheckVerifiedIcon,
  HelpCircleIcon,
  HomeIcon,
  LineChartUpIcon,
  LineChartUpSquareIcon,
  PieChartIcon,
  PresentationIcon,
  SertificateIcon,
  UsersIcon,
  UsersUpIcon,
  YoutubeIcon,
  ZapIcon,
} from "../../../../assets/icons";
import { Paths } from "../../../../router/paths";

// Super Admin Menu Items
export const dashboardMenuItem = {
  key: Paths.HOME,
  label: "Dashboard",
  icon: <BarChartSquareIcon />,
};

export const usersMenuItem = {
  key: Paths.USERS,
  label: "Users",
  icon: <UsersIcon />,
};

export const adminRolesMenuItem = {
  key: Paths.ADMIN_ROLES,
  label: "Admin Roles",
  icon: <UsersUpIcon />,
};

export const subscriptionsMenuItem = {
  key: Paths.SUBSCRIPTIONS,
  label: "Subscriptions",
  icon: <CheckVerifiedIcon />,
};

export const websiteAnalyticsMenuItem = {
  key: Paths.WEBSITE_ANALYTICS,
  label: "Website Analytics",
  icon: <LineChartUpIcon />,
};

export const stockAnalysesMenuItem = {
  key: Paths.STOCK_ANALYSES,
  label: "Stock Analyses",
  icon: <PieChartIcon />,
};

export const stockReportMenuItem = {
  key: Paths.STOCK_REPORT,
  label: "Stock Report",
  icon: <LineChartUpSquareIcon />,
};

export const topHalalStocksMenuItem = {
  key: Paths.TOP_HALAL_STOCKS,
  label: "Top Halal Stocks",
  icon: <BarChartSquareIcon />,
};

export const portfoliosMenuItem = {
  key: Paths.PORTFOLIOS,
  label: "Portfolios (pre-made)",
  icon: <BriefCaseIcon />,
};

export const financeMenuItem = {
  key: Paths.FINANCE,
  label: "Finance",
  icon: <BarLineChartDottedIcon />,
};

export const academyMenuItem = {
  key: Paths.ACADEMY,
  label: "Akinda Academy",
  icon: <BookOpenIcon />,
};

export const articlesMenuItem = {
  key: Paths.ARTICLES,
  label: "Articles",
  icon: <SertificateIcon />,
};

export const webinarsMenuItem = {
  key: Paths.WEBINARS,
  label: "Webinars",
  icon: <YoutubeIcon />,
};

export const supportTicketsMenuItem = {
  key: Paths.SUPPORT_TICKETS,
  label: "Support Tickets",
  icon: <HelpCircleIcon />,
};

export const notificationsMenuItem = {
  key: Paths.NOTIFICATIONS,
  label: "Notifications",
  icon: <BellIcon />,
};

export const homeMenuItem = {
  key: Paths.HOME,
  label: "Home",
  icon: <HomeIcon />,
};

export const marketNewsMenuItem = {
  key: Paths.MARKET_NEWS,
  label: "Market News",
  icon: <ZapIcon />,
};

export const screeningMenuItem = {
  key: Paths.SCREENING,
  label: "Screening",
  icon: <PresentationIcon />,
};

export const insiderBySectorMenuItem = {
  key: Paths.INSIDER_BY_SECTOR,
  label: "Insider By Sector",
  icon: <BarLineChartDottedIcon />,
};

export const dividendMenuItem = {
  key: Paths.DIVIDEND,
  label: "Dividend",
  icon: <PieChartIcon />,
};

export const investingCalculatorMenuItem = {
  key: Paths.INVESTING_CALCULATOR,
  label: "Investing Calculator",
  icon: <CalculatorIcon />,
};

export const myPortfolioMenuItem = {
  key: Paths.MY_PORTFOLIO,
  label: "My Portfolio",
  icon: <BriefCaseIcon />,
};

export const portfolioTrackingMenuItem = {
  key: Paths.PORTFOLIO_TRACKING,
  label: "Portfolio Tracking",
  icon: <BriefCaseLinesIcon />,
};

export const portfolioBacktestingMenuItem = {
  key: Paths.PORTFOLIO_BACKTESTING,
  label: "Portfolio Backtesting",
  icon: <BeakerIcon />,
};

export const menuItems = {
  "super-admin": [
    [
      dashboardMenuItem,
      usersMenuItem,
      adminRolesMenuItem,
      subscriptionsMenuItem,
      websiteAnalyticsMenuItem,
    ],
    [
      stockAnalysesMenuItem,
      stockReportMenuItem,
      topHalalStocksMenuItem,
      portfoliosMenuItem,
    ],
    [financeMenuItem],
    [academyMenuItem, articlesMenuItem],
    [webinarsMenuItem, supportTicketsMenuItem, notificationsMenuItem],
  ],
  // The unauthorized array is left as is, since the referenced variables are not defined in this file.
  unauthorized: [
    [
      homeMenuItem,
      marketNewsMenuItem,
      topHalalStocksMenuItem,
      stockAnalysesMenuItem,
    ],
    [
      screeningMenuItem,
      insiderBySectorMenuItem,
      dividendMenuItem,
      investingCalculatorMenuItem,
    ],
    [
      portfolioTrackingMenuItem,
      portfolioBacktestingMenuItem,
      myPortfolioMenuItem,
    ],
    [academyMenuItem, articlesMenuItem, webinarsMenuItem],
    [supportTicketsMenuItem],
  ],
};
