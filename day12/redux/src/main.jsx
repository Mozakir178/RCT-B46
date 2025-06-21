import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/themeContext.jsx'
import { Provider } from 'react-redux'
import { store } from './redux-with-toolkit/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* wrap inside another provider */}
     <App />
    </Provider>
       

  </StrictMode>,
)
