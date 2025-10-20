/* eslint-disable react/prop-types */
import { useEffect, useState, Suspense, lazy } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { API_url } from "./configuration/config";
import styles from "./App.module.css";
import { fetchMessages, messageActions } from "./strore/MessageSlice";
import { startConnection, stopConnection } from "./services/SignalRService.js";
import CircleLoader from "./components/ui/Loading-Animations";

// ✅ Lazy load large components
const Sidebar = lazy(() =>
  import("./components/Sidebar-Component/Sidebar.jsx")
);
const ChatWindow = lazy(() =>
  import("./components/ChatWindow-Component/ChatWindow.jsx")
);
const AuthWindow = lazy(() =>
  import("./components/Auth-Component/AuthWindow.jsx")
);

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

  // ✅ Centralized fallback for lazy components
  const fallbackScreen = (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <CircleLoader />
      <span className="ml-3">Loading...</span>
    </div>
  );

  return (
    <Suspense fallback={fallbackScreen}>
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
    </Suspense>
  );
}

export default App;
