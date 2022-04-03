import edit from "../imgs/edit.svg";
import trash from "../imgs/trash.svg";
import styles from "./styles/TableActionButtons.module.css";

function TableActionButtons({ onClickEdit, onClickDelete }) {
  return (
    <>
      <button
        type="button"
        className={styles.tableButton}
        onClick={onClickEdit}
      >
        <img src={edit} alt="" className={styles.tableImg}></img>
      </button>
      <button
        type="button"
        className={styles.tableButton}
        onClick={onClickDelete}
      >
        <img src={trash} alt="" className={styles.tableImg}></img>
      </button>
    </>
  );
}

export default TableActionButtons;
