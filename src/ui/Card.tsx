import React from "react";
import styles from "./Card.module.scss";
import { useHistory } from "react-router-dom";
import Image from "./Image";

interface Props {
  img: string;
  text: string;
  title: string;
  linkText: string;
  cardsPerRow?: number;
  external?: boolean;
  link?: string;
}

function Card({
  text,
  title,
  img,
  linkText,
  cardsPerRow = 2,
  external = false,
  link,
}: Props) {
  const history = useHistory();

  function onClick() {
    if (external) {
      window.open(link);
    } else {
      history.push(link!);
    }
  }
  return (
    <div
      style={{
        width:
          window.innerWidth > 650
            ? `calc(${100 / cardsPerRow}% - 20px)`
            : "100%",
      }}
      className={styles.card}
      onClick={onClick}
    >
      <Image src={img} className={styles.img} alt="" />
      <div className={styles.content}>
        <h1>{title}</h1>
        <div className={styles.text}>{text}</div>
        <a
          href={link}
          target={external ? "_blank" : ""}
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}

export default Card;
