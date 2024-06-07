
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Payments from "./Pages/Payments/payments"
import MyMembership from './Pages/MyMembership/MyMembership';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyMembership />
  </React.StrictMode>
);
