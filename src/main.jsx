import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import { store } from './utils/store/store.jsx'
import { Provider } from 'react-redux'
import './styles/reset.scss'
import './styles/mediaQueries.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
