import React from "react";
import styles from "./Skill.module.scss";
import Image from "./Image";

interface Props {
  text: string;
  title: string;
  img?: string;
}

function Card({ text, title, img }: Props) {
  return (
    <div className={styles.skill}>
      <Image src={img} className={styles.img} alt="" />
      <div className={styles.content}>
        <h3>{title}</h3>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
}

export default Card;
