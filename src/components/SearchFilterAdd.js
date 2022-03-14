import styles from "./styles/SearchFilterAdd.module.css";
import { DEFAULT_SEARCH_PARAMS } from "../configs/searchConfig";

function SearchFilterAdd({
  toggleAddModal,
  toggleFilterModal,
  dispatch,
  searchState,
}) {
  return (
    <section className={styles.container}>
      <div className={styles.searchContainer}>
        <span>search</span>
        <select
          className={styles.searchInput}
          value={searchState.searchParam}
          onChange={(e) =>
            dispatch({ type: "UPDATE_SEARCH_PARAMS", payload: e.target.value })
          }
        >
          {DEFAULT_SEARCH_PARAMS.map(({ value }) => (
            <option key={value}>{value}</option>
          ))}
        </select>
        <select
          className={styles.searchInput}
          value={searchState.searchOptions}
          onChange={(e) =>
            dispatch({ type: "UPDATE_SEARCH_TYPES", payload: e.target.value })
          }
        >
          {searchState.searchTypeOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <input
          className={styles.searchInput}
          type="text"
          value={searchState.search}
          onChange={(e) =>
            dispatch({ type: "UPDATE_SEARCH", payload: e.target.value })
          }
        />
        {/* <button className={styles.btn} onClick={handleSearch}>
          search
        </button> */}
        <button className={styles.btn}>clear</button>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={toggleFilterModal}>
          Filter
        </button>
        <button className={styles.btn} onClick={toggleAddModal}>
          + Add
        </button>
      </div>
    </section>
  );
}

export default SearchFilterAdd;
