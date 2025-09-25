import { useEffect, useReducer, useState } from "react";
import { messages } from "../../utils/dummy_data.js";
import ChatList from "./ChatList.jsx";
import SearchBar from "./SearchBar.jsx";
import styles from "./Sidebar.module.css";
import ChatULogo from "../../assets/Main_Icon.jsx";

function reducer(state, action) {
  switch (action.type) {
    case "search": {
      return { ...state, searchValue: action.value };
    }
    case "filter": {
      return { ...state, chats: action.filteredChats };
    }
    default:
      return state;
  }
}

export default function Sidebar({ selectUser }) {
  const [sidebarState, dispatch] = useReducer(reducer, {
    searchValue: "",
    chats: messages || [],
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (sidebarState.searchValue !== "") {
        dispatch({
          type: "filter",
          filteredChats: messages.filter((message) =>
            message.sender
              .toLowerCase()
              .includes(sidebarState.searchValue.toLowerCase())
          ),
        });
      } else {
        dispatch({ type: "filter", filteredChats: messages });
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [sidebarState.searchValue]);

  return (
    <div className={styles.sidebarContainer}>
      <header className={`${styles.sidebarHeader}`}>
        <div className={`${styles.appIconDiv}`}>
          <ion-icon
            className={styles.icon}
            name="chatbubble-ellipses-outline"
          ></ion-icon>
          <p>ChatU</p>
        </div>
        <SearchBar searchValue={sidebarState.searchValue} dispatch={dispatch} />
      </header>
      <div className={`${styles.chatListDiv}`}>
        <ChatList chats={sidebarState.chats} selectUser={selectUser} />
      </div>
    </div>
  );
}
