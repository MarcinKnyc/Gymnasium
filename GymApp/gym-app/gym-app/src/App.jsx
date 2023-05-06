import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import PassesPage from './pages/PassesPage'
import ClientsPage from './pages/ClientsPage'
import { useEffect, useState } from 'react'

function App() {
  const [storedAuthToken, setStoredAuthToken] = useState(null)

  useEffect(() => {
    setStoredAuthToken(localStorage.getItem('authToken'))
  }, [storedAuthToken])

  const clearStorage = () => {
    localStorage.removeItem('authToken')
    setStoredAuthToken(null)
  }
  // console.log(storedAuthToken)

  return (
    <div className="App">
      <Router>
        <Navbar storedAuthToken={storedAuthToken} clearStorage={clearStorage} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path={'/login/register'} element={<RegisterPage />} />
          <Route path={'register'} element={<RegisterPage />} />
          <Route
            path={'Passes'}
            element={<PassesPage storedAuthToken={storedAuthToken} />}
          />
          <Route
            path={'clients'}
            element={<ClientsPage storedAuthToken={storedAuthToken} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
