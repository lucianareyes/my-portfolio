import React from "react";
import Block from "../layout/Block";
import styles from "./Home.module.scss";
import { ReactComponent as ArrowIcon } from "../assets/svg/arrow.svg";
import Skills from "../ui/Skills";
import Projects from "../ui/Projects";
import About from "../ui/About";
import Contact from "../ui/Contact";
import Process from "../ui/Process";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Block staticTopPadding bottomPadding>
        <div className={styles.paddingTop}>
          <span className={styles.preText}>HELLO, I'M LUCIANA REYES</span>
          <br />
          <br />
          <span className={styles.text}>
            <Link to="/">Product (UX/UI) Designer</Link> infinitely curious
            about people's needs and passionate about creating delightful and
            human experiences.
          </span>
        </div>
      </Block>
      <Block>
        <div className={styles.sectionIntro}>
          <ArrowIcon />
          &nbsp;&nbsp;&nbsp;&nbsp;what I do best
        </div>
      </Block>
      <Block bottomPadding>
        <Skills />
      </Block>
      <div id="projects"></div>
      <Block verticalPadding background="gray">
        <h1>Selected work</h1>
        <p>
          As a designer, my mission is to create better experiences for{" "}
          <span className={styles.lineThrough}>users</span>{" "}
          <strong>people</strong>.
        </p>
        <Projects />
      </Block>
      <Block verticalPadding background="black">
        <Process />
      </Block>
      <div id="about"></div>
      <Block verticalPadding>
        <About />
      </Block>
      <Block verticalPadding background="black">
        <div className={styles.sentence}>
          Thank you for reading. If you would like to share feedback or ask any
          questions, please get in touch.
        </div>
      </Block>
      <div id="contact"></div>
      <Block verticalPadding background="gray">
        <Contact />
      </Block>
    </div>
  );
}

export default HomePage;
