import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./Header.module.scss";
import { withRouter } from "react-router";
import cn from "classnames";
import useEvent from "../hooks/useEvent";

const Header = (props) => {
  const [solidHeader, setSolidHeader] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 100 && !solidHeader) {
      setSolidHeader(true);
    }
    if (window.pageYOffset <= 100) {
      setSolidHeader(false);
    }
  };
  const t = useEvent("scroll", handleScroll);
  console.log(t);
  return (
    <div
      className={cn(styles.container, {
        [styles.whiteBackground]: solidHeader,
        [styles.transparentBackground]: !solidHeader,
      })}
    >
      <div className={styles.innerContainer}>
        <Link className={styles.title} to="/" smooth>
          luciana.
        </Link>
        <div className={styles.menu}>
          <Link to="/#projects" smooth>
            Projects
          </Link>
          <Link to="/#about" smooth>
            About
          </Link>
          <Link to="/#contact" smooth>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
