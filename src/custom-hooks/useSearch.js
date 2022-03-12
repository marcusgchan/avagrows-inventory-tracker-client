import { useCallback, useMemo } from "react";
import { searchParamToColumnName } from "../configs/searchConfig";

export default function useSearch(
  searchState,
  rows,
  categories,
  locations,
  statuses
) {
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
    const locationValues = locations
      .filter(({ isChecked }) => isChecked === true)
      .map(({ location_name }) => location_name);

    const categoryValues = categories
      .filter(({ isChecked }) => isChecked === true)
      .map(({ part_category_name }) => part_category_name);

    const statusValues = statuses
      .filter(({ isChecked }) => isChecked === true)
      .map(({ status_name }) => status_name);

    const filterCheckBox = ({
      location_name,
      part_category_name,
      status_name,
    }) =>
      locationValues.includes(location_name) &&
      categoryValues.includes(part_category_name) &&
      statusValues.includes(status_name);

    switch (searchState.searchOption) {
      case "contains":
        return rows.filter(filterCheckBox).filter(containsFilter);
      case "<":
        if (searchState.search === "") {
          return rows.filter(filterCheckBox);
        }
        if (!isNaN(Number(searchState.search))) {
          return rows.filter(filterCheckBox).filter(lessFilter);
        }
        return [];
      case ">":
        if (searchState.search === "") {
          return rows.filter(filterCheckBox);
        }
        if (!isNaN(Number(searchState.search))) {
          return rows.filter(filterCheckBox).filter(greaterFilter);
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
    locations,
    categories,
    statuses,
  ]);

  return filteredRowsMemo;
}
