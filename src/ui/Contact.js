import React from "react";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <h1>That is it</h1>
        <h3>LET'S WORK TOGETHER</h3>
        <p>
          <a href="mailto:lucianareyes@gmail.com">Say Hello</a>
        </p>
      </div>
      <div className={styles.column2}>
        <div className={styles.links}>
          <a href="mailto:lucianareyes@gmail.com">LinkedIn</a>
          <a href="mailto:lucianareyes@gmail.com">Medium</a>
          <a href="mailto:lucianareyes@gmail.com">Github</a>
          <a href="mailto:lucianareyes@gmail.com">Behance</a>
          <a href="mailto:lucianareyes@gmail.com">Instagram</a>
        </div>
        <div
          className={styles.signature}
        >{`©2020 Luciana Reyes - made with <3 in Berlin`}</div>
      </div>
    </div>
  );
}

export default Contact;
