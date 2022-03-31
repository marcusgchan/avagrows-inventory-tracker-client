import XButton from "./XButton";
import { useState } from "react";
import styles from "./styles/EditModal.module.css";
import ModalButton from "./ModalButton";

const LOCATION_TABLE = "location";
const STATUS_TABLE = "status";
const PART_TABLE = "parts";
const CATEGORY_TABLE = "part categories";
const USERS_TABLE = "users";

function EditModal({
  toggleModal,
  selectedRow,
  tableType,
  editRow,
  config,
  dispatch,
}) {
  const [input, setInput] = useState(createDefaultState());
  const [errorMsg, setErrorMsg] = useState("");

  // gets the standard error message for the respective tables
  function getErrorMsg() {
    let msg;
    if (tableType === STATUS_TABLE) {
      msg = "The status is already using that status name";
    } else if (tableType === LOCATION_TABLE) {
      msg = "The location is already using that location name";
    } else if (tableType === PART_TABLE) {
      msg = "The part is already using that internal part number";
    } else if (tableType === CATEGORY_TABLE) {
      msg = "There is already an assigned category for that part";
    } else if (tableType === USERS_TABLE) {
      msg = "The user is already using that name";
    }
    return msg;
  }

  // handles the editing when the user clicks the "save" button
  async function handleEdit(e) {
    e.preventDefault();
    let result = await editRow(selectedRow, input, dispatch);
    // For adding a part category column there is an extra type of error that is handled
    if (tableType === CATEGORY_TABLE && result.partExists === false) {
      setErrorMsg("The internal part number does not exists");
    } else {
      result.canEdit ? toggleModal() : setErrorMsg(getErrorMsg());
    }
  }

  function createDefaultState() {
    const defaultState = {};
    config
      .filter(({ isDisplayed }) => isDisplayed.edit === true)
      .forEach(({ value }) => {
        defaultState[value] = selectedRow[value];
      });
    return defaultState;
  }

  return (
    <>
      <form className={styles.container}>
        <XButton onClick={toggleModal} />
        <h2>Edit</h2>
        {config.map(({ label, value, isEditable, isDisplayed, getElement }) => {
          return (
            isDisplayed.edit && (
              <div key={value} className={styles.row}>
                <label htmlFor={value} className={styles.label}>
                  {label}
                </label>
                {getElement({
                  id: value,
                  disabled: !isEditable,
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
        {errorMsg !== "" && <p>{errorMsg}</p>}
        <ModalButton onClick={(e) => handleEdit(e)}>Save</ModalButton>
      </form>
    </>
  );
}

export default EditModal;
