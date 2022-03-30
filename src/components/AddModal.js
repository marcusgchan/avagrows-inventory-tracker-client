import XButton from "./XButton";
import { useState } from "react";
import styles from "./styles/AddStatusModal.module.css";
import ModalButton from "./ModalButton";

function AddStatusModal({ toggleModal, selectedRow, handleAdd, config }) {
  const [input, setInput] = useState(createDefaultState());
  const [errorMsg, setErrorMsg] = useState("");

  function createDefaultState() {
    const defaultState = {};
    config
      .filter(({ isDisplayed }) => isDisplayed === true)
      .forEach(({ value }) => (defaultState[value] = ""));
    return defaultState;
  }

  return (
    <>
      <form className={styles.container}>
        <XButton onClick={toggleModal} />
        <h2>Add parts</h2>
        {config.map(({ label, value, isEditable, isDisplayed, getElement }) => {
          return (
            isDisplayed && (
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
        <ModalButton onClick={() => handleAdd()}>Add Status</ModalButton>
      </form>
    </>
  );
}

export default AddStatusModal;
