import styles from "./styles/SearchFilterAdd.module.css";
import { DEFAULT_SEARCH_PARAMS } from "../configs/searchConfig";
import TableHeaderComponent from "./TableHeaderContainer";
import TableSelectMenu from "./TableSelectMenu";
import TableInput from "./TableInput";
import TableButton from "./TableButton";
import Table from "./Table";

function SearchFilterAdd({
  toggleAddModal,
  toggleFilterModal,
  dispatch,
  searchState,
}) {
  return (
    <TableHeaderComponent>
      <div className={styles.searchContainer}>
        <span>search</span>
        <TableSelectMenu
          value={searchState.searchParam}
          onChange={(e) =>
            dispatch({ type: "UPDATE_SEARCH_PARAMS", payload: e.target.value })
          }
        >
          {DEFAULT_SEARCH_PARAMS.map(({ value }) => (
            <option key={value}>{value}</option>
          ))}
        </TableSelectMenu>
        <TableSelectMenu
          value={searchState.searchOptions}
          onChange={(e) =>
            dispatch({ type: "UPDATE_SEARCH_TYPES", payload: e.target.value })
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
        <TableButton onClick={toggleFilterModal}>Filter</TableButton>
        <TableButton onClick={toggleAddModal}>+ Add</TableButton>
      </div>
    </TableHeaderComponent>
  );
}

export default SearchFilterAdd;
