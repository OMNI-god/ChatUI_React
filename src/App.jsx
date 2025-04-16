/* eslint-disable react/prop-types */
import './App.css'
import Chat_window from './Components/Chat_Window/Chat_window'
import Sidebar from './Components/Sidebar/Sidebar'
import chats from './util/chats'
import { useState, useContext } from 'react'
import Welcome from './Components/Welcome_Page/Welcome.jsx'
import userContext from './util/context.js'

function App() {
  const [selectedChat, setSelectedChat] = useState(chats[0])
  const { user } = useContext(userContext);

  function handleChatSelect(chatID) {
    setSelectedChat(chats.find((chat) => chat.id === chatID))
  }

  return (
    <>
      {!user.isLogin ? <Welcome /> :
        <div className="flex flex-row h-screen bg-gray-100">
          <Sidebar isSelected={selectedChat.id} onSelect={handleChatSelect} />
          <Chat_window chat={selectedChat} />
        </div>
      }
    </>
  )
}
export default App