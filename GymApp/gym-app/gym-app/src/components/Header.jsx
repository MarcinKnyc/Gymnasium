import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div id="main">
      <div className="name">
        <h2>CZY JESTEŚ </h2>
        <h1>
          <span>GOTOWY</span> NA WYZWANIE?
        </h1>
        <p className="details">
          Zmień swoje ciało, zmień swoje życie - dołącz do naszej siłowni już
          dziś!
        </p>
        <div className="header-btns">
          <Link to="register">
            <button type="button" className="header-btn">
              DOŁĄCZ
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
