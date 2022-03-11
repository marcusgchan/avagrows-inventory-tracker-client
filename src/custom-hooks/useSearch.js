import { useCallback, useMemo } from "react";
import { searchParamToColumnName } from "../configs/searchConfig";

export default function useSearch(searchState, rows) {
  const containsFilter = useCallback(
    (row) => {
      return row[searchParamToColumnName.get(searchState.searchParam)]
        .toString()
        .toLowerCase()
        .includes(searchState.search.toLowerCase());
    },
    [searchState.searchParam, searchState.search]
  );

  const lessFilter = useCallback(
    (row) => {
      return (
        row[searchParamToColumnName.get(searchState.searchParam)] <
        Number(searchState.search)
      );
    },
    [searchState.searchParam, searchState.search]
  );

  const greaterFilter = useCallback(
    (row) => {
      return (
        row[searchParamToColumnName.get(searchState.searchParam)] >
        Number(searchState.search)
      );
    },
    [searchState.searchParam, searchState.search]
  );

  const filteredRowsMemo = useMemo(() => {
    switch (searchState.searchOption) {
      case "contains":
        return rows.filter(containsFilter);
      case "<":
        if (searchState.search === "") {
          return rows;
        }
        if (!isNaN(Number(searchState.search))) {
          return rows.filter(lessFilter);
        }
        return [];
      case ">":
        if (searchState.search === "") {
          return rows;
        }
        if (!isNaN(Number(searchState.search))) {
          return rows.filter(greaterFilter);
        }
        return [];
      default:
        throw new Error();
    }
  }, [
    searchState.searchOption,
    searchState.search,
    rows,
    containsFilter,
    greaterFilter,
    lessFilter,
  ]);

  return filteredRowsMemo;
}
