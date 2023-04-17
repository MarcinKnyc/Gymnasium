import React from 'react'
import { socialLinks } from '../assets/data'
const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={link.icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Zmitac gym company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
