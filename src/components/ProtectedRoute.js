import { Outlet, Navigate } from "react-router-dom";
import React from "react";
import useLogin from "../contexts/UserContext";

function ProtectedRoute() {
  const { user } = useLogin();
  return user.id ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
