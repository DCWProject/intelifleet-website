import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeWrapper } from './layout/ThemeWrapper'

createRoot(document.getElementById('root')).render(
  <ThemeWrapper>
    <App />
  </ThemeWrapper> 
)
