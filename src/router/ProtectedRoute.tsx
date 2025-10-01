import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../api/auth/AuthProvider";

export const ProtectedRoute = () => {
  const { token } = useAuth();

  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace />;
  }
};
