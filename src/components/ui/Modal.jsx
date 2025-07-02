import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ isOpen, children }) {
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

  return createPortal(<dialog ref={dialogRef} className="w-3/6 h-4/6 rounded-md border border-gray-100 shadow-md">{children}</dialog>, container);
}
