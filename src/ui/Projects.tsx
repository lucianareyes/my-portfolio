import React from "react";
import styles from "./Projects.module.scss";
import Card from "./Card";
import config from "../config";

interface Props {
  currentProject?: number;
}

function Projects({ currentProject }: Props) {
  return (
    <div className={styles.projects}>
      {currentProject !== 1 && (
        <Card
          img={`${config.imgBaseURL}/project1`}
          title="AnyMove"
          text="Creating behavioral change in mobility on global scale"
          linkText="View Case Study ->"
          link="/projects/1"
        />
      )}
      {currentProject !== 2 && (
        <Card
          img={`${config.imgBaseURL}/project2`}
          title="Mello"
          text='Helping parents to find their "village".'
          linkText="View Case Study ->"
          link="/projects/2"
        />
      )}
      {currentProject !== 3 && (
        <Card
          img={`${config.imgBaseURL}/project3`}
          title="Beelinguapp"
          text="Learn languages with stories you love."
          linkText="View Case Study ->"
          link="/projects/3"
        />
      )}
      {currentProject !== 4 && (
        <Card
          img={`${config.imgBaseURL}/project4`}
          title="Yoona.ai"
          text="Automate your design process to three clicks"
          linkText="View Case Study ->"
          link="/projects/4"
        />
      )}
      <Card
        img={`${config.imgBaseURL}/project5`}
        title="Kiwi"
        text="The app to buy, sell and exchange second-hand kids' clothes and accesories."
        linkText="View Case Study ->"
        external={true}
        link="https://www.behance.net/gallery/86777305/KIWI"
      />
      <Card
        img={`${config.imgBaseURL}/project6`}
        title="CMF Konex"
        text="[Re]Designing the website of a classical music festival."
        linkText="Read on Medium ->"
        external={true}
        link="https://medium.com/@lucianareyes/re-designing-a-classical-music-festival-website-cad1fb189560"
      />

      <Card
        img={`${config.imgBaseURL}/project7`}
        title="Digital Mag"
        text="Designing a Digital Magazine from scratch for the Eco-Conscious"
        linkText="Read in Medium ->"
        external={true}
        link="https://medium.com/@lucianareyes/digital-magazine-from-scratch-ux-case-study-9c7255dd2b39"
      />
      <Card
        img={`${config.imgBaseURL}/project8`}
        title="Netflix live"
        text="Adding a feature to watch live events"
        linkText="Coming soon"
      />
    </div>
  );
}

export default Projects;
