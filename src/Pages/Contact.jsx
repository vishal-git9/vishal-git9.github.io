import React from 'react'
import styles from "../styles/contact.module.css"
import {RiContactsFill} from "react-icons/ri"
export const Contact = () => {
  return (
    <div className={styles.Contact} id="contact">
        <div>
          <RiContactsFill color="#5fe4c9" fontSize={"30px"}/>
          <h2>Contact</h2>
          <div></div>
        </div>
    </div>
  )
}
