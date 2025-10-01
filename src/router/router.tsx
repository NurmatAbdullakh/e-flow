import { Spin } from "antd";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../UI/layouts/AuthLayout";
import { CenteredLayout } from "../UI/layouts/CenteredLayout";
import { Layout } from "../UI/layouts/Layout";
import { Paths } from "./paths";
import { PublicRoute } from "./PublicRoute";
import { ProtectedRoute } from "./ProtectedRoute";
import { RoleRoute } from "./RoleRoute";

const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "300px",
    }}
  >
    <Spin size="large">
      <div style={{ width: 0, height: 0 }} /> {/* чтобы tip отобразился */}
    </Spin>
  </div>
);

// Lazy load auth-related pages
const Login = lazy(() => import("../UI/pages/Login"));
const Users = lazy(() => import("../UI/pages/Users"));
const UsersCreate = lazy(() => import("../UI/pages/UsersCreate"));
const AdminRolesCreate = lazy(() => import("../UI/pages/AdminRolesCreate"));
const AdminRoles = lazy(() => import("../UI/pages/AdminRoles"));
const SignUp = lazy(() => import("../UI/pages/SignUp"));
const ForgotPassword = lazy(() => import("../UI/pages/ForgotPassword"));
const CheckYourEmail = lazy(() => import("../UI/pages/CheckYourEmail"));
const SetNewPassword = lazy(() => import("../UI/pages/SetNewPassword"));
const PasswordReset = lazy(() => import("../UI/pages/PasswordReset"));
const PersonalInfo = lazy(() => import("../UI/pages/PersonalInfo"));
const StockAnalyses = lazy(() => import("../UI/pages/StockAnalyses"));
const TopHalalStock = lazy(() => import("../UI/pages/TopHalalStock"));
const ReportDetail = lazy(() => import("../UI/pages/ReportDetail"));
const WebinarDetail = lazy(() => import("../UI/pages/WebinarDetails"));
const ArticleDetail = lazy(() => import("../UI/pages/ArticleDetails"));
const CreateReport = lazy(() => import("../UI/pages/CreateReport"));
const Finance = lazy(() => import("../UI/pages/Finance"));
const Articles = lazy(() => import("../UI/pages/Articles"));
const Webinars = lazy(() => import("../UI/pages/Webinar"));
const CreateWebinar = lazy(() => import("../UI/pages/CreateWebinar"));
const CreateArticle = lazy(() => import("../UI/pages/CreateArticle"));
const Notifications = lazy(() => import("../UI/pages/Notifications"));
const CreateNotifications = lazy(
  () => import("../UI/pages/CreateNotifications")
);
const NotificationSettings = lazy(
  () => import("../UI/pages/NotificationSettings")
);
const Subscriptions = lazy(() => import("../UI/pages/Subscriptions"));
const Academy = lazy(() => import("../UI/pages/Academy"));
const Portfolios = lazy(() => import("../UI/pages/Portfolios"));
const CourseInfo = lazy(() => import("../UI/pages/CourseInfo"));
const MarketNews = lazy(() => import("../UI/pages/MarketNews"));
const Summary = lazy(() => import("../UI/pages/Summary"));

