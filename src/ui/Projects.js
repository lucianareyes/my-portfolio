import React from "react";
import styles from "./Projects.module.scss";
import Card from "./Card";
import card1Img from "../assets/img/project1.png";
import card2Img from "../assets/img/project2.png";
import card3Img from "../assets/img/project3.png";
import card4Img from "../assets/img/project4.png";
import card5Img from "../assets/img/project5.png";

function Projects() {
  return (
    <div className={styles.projects}>
      <Card
        cardsPerRow={2}
        img={card1Img}
        title="SitEinander"
        text='Helping parents to to find their "village".'
        linkText="View Case Study."
      />
      <Card
        cardsPerRow={2}
        img={card2Img}
        title="CMF Konex"
        text="[Re]Designing the website of a classical music festival."
        linkText="Read on Medium."
      />
      <Card
        cardsPerRow={2}
        img={card3Img}
        title="Netflix live"
        text="Adding a feature to watch live events"
        linkText="Coming soon."
      />
      <Card
        cardsPerRow={2}
        img={card4Img}
        title="Kiwi"
        text="The app to buy, sell and exchange second-hand kids clothes and accesories."
        linkText="View Case Study."
      />
      <Card
        cardsPerRow={2}
        img={card5Img}
        title="Digital Mag"
        text="Designing a Digital Magazine from scratch for the Eco-Conscious"
        linkText="Read in Medium."
      />
    </div>
  );
}

export default Projects;
