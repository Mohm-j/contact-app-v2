import styles from "./Modal.module.css";

const Modal = ({ children, onConfirm, onCancel, variant = "edit" }) => {
  const contentClass =
    variant === "delete" ? styles.modalDelete : styles.modalEdit;

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.modalContent} ${contentClass}`}>
        {children || <p>Are you sure you want to delete all contacts?</p>}

        <div
          className={`${styles.modalActions} ${
            variant === "edit" ? styles.cancelOnly : ""
          }`}
        >
          {variant === "delete" ? (
            <>
              <button onClick={onConfirm} className={styles.confirmBtn}>
                Yes
              </button>
              <button onClick={onCancel} className={styles.cancelBtn}>
                Close
              </button>
            </>
          ) : (
            <button onClick={onCancel} className={styles.cancelBtn}>
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
