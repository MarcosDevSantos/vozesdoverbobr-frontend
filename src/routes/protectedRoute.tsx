import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute() {
	const { isAuthenticated, loading } = useAuth();
	console.log(isAuthenticated);
	if (!isAuthenticated && !loading) {
		return <Navigate to="/login" replace />;
	}

	return <Outlet />;
}
