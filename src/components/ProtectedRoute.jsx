import { Navigate } from "react-router";
import { useGlobalContext } from "../context";

export default function ProtectedRoute() {
  const { isLogined } = useGlobalContext;

  if (!isLogined) {
    return <Navigate to="/signup" replace />;
  }

  return children;
}
