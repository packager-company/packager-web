import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LoginAdmin from './Pages/Login-admin/Login-admin'
import LoginUser from './Pages/Login-user/login-user'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginAdmin />
    <LoginUser />
  </React.StrictMode>,
)
