import axios from 'axios'
import React, { useState } from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [plainTextPassword, setPlainTextPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post('http://localhost/api/Login', {
        email: email,
        plainTextPassword: plainTextPassword,
        userRoles: ['user'],
      })
      .then((response) => {
        const authToken = response.data.token
        localStorage.setItem('authToken', authToken)
        window.location.replace('/')
      })
      .catch((error) => {
        setError('Nieprawidłowy adres email lub hasło')
        console.error(error)
      })
  }

  return (
    <div id="login">
      <h1>Zaloguj się</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adres E-Mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Hasło"
          required
          value={plainTextPassword}
          onChange={(e) => setPlainTextPassword(e.target.value)}
        />
        <input type="submit" value="Zaloguj się" />
      </form>
      <a href="#">
        <h3>Nie pamiętam hasła</h3>
      </a>
      <h2 style={{ fontSize: '2.5rem', marginTop: '100px' }}>
        Nie masz jeszcze konta?
      </h2>
      <a href="register">
        <button type="button" className="header-btn">
          Zarejestruj się
        </button>
      </a>
    </div>
  )
}

export default LoginForm
