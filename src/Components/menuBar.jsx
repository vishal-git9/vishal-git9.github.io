import React, { useState } from 'react'
import { bubble as Menu } from 'react-burger-menu'
import "../styles/navbar.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import {RiMenu3Fill} from "react-icons/ri"
// import {RxCross1} from "react-icons/rx"
const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px',
      color:"#5fe4c9"
    },
    bmBurgerBars: {
      background: '#5fe4c9',
      color:"#5fe4c9"
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
      color:"#5fe4c9"
    },
    bmCross: {
      background: '#5fe4c9'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      width:"50%",
      top:"0px"
    },
    bmMenu: {
        background: '#0A192F',
      padding: '2.5em 0.6em 0',
      fontSize: '1.15em',
      overflow:"hidden",
      right:"0px",
      width:"100%"
    },
    bmMorphShape: {
      fill: '#5fe4c9',
      width:"100%"
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      display:"flex",
      flexDirection:"column",
      gap:"20px"

    },
    bmitem:{
        textDecoration :"none"
    },
    bmItem: {
      display: 'flex',
      flexDirection:"column",
      marginTop:"20px"
    },
    bmOverlay: {
      background: '#5fe4c9'
    }
  }
  
export const Menubar = () => {
    const [open,setOpen] = useState(false)
    const handleChange = (state)=>{
        setOpen(state.isOpen)
    }
  return (
    <Menu styles={styles}  noOverlay right={true} isOpen={open} onStateChange={(state)=>handleChange(state)} >
        <AnchorLink className="menu-item" href="#home" onClick={()=>setOpen(false)}>Home</AnchorLink>
        <AnchorLink  className="menu-item" href="#about" onClick={()=>setOpen(false)}>About</AnchorLink>
        <AnchorLink className="menu-item" href="#skills" onClick={()=>setOpen(false)}>Skills</AnchorLink>
        <AnchorLink  className="menu-item" href="#projects" onClick={()=>setOpen(false)}>Projects</AnchorLink>
        <AnchorLink className="menu-item" href="#contact" onClick={()=>setOpen(false)}>Contact</AnchorLink>
        <a href="https://drive.google.com/drive/u/0/folders/1wW_uTE_pxCYVJr6OkcPOyEffKud94NFX"><button>Resume</button></a>
      </Menu>
  )
}
