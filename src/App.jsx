/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar-Component/Sidebar";
import ChatWindow from "./components/ChatWindow-Component/ChatWindow";
import AuthWindow from "./components/Auth-Component/AuthWindow";
import { useDispatch, useSelector } from "react-redux";
import { API_url } from "./configuration/config";
import styles from "./App.module.css";
import { fetchMessages } from "./strore/MessageSlice";

const config = {
  method: "GET",
  credentials: "include",
  headers: { "Content-Type": "application/json", "X-CSRF-Token": "" },
};

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(
        fetchMessages(`${API_url}/api/Message?page=1&pageSize=50`, {
          ...config,
          headers: {
            ...config.headers,
            "X-CSRF-Token": sessionStorage.getItem("antiforgeryToken"),
          },
        })
      );
    }
  }, [isLoggedIn]);

  console.log(isLoggedIn);

  return (
    <>
      {!isLoggedIn ? (
        <AuthWindow />
      ) : (
        <div className={`${styles.chatDiv}`}>
          <div className={`${styles.sidebarDiv}`}>
            <Sidebar selectUser={setUser} />
          </div>
          <div className={`${styles.chatWindowDiv}`}>
            <ChatWindow user={user} />
          </div>
        </div>
      )}
    </>
  );
}
export default App;
