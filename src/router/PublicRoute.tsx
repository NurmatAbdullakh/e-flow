import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../api/auth/AuthProvider";

export const PublicRoute = () => {
    const { token } = useAuth();

    return token ? <Navigate to="/" replace /> : <Outlet />;
};
