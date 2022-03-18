import { useState } from "react";
import styles from "./styles/AddPartsModal.module.css";
import XButton from "./XButton";

function AddPartsModal({
  toggleModal,
  locations,
  statuses,
  addPart,
  parts,
  rows,
}) {
  const [partNumber, setPartNumber] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [note, setNote] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  let validPart = true;
  let rowNotExists = true;
  let formFilled = true;

  function checkValidPart() {
    let part = parts.find((ele) => ele.internal_part_number === partNumber);
    if (typeof part === "undefined") {
      validPart = false;
      setErrorMsg(
        "Internal Part Number does not exists. Add it in Table Management First"
      );
    } else {
      validPart = true;
    }
  }

  function checkRowNotExists() {
    let row = rows.find((ele) => {
      return (
        ele.internal_part_number === partNumber &&
        ele.location_name === location &&
        ele.status_name === status
      );
    });
    if (typeof row === "undefined") {
      rowNotExists = true;
    } else {
      rowNotExists = false;
      setErrorMsg(
        "Part you are trying to add, already exists. Update quantity through the inventory management"
      );
    }
  }

  function checkFormFilled() {
    if (partNumber === "" || status === "" || location === "") {
      formFilled = false;
      setErrorMsg(
        "Enter an Internal part number and select a location and status before submitting"
      );
    } else {
      formFilled = true;
    }
  }

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
          onChange={(e) => setLocation(e.target.value)}
          defaultValue=""
        >
          <option hidden disabled value="" id={styles.hiddenOption}></option>
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
          onChange={(e) => setStatus(e.target.value)}
          defaultValue=""
        >
          <option hidden disabled value="" id={styles.hiddenOption}></option>
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
      <div className={styles.errorMsg}>
        <p>{errorMsg}</p>
      </div>
      <div className={styles.buttons}>
        <button
          id={styles.okButton}
          type="button"
          onClick={(e) => {
            checkFormFilled();
            if (formFilled === true) {
              checkValidPart();
              if (validPart === true) {
                checkRowNotExists();
                if (rowNotExists === true) {
                  addPart(partNumber, location, status, quantity, note);
                  toggleModal();
                }
              }
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
