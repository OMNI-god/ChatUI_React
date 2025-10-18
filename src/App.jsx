/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar-Component/Sidebar";
import ChatWindow from "./components/ChatWindow-Component/ChatWindow";
import AuthWindow from "./components/Auth-Component/AuthWindow";
import { useDispatch, useSelector } from "react-redux";
import { API_url } from "./configuration/config";
import styles from "./App.module.css";
import { fetchMessages, messageActions } from "./strore/MessageSlice";
import { startConnection, stopConnection } from "./services/SignalRService.js";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      const token = sessionStorage.getItem("antiforgeryToken");
      const userId = localStorage.getItem("UserID");

      const config = {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": token,
        },
      };

      // Fetch messages
      dispatch(
        fetchMessages({
          url: `${API_url}/api/Message?userId=${userId}&page=1&pageSize=50`,
          config,
        })
      );

      // Start SignalR connection
      startConnection(userId, token, (msg) => {
        dispatch(messageActions.addMessage({ message: msg }));
      });

      return () => stopConnection();
    }
  }, [isLoggedIn, dispatch]);

  return (
    <>
      {!isLoggedIn ? (
        <AuthWindow />
      ) : (
        <div className={styles.chatDiv}>
          <div className={styles.sidebarDiv}>
            <Sidebar selectUser={setUser} />
          </div>
          <div className={styles.chatWindowDiv}>
            <ChatWindow user={user} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
