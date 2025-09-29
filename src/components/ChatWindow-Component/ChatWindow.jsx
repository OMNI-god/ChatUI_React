import { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import UserChat from "./UserChat";

export default function ChatWindow({ user }) {
  const [allChats, setAllChats] = useState({});

  useEffect(() => {
    if (user && !(user.id in allChats)) {
      setAllChats((prev) => ({
        ...prev,
        [user.id]: user.chat || [],
      }));
    }
  });

  function handleSendMessage(userId, text) {
    const newMessage = {
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isSender: false,
    };

    setAllChats((prev) => ({
      ...prev,
      [userId]: [...(prev[userId] || []), newMessage],
    }));
  }

  if (!user) {
    return (
      <div className="flex bg-slate-200 rounded-md items-center justify-center min-w-0 w-full h-full">
        <p>No chat selected</p>
      </div>
    );
  }

  return (
    <>
      <ChatHeader user={user} />
      <UserChat
        user={user}
        messages={allChats[user.id] || []}
        onSendMessage={handleSendMessage}
      />
    </>
  );
}
