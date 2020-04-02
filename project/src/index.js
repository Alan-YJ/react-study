import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './App.css'
import  'antd/dist/antd.css'
import store from './store/index'
import { Provider } from 'react-redux'

const Page = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDom.render(Page,document.getElementById('root'))