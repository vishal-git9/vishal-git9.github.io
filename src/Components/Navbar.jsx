import React, { useEffect, useState } from 'react'
import "../styles/navbar.css"
import {motion,useScroll} from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../Images/PortFoliologo.png"
import { Menubar } from './menuBar';
import useWindowDimensions from '../Hooks/useWindow';
import PDF from "../Images/Vishal_Singh_Resume.pdf"
export const Navbar = () => {
  const { scrollYProgress } = useScroll()
  const [medium,setMedium]  = useState(false)
  // for medium screen
  const {width } = useWindowDimensions();
  useEffect(()=>{
    if(width<=800){
      setMedium(true)
    }
    if(width>800){
      setMedium(false)
    }
  },[width])
  return (
    <div className="navbar" id="nav-menu">
      <motion.div  className="progress-bar" style={{scaleX:scrollYProgress}}/>
        <div>
            <img src={logo} alt="" />
        </div>
        <div>
          {medium?(<Menubar/>):(<ul>
            <AnchorLink href={"#home"} className="nav-link home"><li>Home</li></AnchorLink>
            <AnchorLink href={"#about"} className = "nav-link about"><li>About</li></AnchorLink>
            <AnchorLink href={"#skills"} className = "nav-link skills"><li>Skills</li></AnchorLink>
            <AnchorLink href={"#projects"} className = "nav-link projects"><li>Projects</li></AnchorLink>
            <AnchorLink href={"#contact"} className = "nav-link contact"><li>Contact</li></AnchorLink>
                <a href={PDF} download="Vishal_Singh_Resume.pdf" className='nav-link resume' id="resume-button-1" rel = "noreferrer" target={"_blank"}> <button >Resume</button></a>
            </ul>)}
        </div>
    </div>
  )
}
