import React from "react";
import styles from "./styles/Parts.module.css";
import { useNavigate } from "react-router-dom";

const rows = [
  {
    id: 1,
    materialId: "PSL00987",
    status: "unsellable",
    notes: "wire",
    location: "Offices",
    lastEdited: "",
  },
  {
    id: 2,
    materialId: "PSL00988",
    status: "WIP",
    notes: "camera",
    location: "kitchen",
    lastEdited: "",
  },
  {
    id: 3,
    maeterialId: "PSL00989",
    status: "complete",
    notes: "bolt",
    location: "greenhouse",
    lastEdited: "",
  },
];

const columns = [
  { field: "material_id", headerName: "Material ID", width: 150 },
  { field: "status_name", headerName: "Status", width: 150 },
  { field: "part_description", headerName: "Notes", width: 150 },
  { field: "location_name", headerName: "Location", width: 150 },
];

function Parts() {
  const navigate = useNavigate();
  return (
    <section>
      <button onClick={() => navigate("add")}>Add Material</button>
      <table>
        <thead>
          <tr>
            {columns.map(({ field, headerName }) => (
              <th key={field}>{headerName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(
            ({ id, materialId, status, notes, location, lastEdited }) => (
              <tr key={id}>
                <td>{materialId}</td>
                <td>{status}</td>
                <td>{notes}</td>
                <td>{location}</td>
                <td>{lastEdited}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </section>
  );
}

export default Parts;
