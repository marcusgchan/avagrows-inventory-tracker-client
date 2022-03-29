import { useState } from "react";
import styles from "./styles/AddPartsModal.module.css";
import XButton from "./XButton";
import tableServices from "../services/tableServices";
import ModalButton from "./ModalButton";

function AddPartsModal({ toggleModal, locations, statuses, addPart, rows }) {
  const [partNumber, setPartNumber] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [note, setNote] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  let validPart = true;
  let rowNotExists = true;
  let formFilled = true;

  function checkValidPart(resolve, reject) {
    let partInfo = { partNumber: partNumber };
    tableServices
      .checkPartExists(partInfo)
      .then((res) => {
        if (res.data === false) {
          validPart = false;
          setErrorMsg(
            "Internal Part Number does not exists. Add it in Table Management First"
          );
        } else {
          validPart = true;
        }
        resolve();
      })
      .catch(reject);
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
      <div className={styles.row}>
        <label htmlFor="partNumber">Internal Part Number: </label>
        <input
          className={styles.inputStyles}
          type="text"
          required
          value={partNumber}
          onChange={(e) => setPartNumber(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="location">Location </label>
        <select
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
      <div className={styles.row}>
        <label htmlFor="status">Status </label>
        <select
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
      <div className={styles.row}>
        <label htmlFor="quantity">Qty for loc/status: </label>
        <input
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
        <ModalButton
          onClick={(e) => {
            checkFormFilled();
            if (formFilled === true) {
              new Promise((resolve, reject) => {
                checkValidPart(resolve, reject);
              })
                .then(() => {
                  if (validPart === true) {
                    checkRowNotExists();
                    if (rowNotExists === true) {
                      addPart(partNumber, location, status, quantity, note);
                      toggleModal();
                    }
                  }
                })
                .catch((e) => console.log(e));
            }
          }}
        >
          OK
        </ModalButton>
      </div>
    </form>
  );
}

export default AddPartsModal;
