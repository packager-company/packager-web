import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Payments from "./Pages/Payments/payments"
import MyMembership from './Pages/MyMembership/MyMembership';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Payments/>
  </React.StrictMode>,
)
