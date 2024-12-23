import './App.css'
import Chat_window from './Components/Chat_Window/Chat_window'
import Sidebar from './Components/Sidebar/Sidebar'
import Welcome from './Components/Welcome_Page/Welcome'

function App() {
  return (
    <>
      {/* <Welcome /> */}
      <div className="flex">
        <Sidebar />
        <Chat_window />
      </div>
    </>
  )
}

export default App
