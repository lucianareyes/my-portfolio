import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

function Card({
  text,
  title,
  img,
  linkText,
  cardsPerRow = 2,
  external = false,
  link,
}) {
  return (
    <div
      style={{
        width:
          window.innerWidth > 650
            ? `calc(${100 / cardsPerRow}% - 20px)`
            : "100%",
      }}
      className={styles.card}
    >
      <img src={img} className={styles.img} alt="" />
      <div className={styles.content}>
        <h1>{title}</h1>
        <div className={styles.text}>{text}</div>
        {external ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {linkText}
          </a>
        ) : (
          <Link to={link} className={styles.link}>
            {linkText}
          </Link>
        )}
      </div>
    </div>
  );
}

export default Card;
