import React from "react";
import edit from "../imgs/edit.svg";
import trash from "../imgs/trash.svg";
import styles from "./styles/Table.module.css";

function Table({ rows, columns, toggleDeleteModal, toggleEditModal }) {
  function generateTableRows() {
    return rows.map(
      ({
        id,
        internal_part_number,
        part_name,
        part_category_name,
        location_name,
        status_name,
        quantity,
        date_time,
        name,
        total_quantity,
      }) => (
        <tr className={styles.dataRow} key={id}>
          <td className={styles.dataCell}>{internal_part_number}</td>
          <td className={styles.dataCell}>{part_name}</td>
          <td className={styles.dataCell}>{part_category_name}</td>
          <td className={styles.dataCell}>{location_name}</td>
          <td className={styles.dataCell}>{status_name}</td>
          <td className={styles.dataCell}>{quantity}</td>
          <td className={styles.dataCell}>
            <button
              type="button"
              className={styles.tableButton}
              onClick={toggleEditModal}
            >
              <img src={edit} alt="" className={styles.tableImg}></img>
            </button>
            <button
              type="button"
              className={styles.tableButton}
              onClick={toggleDeleteModal}
            >
              <img src={trash} alt="" className={styles.tableImg}></img>
            </button>
          </td>
          <td className={styles.dataCell}>{date_time}</td>
          <td className={styles.dataCell}>{name}</td>
          <td className={styles.dataCell}>{total_quantity}</td>
        </tr>
      )
    );
  }
  return (
    <table>
      <thead>
        <tr className={styles.headerRow}>
          {columns.map(({ field, headerName }) => (
            <td className={styles.headerCell} key={field}>
              {headerName}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>{generateTableRows()}</tbody>
    </table>
  );
}

export default Table;
