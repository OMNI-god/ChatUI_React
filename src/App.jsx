/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar-Component/Sidebar";
import ChatWindow from "./components/ChatWindow-Component/ChatWindow";
import AuthWindow from "./components/Auth-Component/AuthWindow";
import { useSelector } from "react-redux";
import useFetch from "./custom-hooks/useFetch";

const config = {
  method: "GET",
  header: {
    "content-type": "application/json",
  },
  credentials: "include",
};

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [user, setUser] = useState();

  const { data, error, isLoading } = useFetch(
    [],
    "https://localhost:7038/api/Message",
    config,
    !isLoggedIn
  );

  console.log(data,isLoading,isLoggedIn);

  return (
    <>
      {!isLoggedIn ? (
        <AuthWindow />
      ) : (
        <div className="h-screen flex">
          <div className="w-1/3 mx-1">
            <Sidebar selectUser={setUser} />
          </div>
          <div className="flex-1 flex flex-col overflow-hidden">
            <ChatWindow user={user} />
          </div>
        </div>
      )}
    </>
  );
}
export default App;
