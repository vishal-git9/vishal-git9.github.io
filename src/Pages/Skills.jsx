import React from "react";
import { useParallax} from "react-scroll-parallax";
import styles from "../styles/skills.module.css";
export const Skills = () => {
    const {ref} = useParallax({
        easing: 'easeOutQuad',
    translateX: [100, 0],
    
      });
      const parallax = useParallax({
        easing: 'easeOutQuad',
        translateX: [100, 0],
      });
      const parallax2 = useParallax({
        easing: 'easeOutQuad',
        translateX: [100, 0],
      });
      return (
        <div className={styles.Skills}>
            <div>
          <p style={{
            color:"#5fe4c9"
          }}>03.</p>
          <h2>Skills</h2>
          <div></div>
        </div>
        <div>
        <div ref={parallax.ref} className="spinner">
          <div className={styles.spinner}>👍🏻</div>
          <div className={styles.spinner}>👏🏻</div>
          <div className={styles.spinner}>🙌🏻</div>
          <div className={styles.spinner}>👎🏻</div>
        </div>
        <div ref={parallax2.ref} className="spiner">
          <div className={styles.spinner}>👍🏻</div>
          <div className={styles.spinner}>👏🏻</div>
          <div className={styles.spinner}>🙌🏻</div>
          <div className={styles.spinner}>👎🏻</div>
        </div>
        <div ref={ref} className="spnner">
          <div className={styles.spinner}>👍🏻</div>
          <div className={styles.spinner}>👏🏻</div>
          <div className={styles.spinner}>🙌🏻</div>
          <div className={styles.spinner}>👎🏻</div>
        </div>
        </div>
        </div>
      );
    }
