import { Outlet } from "react-router-dom";
import React from "react";
import useLogin from "../contexts/UserContext";
import Login from "./Login";

function ProtectedRoute() {
  const { user } = useLogin();
  return user.id ? <Outlet /> : <Login />;
}

export default ProtectedRoute;
