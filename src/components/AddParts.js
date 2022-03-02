import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/AddParts.module.css";

function AddParts() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <form className={styles.container}>
        <h2> Add New Material</h2>
        <section className={styles.grid}>
          <div className={styles.name}>
            <label htmlFor="name">Material Name</label>
            <input id={styles.name} className={styles.inputStyles} />
          </div>
          <div className={styles.category}>
            <label htmlFor="category">Material Category</label>
            <select id={styles.category} className={styles.inputStyles}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className={styles.description}>
            <label htmlFor={styles.description}>Description</label>
            <textarea id={styles.description} className={styles.inputStyles} />
          </div>
          <div className={styles.price}>
            <label htmlFor="price">Price</label>
            <input id={styles.price} className={styles.inputStyles} />
          </div>
          <div className={styles.quantity}>
            <label htmlFor="quantity">Quantity</label>
            <input id={styles.quantity} className={styles.inputStyles} />
          </div>
          <div className={styles.buttons}>
            <button onClick={() => navigate("/inventory")}>Cancel</button>
            <button onClick={handleSubmit}>Save</button>
          </div>
        </section>
      </form>
    </>
  );
}

export default AddParts;
