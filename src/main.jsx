import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import defaultConfig from './util/default.js'
import userContext from './util/context.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <userContext.Provider value={defaultConfig.user_details}>
      <App />
    </userContext.Provider>
  </StrictMode>,
)
