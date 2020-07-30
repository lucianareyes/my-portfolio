import React, { Fragment } from "react";
import styles from "./About.module.scss";
import emoji from "../assets/img/lulimoji.webp";

function About() {
  return (
    <Fragment>
      <h1>Meet Luciana</h1>
      <div className={styles.twoColumn}>
        <div className={styles.column}>
          <p>
            Hi there! I'm a <strong>Product Designer</strong> living in{" "}
            <strong>Berlin</strong>.
          </p>
          <p>
            From an early age, I was fascinated about human behavior and
            psychology in problem solving - I was endlessly curious about how
            things work and how things can be improved.
          </p>
          <p>
            As a videomaker turned Product Designer, my creative storytelling
            skills and problem-solving ability has been a strong asset on some
            extremely diverse teams.
          </p>
          <p>
            I entered the audiovisual world studying video production and art
            direction in Buenos Aires, where I worked as a videomaker for 10
            years involved in production, film art direction and video editing.
          </p>
        </div>
        <div className={styles.column}>
          <p>
            During 2017-2018, I worked as a Content Manager at{" "}
            <a
              href="https://www.pantaflix.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pantaflix
            </a>
            , Berlin. Working closely with designers and product managers, I
            found a new love for digital design and a fascination for how
            interfaces are designed. That's the moment when I realized that I'm
            going to be a Product Designer.
          </p>
          <p>
            I am in love with Design. Design in all its forms - and I am always
            looking for ways to learn and become a better designer. I firmly
            believe that good design can help the world for the better and help
            the people who live in it.
          </p>
          <p>
            I also love to hear good music, high rated movies, recharge energy
            in nature, yoga, travelling, the cultural differences and
            contrasting points of view.
          </p>
        </div>
      </div>
      <div className={styles.twoColumn}>
        <div className={styles.column}>
          <a
            href="https://drive.google.com/open?id=1zEJBtbp-S7Q5hCOdfiaAxs17ax6N5-v5"
            target="_blank"
          >
            Check my Resume
          </a>
        </div>
        <div className={styles.column}>
          <img className={styles.emoji} src={emoji} alt="" />
        </div>
      </div>
    </Fragment>
  );
}

export default About;
