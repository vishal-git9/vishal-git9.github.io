import React from "react";
import "../styles/Projects.css";
import { TbExternalLink } from "react-icons/tb";
import { HiFolder } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import Diapers from "../Images/Diapers.png";
import Kindmeal from "../Images/Kindmeal.png";
import Crux from "../Images/Crux.png";
import Lightmail from "../Images/Lightmail.png";
import lenskart from "../Images/lenskart.png";
import limeroad from "../Images/limeroad.png"
export const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <div>
        {/* <p
          style={{
            color: "#5fe4c9",
          }}
        >
          03.
        </p> */}
        <HiFolder color="#5fe4c9" fontSize={"25px"} />
        <h2>Projects</h2>
        <div></div>
      </div>
      {/* for project one */}
      <div className={"grids"}>
        <div className="project-card">
          <div>
            <img src={Kindmeal} alt="Kindmeal" />
          </div>
          <div>
            <a href="https://github.com/vishal-git9/divine-eggnog-8153" target="_blank" rel="noreferrer">
              <FiGithub
                color="#5fe4c9"
                fontSize={"35px"}
                className="project-github-link"
                fontWeight="light"
                cursor={"pointer"}
              />
            </a>
            <a href="https://gregarious-chimera-037834.netlify.app/" target="_blank" rel="noreferrer">
              <TbExternalLink
                className={`project-deployed-link`}
                fontSize={"30px"}
              />
            </a>
          </div>
          <div>
            <div>
              <h3 className="project-title">Kindmeal Clone</h3>
              <p className="project-description">
                KindMeal is a platform that helps users discover vegan and
                vegetarian restaurants in their area. It also offers discounts
                and promotions on plant-based meals at participating
                restaurants.{" "}
              </p>
            </div>
            <div className="project-tech-stack">
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
            </div>
          </div>
        </div>
        {/* 2nd project */}
        <div className="project-card">
          <div>
            <img src={Crux} alt="Crux" />
          </div>
          <div>
            <a href="https://github.com/vishal-git9/unbecoming-sofa-7946" target="_blank" rel="noreferrer">
              <FiGithub
                color="#5fe4c9"
                fontSize={"35px"}
                className={"project-github-link"}
                fontWeight="light"
                cursor={"pointer"}
              />
            </a>
            <a href="https://beamish-griffin-0ee078.netlify.app/" target="_blank" rel="noreferrer">
              <TbExternalLink
                className={"project-deployed-link"}
                fontSize={"30px"}
              />
            </a>
          </div>
          <div>
            <div>
              <h3 className="project-title">Yoox Clone</h3>
              <p className="project-description">
                YOOX is an online retailer of designer fashion, home decor,and
                other lifestyle products. The company was founded in 2000 and is
                based in Italy
              </p>
            </div>
            <div className="project-tech-stack">
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
              <p>JSON SERVER</p>
              <p>RAPID API</p>
            </div>
          </div>
        </div>
        {/* 3rd project */}
        <div className="project-card">
          <div>
            <img src={Lightmail} alt="Lightmail" />
          </div>
          <div>
            <a href="https://github.com/vishal-git9/-picayune-sponge-5589" target="_blank" rel="noreferrer">
              <FiGithub
                color="#5fe4c9"
                fontSize={"35px"}
                className={"project-github-link"}
                fontWeight="light"
                cursor={"pointer"}
              />
            </a>
            <a href="https://lightmail.netlify.app/" target="_blank" rel="noreferrer">
              <TbExternalLink
                className={"project-deployed-link"}
                fontSize={"30px"}
              />
            </a>
          </div>
          <div>
            <div>
              <h3 className="project-title">Mailchimp Clone</h3>
              <p className="project-description">
                Mailchimp is a web-based email marketing service that allows
                businesses and organizations to send newsletters, promotional
                emails, and other types of marketing emails to their
                subscribers.
              </p>
            </div>
            <div className="project-tech-stack">
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
              <p>REACT</p>
              <p>CHAKRAUI</p>
            </div>
          </div>
        </div>
        {/* 4th project */}
        <div className="project-card">
          <div>
            <img src={Diapers} alt="Diapers" />
          </div>
          <div>
            <a href="https://github.com/vishal-git9/perfect-cakes-1206-" target="_blank" rel="noreferrer">
              <FiGithub
                color="#5fe4c9"
                fontSize={"35px"}
                className={"project-github-link"}
                fontWeight="light"
                cursor={"pointer"}
              />
            </a>
            <a href="https://diapersnew.vercel.app/" target="_blank" rel="noreferrer">
              <TbExternalLink
                className={"project-deployed-link"}
                fontSize={"30px"}
              />
            </a>
          </div>
          <div>
            <div>
              <h3 className="project-title">Carters Clone</h3>
              <p className="project-description">
                This is a Clone of Carters which is a major American designer
                and marketer of children's apparel. Carter's sells its products
                through its own Carter's and OshKosh B'gosh retail stores, its
                website, and in other retail outlets such as department stores.
              </p>
            </div>
            <div className="project-tech-stack">
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
        {/* 5th project */}
        <div className="project-card">
          <div>
            <img src={limeroad} alt="Diapers" />
          </div>
          <div>
            <a href="https://github.com/vishal-git9/proper-dogs-3804" target="_blank" rel="noreferrer">
              <FiGithub
                color="#5fe4c9"
                fontSize={"35px"}
                className={"project-github-link"}
                fontWeight="light"
                cursor={"pointer"}
              />
            </a>
            <a href="https://eyekart.netlify.app/" target="_blank" rel="noreferrer">
              <TbExternalLink
                className={"project-deployed-link"}
                fontSize={"30px"}
              />
            </a>
          </div>
          <div>
            <div>
              <h3 className="project-title">Lenskart Clone</h3>
              <p className="project-description">
                This is a clone of Lenskart which is an Indian multinational
                optical prescription eyewear retail chain, based in Faridabad.
                As of May 2022, Lenskart has 1,000 stores across 223 cities in
                India. Its manufacturing facility in New Delhi manufactures 3
                lakh glasses a month.
              </p>
            </div>
            <div className="project-tech-stack">
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
              <p>CHAKRAUI</p>
              <p>REACT</p>
              <p>REDUX</p>
              <p>JSON SERVER</p>
            </div>
          </div>
        </div>
        {/* 6th project */}
        <div className="project-card">
          <div>
            <img src={lenskart} alt="Diapers" />
          </div>
          <div>
            <a href="https://github.com/gsandha/humorous-hammer-4857-" target="_blank" rel="noreferrer">
              <FiGithub
                color="#5fe4c9"
                fontSize={"35px"}
                className={"project-github-link"}
                fontWeight="light"
                cursor={"pointer"}
              />
            </a>
            <a href="https://limeroad.vercel.app/" target="_blank" rel="noreferrer">
              <TbExternalLink
                className={"project-deployed-link"}
                fontSize={"30px"}
              />
            </a>
          </div>
          <div>
            <div>
              <h3 className="project-title">Limeroad Clone</h3>
              <p className="project-description">
                This is a Clone of Limeroad which is an Indian online
                marketplace, owned by A. M. Marketplaces Pvt Ltd. The company is
                based in Gurugram, Haryana. It is India's first women's social
                shopping website. It deals in clothing and accessories for
                women, men and kids.
              </p>
            </div>
            <div className="project-tech-stack">
            <p>REACT</p>
              <p>JAVASCRIPT</p>
              <p>CHAKRAUI</p>
              <p>REDUX</p>
              <p>NEXTJS</p>
              <p>NODEJS</p>
              <p>EXPRESS</p>
              <p>MOGNODB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
