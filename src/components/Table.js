import edit from "../imgs/edit.svg";
import trash from "../imgs/trash.svg";
import styles from "./styles/Table.module.css";
import upDownArrow from "../imgs/up-down-arrow.svg";
import upArrow from "../imgs/up-arrow.svg";
import useColumnSorting from "../custom-hooks/useColumnSorting";

function Table(props) {
  const { headings, rows, defaultSortedHeading } = props;
  const { sortedColumn, handleColumnSorting, sortedRows } = useColumnSorting(
    rows,
    defaultSortedHeading
  );

  return (
    <section className={styles.tableContainer}>
      <table>
        <thead className={styles.stickyHead}>
          <tr className={styles.headerRow}>
            <TableHeadings
              headings={headings}
              sortedColumn={sortedColumn}
              handleColumnSorting={handleColumnSorting}
            />
          </tr>
        </thead>
        <tbody>
          <TableRows {...props} sortedRows={sortedRows} />
        </tbody>
      </table>
    </section>
  );
}

function TableHeadings({ headings, sortedColumn, handleColumnSorting }) {
  return headings.map(({ name, filterable }) => (
    <th
      className={styles.headerCell}
      key={name}
      onClick={filterable ? () => handleColumnSorting(name) : undefined}
    >
      <div className={styles.headerFlex}>
        <span>{name.replaceAll("_", " ")}</span>
        {filterable && (
          <img
            src={sortedColumn.activeColumn === name ? upArrow : upDownArrow}
            alt=""
            className={`${styles.arrow} ${
              !sortedColumn.isAcending && sortedColumn.activeColumn === name
                ? styles.rotate
                : ""
            }`}
          />
        )}
      </div>
    </th>
  ));
}

function TableRows({
  config,
  headings,
  toggleDeleteModal,
  toggleEditModal,
  selectRow,
  sortedRows,
}) {
  const headingsConfig = headings.map(({ name, type }) => ({
    name,
    type: type,
  }));
  return sortedRows.map((row) => {
    const id = row[config.uniqueIdProperty];
    return (
      <tr className={styles.dataRow} key={id.toString()}>
        {/* Display td or action column with buttons based on type  */}
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

export default Table;
