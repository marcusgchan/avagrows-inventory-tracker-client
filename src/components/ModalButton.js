import styles from "./styles/ModalButton.module.css";

function ModalButton({ children, onClick, value }) {
  return (
    <button className={styles.btn} onClick={onClick} value={value}>
      {children}
    </button>
  );
}

export default ModalButton;
