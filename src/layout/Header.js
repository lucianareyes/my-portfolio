import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./Header.module.scss";
import { withRouter } from "react-router";
import cn from "classnames";
import useEvent from "../hooks/useEvent";
import { ReactComponent as BurgerIcon } from "../assets/svg/burger.svg";
import { ReactComponent as CrossIcon } from "../assets/svg/cross.svg";

const Header = () => {
  const [solidHeader, setSolidHeader] = useState(false);
  const [openedMenu, setOpenedMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleScroll = () => {
    if (window.pageYOffset > 100 && !solidHeader) {
      setSolidHeader(true);
    }
    if (window.pageYOffset <= 100) {
      setSolidHeader(false);
    }
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEvent("scroll", handleScroll);
  useEvent("resize", handleResize);
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
        {windowWidth > 650 ? (
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
        ) : (
          <div
            className={styles.burgerIcon}
            onClick={() => setOpenedMenu(!openedMenu)}
          >
            {openedMenu ? <CrossIcon /> : <BurgerIcon />}
          </div>
        )}
      </div>
      {openedMenu && windowWidth < 650 ? (
        <div className={styles.overMenu} onClick={() => setOpenedMenu(false)}>
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
      ) : null}
    </div>
  );
};

export default withRouter(Header);
