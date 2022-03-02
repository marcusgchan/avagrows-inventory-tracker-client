import React from "react";
import styles from "./styles/Parts.module.css";
import edit from "../imgs/edit.svg";
import { buildQueries } from "@testing-library/react";

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
    materialId: "PSL00989",
    status: "complete",
    notes: "bolt",
    location: "greenhouse",
    lastEdited: "",
  },
];

const columns = [
  { field: "material_id", headerName: "Material ID" },
  { field: "status_name", headerName: "Status" },
  { field: "part_description", headerName: "Notes" },
  { field: "location_name", headerName: "Location" },
];

function Parts() {
  return (
    <section>
      <table>
        <thead>
          <tr className={styles.headerRow}>
            {columns.map(({ field, headerName }) => (
              <th className={styles.headerCell} key={field}>
                {headerName}
              </th>
            ))}
            <th className={styles.headerCell}>Action</th>
            <th className={styles.headerCell}>Last Edited</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(
            ({ id, materialId, status, notes, location, lastEdited }) => (
              <tr className={styles.dataRow} key={id}>
                <td className={styles.dataCell}>{materialId}</td>
                <td className={styles.dataCell}>{status}</td>
                <td className={styles.dataCell}>{notes}</td>
                <td className={styles.dataCell}>{location}</td>
                <td className={styles.dataCell}>
                  <button type="button" className={styles.editButton}>
                    <img src={edit} alt="" className={styles.editImg}></img>
                  </button>
                </td>
                <td className={styles.dataCell}>{lastEdited}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </section>
  );
}

export default Parts;
