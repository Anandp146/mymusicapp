import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import "./index.css"
import { BrowserRouter as Router } from "react-router-dom"
import { StateProvider } from './Context/StateProvider'
import { initialState } from './Context/initalState'
import reducer from "./Context/reducer"
ReactDom.render(
  <React.StrictMode>
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </Router>
  </React.StrictMode>
  , document.getElementById('root'))

