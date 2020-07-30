import React from "react";
import styles from "./Projects.module.scss";
import Card from "./Card";
import card1Img from "../assets/img/project1.webp";
import card2Img from "../assets/img/project2.webp";
import card3Img from "../assets/img/project3.webp";
import card4Img from "../assets/img/project4.webp";
import card5Img from "../assets/img/project5.webp";

function Projects({ currentProject }) {
  return (
    <div className={styles.projects}>
      {currentProject !== 1 ? (
        <Card
          img={card1Img}
          title="SitEinander"
          text='Helping parents to to find their "village".'
          linkText="View Case Study."
          link="/projects/1"
        />
      ) : null}
      <Card
        img={card2Img}
        title="CMF Konex"
        text="[Re]Designing the website of a classical music festival."
        linkText="Read on Medium."
        external={true}
        link="https://medium.com/@lucianareyes/re-designing-a-classical-music-festival-website-cad1fb189560"
      />
      <Card
        img={card4Img}
        title="Kiwi"
        text="The app to buy, sell and exchange second-hand kids clothes and accesories."
        linkText="View Case Study."
        external={true}
        link="https://www.behance.net/gallery/86777305/KIWI"
      />
      <Card
        img={card5Img}
        title="Digital Mag"
        text="Designing a Digital Magazine from scratch for the Eco-Conscious"
        linkText="Read in Medium."
        external={true}
        link="https://medium.com/@lucianareyes/digital-magazine-from-scratch-ux-case-study-9c7255dd2b39"
      />
      <Card
        img={card3Img}
        title="Netflix live"
        text="Adding a feature to watch live events"
        linkText="Coming soon."
      />
    </div>
  );
}

export default Projects;
