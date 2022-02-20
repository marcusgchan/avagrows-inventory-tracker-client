import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import RawMaterials from "./RawMaterials";
import Category from "./Category";
import Error from "./Error";
import Contacts from "./Contacts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="inventory/raw-materials" element={<RawMaterials />} />
        <Route path="inventory/category" element={<Category />} />
        <Route path="suppliers/contacts" element={<Contacts />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
