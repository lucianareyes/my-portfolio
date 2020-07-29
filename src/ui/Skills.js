import React from "react";
import styles from "./Skills.module.scss";
import Skill from "./Skill";
import skill1Img from "../assets/img/skill1.png";
import skill2Img from "../assets/img/skill2.png";
import skill3Img from "../assets/img/skill3.png";

function Skills() {
  return (
    <div className={styles.skills}>
      <Skill
        img={skill1Img}
        title="Value Proposition Design"
        text="I not only understand the desired gains and existing pains of the custumers, but also uncover unexpected gains. My keys are empathy, curiosity and creativity."
      />
      <Skill
        img={skill2Img}
        title="Flexibility & Focus"
        text="Combining my ability to quickly adjust to new challenges, efficient time managment and positivity, I being able to work under tight deadlines."
      />
      <Skill
        img={skill3Img}
        title="Design for Inclusivity"
        text="I make sure your products and services are culturally aware.I improving customer satisfaction and loyalty through the utility and ease of use."
      />
    </div>
  );
}

export default Skills;
