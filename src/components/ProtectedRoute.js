import { Navigate } from "react-router-dom";
// import { useLogin, UserContext } from "../custom-hooks/useLogin";
import { UserContext } from "../contexts/UserContext";
import React from "react";
import userServices from "../services/userServices";
import { useEffect, useState, useContext } from "react";

function ProtectedRoute({ children }) {
  // const { currentUser, setCurrentUser } = useLogin();
  const userContext = useContext(UserContext);
  console.log(userContext);
  return userContext.user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
