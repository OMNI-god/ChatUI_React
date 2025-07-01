import { useState, useEffect } from "react";

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
      // send message and clear input
      if (user.id in messages) {
        setMessages((prev) => ({
          ...prev,
          [user.id]: "",
        }));
      }
    }
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto rounded-md bg-slate-100">
        {user.chat.map((value, idx) => (
          <div
            key={`message-${idx}`}
            className={`flex w-full p-2 ${
              value.isSender ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`max-w-xs ${
                value.isSender
                  ? "bg-blue-500 text-white"
                  : "bg-green-500 text-white"
              } rounded-lg p-2`}
            >
              <p>{value.text}</p>
              <div className="flex justify-end">
                <p className="text-xs text-gray-200">{value.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <textarea
          className="w-full border rounded-lg resize-none p-2 overflow-y sc"
          placeholder="Type a message..."
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeydown}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-10 h-10 m-1 p-1 hover:bg-slate-200"
        >
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </div>
    </div>
  );
}
