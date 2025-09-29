import { useState, useEffect } from "react";
import styles from "./UserChat.module.css";

export default function UserChat({ user, messages, onSendMessage }) {
  const [drafts, setDrafts] = useState({});
  const message = drafts[user.id] || "";

  function handleChange(event) {
    setDrafts((prev) => ({
      ...prev,
      [user.id]: event.target.value,
    }));
  }

  function handleSend() {
    if (message.trim() === "") return;
    onSendMessage(user.id, message);
    setDrafts((prev) => ({
      ...prev,
      [user.id]: "",
    }));
  }

  function handleKeydown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesContainer}>
        {messages.map((value, idx) => (
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
          onClick={handleSend}
        >
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </div>
    </div>
  );
}
