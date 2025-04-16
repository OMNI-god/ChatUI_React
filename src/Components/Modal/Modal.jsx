export default function Modal({ errorText }) {
    // const dialog = useRef();
    // useEffect(() => {
    //     dialog.current.showModal();
    // }, []);
    return <dialog className="w-[33.33%] bg-white p-4 rounded-md shadow-md" >
        <h1 className="text-2xl">{errorText}</h1>
        <form className="flex justify-end mt-4">
            <button className="rounded-md px-3 py-1 bg-red-500 text-red-100">Close</button>
        </form>
    </dialog>
}