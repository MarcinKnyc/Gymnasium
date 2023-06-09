import React, { useState } from 'react'
import { LoginApi } from '../codegen/src/api/LoginApi'

const MyProfilePage = ({ apiClient, storedAuthToken }) => {
  const loginApi = new LoginApi(apiClient)
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [repeatNewPassword, setRepeatNewPassword] = useState('')
  const [passwordChangeSuccess, setPasswordChangeSuccess] = useState(false)
  const [emailChangeSuccess, setEmailChangeSuccess] = useState(false)
  const [passwordMismatch, setPasswordMismatch] = useState(false)
  const [emailInvalid, setEmailInvalid] = useState(false)
  const [passwordInvalid, setPasswordInvalid] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value)
  }

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value)
  }

  const handleRepeatNewPasswordChange = (e) => {
    setRepeatNewPassword(e.target.value)
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault()

    if (!email.includes('@')) {
      setEmailInvalid(true)
      setEmail('')
      setTimeout(() => {
        setEmailInvalid(false)
      }, 3000)
      return
    }

    let optsEmail = {
      newEmail: email,
    }

    apiClient.authentications.oauth2.type = 'oauth2'
    apiClient.authentications.oauth2.accessToken = storedAuthToken

    loginApi.apiLoginChangeEmailPut(optsEmail, (error, data, response) => {
      if (error) {
        console.error(error)
      } else {
        // console.log('Email changed successfully.')
        setEmail('')
        setEmailChangeSuccess(true)
        setTimeout(() => {
          setEmailChangeSuccess(false)
        }, 3000)
      }
    })
  }

  const validatePassword = (password) => {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return re.test(password)
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault()

    if (newPassword !== repeatNewPassword) {
      setPasswordMismatch(true)
      setTimeout(() => {
        setPasswordMismatch(false)
      }, 3000)
      return
    }

    if (!validatePassword(newPassword)) {
      setPasswordInvalid(true)
      setTimeout(() => {
        setPasswordInvalid(false)
      }, 3000)
      return
    }

    let optsPassword = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    }

    apiClient.authentications.oauth2.type = 'oauth2'
    apiClient.authentications.oauth2.accessToken = storedAuthToken

    loginApi.apiLoginChangePasswordPut(
      optsPassword,
      (error, data, response) => {
        if (error) {
          console.error(error)
        } else {
          setNewPassword('')
          setOldPassword('')
          setRepeatNewPassword('')
          setPasswordChangeSuccess(true)
          setTimeout(() => {
            setPasswordChangeSuccess(false)
          }, 3000)
        }
      }
    )
  }

  return (
    <div id="login">
      <h1>My profile</h1>
      <form action="" onSubmit={handleEmailSubmit}>
        <input
          type="text"
          placeholder="Nowy adres E-Mail"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <input type="submit" value="Zmien adres E-mail" />
        {emailChangeSuccess && (
          <p style={{ color: 'white' }}>Email został poprawnie zmieniony</p>
        )}
        {emailInvalid && (
          <p style={{ color: 'white' }}>Adres email musi zawierać '@'</p>
        )}
      </form>
      <form action="" onSubmit={handlePasswordSubmit}>
        <input
          type="password"
          placeholder="Stare hasło"
          required
          value={oldPassword}
          onChange={handleOldPasswordChange}
        />
        <input
          type="password"
          placeholder="Nowe hasło"
          required
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
        <input
          type="password"
          placeholder="Powtórz nowe hasło"
          required
          value={repeatNewPassword}
          onChange={handleRepeatNewPasswordChange}
        />
        <input type="submit" value="Zmien haslo" />
        {passwordChangeSuccess && (
          <p style={{ color: 'white' }}>Hasło zostało poprawnie zmienione</p>
        )}
        {passwordMismatch && (
          <p style={{ color: 'white' }}>Hasła się nie powtarzają</p>
        )}
        {passwordInvalid && (
          <p style={{ color: 'white' }}>
            Hasło musi zawierać 8 znaków, 1 dużą literę, 1 cyfrę i 1 znak
            specjalny
          </p>
        )}
      </form>
    </div>
  )
}

export default MyProfilePage
