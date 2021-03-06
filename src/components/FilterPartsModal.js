import ModalButton from "./ModalButton";
import styles from "./styles/FilterPartsModal.module.css";
import XButton from "./XButton";

function FilterPartsModal({
  toggleModal,
  categories,
  locations,
  statuses,
  handleFilter,
  resetFilters,
}) {
  return (
    <section className={styles.container}>
      <XButton onClick={toggleModal} />
      <h2>Category</h2>
      {categories.map(({ part_category_name, isChecked }) => {
        return (
          <div className={styles.category} key={part_category_name}>
            <label className={styles.checkBoxContainer}>
              {part_category_name}
              <input
                type="checkbox"
                checked={isChecked}
                name={part_category_name}
                onChange={(e) => handleFilter(e, "part_category_name")}
              ></input>
              <span className={styles.checkMark}></span>
            </label>
          </div>
        );
      })}
      <h2>Location</h2>
      {locations.map(({ location_id, location_name, isChecked }) => {
        return (
          <div className={styles.location} key={location_id}>
            <label className={styles.checkBoxContainer}>
              {location_name}
              <input
                type="checkbox"
                checked={isChecked}
                id={location_id}
                name={location_name}
                onChange={(e) => handleFilter(e, "location_name")}
              ></input>
              <span className={styles.checkMark}></span>
            </label>
          </div>
        );
      })}
      <h2>Status</h2>
      {statuses.map(({ status_name, status_id, isChecked }) => {
        return (
          <div className={styles.status} key={status_id}>
            <label className={styles.checkBoxContainer}>
              {status_name}
              <input
                type="checkbox"
                checked={isChecked}
                name={status_name}
                onChange={(e) => handleFilter(e, "status_name")}
              ></input>
              <span className={styles.checkMark}></span>
            </label>
          </div>
        );
      })}
      <br></br>
      <ModalButton onClick={resetFilters}>Clear Filter</ModalButton>
    </section>
  );
}

export default FilterPartsModal;
