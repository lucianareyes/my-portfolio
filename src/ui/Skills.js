import React from "react";
import styles from "./Skills.module.scss";
import Skill from "./Skill";
import config from "../config";

function Skills() {
  return (
    <div className={styles.skills}>
      <Skill
        img={`${config.imgBaseURL}/skill1`}
        title="Value Proposition Design"
        text="I make sure your product is focused on your customer needs and values — my keys are empathy, curiosity and creativity."
      />
      <Skill
        img={`${config.imgBaseURL}/skill2`}
        title="Flexibility & Focus"
        text="Combining my ability to adapt to changes, time management and positivity — I’m always ready to work under tight deadlines."
      />
      <Skill
        img={`${config.imgBaseURL}/skill3`}
        title="Design for Inclusivity"
        text='"Exclusion happens when we solve problems using our own biases". I design inclusively — for people, with people in mind.'
      />
    </div>
  );
}

export default Skills;
