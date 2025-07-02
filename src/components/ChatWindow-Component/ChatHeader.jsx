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
          <Modal isOpen={viewPic}>
            <div className="m-3 flex-1 justify-center">
              <p className="font-extrabold">{user.sender}</p>
              <img
                src={user.profile_pic}
                alt={user.sender}
                className="w-[40%] h-[1%] rounded-md"
                onClick={() => setViewPic(true)}
              />
              <button className="p-2 bg-red-500 rounded-md m-2" onClick={() => setViewPic(false)}>Close</button>
            </div>
          </Modal>
        </nav>
      )}
    </>
  );
}
