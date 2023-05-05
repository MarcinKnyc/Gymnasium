import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { navItems } from '../assets/data'
import { useEffect, useState } from 'react'

const Navbar = ({ storedAuthToken, clearStorage }) => {
  //const [storedAuthToken, setStoredAuthToken] = useState(null)

  // useEffect(() => {
  //   setStoredAuthToken(localStorage.getItem('authToken'))
  // }, [storedAuthToken])

  // console.log(storedAuthToken)

  const [isReceptionist, setIsReceptionist] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

    // axios
  // .post('http://localhost/api/Receptionists/{id}', id_zalogowanego_recpcjonisty)
  // .then((response) => {
  //   console.log(response.data)
  //   // Dodaj kod obsługi sukcesu rejestracji
  //   setIsRecetpionist(true)
  // })
  // .catch((error) => {
  //   console.error(error)
  //   // Dodaj kod obsługi błędów rejestracji
  // })
  
  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
      {isAdmin ? (
          <Link to={'receptionists'}>
            <li>
              <i
                className={''}
                  style={{
                    fontSize: '20px',
                    marginTop: '10px',
                    marginRight: '5px',
                  }}
                ></i>
              Recepcjoniści
            </li>
          </Link>
        ) : (<></>)
        }
        {isReceptionist ? (
          <Link to={'clients'}>
            <li>
              <i
                className={''}
                  style={{
                    fontSize: '20px',
                    marginTop: '10px',
                    marginRight: '5px',
                  }}
                ></i>
              Klienci
            </li>
          </Link>
        ) : (<></>)
        }
        {navItems.map((item) => {
          return (
            <Link to={item.url}>
              <li key={item.id}>
                <i
                  className={item.icon}
                  style={{
                    fontSize: '20px',
                    marginTop: '10px',
                    marginRight: '5px',
                  }}
                ></i>
                {item.text}
              </li>
            </Link>
          )
        })}
        {storedAuthToken ? (
          <li
            onClick={() => {
              clearStorage()
            }}
          >
            <i
              className={'fa solid fa-user-minus'}
              style={{
                fontSize: '20px',
                marginTop: '10px',
                marginRight: '5px',
              }}
            ></i>
            Wyloguj się
          </li>
        ) : (
          <Link to={'login'}>
            <li>
              <i
                className={'fa solid fa-user-plus'}
                style={{
                  fontSize: '20px',
                  marginTop: '10px',
                  marginRight: '5px',
                }}
              ></i>
              Zaloguj się
            </li>
          </Link>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
