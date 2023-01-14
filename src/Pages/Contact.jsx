import React from 'react'
import styles from "../styles/contact.module.css"
import {RiContactsFill} from "react-icons/ri"
import {AiFillGithub,AiFillLinkedin,AiOutlineCodeSandbox,AiOutlineMail} from "react-icons/ai"
export const Contact = () => {
  return (
    <div className={styles.Contact} id="contact">
        <div>
          <RiContactsFill color="#5fe4c9" fontSize={"30px"}/>
          <h2>Contact</h2>
          <div></div>
        </div>
        <div>
          <h2>Get In Touch</h2>
          <p> I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
          <a href="mailto: vishalsinghrajawat990@gmail.com"><button>Say Hello</button></a>
        </div>
        <div>
          <a href="https://github.com/vishal-git9" target={"_blank"} rel={"noreferrer"}><AiFillGithub color='#CCD6F6' fontSize={"40px"}/></a> 
          <a href="https://www.linkedin.com/in/vishal-rajawat-768577196/" target={"_blank"} rel={"noreferrer"}><AiFillLinkedin color='#CCD6F6' fontSize={"40px"}/></a>
          <a href="https://codesandbox.io/dashboard/recent?workspace=90f4c3ce-b3ff-4edc-a068-1775561a6d78" target={"_blank"} rel={"noreferrer"}><AiOutlineCodeSandbox color='#CCD6F6' fontSize={"40px"}/></a>
          <a href="mailto: vishalsinghrajawat990@gmail.com" target={"_blank"} rel={"noreferrer"}><AiOutlineMail color='#CCD6F6' fontSize={"40px"}/></a>
        </div>
    </div>
  )
}
