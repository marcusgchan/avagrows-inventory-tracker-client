import { useState } from "react";
import styles from "./styles/AddPartsModal.module.css";
import XButton from "./XButton";

function AddPartsModal({ toggleModal, locations, statuses, addPart, parts }) {
  const [partNumber, setPartNumber] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [note, setNote] = useState("");
  const [validPart, setInvalidPart] = useState(false);
  const [rowExists, setRowExists] = useState(false);

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
          {locations.map(({ location_id, location_name }) => (
            <option key={location_id} value={location_name}>
              {location_name}
            </option>
          ))}
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
          {statuses.map(({ status_id, status_name }) => (
            <option key={status_id} value={status_name}>
              {status_name}
            </option>
          ))}
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
        <button
          id={styles.okButton}
          onClick={() => {
            let part = parts.find(
              (ele) => ele.internal_part_number === partNumber
            );
            let row = parts.find((ele) => {
              return (
                ele.internal_part_number === partNumber &&
                ele.location_id === location &&
                ele.status_id === status
              );
            });
            if (typeof part !== "undefined" && typeof rowExists !== "undefined") {
              addPart(partNumber, location, status, quantity, note);
              toggleModal();
            } else if (typeof rowExists !== "undefined"){
              setInvalidPart(true);
              setRowExists(true);
            } else {
              setInvalidPart(false);
              setRowExists(true)
            }
          }}
        >
          OK
        </button>
      </div>
    </form>
  );
}

export default AddPartsModal;
