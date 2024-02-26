import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PrivateRoutes = ({ children }) => {
  const data = localStorage.getItem("login");
  return data !== null && data ? (
    children
  ) : (
    <Navigate to="/login" replace={true} />
  );
};
