import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello,</h1>
        <p className={styles.description}>
       I'm Revisha Shareen Vas, Student at SRH Hochschule Heidelberg with 1.4 years of Product Specialist and software development experience 
        at Bosch. Reach out if you'd like to learn more!


        
        </p>
        <a href="mailto:revishavas@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Revisha.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};