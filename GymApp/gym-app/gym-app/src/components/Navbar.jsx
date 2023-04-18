import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { navItems } from '../assets/data'
const Navbar = () => {
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
      </ul>
    </nav>
  )
}

export default Navbar
