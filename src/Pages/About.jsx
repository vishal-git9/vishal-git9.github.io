import React from "react";
import styles from "../styles/About.module.css";
import profile from "../Images/profile.jpg";
import {BsFillPersonFill} from "react-icons/bs"
export const About = () => {
  return (
    <div className={`${styles.About} section`} id="about">
      {/* 01. about me */}
      <div>
        <BsFillPersonFill color="#5fe4c9" fontSize={"25px"}/>
        <h2>About Me</h2>
        <div></div>
      </div>
      {/* for content */}
      <div>
        <div>
          <div>
            <p>
              Hello! My name is Vishal and I enjoy creating things that live on
              the internet. My interest in web development started back in 2021
              when I decided to build my own startup where I had to rely heavily
              on freelancer's who made the worst webiste ever that killed my
              time and ambitions.
            </p>
            <p>
              I have experience working with a variety of programming languages,
              including HTML, CSS, JavaScript, and React. I have had the
              opportunity to work on a range of projects, from small websites to
              large web applications. I am constantly learning and staying up to
              date with the latest technologies in order to provide the best
              solutions for any company or organization.
            </p>
            <a href="https://drive.google.com/drive/u/0/folders/1wW_uTE_pxCYVJr6OkcPOyEffKud94NFX" rel="noreferrer" target={"_blank"} id="resume-button-2"><button>Resume</button></a>
          </div>

          {/* for list */}
        </div>

        {/* for image */}

        <div className={styles.profile}>
          <div>
            <img src={profile} className="home-img" alt="profile" />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
