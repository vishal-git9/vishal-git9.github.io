import React from "react";
import styles from "../styles/About.module.css"
import profile from "../Images/profile.jpg"
export const About = () => {
  return (
    <div className={styles.About}>
        {/* 01. about me */}
        <div>
          <p style={{
            color:"#5fe4c9"
          }}>02.</p>
          <h2>About Me</h2>
          <div></div>
        </div>
      {/* for content */}
      <div>
      <div>
        <div>
          <p>
            Hello! My name is Vishal and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
        </div>
        <div>
          <p>
            Hello! My name is Vishal and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
        </div>

        {/* for list */}
        <div>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <div>
            <div>
                <p>JavaScript (ES6+)</p>
                <p>React</p>
                <p>Redux</p>
            </div>
            <div>
                <p>TypeScript</p>
                <p>Express</p>
                <p>NodeJS</p>
            </div>
            </div>
        </div>
      </div>

      {/* for image */}

      <div className={styles.profile}>
        <div>
        <img src={profile} alt="profile"/>
        <div></div>
        </div>
      </div>
    </div>
    </div>
  );
};
