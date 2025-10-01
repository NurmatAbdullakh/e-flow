import { Spin } from "antd";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { PageTitle } from "../UI/components/PageTitle/PageTitle";
import { Layout } from "../UI/layouts/Layout";
import RiverDetailsPage from "../UI/pages/RiverDetailsPage";
import RiverHydroStationsPage from "../UI/pages/RiverHydroStationsPage";
import RiverMeteoStationsPage from "../UI/pages/RiverMeteoStationsPage";
import RiversPage from "../UI/pages/RiversPage";
import { Paths } from "./paths";

// Create a reusable loading component
const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "300px",
    }}
  >
    <Spin size="large" tip="Loading...">
      <div style={{ width: 0, height: 0 }} /> {/* чтобы tip отобразился */}
    </Spin>
  </div>
);

// Lazy load pages
// const Rivers = lazy(() => import("../UI/pages/RiversPage"));
// const RiverDetails = lazy(() => import("../UI/pages/RiverDetailsPage"));
// const RiverHydroStations = lazy(
//   () => import("../UI/pages/RiverHydroStationsPage")
// );
// const RiverMeteoStations = lazy(
//   () => import("../UI/pages/RiverMeteoStationsPage")
// );

// Dashboard and other components
const Dashboard = () => <PageTitle>Dashboard Page </PageTitle>;
const Map = () => <PageTitle>Map Page</PageTitle>;
const Calculator = () => <PageTitle>Calculator Page</PageTitle>;
const Data = () => <PageTitle>Data Page</PageTitle>;
const About = () => <PageTitle>About Page</PageTitle>;
const NotFound = () => <PageTitle>NotFound Page</PageTitle>;

export const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Layout />
      </Suspense>
    ),
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
        path: Paths.MAP,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Map />
          </Suspense>
        ),
      },
      {
        path: Paths.CALCULATOR,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Calculator />
          </Suspense>
        ),
      },
      {
        path: Paths.DATA,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Data />
          </Suspense>
        ),
      },
      {
        path: Paths.RIVERS,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <RiversPage />
          </Suspense>
        ),
      },
      {
        path: Paths.RIVER_DETAILS,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <RiverDetailsPage />
          </Suspense>
        ),
      },
      {
        path: Paths.RIVER_HYDRO_STATIONS,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <RiverHydroStationsPage />
          </Suspense>
        ),
      },
      {
        path: Paths.RIVER_METEO_STATIONS,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <RiverMeteoStationsPage />
          </Suspense>
        ),
      },
      {
        path: Paths.ABOUT,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        ),
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
