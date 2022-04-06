import XButton from "./XButton";
import { useState } from "react";
import styles from "./styles/EditModal.module.css";
import ModalButton from "./ModalButton";
import useSelectedPerson from "../contexts/PeopleContext";

const LOCATION_TABLE = "location";
const STATUS_TABLE = "status";
const PART_TABLE = "parts";
const CATEGORY_TABLE = "partCategories";
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

  // To update the people (users) global state
  // when a new user is added to the database
  const { selectionDispatch } = useSelectedPerson();

  // gets the standard error message for the respective tables
  function getErrorMsg() {
    let msg;
    if (tableType === STATUS_TABLE) {
      msg = "That status name is already in use";
    } else if (tableType === LOCATION_TABLE) {
      msg = "That location name is already in use";
    } else if (tableType === PART_TABLE) {
      msg = "That internal part number is already in use";
    } else if (tableType === CATEGORY_TABLE) {
      msg = "There is already a category with that name";
    } else if (tableType === USERS_TABLE) {
      msg = "That user name is already in use";
    }
    return msg;
  }

  // handles the editing when the user clicks the "save" button
  async function handleEdit(e) {
    e.preventDefault();
    let result = await editRow(selectedRow, input, dispatch);
    selectionDispatch({ type: "EDIT_PERSON", payload: result.rows });
    // For adding a part category column there is an extra type of error that is handled
    if (tableType === PART_TABLE && result.categoryExists === false) {
      setErrorMsg("That part category does not exists");
    } else {
      result.canEdit ? toggleModal() : setErrorMsg(getErrorMsg());
    }
  }

  function createDefaultState() {
    const defaultState = {};
    config
      .filter(({ isDisplayed }) => isDisplayed.edit === true)
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
      <form className={styles.container} onSubmit={(e) => handleEdit(e)}>
        <XButton onClick={toggleModal} />
        <h2>Edit</h2>
        {config.map(({ label, value, isEditable, isDisplayed, element }) => {
          return (
            isDisplayed.edit && (
              <div key={value} className={styles.row}>
                <label htmlFor={value} className={styles.label}>
                  {label}
                </label>
                {element.getElement({
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
        {errorMsg !== "" && <p className={styles.errorMsg}>{errorMsg}</p>}
        <ModalButton type="submit">Save</ModalButton>
      </form>
    </>
  );
}

export default EditModal;
