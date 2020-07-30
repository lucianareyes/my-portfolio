import React from "react";
import styles from "./Skills.module.scss";
import Skill from "./Skill";
import skill1Img from "../assets/img/skill1.webp";
import skill2Img from "../assets/img/skill2.webp";
import skill3Img from "../assets/img/skill3.webp";

function Skills() {
  return (
    <div className={styles.skills}>
      <Skill
        img={skill1Img}
        title="Value Proposition Design"
        text="I make sure your product is focused on your customer needs and values - my keys are empathy, curiosity and creativity."
      />
      <Skill
        img={skill2Img}
        title="Flexibility & Focus"
        text="Combining my ability to adapt to changes, time managment and positivity - I’m always ready to work under tight deadlines."
      />
      <Skill
        img={skill3Img}
        title="Design for Inclusivity"
        text="Exclusion happens when we solve problems using our own biases. I Design inclusively - for people, with people in mind."
      />
    </div>
  );
}

export default Skills;
