import { Suspense } from "react";
import { Dashboard } from "./components";
import { LoadingSpinner } from "./LoadingSpinner";
import { Paths } from "./paths";

export const OpenRoutes = [
  {
    path: Paths.HOME,
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Dashboard />
      </Suspense>
    ),
  },
];
