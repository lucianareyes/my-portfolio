import React from "react";
import styles from "./Projects.module.scss";
import Card from "./Card";
import config from "../config";
import projects, { ProjectType } from "../data/projects";

interface Props {
  currentProject?: number;
}

function Projects({ currentProject }: Props) {
  return (
    <div className={styles.projects}>
      {projects.map((project) =>
        currentProject !== project.id ? (
          <Card
            img={`${config.imgBaseURL}/project${project.id}`}
            title={project.title}
            text={project.subtitle}
            linkText={
              project.type === ProjectType.External
                ? project.linkText
                : "View Case Study ->"
            }
            link={
              project.type === ProjectType.External
                ? project.link
                : `/projects/${project.id}`
            }
            external={project.type === ProjectType.External}
          />
        ) : null
      )}
    </div>
  );
}

export default Projects;
