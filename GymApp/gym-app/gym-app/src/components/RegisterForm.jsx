import React, { useEffect, useState } from 'react'
import axios from 'axios'

const RegisterForm = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [plainTextPassword, setPlainTextPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isRegistered, setIsRegistered] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [registerToken, setRegisterToken] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const userData = {
      email: email,
      plainTextPassword: plainTextPassword,
      userRoles: ['user'],
    }

    axios
      .post('http://localhost/api/Register', userData)
      .then((response) => {
        setIsRegistered(true)
        const emailData = {
          to: email,
          subject: 'GymApp potwierdź swój email',
          body: response.data,
        }
        axios
          .post('http://localhost/api/Email', emailData)
          .then((responseEmail) => {})
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data.includes('is already taken')
        ) {
          const errorMessage = error.response.data
            .replace('Username', 'Adres email')
            .replace('is already taken', 'jest już zajęty')
          setErrors({ email: errorMessage })
        } else {
          console.error(error)
        }
      })
  }

  const handleConfirm = (event) => {
    event.preventDefault()

    const apiUrl = 'http://localhost/api/Register/ConfirmEmail'
    const queryString = `email=${encodeURIComponent(
      email
    )}&email_code=${encodeURIComponent(registerToken)}`

    const requestUrl = `${apiUrl}?${queryString}`

    axios
      .post(requestUrl)
      .then((response) => {
        setIsConfirmed(true)
      })
      .catch((error) => {
        setErrors({
          token: 'Podany kod potwierdzenia jest nieprawidłowy',
        })
      })
  }

  const validateForm = () => {
    const errors = {}

    if (name.trim() === '') {
      errors.name = 'Imię jest wymagane'
    }

    if (surname.trim() === '') {
      errors.surname = 'Nazwisko jest wymagane'
    }

    if (email.trim() === '') {
      errors.email = 'Adres email jest wymagany'
    } else if (!isValidEmail(email)) {
      errors.email = 'Adres email jest nieprawidłowy'
    }

    if (plainTextPassword === '') {
      errors.password = 'Hasło jest wymagane'
    } else if (plainTextPassword.length < 6) {
      errors.password = 'Hasło musi mieć co najmniej 6 znaków'
    } else if (!hasSpecialChar(plainTextPassword)) {
      errors.password = 'Hasło musi zawierać co najmniej 1 znak specjalny'
    } else if (!hasUppercase(plainTextPassword)) {
      errors.password = 'Hasło musi zawierać co najmniej 1 dużą literę'
    } else if (!hasNumber(plainTextPassword)) {
      errors.password = 'Hasło musi zawierać co najmniej 1 cyfrę'
    }

    if (confirmPassword === '') {
      errors.confirmPassword = 'Potwierdzenie hasła jest wymagane'
    } else if (plainTextPassword !== confirmPassword) {
      errors.confirmPassword = 'Hasła nie pasują do siebie'
    }

    return errors
  }

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/
    return emailRegex.test(email)
  }

  const hasSpecialChar = (password) => {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/
    return specialCharRegex.test(password)
  }

  const hasUppercase = (password) => {
    const uppercaseRegex = /[A-Z]/
    return uppercaseRegex.test(password)
  }

  const hasNumber = (password) => {
    const numberRegex = /[0-9]/
    return numberRegex.test(password)
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
        {errors.token && <p className="error">{errors.token}</p>}
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
        {errors.name && <p className="error">{errors.name}</p>}
        <input
          type="text"
          placeholder="Nazwisko"
          value={surname}
          required
          onChange={(e) => setSurname(e.target.value)}
        />
        {errors.surname && <p className="error">{errors.surname}</p>}
        <input
          type="email"
          placeholder="Adres E-Mail"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="password"
          placeholder="Hasło"
          value={plainTextPassword}
          required
          onChange={(e) => setPlainTextPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <input
          type="password"
          placeholder="Potwierdź Hasło"
          value={confirmPassword}
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
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
