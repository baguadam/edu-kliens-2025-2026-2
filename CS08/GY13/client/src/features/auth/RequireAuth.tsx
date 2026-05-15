import { useSelector } from "react-redux";
import { selectToken } from "./authSlice";
import { Navigate } from "react-router";

interface RequireAuthProps {
  children: React.ReactNode;
}

export default function RequireAuth({ children }: RequireAuthProps) {
  const token = useSelector(selectToken);
  return token ? children : <Navigate to="/login" replace />;
}
