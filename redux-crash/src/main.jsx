import React from 'react'
import { Provider } from 'react-redux'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store.js'

//to make ipossible for all components be aware of the store and be able 
//to access the data via use Selector, we wrap the entire App with Provider.


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App /> 
    </Provider>
  </React.StrictMode>,
)
