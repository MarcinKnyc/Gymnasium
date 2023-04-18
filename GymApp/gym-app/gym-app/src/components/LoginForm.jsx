import React from 'react'
const LoginForm = () => {
  return (
    <div id="login">
      <h1>Zaloguj się</h1>
      <form action="">
        <input type="email" placeholder="Adres E-Mail" required />
        <input type="password" placeholder="Hasło" required />
        <input type="submit" value="Zaloguj się" />
      </form>
      <h3>Nie pamiętam hasła</h3>
      <h2 style={{ fontSize: '2.5rem', marginTop: '100px' }}>
        Nie masz jeszcze konta?
      </h2>
      <button type="button" className="header-btn">
        Zarejestruj się
      </button>
    </div>
  )
}

export default LoginForm
