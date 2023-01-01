import React from 'react'
import "../styles/navbar.css"
import logo from "../Images/PortFoliologo.png"
export const Navbar = () => {
  return (
    <div className="navbar">
        <div>
            <img src={logo} alt="" />
        </div>
        <div>
            <ul>
                <li><span>01</span>. Home</li>
                <li><span>02</span>. About</li>
                <li><span>03</span>. Skills</li>
                <li><span>04</span>. Project</li>
                <li><span>05</span>. Contact</li>
                <button>Resume</button>
            </ul>
        </div>
    </div>
  )
}
