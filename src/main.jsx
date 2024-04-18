import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './styles/reset.scss'
import './styles/mediaQueries.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
