import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import './App.css'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  return (
    <div className="app">
      <Navbar
        loggedIn={loggedIn}
        email={email}
        onLogin={() =>{
          //setLoggedIn(true)
          navigate('/login')}
        } 
        onLogout={() => {
          setLoggedIn(false)
          navigate('/login')
        }}
      />
      <main className="content">
        <Outlet context={{loggedIn, setLoggedIn, email, setEmail}} />
      </main>
    </div>
  )
}
