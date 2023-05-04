import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path={'/login/register'} element={<RegisterPage />} />
          <Route path={'register'} element={<RegisterPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
