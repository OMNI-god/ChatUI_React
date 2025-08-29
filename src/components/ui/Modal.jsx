import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

export default function Modal({ isOpen, children, callBack }) {
  const dialogRef = useRef();

  useEffect(() => {
    const modal = dialogRef.current;
    if (!modal) return;

    if (isOpen) {
      if (!modal.open) {
        modal.showModal();
      }
    } else {
      if (modal.open) {
        modal.close();
      }
    }
  }, [isOpen]);

  const container = document.getElementById("modal");
  if (!container) return null;

  return createPortal(
    <dialog
      className={`${styles.uiDialogBox} rounded-md shadow-md`}
      ref={dialogRef}
    >
      <div className={styles.children}>{children}</div>
      <button
        onClick={() => {
          dialogRef.current.close();
          callBack();
        }}
        className="bg-red-400"
      >
        Close
      </button>
    </dialog>,
    container
  );
}
