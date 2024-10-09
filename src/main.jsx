import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import { store } from './utils/store/store.jsx'
import { Provider } from 'react-redux'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/400-italic.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/500-italic.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700-italic.css'
import './styles/reset.scss'
import './styles/globalStyles.scss'
import './styles/mediaQueries.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
