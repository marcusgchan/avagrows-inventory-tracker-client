import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import Inventory from "./Inventory";
import Error from "./Error";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import TableManagement from "./TableManagement";
import Reports from "./Reports";

function App() {
  return (
    <Routes>
      {/* Protected route will render the login if not logged in */}
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="table-management" element={<TableManagement />} />
          <Route path="reports" element={<Reports />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
