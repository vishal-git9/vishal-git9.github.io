import React from "react";
import styles from "../styles/Home.module.css"
export const Home = () => {
  return (
    <div className={styles.Home} id="home">
      <p>Hi, my name is</p>
      <div>
        <h1>Vishal Singh</h1>
        <h1>I build things for the web</h1>
      </div>
      <div>
        <p>
          I’m a software developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered <span style={{
            color:"#5fe4c9"
          }}>web-applications</span>.
        </p>
      </div>
      <div>
        <button>About me</button>
      </div>
    </div>
  );
};
