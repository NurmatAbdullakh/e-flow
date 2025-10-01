import { lazy, Suspense } from "react";
import { Dashboard } from "./components";
import { Paths } from "./paths";
import { LoadingSpinner } from "./LoadingSpinner";
import TopHalalStock from "../UI/pages/TopHalalStock";

const MarketNews = lazy(() => import("../UI/pages/MarketNews"));

export const OpenRoutes = [
  {
    path: Paths.HOME,
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Dashboard />
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
];
