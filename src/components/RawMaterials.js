import React from "react";
import styles from "./styles/RawMaterials.module.css";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  { id: 3, col1: "MUI", col2: "is Amazing" },
];

const columns = [
  { field: "col1", headerName: "Column 1", width: 150 },
  { field: "col2", headerName: "Column 2", width: 150 },
];

function RawMaterials() {
  return (
    <section className={styles.tableContainer}>
      <DataGrid rows={rows} columns={columns} />
    </section>
  );
}

export default RawMaterials;
