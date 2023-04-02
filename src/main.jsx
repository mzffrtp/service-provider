import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"

import store from './redux/store'
import { Provider } from 'react-redux'

/* context api */
import ThemeContextProvider from './components/context/themeContextProvider'
import AuthTokenContextProvider from './components/context/authTokenContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthTokenContextProvider>
          <App />
        </AuthTokenContextProvider>
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>,
)
