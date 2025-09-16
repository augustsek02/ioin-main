import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { mountReveals } from './utils/reveal.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

if (document.readyState !== 'loading') mountReveals()
else document.addEventListener('DOMContentLoaded', mountReveals, { once: true })
