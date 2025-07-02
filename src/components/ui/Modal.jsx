import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({isOpen, childern }) {
  const dialog = useRef();

  return createPortal(
    <dialog ref={dialog}>{childern}</dialog>,
    document.getElementById("modal")
  );
}
