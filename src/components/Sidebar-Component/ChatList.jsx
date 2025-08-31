import styles from "./ChatList.module.css";

export default function ChatList({ chats, selectUser }) {
  return (
    <ul className={styles.chatList}>
      {chats.map((chat) => (
        <li key={`chat-${chat.id}`} onClick={() => selectUser(chat)}>
          <div className={styles.chatListItem}>
            <img
              className={styles.profileImg}
              src={chat.profile_pic}
              alt={chat.sender}
            />
            <div className={styles.chatDetail}>
              <div className={styles.userDetail}>
                <p className={styles.userName}>{chat.sender}</p>
                <p className={styles.latestTime}>
                  {chat.chat[chat.chat.length - 1]["time"]}
                </p>
              </div>
              <p className={styles.latestText}>
                {chat.chat[chat.chat.length - 1]["text"]}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
