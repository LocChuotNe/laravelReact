import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: JSX.Element;
  requiredRole?: string; // optional: 'admin' | 'user'
}

const PrivateRoute = ({ children, requiredRole }: PrivateRouteProps) => {
  const token = localStorage.getItem("auth_token");
  const role = localStorage.getItem("auth_role");

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default PrivateRoute;
