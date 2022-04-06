import { Outlet } from "react-router-dom";
import React from "react";
import useLogin from "../contexts/UserContext";
import Login from "./Login";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./styles/ProtectedRoute.module.css";

function ProtectedRoute() {
  const { user, loading } = useLogin();
  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <CircularProgress />
      </div>
    );
  }
  return user.id ? <Outlet /> : <Login />;
}

export default ProtectedRoute;
