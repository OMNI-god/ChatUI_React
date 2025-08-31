import { useState } from "react";
import Modal from "../ui/Modal";

export default function ChatHeader({ user }) {
  const [viewPic, setViewPic] = useState(false);
  return (
    <>
      {user && (
        <nav className="flex items-center border shadow-sm rounded-md p-1 my-2 bg-stone-100">
          <img
            src={user.profile_pic}
            alt={user.sender}
            className="w-12 h-12 object-contain rounded-full cursor-pointer"
            onClick={() => setViewPic(true)}
          />
          <div className="flex justify-between px-2 min-w-0 w-full">
            <p className="font-bold">{user.sender}</p>
            <p>3 dot</p>
          </div>
          {/* <Modal isOpen={viewPic}>
            <div className="m-3 flex flex-col">
              <p className="font-extrabold mb-4 bg-slate-100 shadow-md p-2">
                {user.sender}
              </p>
              <div className="flex flex-col items-center max-h-full">
                <img
                  src={user.profile_pic}
                  alt={user.sender}
                  className="w-full rounded-md mb-4"
                  onClick={() => setViewPic(true)}
                />
              </div>
              <button
                className="p-2 bg-red-500 text-white rounded-md"
                onClick={() => setViewPic(false)}
              >
                Close
              </button>
            </div>
          </Modal> */}
        </nav>
      )}
    </>
  );
}
