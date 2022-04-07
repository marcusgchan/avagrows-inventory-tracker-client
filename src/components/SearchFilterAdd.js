import styles from "./styles/SearchFilterAdd.module.css";
import { DEFAULT_SEARCH_PARAMS } from "../configs/searchConfig";
import TableHeaderComponent from "./TableHeaderContainer";
import SelectMenu from "./SelectMenu";
import Input from "./Input";
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
        <SelectMenu
          value={searchState.searchColumn}
          className={styles.searchInput}
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
        </SelectMenu>
        <SelectMenu
          value={searchState.searchOption}
          className={styles.searchInput}
          onChange={(e) =>
            dispatch({ type: "UPDATE_SEARCH_OPTION", payload: e.target.value })
          }
        >
          {searchState.searchTypeOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </SelectMenu>
        <Input
          type="text"
          value={searchState.search}
          className={styles.searchInput}
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
