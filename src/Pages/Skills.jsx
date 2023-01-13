import React from "react";
import { useState } from "react";
import { useParallax} from "react-scroll-parallax";
import styles from "../styles/skills.module.css";
import {FaReact,FaHtml5} from "react-icons/fa"
import {BiCode} from "react-icons/bi"
import {SiRedux,SiTypescript,SiCss3,SiJavascript,SiChakraui,SiNextdotjs,SiStorybook,SiNodedotjs,SiExpress,SiMongodb} from "react-icons/si"
export const Skills = () => {
  const [disabled,setDisabled] = useState(false)
    const {ref} = useParallax({
        easing: 'easeOutQuad',
        translateX: [100, 0],
        endScroll:100,
        onExit:(element)=>setDisabled(true),
        onEnter:(element)=>console.log(element),
        disabled:disabled?true:false
      });
      const parallax = useParallax({
        easing: 'easeOutQuad',
        translateX: [100, 0],
        endScroll:100,
        onExit:(element)=>setDisabled(true),
        onEnter:(element)=>console.log(element),
        disabled:disabled?true:false
      });
      const parallax2 = useParallax({
        easing: 'easeOutQuad',
        translateX: [100, 0],
        endScroll:100,
        onExit:(element)=>setDisabled(true),
        onEnter:(element)=>console.log(element),
        disabled:disabled?true:false
      });
      return (
        <div className={styles.Skills} id="skills">
            <div>
          <BiCode color="#5fe4c9" fontSize={"30px"}/>
          <h2>Skills</h2>
          <div></div>
        </div>
        <div>
        <div ref={parallax.ref} className="spinner">
          <div className={styles.spinner}><FaHtml5 color="#EA5626" fontSize={"50px"}/>
          <p style={{color:"#EA5626"}}>HTML</p>
          </div>
          <div className={styles.spinner}><SiCss3 color="#2DACD7" fontSize={"50px"}/>
          <p style={{color:"#2DACD7"}}>CSS</p>
          </div>
          <div className={styles.spinner}><SiJavascript color="#FED839" fontSize={"50px"}/>
          <p style={{color:"#FED839"}}>Javascript</p>
          </div>
          <div className={styles.spinner}><SiTypescript color="#2F74C0" fontSize={"50px"}/>
          <p style={{color:"#2F74C0"}}>Typescript</p>
          </div>
        </div>
        <div ref={parallax2.ref} className="spinner">
          <div className={styles.spinner}><FaReact color="#5ED3F3" fontSize={"50px"}/>
          <p style={{color:"#5ED3F3"}}>React</p>
          </div>
          <div className={styles.spinner}><SiRedux color="#7248B6" fontSize={"50px"}/>
          <p style={{color:"#7248B6"}}>Redux</p>
          </div>
          <div className={styles.spinner}><SiNextdotjs color="white" fontSize={"50px"}/>
          <p style={{color:"white"}}>NextJS</p>
          </div>
          <div className={styles.spinner}><SiChakraui color="#319795" fontSize={"50px"}/>
          <p style={{color:"#319795"}}>ChakraUI</p>
          </div>
        </div>
        <div ref={ref} className="spinner">
          <div className={styles.spinner}><SiStorybook color="#FF4785" fontSize={"50px"}/>
          <p style={{color:"#FF4785"}}>Storybook</p>
          </div>
          <div className={styles.spinner}><SiNodedotjs color="green" fontSize={"50px"}/>
          <p style={{color:"green"}}>NodeJS</p>
          </div>
          <div className={styles.spinner}><SiExpress color="blue" fontSize={"50px"}/>
          <p style={{color:"blue"}}>Express</p>
          </div>
          <div className={styles.spinner}><SiMongodb color="green" fontSize={"50px"}/>
          <p style={{color:"green"}}>MongoDB</p>
          </div>
        </div>
        </div>
        </div>
      );
    }
