import React from "react";
import styles from "../styles/Home.module.css"
export const Home = () => {
  return (
    <div className={styles.Home} id="home">
      <p>Hi, my name is</p>
      <div>
        <h1 id="user-detail-name">Vishal Singh</h1>
        <h1>I build things for the web</h1>
      </div>
      <div>
        <p id="user-detail-intro">
          I’m a software developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered <span style={{
            color:"#5fe4c9"
          }}>web-applications</span>.
        </p>
      </div>
      <div>
      <button type="button" id="resume-button-2" onClick={()=>{window.open('https://drive.google.com/file/d/1VizK68zb5OI9COxDlJ129064ufMLCEsg/view?usp=sharing',"_blank")}}>
      <a href="/Vishal_Singh_Resume.pdf" id="resume-link-2" download>Resume</a>
      </button>
{/* <button >About me</button> */}
      </div>
    </div>
  );
};
