import React from "react";
import styles from "./Block.module.scss";
import cn from "classnames";

const Block = (props) => {
  return (
    <div
      className={cn(styles.blockContainer, {
        [styles.grayBackground]: props.background === "gray",
        [styles.blackBackground]: props.background === "black",
        [styles.blueBackground]: props.background === "blue",
        [styles.greenBackground]: props.background === "green",
        [styles.sandBackground]: props.background === "sand",
        [styles.purpleBackground]: props.background === "purple",
        [styles.orangeBackground]: props.background === "orange",
        [styles.verticalPadding]: props.verticalPadding,
        [styles.bottomPadding]: props.bottomPadding,
        [styles.topPadding]: props.topPadding,
        [styles.staticTopPadding]: props.staticTopPadding,
      })}
    >
      <div className={styles.innerContainer}>{props.children}</div>
    </div>
  );
};

export default Block;
