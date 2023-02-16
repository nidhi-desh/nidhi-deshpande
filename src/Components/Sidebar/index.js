import './index.scss'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faPaperclip,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FaLinkedin, FaGithub, FaPaperclip } from 'react-icons/fa'

const Sidebar = () => (
  <div className="nav-bar">
    <nav>
      <NavLink exact="true" activeClassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeClassname="active"
        className="about"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeClassname="active"
        className="resume"
        to="/resume"
      >
        <FontAwesomeIcon icon={faPaperclip} color="#4d4d4e" />
      </NavLink>
    </nav>
    {/* <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nidhi-deshpande-47a25a125/"
        >
          <FaLinkedin color="4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nidhi-deshpande-47a25a125/"
        >
          <FaGithub color="4d4d4e" />
        </a>
      </li>
    </ul> */}
  </div>
)

export default Sidebar
