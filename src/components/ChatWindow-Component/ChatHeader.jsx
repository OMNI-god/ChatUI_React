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
          </nav>
        </header>
      )}
    </>
  );
}
