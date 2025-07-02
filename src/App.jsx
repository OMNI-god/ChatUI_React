/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar-Component/Sidebar";
import ChatWindow from "./components/ChatWindow-Component/ChatWindow";
import AuthWindow from "./components/Auth-Component/AuthWindow";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [user, setUser] = useState();
  return (
    <>
      {isLoggedIn ? (
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
