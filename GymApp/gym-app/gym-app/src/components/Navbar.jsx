import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../assets/data'
import logo from '../images/logo.png'

const Navbar = ({ storedAuthToken, clearStorage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLogout = () => {
    clearStorage()
  }

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
        {navItems.map((item) => {
          return (
            <Link to={item.url} key={item.id}>
              <li>
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
        {!storedAuthToken ? (
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
        ) : (
          <li
            className="dropdown"
            style={{ position: 'relative' }}
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <div
              className={`dropdown-toggle ${isDropdownOpen ? 'active' : ''}`}
            >
              <i
                className={'fa solid fa-user'}
                style={{
                  fontSize: '20px',
                  marginTop: '10px',
                  marginRight: '5px',
                }}
              ></i>
              Moje konto
              <i
                className={`fa fa-chevron-${isDropdownOpen ? 'up' : 'down'}`}
                style={{
                  marginLeft: '5px',
                }}
              ></i>
            </div>
            {isDropdownOpen && (
              <div
                className="dropdown-menu"
                style={{ position: 'absolute', top: '100%', left: 0 }}
              >
                <Link to="/MyProfile" style={{ color: 'white' }}>
                  <div className="dropdown-item">Mój profil</div>
                </Link>
                <Link to="/MyPasses" style={{ color: 'white' }}>
                  <div className="dropdown-item">Moje karnety</div>
                </Link>
                <div
                  className="dropdown-item"
                  onClick={handleLogout}
                  style={{ color: 'white', cursor: 'pointer' }}
                >
                  Wyloguj się
                </div>
              </div>
            )}
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
