import { StrictMode,useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import defaultConfig from './util/default.js'
import userContext from './util/context.js'

function RootProvider() {
  const [user, setUser] = useState(defaultConfig.user_details);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <App />
    </userContext.Provider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootProvider />
  </StrictMode>,
)