// Dashboard and other components
const Dashboard = () => <> it is empty</>;
const Profile = () => <>it is empty</>;
const WebsiteAnalytics = () => <>it is empty</>;
const StockReport = () => <>it is empty</>;
const SupportTickets = () => <>it is empty</>;
const NotFound = () => <>it is empty</>;

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: Paths.HOME,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: Paths.SUMMARY,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Summary />
          </Suspense>
        ),
      },
      {
        path: Paths.MARKET_NEWS,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <MarketNews />
          </Suspense>
        ),
      },
      {
        path: Paths.TOP_HALAL_STOCKS,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <TopHalalStock />
          </Suspense>
        ),
      },
      {
        path: Paths.STOCK_ANALYSES,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <StockAnalyses />
          </Suspense>
        ),
      },
      {
        path: Paths.SCREENING,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <StockAnalyses />
          </Suspense>
        ),
      },
      {
        path: Paths.INSIDER_BY_SECTOR,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <StockAnalyses />
          </Suspense>
        ),
      },
      {
        path: Paths.DIVIDEND,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <StockAnalyses />
          </Suspense>
        ),
      },
      {
        path: Paths.INVESTING_CALCULATOR,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <StockAnalyses />
          </Suspense>
        ),
      },
      {
        path: Paths.MY_PORTFOLIO,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Portfolios />
          </Suspense>
        ),
      },
      {
        path: Paths.PORTFOLIO_BACKTESTING,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <StockAnalyses />
          </Suspense>
        ),
      },
      {
        path: Paths.PORTFOLIO_TRACKING,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <StockAnalyses />
          </Suspense>
        ),
      },
      {
        path: Paths.INVESTING_CALCULATOR,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <StockAnalyses />
          </Suspense>
        ),
      },
      {
        path: Paths.ARTICLES,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Articles />
          </Suspense>
        ),
      },
      {
        path: Paths.ARTICLE_DETAIL_ID,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ArticleDetail />
          </Suspense>
        ),
      },
      {
        path: Paths.ACADEMY,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Academy />
          </Suspense>
        ),
      },
      {
        path: Paths.COURSE_INFO_ID,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <CourseInfo />
          </Suspense>
        ),
      },
      {
        path: Paths.WEBINARS,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Webinars />
          </Suspense>
        ),
      },
      {
        path: Paths.WEBINAR_DETAIL_ID,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <WebinarDetail />
          </Suspense>
        ),
      },
    ],
  },
  {
    element: <PublicRoute />,
    children: [
      {
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <AuthLayout />
          </Suspense>
        ),
        children: [
          {
            path: Paths.LOGIN,
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <Login />
              </Suspense>
            ),
          },
          {
            path: Paths.SIGN_UP,
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <SignUp />
              </Suspense>
            ),
          },
        ],
      },
      {
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <CenteredLayout />
          </Suspense>
        ),
        children: [
          {
            path: Paths.FORGOT_PASSWORD,
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <ForgotPassword />
              </Suspense>
            ),
          },
          {
            path: Paths.CHECK_YOUREMAIL,
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <CheckYourEmail />
              </Suspense>
            ),
          },
          {
            path: Paths.SET_NEW_PASSWORD,
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <SetNewPassword />
              </Suspense>
            ),
          },
          {
            path: Paths.PASSWORD_RESET,
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <PasswordReset />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: Paths.USERS,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <Users />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.USERS_CREATE,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <UsersCreate />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.USERS_DETAILS_ID,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <UsersCreate />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.PROFILE,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <Profile />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.ADMIN_ROLES,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <AdminRoles />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.ADMIN_ROLES_CREATE,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <AdminRolesCreate />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.ADMIN_ROLES_DETAILS_ID,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <AdminRolesCreate />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.SUBSCRIPTIONS,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <Subscriptions />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.WEBSITE_ANALYTICS,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <WebsiteAnalytics />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.STOCK_ANALYSES,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <StockAnalyses />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.STOCK_REPORT,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <StockReport />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.PORTFOLIOS,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <Portfolios />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.FINANCE,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <Finance />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.ARTICLES,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <Articles />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.ARTICLES_CREATE,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <CreateArticle />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.ARTICLES_CREATE_ID,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <CreateArticle />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.WEBINAR_DETAIL_ID,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <WebinarDetail />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.WEBINARS,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <Webinars />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.WEBINARS_CREATE,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <CreateWebinar />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.WEBINARS_CREATE_ID,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <CreateWebinar />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.SUPPORT_TICKETS,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <SupportTickets />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.NOTIFICATIONS,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <Notifications />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.NOTIFICATIONS_CREATE,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <CreateNotifications />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.NOTIFICATIONS_DETAILS_ID,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <CreateNotifications />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.NOTIFICATIONS_SETTINGS,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <NotificationSettings />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.PERSONAL_INFO,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <PersonalInfo />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.TOP_HALAL_STOCKS,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <TopHalalStock />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.REPORT_DETAIL_ID,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <ReportDetail />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.ARTICLE_DETAIL_ID,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <ArticleDetail />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.CREATE_REPORT,
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <CreateReport />
              </Suspense>
            ),
          },
          {
            path: Paths.ACADEMY,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <Academy />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.COURSE_INFO_ID,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <CourseInfo />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.COURSES_DETAIL_ID,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <WebinarDetail />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.COURSES_CREATE_ID,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <CreateWebinar />
                </Suspense>
              </RoleRoute>
            ),
          },
          {
            path: Paths.COURSES_CREATE,
            element: (
              <RoleRoute roles={["super-admin"]}>
                <Suspense fallback={<LoadingSpinner />}>
                  <CreateWebinar />
                </Suspense>
              </RoleRoute>
            ),
          },
        ],
      },
    ],
  },
  {
    path: Paths.NOT_FOUND,
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <NotFound />
      </Suspense>
    ),
  },
]);
