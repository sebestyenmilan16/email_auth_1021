import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import './App.css'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()
  return (
    <div className="app">
      <Navbar
        loggedIn={loggedIn}
        onLogin={() => navigate('/login')}
        onLogout={() => {
          setLoggedIn(false)
          navigate('/login')
        }}
      />
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}
