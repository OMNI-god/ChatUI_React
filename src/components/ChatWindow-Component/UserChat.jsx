import { useState, useEffect } from "react";
import styles from "./UserChat.module.css"; // import CSS module

export default function UserChat({ user }) {
  const [messages, setMessages] = useState({});
  const message = messages[user.id] || "";

  const handleChange = (e) => {
    setMessages((prev) => ({
      ...prev,
      [user.id]: e.target.value,
    }));
  };

  useEffect(() => {
    if (!(user.id in messages)) {
      setMessages((prev) => ({
        ...prev,
        [user.id]: "",
      }));
    }
  }, [user]);

  function handleKeydown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      if (user.id in messages) {
        setMessages((prev) => ({
          ...prev,
          [user.id]: "",
        }));
      }
    }
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesContainer}>
        {user.chat.map((value, idx) => (
          <div
            key={`message-${idx}`}
            className={`${styles.messageRow} ${
              value.isSender ? styles.alignLeft : styles.alignRight
            }`}
          >
            <div
              className={`${styles.messageBubble} ${
                value.isSender ? styles.sender : styles.receiver
              }`}
            >
              <p className={styles.messageText}>{value.text}</p>
              <div className={styles.timeRow}>
                <p className={styles.messageTime}>{value.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <textarea
          className={styles.chatInput}
          placeholder="Type a message..."
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeydown}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className={styles.sendIcon}
        >
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </div>
    </div>
  );
}
