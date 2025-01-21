import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Import styles before rendering
import './index.css'

// Wait for styles to load before rendering
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)