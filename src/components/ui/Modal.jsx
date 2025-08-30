import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

export default function Modal({ isOpen, children, callBack }) {
  const dialogRef = useRef();

  useEffect(() => {
    const modal = dialogRef.current;
    if (!modal) return;

    if (isOpen && !modal.open) {
      modal.showModal();
    } else if (!isOpen && modal.open) {
      modal.close();
    }
  }, [isOpen]);

  const container = document.getElementById("modal");
  if (!container) return null;

  const handleClose = () => {
    dialogRef.current?.close();
    callBack?.();
  };

  return createPortal(
    <dialog className={styles.uiDialogBox} ref={dialogRef}>
      <div className={styles.children}>{children}</div>
      <button className={styles.closeButton} onClick={handleClose}>
        <ion-icon className={styles.icon} name="close-outline"></ion-icon> Close
      </button>
    </dialog>,
    container
  );
}
