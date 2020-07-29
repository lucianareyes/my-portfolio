import React from "react";
import styles from "./Skill.module.scss";

function Card({ text, title, img }) {
  return (
    <div className={styles.skill}>
      <img src={img} className={styles.img} alt="" />
      <div className={styles.content}>
        <h3>{title}</h3>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
}

export default Card;
