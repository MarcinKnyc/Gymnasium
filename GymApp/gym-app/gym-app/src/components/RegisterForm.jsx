import React, { useEffect, useState } from 'react'
import axios from 'axios'
const RegisterForm = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [plainTextPassword, setPlainTextPassword] = useState('')
  const [isRegistered, setIsRegistered] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [registerToken, setRegisterToken] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const userData = {
      email: email,
      plainTextPassword: plainTextPassword,
      userRoles: ['user'],
    }
    //TODO WITH CODEGEN WHEN DATABASE WILL BE CHANGED
    axios
      .post('http://localhost/api/Register', userData)
      .then((response) => {
        console.log(typeof response.data)
        setIsRegistered(true)
        const emailData = {
          to: email,
          subject: 'GymApp potwierdź swój email',
          body: response.data,
        }
        axios
          .post('http://localhost/api/Email', emailData)
          .then((responseEmail) => {
            console.log(responseEmail.data)
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }
  const handleConfirm = (event) => {
    event.preventDefault()

    const apiUrl = 'http://localhost/api/Register/ConfirmEmail'
    const queryString = `email=${encodeURIComponent(
      email
    )}&email_code=${encodeURIComponent(registerToken)}`

    const requestUrl = `${apiUrl}?${queryString}`

    axios.post(requestUrl).then((response) => {
      console.log(typeof response.data)
      setIsConfirmed(true)
    })
  }
  return isRegistered ? (
    isConfirmed ? (
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
        <h1>Potwierdź swój email, wklejając kod poniżej</h1>
        <form onSubmit={handleConfirm}>
          <input
            type="text"
            placeholder="Token"
            value={registerToken}
            required
            onChange={(e) => setRegisterToken(e.target.value)}
          />
          <input type="submit" value="Potwierdź email" />
        </form>
      </div>
    )
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
          value={plainTextPassword}
          required
          onChange={(e) => setPlainTextPassword(e.target.value)}
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
