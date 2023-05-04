import React from 'react'

const RegisterForm = () => {
  return (
    <div id="login">
      <h1>Zarejestruj się</h1>
      <form action="">
        <input type="text" placeholder="Imię" required />
        <input type="text" placeholder="Nazwisko" required />
        <input type="email" placeholder="Adres E-Mail" required />
        <input type="password" placeholder="Hasło" required />{' '}
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
