import styles from "./styles/SearchFilterAdd.module.css";
import { DEFAULT_SEARCH_PARAMS } from "../configs/searchConfig";
import TableHeaderComponent from "./TableHeaderContainer";
import TableSelectMenu from "./TableSelectMenu";
import TableInput from "./TableInput";
import TableButton from "./TableButton";

function SearchFilterAdd({
  toggleAddModal,
  toggleFilterModal,
  dispatch,
  searchState,
  isFilterActive,
}) {
  return (
    <TableHeaderComponent>
      <div className={styles.searchContainer}>
        <span>search</span>
        <TableSelectMenu
          value={searchState.searchColumn}
          onChange={(e) =>
            dispatch({ type: "UPDATE_SEARCH_COLUMN", payload: e.target.value })
          }
        >
          {DEFAULT_SEARCH_PARAMS.map(({ value, columnName }) => {
            return (
              <option key={columnName} value={columnName}>
                {value}
              </option>
            );
          })}
        </TableSelectMenu>
        <TableSelectMenu
          value={searchState.searchOption}
          onChange={(e) =>
            dispatch({ type: "UPDATE_SEARCH_OPTION", payload: e.target.value })
          }
        >
          {searchState.searchTypeOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </TableSelectMenu>
        <TableInput
          type="text"
          value={searchState.search}
          onChange={(e) =>
            dispatch({ type: "UPDATE_SEARCH", payload: e.target.value })
          }
        />
        <TableButton onClick={() => dispatch({ type: "CLEAR_SEARCH" })}>
          clear
        </TableButton>
      </div>
      <div className={styles.btnContainer}>
        <TableButton
          style={isFilterActive ? { backgroundColor: "red" } : null}
          onClick={toggleFilterModal}
        >
          Filter
        </TableButton>
        <TableButton onClick={toggleAddModal}>+ Add</TableButton>
      </div>
    </TableHeaderComponent>
  );
}

export default SearchFilterAdd;
