import React from "react";
import "../styles/About.css";
import profile from "../Images/profile.jpg";
import {BsFillPersonFill} from "react-icons/bs"
import PDF from "../Images/Vishal_Singh_Resume.pdf"

export const About = () => {
  return (
    <div className={`about section About`} id="about">
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
            <p id="user-detail-intro">
              I have experience working with a variety of programming languages,
              including HTML, CSS, JavaScript, and React. I have had the
              opportunity to work on a range of projects, from small websites to
              large web applications. I am constantly learning and staying up to
              date with the latest technologies in order to provide the best
              solutions for any company or organization.
            </p>
            <a href={PDF} download="Vishal_Singh_Resume.pdf" rel = "noreferrer" target={"_blank"}> <button id="resume-button-2">Resume</button></a>
          </div>

          {/* for list */}
        </div>

        {/* for image */}

        <div className="profile">
          <div>
            <img src={profile} className="home-img" alt="profile" />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
