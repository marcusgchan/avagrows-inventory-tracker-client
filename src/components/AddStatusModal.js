import { statusConfig } from "../configs/tmConfig";
import XButton from "./XButton";
import { useState } from "react";
import styles from "./styles/AddStatusModal.module.css";
import ModalButton from "./ModalButton";

function AddStatusModal({ toggleModal, selectedRow, handleAdd }) {
  // Make sure properties match name in backend
  const [input, setInput] = useState({ status_name: "", notes: "" });
  return (
    <>
      <XButton onClick={toggleModal} />
      <form className={styles.container}>
        <h2>Add parts</h2>
        {statusConfig.map(({ label, value, isEditable, getElement }) => {
          return (
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
          );
        })}
        <ModalButton>Add Status</ModalButton>
      </form>
    </>
  );
}

export default AddStatusModal;
