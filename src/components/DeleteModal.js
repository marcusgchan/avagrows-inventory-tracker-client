import XButton from "./XButton";
import { useState } from "react";
import styles from "./styles/DeleteModal.module.css";
import ModalButton from "./ModalButton";
import useSelectedPerson from "../contexts/PeopleContext";
const LOCATION_TABLE = "location";
const STATUS_TABLE = "status";
const PART_TABLE = "parts";
const CATEGORY_TABLE = "partCategories";
const USERS_TABLE = "users";

function DeleteModal({
  toggleModal,
  selectedRow,
  deleteRow,
  tableType,
  config,
  dispatch,
}) {
  const info = createDefaultState();
  const [errorMsg, setErrorMsg] = useState("");

  // To update the people (users) global state
  // when a new user is added to the database
  const { selectionDispatch } = useSelectedPerson();

  function getErrorMsg() {
    let msg;
    if (tableType === STATUS_TABLE) {
      msg = "A row in the inventory table is currently using this Status";
    } else if (tableType === LOCATION_TABLE) {
      msg = "A row in the inventory table is currently using this Location";
    } else if (tableType === PART_TABLE) {
      msg = "A row in the inventory table is currently using this Part";
    } else if (tableType === CATEGORY_TABLE) {
      msg = "A part currently has that part category";
    } else if (tableType === USERS_TABLE) {
      msg = "A log in the log table is using this name";
    }
    return msg;
  }

  async function handleDelete(e) {
    e.preventDefault();
    let result = await deleteRow(selectedRow, dispatch);
    if (result.canDelete) {
      toggleModal();

      if (tableType === USERS_TABLE) {
        selectionDispatch({
          type: "REMOVE_PERSON",
          payload: selectedRow.user_id,
        });
      }
    } else {
      setErrorMsg(getErrorMsg());
    }
  }

  function createDefaultState() {
    const defaultState = {};
    config
      .filter(({ isDisplayed }) => isDisplayed.delete === true)
      .forEach(({ value }) => {
        if (selectedRow[value] !== null) {
          defaultState[value] = selectedRow[value];
        } else {
          defaultState[value] = "";
        }
      });
    return defaultState;
  }

  return (
    <>
      <form className={styles.container} onSubmit={(e) => handleDelete(e)}>
        <XButton onClick={toggleModal} />
        <h2>Delete</h2>
        {config.map(({ label, value, isDisplayed, element }) => {
          return (
            isDisplayed.delete && (
              <div key={value} className={styles.row}>
                <label htmlFor={value} className={styles.label}>
                  {label}
                </label>
                {element.getElement({
                  id: value,
                  disabled: true,
                  value: info[value],
                  name: value,
                })}
              </div>
            )
          );
        })}
        {errorMsg !== "" && <p className={styles.errorMsg}>{errorMsg}</p>}
        <div className={styles.buttons}>
          <ModalButton onClick={(e) => handleDelete(e)}>Yes</ModalButton>
          <ModalButton onClick={toggleModal}>No</ModalButton>
        </div>
      </form>
    </>
  );
}

export default DeleteModal;
