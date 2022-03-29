import ModalButton from "./ModalButton";
import styles from "./styles/DeletePartsModal.module.css";

function DeletePartsModal({ toggleModal, row, setRows, deleteRow }) {
  return (
    <section className={styles.container}>
      <h2>Delete</h2>
      <p>Are you sure you want to delete?</p>
      <ul>
        <li>Internal Part Number: {row.internal_part_number}</li>
        <li>Part Name: {row.part_name}</li>
        <li>Part Category: {row.part_category_name}</li>
        <li>Location: {row.location_name}</li>
        <li>Status: {row.status_name}</li>
        <li>Qty for Location and Status: {row.quantity}</li>
      </ul>
      <br />
      <div className={styles.buttons}>
        <ModalButton
          onClick={() => {
            deleteRow(row);
            toggleModal();
          }}
        >
          Yes
        </ModalButton>
        <ModalButton onClick={toggleModal}>No</ModalButton>
      </div>
    </section>
  );
}

export default DeletePartsModal;
