import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PublicRoutes = ({ children }) => {
  return localStorage.getItem("login") !== null &&
    localStorage.getItem("login") ? (
    <Navigate to="/dashboard" />
  ) : (
    children
  );
};
