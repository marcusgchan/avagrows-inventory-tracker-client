import { useState } from "react";
import styles from "./styles/AddPartsModal.module.css";
import XButton from "./XButton";

function AddPartsModal({ toggleModal, locations, statuses, addPart, parts }) {
  const [partNumber, setPartNumber] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [note, setNote] = useState("");
  const [validPart, setValidPart] = useState(true);
  const [rowNotExists, setRowNotExists] = useState(true);
  const [formFilled, setFormFilled] = useState(true);

  // function checkValidPart() {
  //   let part = parts.find((ele) => ele.internal_part_number === partNumber);
  //   console.log(part);
  //   if (typeof part === "undefined") {
  //     setValidPart(false);
  //   } else {
  //     setValidPart(true);
  //   }
  // }

  // function checkRowNotExists() {
  //   let row = parts.find((ele) => {
  //     return (
  //       ele.internal_part_number === partNumber &&
  //       ele.location_id === location &&
  //       ele.status_id === status
  //     );
  //   });
  //   console.log(row);

  //   if (typeof row === "undefined") {
  //     setRowNotExists(true);
  //   } else {
  //     setRowNotExists(false);
  //   }
  // }

  // function checkFormFilled() {
  //   if (partNumber === "" || status === "" || location === "") {
  //     setFormFilled(false);
  //     console.log("worked");
  //     console.log(formFilled);
  //   } else {
  //     setFormFilled(true);
  //     console.log("failed");
  //   }
  // }

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
      <div>
        <p>
          {formFilled ? () => {} : () => "Fill in the form before submitting"}
        </p>
        <p>
          {validPart ? () => {} : () => "Internal Part Number does not exists"}
        </p>
        <p>
          {rowNotExists
            ? () => {}
            : () => "Part you are trying to add, already exists"}
        </p>
      </div>
      <div className={styles.buttons}>
        <button
          id={styles.okButton}
          type="button"
          onClick={() => {
            addPart(partNumber, location, status, quantity, note);
            toggleModal();
            // checkFormFilled();
            //   console.log(formFilled);
            //   if (formFilled === true) {
            //     checkValidPart();
            //     if (validPart === true) {
            //       checkRowNotExists();
            //       if (rowNotExists === true) {
            //         console.log("it did the thing");
            //         addPart(partNumber, location, status, quantity, note);
            //         toggleModal();
            //       }
            //     }
            //   }
          }}
        >
          OK
        </button>
      </div>
    </form>
  );
}

export default AddPartsModal;
