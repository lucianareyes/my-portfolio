import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Block from "../layout/Block";
import styles from "./Project.module.scss";

const projects = [
  {
    id: 1,
    title: "SitEinander - Mello",
    subtitle: "Connecting local parents",
  },
];

function ProjectPage() {
  let { projectId } = useParams();
  const project = projects.find((p) => p.id.toString() === projectId);
  const projectImage = require(`../assets/img/project${project.id}detail.png`);
  const affinityDiagramImage = require(`../assets/img/affinity_diagram${project.id}.png`);
  const surveyInsightsImage = require(`../assets/img/survey_insights${project.id}.png`);
  const personasImage = require(`../assets/img/personas${project.id}.png`);
  const lowWireframeImage = require(`../assets/img/low_wireframe${project.id}.png`);
  const storyboardImage = require(`../assets/img/storyboard${project.id}.png`);
  const methodImage = require(`../assets/img/method${project.id}.png`);
  const rebrandingImage = require(`../assets/img/rebranding${project.id}.png`);

  return (
    <Fragment>
      <Block topPadding background="blue">
        <div className={styles.paddingTop}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>
          <img className={styles.projectImg} src={projectImage} alt="" />
        </div>
      </Block>
      <Block verticalPadding>
        <div className={styles.twoColumn}>
          <div className={styles.column}>
            <h4>Overview</h4>
            <p>
              The goal of SitEinander is to make the life of parents and their
              children easier by helping them to connect with other families in
              their neighborhood and giving them the digital tools to simply
              exchange free babysitting with their trusted support-network.
            </p>
            <p>
              So far, SitEinander is focused on offering parents an exchange of
              babysitting and playdates. The aim of this project was to create a
              new feature that allows parents to exchange recommendations and
              discovery of interesting offers of family friendly businesses.
            </p>
          </div>
          <div className={styles.column}>
            <h4>My Role</h4>
            <p>
              <strong>UX/UI Designer - SitEinander</strong>
            </p>
            <p>
              User Research, Persona, Storyboard, Wireframes, Information
              Architecture, Visual Design, Prototyping & Testing
            </p>
            <p>Apr 2020</p>
          </div>
        </div>
      </Block>
      <Block verticalPadding background="black">
        <h2>The Problem</h2>
        <div className={styles.paddingTop}>
          <p>
            In Europe, around 53 million families live with small children, most
            of them in big cities, often far away from the grandparents and with
            a very small support network.
          </p>
          <p>
            According to a German health insurance 40 percent of all parents
            suffer every day from exhaustion and 80% of mothers feel lonely. And
            these numbers are from before Covid-19. Parents need more support
            than ever.
          </p>
          <p>
            After many weeks of physical distancing, many parents and their
            children are feeling the effects of social isolation. This is
            especially true for parents who were already experiencing postpartum
            anxiety and depression brought on by isolation, lack of support from
            others.
          </p>
          <p>
            <strong>
              How might we provide parents with trustworthy neighbourhood-based
              information that reduces family-related stress and expands their
              community?
            </strong>
          </p>
        </div>
      </Block>
      <Block verticalPadding>
        <h2>User Research</h2>
        <ul className={styles.list}>
          <li>12 user interviews</li>
          <li>About 3258 digital stickies</li>
          <li>Reaching out to existing SitEinander Users</li>
          <li>70+ user answers to our survey</li>
          <li>Focus on Berlin</li>
        </ul>
        <div className={styles.paddingTop}>
          <div className={styles.twoColumn}>
            <div className={styles.column55}>
              <img width="100%" src={affinityDiagramImage} alt="" />
              <div className={styles.imageText}>
                Affinity Diagram & Interview Insights
              </div>
            </div>
            <div className={styles.column45}>
              <img width="100%" src={surveyInsightsImage} alt="" />
              <div className={styles.imageText}>Survey Insights</div>
            </div>
          </div>
          <div className={styles.paddingTop}>
            <img width="100%" src={personasImage} alt="" />
            <div className={styles.imageText}>User Personas</div>
          </div>
          <div className={styles.paddingTop}>
            <p>
              We started the project with extensive user research and competitor
              analysis to familiarize ourselves with the product and users.
            </p>
            <p>
              With the help of online surveys and telephone and zoom interviews,
              we gained a better understanding of SitEinander's users.
            </p>
            <p>
              In order to fix all the pains of our users, we created 3 user
              personas - that helps us focusing in our user values trought the
              whole design process.
            </p>
          </div>
        </div>
      </Block>
      <Block verticalPadding background="green">
        <h2>Wireframing</h2>
        <div className={styles.paddingTop}>
          <div className={styles.twoColumn}>
            <div className={styles.column55}>
              <img width="100%" src={lowWireframeImage} alt="" />
              <div className={styles.imageText}>Low-Fi Wireframes</div>
            </div>
            <div className={styles.column45}>
              <img width="100%" src={storyboardImage} alt="" />
              <div className={styles.imageText}>Storyboard</div>
            </div>
          </div>
        </div>
        <div className={styles.paddingTop}>
          <p>
            The design process always starts with pen and paper, these are our
            first approaches.
          </p>
        </div>
      </Block>
      <Block verticalPadding background="white">
        <div className={styles.twoColumn}>
          <div className={styles.column}>
            <h2>MoSCow method</h2>
            <div className={styles.paddingTop}>
              <p>
                To determine priorities, we used the <strong>MoSCoW</strong>{" "}
                technique, reflecting the four categories: Must have, Should
                have, Could have and Would like but won't get.
              </p>
            </div>
          </div>
          <div className={styles.column}>
            <img width="100%" src={methodImage} alt="" />
          </div>
        </div>
      </Block>

      <Block verticalPadding background="gray">
        <div className={styles.twoColumn}>
          <div className={styles.column}>
            <h2>Rebranding</h2>
            <div className={styles.paddingTop}>
              <p>
                We were working in the middle of SitEnander’s rebranding -
                SitEinander now it's Mello and his style will change. We tried
                to design our feautures according to the new design system.
                Based on our research Mello is more compatible with non-German
                speaking foreign users.
              </p>
            </div>
          </div>
          <div className={styles.column}>
            <img width="100%" src={rebrandingImage} alt="" />
          </div>
        </div>
      </Block>
    </Fragment>
  );
}

export default ProjectPage;
