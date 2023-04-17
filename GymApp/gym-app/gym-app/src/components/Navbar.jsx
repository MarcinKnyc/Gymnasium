import logo from '../images/logo.png'
import zmitac from '../images/zmitac.png'
import { navItems } from '../assets/data'
const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="" />
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        {navItems.map((item) => {
          return <li key={item.id}>{item.text}</li>
        })}
      </ul>
    </nav>
  )
}

export default Navbar
