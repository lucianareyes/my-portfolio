import React, { Fragment } from "react";
import styles from "./About.module.scss";
import { Link } from "react-router-dom";

function About() {
  return (
    <Fragment>
      <h1>HELLO</h1>
      <div className={styles.twoColumn}>
        <div className={styles.column}>
          <p>
            I'm Luciana Reyes. I'm a Product (UX/UI) Designer. I firmly believe
            that good design can help the world for the better and help the
            people who live in it.
          </p>
          <p>
            As a videomaker turned UX/UI Designer, my creative storytelling
            skills and problem-solving ability has been a strong asset on some
            extremely diverse teams.
          </p>
          <p>
            I entered the audiovisual world studying video production and art
            direction in Buenos Aires, where I then worked as a videomaker for
            10 years involved in production, film art direction and video
            editing 
          </p>
        </div>
        <div className={styles.column}>
          <p>
            Since moving to Berlin, I found a new love for human behavior and
            psychology in problem solving and a fascination for how interfaces
            are designed, leading me to a change in career towards UX/UI Design.
          </p>
          <p>
            I am in love with Design. Design in all its forms - and I am always
            looking for ways to learn and become a better designer.
          </p>
          <p>
            I also love to dance good music, high rated movies, recharge energy
            in nature, yoga, travelling, the cultural differences and
            contrasting points of view.
          </p>
        </div>
      </div>
      <p>
        <Link to="/">Check my resumee</Link>
      </p>
    </Fragment>
  );
}

export default About;
