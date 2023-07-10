import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import PassesPage from './pages/PassesPage'
import { useEffect, useState } from 'react'
import { ApiClient } from './codegen/src/ApiClient'
import ClientsPage from './pages/ClientsPage'
import ReceptionistsPage from './pages/Receptionists'
import AdminsPage from './pages/AdminsPage'
import GymsPage from './pages/GymsPage'
import VerifyCustomerPage from './pages/VerifyCustomerPage'
import MyProfilePage from './pages/MyProfilePage'
import SectorsPage from './pages/SectorsPage'
import CartPage from './pages/CartPage'
import MyPassesPage from './pages/MyPassesPage'

function App() {
  const [storedAuthToken, setStoredAuthToken] = useState(null)

  const apiClient = new ApiClient()
  apiClient.basePath = 'http://localhost'

  useEffect(() => {
    setStoredAuthToken(localStorage.getItem('authToken'))
  }, [storedAuthToken])

  const clearStorage = () => {
    localStorage.removeItem('authToken')
    setStoredAuthToken(null)
    window.location.href = '/'
  }

  return (
    <div className="App">
      <Router>
        <Navbar storedAuthToken={storedAuthToken} clearStorage={clearStorage} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage apiClient={apiClient}/>} />
          <Route path={'/login/register'} element={<RegisterPage />} />
          <Route path={'register'} element={<RegisterPage />} />
          <Route
            path={'Passes'}
            element={<PassesPage apiClient={apiClient} />}
          />
          <Route
            path={'Clients'}
            element={<ClientsPage apiClient={apiClient} />}
          />
          <Route
            path={'MyProfile'}
            element={
              <MyProfilePage
                apiClient={apiClient}
                storedAuthToken={storedAuthToken}
              />
            }
          />
          <Route
            path={'MyPasses'}
            element={
              <MyPassesPage
                apiClient={apiClient}
                storedAuthToken={storedAuthToken}
              />
            }
          />
          <Route path={'Gyms'} element={<GymsPage apiClient={apiClient} />} />
          <Route
            path="/Gyms/Sectors/:sectorId/VerifyCustomer"
            element={<VerifyCustomerPage apiClient={apiClient} />}
          />
          <Route
            path={'Receptionists'}
            element={<ReceptionistsPage apiClient={apiClient} />}
          />
          <Route
            path={'/Gyms/Sectors/:id'}
            element={<SectorsPage apiClient={apiClient} />}
          />
          <Route
            path={'/Passes/Buy/:id'}
            element={<CartPage apiClient={apiClient} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
