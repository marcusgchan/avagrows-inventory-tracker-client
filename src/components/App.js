import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import Parts from "./Parts";
import Category from "./Category";
import Error from "./Error";
import Contacts from "./Contacts";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import TableManagement from "./TableManagement";

function App() {
  return (
    <Routes>
      {/* Protected route will render the login if not logged in */}
      <Route path="/login" element={<Login />} />
      {/* <Route path="/" element={<ProtectedRoute />}> */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="inventory" element={<Parts />} />
        <Route path="table-management" element={<TableManagement />} />
        {/* <Route path="inventory/category" element={<Category />} /> */}
        <Route path="suppliers/contacts" element={<Contacts />} />
        <Route path="*" element={<Error />} />
      </Route>
      {/* </Route> */}
    </Routes>
  );
}

export default App;
