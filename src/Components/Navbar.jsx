import React, { useEffect, useState } from 'react'
import "../styles/navbar.css"
import {motion,useScroll} from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../Images/PortFoliologo.png"
import { Menubar } from './menuBar';
import useWindowDimensions from '../Hooks/useWindow';
export const Navbar = () => {
  const { scrollYProgress } = useScroll()
  const [medium,setMedium]  = useState(false)
  // for medium screen
  const { height, width } = useWindowDimensions();
  useEffect(()=>{
    if(width<=800){
      setMedium(true)
    }
    if(width>800){
      setMedium(false)
    }
  },[width])
  return (
    <div className="navbar">
      <motion.div  className="progress-bar" style={{scaleX:scrollYProgress}}/>
        <div>
            <img src={logo} alt="" />
        </div>
        <div>
          {medium?(<Menubar/>):(<ul>
            <AnchorLink href={"#home"}><li>Home</li></AnchorLink>
            <AnchorLink href={"#about"}><li>About</li></AnchorLink>
            <AnchorLink href={"#skills"}><li>Skills</li></AnchorLink>
            <AnchorLink href={"#projects"}><li>Projects</li></AnchorLink>
            <AnchorLink href={"#contact"}><li>Contact</li></AnchorLink>
                <button>Resume</button>
            </ul>)}
        </div>
    </div>
  )
}
