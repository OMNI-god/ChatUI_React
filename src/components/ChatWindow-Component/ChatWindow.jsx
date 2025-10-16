import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatHeader from "./ChatHeader";
import UserChat from "./UserChat";
import { fetchMessages, messageActions } from "../../strore/MessageSlice";
import { API_url } from "../../configuration/config";

export default function ChatWindow({ user }) {
  const dispatch = useDispatch();
  const { chats, isLoading } = useSelector((state) => state.msg);
  const [page, setPage] = useState(1);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (user) {
      const token = sessionStorage.getItem("antiforgeryToken");
      dispatch(
        fetchMessages({
          url: `${API_url}/api/Message?userId=${user.id}&page=1&pageSize=50`,
          config: {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              "X-CSRF-Token": token,
            },
          },
        })
      );
      setPage(1);
    }
  }, [user, dispatch]);

  const handleScroll = () => {
    const div = chatContainerRef.current;
    if (div.scrollTop === 0 && !isLoading && user) {
      const nextPage = page + 1;
      const token = sessionStorage.getItem("antiforgeryToken");
      dispatch(
        fetchMessages({
          url: `${API_url}/api/Message?userId=${user.id}&page=${nextPage}&pageSize=50`,
          config: {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              "X-CSRF-Token": token,
            },
          },
        })
      );
      setPage(nextPage);
    }
  };

  useEffect(() => {
    const div = chatContainerRef.current;
    if (div) {
      div.addEventListener("scroll", handleScroll);
      return () => div.removeEventListener("scroll", handleScroll);
    }
  }, [isLoading, page, user]);

  // 📨 Handle sending new message
  const handleSendMessage = (text) => {
    const newMessage = {
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isSender: true,
    };
    dispatch(messageActions.addMessage(newMessage));
  };

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
      <div
        ref={chatContainerRef}
        style={{ overflowY: "auto", height: "80vh" }}
        className="flex flex-col"
      >
        <UserChat
          user={user}
          messages={chats}
          onSendMessage={handleSendMessage}
        />
        {isLoading && <p className="text-center text-sm p-2">Loading...</p>}
      </div>
    </>
  );
}
