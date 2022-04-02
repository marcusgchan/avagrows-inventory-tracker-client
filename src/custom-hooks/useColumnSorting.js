import { useState, useEffect, useMemo } from "react";

function useColumnSorting(rows, defaultSortedHeading) {
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
    // First map creates a new array reference so b/c rows is a state (can't be modified)
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

  return { sortedColumn, handleColumnSorting, sortedRows };
}

export default useColumnSorting;
