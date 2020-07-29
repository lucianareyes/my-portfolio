import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

function Card({ text, title, img, linkText, cardsPerRow }) {
  return (
    <div
      style={{
        width: `calc(${100 / cardsPerRow}% - 20px)`,
      }}
      className={styles.card}
    >
      <img src={img} className={styles.img} alt="" />
      <div className={styles.content}>
        <h1>{title}</h1>
        <div className={styles.text}>{text}</div>
        <Link to="/projects/1" className={styles.link}>
          {linkText}
        </Link>
      </div>
    </div>
  );
}

export default Card;
