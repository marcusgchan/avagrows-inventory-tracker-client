import XButton from "./XButton";
import { useState } from "react";
import styles from "./styles/AddModal.module.css";
import ModalButton from "./ModalButton";

const LOCATION_TABLE = "location";
const STATUS_TABLE = "status";
const PART_TABLE = "parts";
const CATEGORY_TABLE = "partCategories";
const USERS_TABLE = "users";

function AddModal({ toggleModal, addRow, tableType, config, dispatch }) {
  const [input, setInput] = useState(createDefaultState());
  const [errorMsg, setErrorMsg] = useState("");

  // gets the standard error message for the respective tables
  function getErrorMsg() {
    let msg;
    if (tableType === STATUS_TABLE) {
      msg = "There is already a status with that status name";
    } else if (tableType === LOCATION_TABLE) {
      msg = "There is already a location with that location name";
    } else if (tableType === PART_TABLE) {
      msg = "There is already a part with that internal part number";
    } else if (tableType === CATEGORY_TABLE) {
      msg = "There is already an assigned category for that part";
    } else if (tableType === USERS_TABLE) {
      msg = "There is already an user with that name";
    }
    return msg;
  }

  // handles the adding when the user clicks the "add" button
  async function handleAdd(e) {
    e.preventDefault();
    console.log(input);
    let result = await addRow(input, dispatch);
    console.log(result);
    // For adding a part category column there is an extra type of error that is handled
    if (tableType === PART_TABLE && result.categoryExists === false) {
      setErrorMsg("That part category does not exists");
    } else {
      result.canAdd ? toggleModal() : setErrorMsg(getErrorMsg());
    }
  }

  function createDefaultState() {
    const defaultState = {};
    config
      .filter(({ isDisplayed }) => isDisplayed.add === true)
      .forEach((row) => {
        const defaultValue = row.element.defaultValue;
        if (defaultValue) {
          defaultState[row.value] = defaultValue;
        } else {
          defaultState[row.value] = "";
        }
      });
    return defaultState;
  }

  return (
    <>
      <form className={styles.container} onSubmit={(e) => handleAdd(e)}>
        <XButton onClick={toggleModal} />
        <h2>Add</h2>
        {config.map(({ label, value, isDisplayed, element }) => {
          return (
            isDisplayed.add && (
              <div key={value} className={styles.row}>
                <label htmlFor={value} className={styles.label}>
                  {label}
                </label>
                {element.getElement({
                  id: value,
                  disabled: false,
                  value: input[value],
                  name: value,
                  onChange: (e) => {
                    let updated = { ...input };
                    updated[e.target.name] = e.target.value;
                    setInput(updated);
                  },
                })}
              </div>
            )
          );
        })}
        {errorMsg !== "" && <p className={styles.errorMsg}>{errorMsg}</p>}
        <ModalButton type="submit">Add</ModalButton>
      </form>
    </>
  );
}

export default AddModal;
