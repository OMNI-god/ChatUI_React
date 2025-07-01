/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css'
import Sidebar from './components/Sidebar-Component/Sidebar';
import ChatWindow from './components/ChatWindow-Component/ChatWindow';

function App() {
  const [user, setUser] = useState();
  return (
    <div className="h-screen flex overflow-hidden">
  <div className="w-1/3 mx-1 overflow-y-auto">
    <Sidebar selectUser={setUser} />
  </div>
  <div className="flex-1 flex flex-col">
    <ChatWindow user={user} />
  </div>
</div>
  )
}
export default App