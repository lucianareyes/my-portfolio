import React from "react";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <div className={styles.container}>
      <h1>Let's Connect</h1>
      <div className={styles.links}>
        <a
          href="https://www.linkedin.com/in/lucianareyes"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://medium.com/@lucianareyes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Medium
        </a>
        <a
          href="https://github.com/lucianareyes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.behance.net/lucianareyes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Behance
        </a>
      </div>
      <div
        className={styles.signature}
      >{`©${new Date().getFullYear()} Luciana Reyes — made with ♥ in Berlin`}</div>
    </div>
  );
}

export default Contact;
