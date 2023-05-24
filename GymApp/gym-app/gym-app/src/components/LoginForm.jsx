import axios from 'axios'
import React, { useState } from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [plainTextPassword, setPlainTextPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    //TODO WITH CODEGEN WHEN DATABASE WILL BE CHANGED
    axios
      .post('http://localhost/api/Login', {
        email: email,
        plainTextPassword: plainTextPassword,
        userRoles: ['user'],
      })
      .then((response) => {
        console.log(response)
        const authToken = response.data
        localStorage.setItem('authToken', authToken)
        window.location.replace('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div id="login">
      <h1>Zaloguj się</h1>
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
