import React from "react";
import styles from "../styles/Projects.module.css";
import { TbExternalLink } from "react-icons/tb";
import {HiFolder} from "react-icons/hi"
import { FiGithub } from "react-icons/fi";
import Diapers from "../Images/Diapers.png"
import Kindmeal from "../Images/Kindmeal.png"
import Crux from "../Images/Crux.png"
import Lightmail from "../Images/Lightmail.png"
export const Projects = () => {
  return (
    <div className={styles.projects} id="projects">
      <div>
        {/* <p
          style={{
            color: "#5fe4c9",
          }}
        >
          03.
        </p> */}
        <HiFolder color="#5fe4c9" fontSize={"25px"}/>
        <h2>Projects</h2>
        <div></div>
      </div>
      {/* for project one */}
      <div className={styles.grids}>
        <div>
        <div>
            <img src={Kindmeal} alt="Kindmeal"  />
          </div>
          <div>
            <FiGithub
              color="#5fe4c9"
              fontSize={"40px"}
              fontWeight="light"
              cursor={"pointer"}
            />
            <TbExternalLink className={styles.link} fontSize={"30px"} />
          </div>
          <div>
            <div>
              <h3>Kindmeal Clone</h3>
              <p>
                KindMeal is a platform that helps users discover vegan and
                vegetarian restaurants in their area. It also offers discounts
                and promotions on plant-based meals at participating
                restaurants.{" "}
              </p>
            </div>
            <div>
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
            </div>
          </div>
        </div>
        {/* 2nd project */}
        <div>
        <div>
            <img src={Crux} alt="Crux"  />
          </div>
          <div>
            <FiGithub
              color="#5fe4c9"
              fontSize={"40px"}
              fontWeight="light"
              cursor={"pointer"}
            />
            <TbExternalLink className={styles.link} fontSize={"30px"} />
          </div>
          <div>
            <div>
              <h3>Yoox Clone</h3>
              <p>
                YOOX is an online retailer of designer fashion, home decor,and
                other lifestyle products. The company was founded in 2000 and is
                based in Italy
              </p>
            </div>
            <div>
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
            </div>
          </div>
        </div>
        {/* 3rd project */}
        <div>
        <div>
            <img src={Lightmail} alt="Lightmail"  />
          </div>
          <div>
            <FiGithub
              color="#5fe4c9"
              fontSize={"40px"}
              fontWeight="light"
              cursor={"pointer"}
            />
            <TbExternalLink className={styles.link} fontSize={"30px"} />
          </div>
          <div>
            <div>
              <h3>Mailchimp Clone</h3>
              <p>
                Mailchimp is a web-based email marketing service that allows
                businesses and organizations to send newsletters, promotional
                emails, and other types of marketing emails to their
                subscribers.
              </p>
            </div>
            <div>
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
              <p>REACT</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={Diapers} alt="Diapers"  />
          </div>
          <div>
            <FiGithub
              color="#5fe4c9"
              fontSize={"40px"}
              fontWeight="light"
              cursor={"pointer"}
            />
            <TbExternalLink className={styles.link} fontSize={"30px"} />
          </div>
          <div>
            <div>
              <h3>Carters Clone</h3>
              <p>
                Mailchimp is a web-based email marketing service that allows
                businesses and organizations to send newsletters, promotional
                emails, and other types of marketing emails to their
                subscribers.
              </p>
            </div>
            <div>
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
              <p>CHAKRAUI</p>
              <p>REACT</p>
              <p>REDUX</p>
              <p>NEXTJS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
