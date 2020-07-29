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
      <Block verticalPadding>
        <div className={styles.paddingTop}>
          <span className={styles.text}>
            I'm a <Link to="/">Product (UX/UI) Designer</Link> infinitely
            curious about people's needs and passionate about creating
            delightful and human experiences.
          </span>
        </div>
      </Block>
      <Block>
        <div className={styles.sectionIntro}>
          <ArrowIcon />
          &nbsp;&nbsp;&nbsp;&nbsp;what i do best
        </div>
      </Block>
      <Block verticalPadding>
        <Skills />
      </Block>
      <div id="projects"></div>
      <Block verticalPadding background="gray">
        <h1>Selected work</h1>
        <p>
          As a designer, I make sure your products and services are align with
          end-user needs and business goals. My mission is to make people's
          lives easier - understanding how things work and how things can be
          improved.
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
      <div id="contact"></div>
      <Block verticalPadding background="gray">
        <Contact />
      </Block>
    </div>
  );
}

export default HomePage;
