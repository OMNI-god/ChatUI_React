/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar-Component/Sidebar";
import ChatWindow from "./components/ChatWindow-Component/ChatWindow";
import AuthWindow from "./components/Auth-Component/AuthWindow";
import { useSelector } from "react-redux";
import useFetch from "./custom-hooks/useFetch";
import { API_url } from "./configuration/config";
import styles from "./App.module.css";

const config = {
  method: "GET",
  credentials: "include",
  headers: { "Content-Type": "application/json" },
};

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [user, setUser] = useState();

  const { data, error, isLoading } = useFetch(
    [],
    `${API_url}/api/Message`,
    config,
    !isLoggedIn
  );

  console.log(data, isLoading, isLoggedIn);

  return (
    <>
      {!true ? (
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
