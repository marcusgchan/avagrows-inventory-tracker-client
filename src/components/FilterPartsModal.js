import styles from "./styles/FilterPartsModal.module.css";

function FilterPartsModal({ toggleModal, categories, locations, statuses }) {
  return (
    <section className={styles.container}>
      <div className={styles.close} onClick={toggleModal}></div>
      <h2>Category</h2>
      {Object.keys(categories).map((category) => {
        return (
          <div className={styles.category} key={category}>
            <label className={styles.checkBoxContainer}>
              {category}
              <input type="checkbox"></input>
              <span className={styles.checkMark}></span>
            </label>
          </div>
        );
      })}
      <h2>Location</h2>
      {Object.keys(locations).map((location) => {
        return (
          <div className={styles.location} key={location}>
            <label className={styles.checkBoxContainer}>
              {location}
              <input type="checkbox"></input>
              <span className={styles.checkMark}></span>
            </label>
          </div>
        );
      })}
      <h2>Status</h2>
      {Object.keys(statuses).map((statuses) => {
        return (
          <div className={styles.status} key={statuses}>
            <label className={styles.checkBoxContainer}>
              {statuses}
              <input type="checkbox"></input>
              <span className={styles.checkMark}></span>
            </label>
          </div>
        );
      })}

      <br></br>
      <button className={styles.buttons} onClick={toggleModal}>
        Filter
      </button>
      <br></br>
      <button className={styles.buttons} onClick={toggleModal}>
        Clear Filter
      </button>
    </section>
  );
}

export default FilterPartsModal;
