import { useState, useMemo, useEffect } from "react";
import edit from "../imgs/edit.svg";
import trash from "../imgs/trash.svg";
import styles from "./styles/Table.module.css";
import upDownArrow from "../imgs/up-down-arrow.svg";
import upArrow from "../imgs/up-arrow.svg";

function Table({
  config,
  headings,
  rows,
  defaultSortedHeading,
  toggleDeleteModal,
  toggleEditModal,
  selectRow,
}) {
  function generateTableRows(rows) {
    const headingsConfig = headings.map(({ name, type }) => ({
      name,
      type: type,
    }));
    return rows.map((row) => {
      const id = row[config.uniqueIdProperty];
      return (
        <tr className={styles.dataRow} key={id.toString()}>
          {headingsConfig.map(({ name, type }) =>
            type === undefined ? (
              <td key={name} className={styles.dataCell}>
                {row[name]}
              </td>
            ) : (
              <td className={styles.dataCell} key={name}>
                <button
                  type="button"
                  className={styles.tableButton}
                  onClick={() => {
                    selectRow(id);
                    toggleEditModal();
                  }}
                >
                  <img src={edit} alt="" className={styles.tableImg}></img>
                </button>
                <button
                  type="button"
                  className={styles.tableButton}
                  onClick={() => {
                    selectRow(id);
                    toggleDeleteModal();
                  }}
                >
                  <img src={trash} alt="" className={styles.tableImg}></img>
                </button>
              </td>
            )
          )}
        </tr>
      );
    });
  }
  // default sorted head and acending or not
  const [sortedColumn, setSortedColumn] = useState({
    activeColumn: rows[0] ? Object.keys(rows[0])[0] : "",
    isAcending: true,
  });

  useEffect(() => {
    setSortedColumn({
      activeColumn: defaultSortedHeading,
      isAcending: true,
    });
  }, [defaultSortedHeading]);

  const sortedRows = useMemo(() => {
    const sortedArray = rows
      .map((ele) => ({ ...ele }))
      .sort((a, b) => {
        const toggledColumnName = sortedColumn.activeColumn;
        const [aVal, bVal] = [a[toggledColumnName], b[toggledColumnName]];

        if (typeof aVal === "number") {
          return sortedColumn.isAcending ? -(aVal - bVal) : aVal - bVal;
        } else {
          if (aVal < bVal) {
            return sortedColumn.isAcending ? -1 : 1;
          } else if (aVal > bVal) {
            return sortedColumn.isAcending ? 1 : -1;
          } else {
            return 0;
          }
        }
      });
    return sortedArray;
  }, [rows, sortedColumn.activeColumn, sortedColumn.isAcending]);

  function handleColumnSorting(columnName) {
    if (columnName !== sortedColumn.activeColumn) {
      setSortedColumn({
        activeColumn: columnName,
        isAcending: true,
      });
    } else {
      setSortedColumn({
        ...sortedColumn,
        isAcending: !sortedColumn.isAcending,
      });
    }
  }
  return (
    <section className={styles.tableContainer}>
      <table>
        <thead className={styles.stickyHead}>
          <tr className={styles.headerRow}>
            {headings.map(({ name, filterable }) => (
              <th
                className={styles.headerCell}
                key={name}
                onClick={
                  filterable ? () => handleColumnSorting(name) : undefined
                }
              >
                <div className={styles.headerFlex}>
                  <span>{name.replaceAll("_", " ")}</span>
                  {filterable && (
                    <img
                      src={
                        sortedColumn.activeColumn === name
                          ? upArrow
                          : upDownArrow
                      }
                      alt=""
                      className={`${styles.arrow} ${
                        !sortedColumn.isAcending &&
                        sortedColumn.activeColumn === name
                          ? styles.rotate
                          : ""
                      }`}
                    />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{generateTableRows(sortedRows)}</tbody>
      </table>
    </section>
  );
}

export default Table;
