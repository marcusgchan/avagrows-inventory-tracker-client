import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import RawMaterials from "./RawMaterials";
import Category from "./Category";
import Error from "./Error";
import Contacts from "./Contacts";
import Login from "./Login";
// import LoginProvider from "../custom-hooks/useLogin";
import UserContextProvider from "../contexts/UserContext";
// import ProtectedRoute from "./ProtectedRoute";
import { UserContext } from "../contexts/UserContext";
function App() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <Routes>
      {user ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="inventory/raw-materials" element={<RawMaterials />} />
          <Route path="inventory/category" element={<Category />} />
          <Route path="suppliers/contacts" element={<Contacts />} />
          <Route path="*" element={<Error />} />
        </Route>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
}

export default App;
