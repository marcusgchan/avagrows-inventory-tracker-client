import { useState } from "react";
import styles from "./styles/DeletePartsModal.module.css";

function DeletePartsModal({ toggleModal, row }) {
  return (
    <section className={styles.container}>
      <h2>Delete</h2>
      <p>Are you sure you want to delete?</p>
      <ul>
        <li>Internal Part Number: {row.internal_part_number}</li>
        <li>Part Name: {row.part_name}</li>
        <li>Part Category: {row.part_category_name}</li>
        <li>Location: {row.location_name}</li>
        <li>Status: {row.status_name}</li>
        <li>Qty for Location and Status: {row.quantity}</li>
      </ul>
      <br />
      <div className={styles.buttons}>
        <button id={styles.yesButton} onClick={toggleModal}>
          Yes
        </button>
        <button id={styles.noButton} onClick={toggleModal}>
          No
        </button>
      </div>
    </section>
  );
}

export default DeletePartsModal;
