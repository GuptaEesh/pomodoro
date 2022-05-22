import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../helper";
const RedirectAuth = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  return isAuthenticated ? (
    <Navigate to="/" state={{ from: location }} replace={true} />
  ) : (
    <Outlet />
  );
};

export { RedirectAuth };
