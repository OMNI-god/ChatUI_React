/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css'
import ChatWindow from './components/ChatWindow/ChatWindow';
import Sidebar from './Components/Sidebar/Sidebar';

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