import { useState } from "react";
import styles from "./styles/AddPartsModal.module.css";
import XButton from "./XButton";

function AddPartsModal({ toggleModal }) {
  const [partNumber, setPartNumber] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState("");
  const [note, setNote] = useState("");
  return (
    <form className={styles.container}>
      <XButton onClick={toggleModal} />
      <h2> Add New Entry</h2>
      <div className={styles.partNumber}>
        <label htmlFor="partNumber">Internal Part Number: </label>
        <input
          id={styles.partNumber}
          className={styles.inputStyles}
          type="text"
          required
          value={partNumber}
          onChange={(e) => setPartNumber(e.target.value)}
        />
      </div>
      <div className={styles.location}>
        <label htmlFor="location">Location </label>
        <select
          id={styles.location}
          className={styles.inputStyles}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option
            hidden
            disabled
            selected
            value=""
            id={styles.hiddenOption}
          ></option>
          <option value="office">Office</option>
          <option value="FSS">FSS</option>
          <option value="shipped">Shipped</option>
        </select>
      </div>
      <div className={styles.status}>
        <label htmlFor="status">Status </label>
        <select
          id={styles.status}
          className={styles.inputStyles}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option
            hidden
            disabled
            selected
            value=""
            id={styles.hiddenOption}
          ></option>
          <option value="scrap">Scrap</option>
          <option value="sellable">Sellable</option>
          <option value="plantScience">Plant Science</option>
          <option value="inRepair">In-repair</option>
        </select>
      </div>
      <div className={styles.quantity}>
        <label htmlFor="quantity">Qty for loc/status: </label>
        <input
          id={styles.quantity}
          className={styles.inputStyles}
          type="number"
          min="0"
          required
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div className={styles.note}>
        <textarea
          id={styles.note}
          className={styles.inputStyles}
          placeholder="Note:"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div className={styles.buttons}>
        <button id={styles.okButton} onClick={toggleModal}>
          OK
        </button>
      </div>
    </form>
  );
}

export default AddPartsModal;
