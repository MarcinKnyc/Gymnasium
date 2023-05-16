import React, { useState } from 'react'
import axios from 'axios'
const RegisterForm = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegistered, setIsRegistered] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const userData = {
      username: name,
      password: password,
    }
    //TODO WITH CODEGEN WHEN DATABASE WILL BE CHANGED
    axios
      .post('http://localhost/api/Authorization/registerClient', userData)
      .then((response) => {
        console.log(response.data)
        setIsRegistered(true)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  return isRegistered ? (
    <div id="login">
      <h1>Konto zostało pomyślnie utworzone.</h1>
      <a href="login">
        <button type="button" className="header-btn">
          Zaloguj się
        </button>
      </a>
    </div>
  ) : (
    <div id="login">
      <h1>Zarejestruj się</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Imię"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nazwisko"
          value={surname}
          required
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Adres E-Mail"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Hasło"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Zarejestruj się" />
      </form>

      <h2 style={{ fontSize: '2.5rem', marginTop: '100px' }}>
        Masz już konto?
      </h2>
      <a href="login">
        <button type="button" className="header-btn">
          Zaloguj się
        </button>
      </a>
    </div>
  )
}

export default RegisterForm
