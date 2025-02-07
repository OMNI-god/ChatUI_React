/* eslint-disable react/prop-types */
import './App.css'
import Chat_window from './Components/Chat_Window/Chat_window'
import Sidebar from './Components/Sidebar/Sidebar'
import chats from './util/chats'
import { useState, useContext } from 'react'
import Welcome from './Components/Welcome_Page/Welcome.jsx'
import userContext from './util/context.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [selectedChat, setSelectedChat] = useState(chats[0])

  function handleChatSelect(chatID) {
    setSelectedChat(chats.find((chat) => chat.id === chatID))
  }

  const user = useContext(userContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={!user.isLogin ? <Welcome /> : (
          <div className="flex">
            <Sidebar onSelect={handleChatSelect} isSelected={selectedChat.id} />
            <Chat_window chat={selectedChat} />
          </div>
        )} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  )
}

export default App
