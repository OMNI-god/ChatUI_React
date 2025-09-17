import { useState } from "react";
import Modal from "../ui/Modal";
import styles from "./ChatHeader.module.css";

export default function ChatHeader({ user }) {
  const [viewPic, setViewPic] = useState(false);
  return (
    <>
      {user && (
        <header className={styles.header}>
          <nav className={styles.nav}>
            <img
              src={user.profile_pic}
              alt={user.sender}
              className={styles.image}
              onClick={() => setViewPic(true)}
            />
            <div className={styles.details}>
              <p className={styles.name}>{user.sender}</p>

              <ion-icon
                className={styles.icon}
                name="ellipsis-vertical"
              ></ion-icon>
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
        </header>
      )}
    </>
  );
}
