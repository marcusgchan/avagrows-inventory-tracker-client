import { useState } from "react";
import styles from "./styles/DeletePartsModal.module.css";

function DeletePartsModal({ toggleModal }) {
  return (
    <section className={styles.container}>
      <h2>Delete</h2>
      <p>Are you sure you want to delete?</p>
      <ul>
        <li>Internal Part Number:</li>
        <li>Part Name:</li>
        <li>Part Category:</li>
        <li>Location:</li>
        <li>Status:</li>
        <li>Qty for Location and Status:</li>
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
