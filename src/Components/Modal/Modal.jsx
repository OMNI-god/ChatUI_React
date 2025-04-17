import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(({ errorText }, ref) => {
    const dialog = useRef();

    useImperativeHandle(ref, () => ({
        open: () => dialog.current.showModal(),
        close: () => dialog.current.close(),
    }));

    function handleClose(event) {
        event.preventDefault(); // Prevent form submission
        dialog.current.close(); // Close the modal
    }

    return (
        <dialog className="w-[33.33%] bg-white p-4 rounded-md shadow-md" ref={dialog}>
            <h1 className="text-2xl">{errorText}</h1>
            <form className="flex justify-end mt-4" onSubmit={handleClose}>
                <button
                    type="submit"
                    className="rounded-md px-3 py-1 bg-red-500 text-red-100"
                >
                    Close
                </button>
            </form>
        </dialog>
    );
});

export default Modal;