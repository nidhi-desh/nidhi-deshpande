import './index.scss'
import React from 'react'
import { FaLinkedin, FaGithub, FaPaperclip } from 'react-icons/fa'

const Footer = () => (
  <div className="footer-container">
    <div>
      <ul>
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
            href="https://github.com/nidhi-desh"
          >
            <FaGithub color="4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
