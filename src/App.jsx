import './App.css'
import Chat_window from './Components/Chat_Window/Chat_window'
import Sidebar from './Components/Sidebar/Sidebar'
import chats from './util/chats'
import { useState } from 'react'

function App() {
  const [selectedChat, setSelectedChat] = useState(chats[0])

  function handleChatSelect(chatID) {
    setSelectedChat(chats.find((chat) => chat.id === chatID))
  }
  return (
    <>
      {/* <Welcome /> */}
      <div className="flex">
        <Sidebar onSelect={handleChatSelect}/>
        <Chat_window chat={selectedChat}/>
      </div>
    </>
  )
}

export default App
