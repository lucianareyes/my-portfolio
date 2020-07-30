import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Block from "../layout/Block";
import cn from "classnames";
import styles from "./Project.module.scss";
import Projects from "../ui/Projects";
import Contact from "../ui/Contact";

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
  const projectImage = require(`../assets/img/project${project.id}detail.webp`);
  const affinityDiagramImage = require(`../assets/img/affinity_diagram${project.id}.webp`);
  const surveyInsightsImage = require(`../assets/img/survey_insights${project.id}.webp`);
  const personasImage = require(`../assets/img/personas${project.id}.webp`);
  const lowWireframeImage = require(`../assets/img/low_wireframe${project.id}.webp`);
  const storyboardImage = require(`../assets/img/storyboard${project.id}.webp`);
  const methodImage = require(`../assets/img/method${project.id}.webp`);
  const rebrandingImage = require(`../assets/img/rebranding${project.id}.webp`);
  const prototypeVideo = require(`../assets/video/prototype${project.id}.mp4`);
  const prototypePosterImage = require(`../assets/img/prototype${project.id}poster.png`);
  const userFlow11Image = require(`../assets/img/userflow_${project.id}_1_1.webp`);
  const userFlow12Image = require(`../assets/img/userflow_${project.id}_1_2.webp`);
  const userFlow13Image = require(`../assets/img/userflow_${project.id}_1_3.webp`);
  const userFlow14Image = require(`../assets/img/userflow_${project.id}_1_4.webp`);
  const userFlow21Image = require(`../assets/img/userflow_${project.id}_2_1.webp`);
  const userFlow22Image = require(`../assets/img/userflow_${project.id}_2_2.webp`);
  const userFlow23Image = require(`../assets/img/userflow_${project.id}_2_3.webp`);
  const userFlow24Image = require(`../assets/img/userflow_${project.id}_2_4.webp`);
  const userFlow31Image = require(`../assets/img/userflow_${project.id}_3_1.webp`);
  const userFlow32Image = require(`../assets/img/userflow_${project.id}_3_2.webp`);
  const userFlow33Image = require(`../assets/img/userflow_${project.id}_3_3.webp`);
  const userFlow34Image = require(`../assets/img/userflow_${project.id}_3_4.webp`);

  return (
    <Fragment>
      <Block staticTopPadding background="blue">
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
      <Block verticalPadding background="black">
        <div className={styles.twoColumn}>
          <div className={styles.column}>
            <h2>The Solution</h2>
            <div className={styles.paddingTop}>
              <p>
                After gathering all these insight, we were able to identify the
                feature requirements to our concept.
              </p>
              <ul>
                <li>Rating notification</li>
                <li>Thank you pop-up</li>
                <li>Landing page</li>
                <li>Category page</li>
                <li>Category detail page</li>
                <li>Search page</li>
                <li>“No results”</li>
                <li>Recommendation page</li>
                <li>in-app notification</li>
              </ul>
            </div>
          </div>
          <div className={cn(styles.column, styles.centered)}>
            <div className={styles.videoContainer}>
              <video width="100%" controls poster={prototypePosterImage}>
                <source src={prototypeVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <h2>Rating User Flow</h2>
        <div className={styles.flow}>
          <div className={styles.flowImageGrid}>
            <div className={styles.flowImageContainer}>
              <img src={userFlow11Image} alt="" />
              <p>
                A pop-up asks the user to rate a place they visited during the
                day. Catering to parents’ needs, the pop-up only appears at
                evening/night time, when the children are already in bed.
              </p>
            </div>
            <div className={styles.flowImageContainer}>
              <img src={userFlow12Image} alt="" />
              <p>
                To motivate interaction, the user is shown how many Karma points
                they may earn by following the CTA as well as the remaining
                points needed until their next bonus.
              </p>
            </div>
            <div className={styles.flowImageContainer}>
              <img src={userFlow13Image} alt="" />
              <p>
                Interaction is kept to a minimum with a familiar points rating
                system, family-related extra services that may be checked and
                the possibility to leave comments. Information is limited to a
                single screen with no scrolling.
              </p>
            </div>
            <div className={styles.flowImageContainer}>
              <img src={userFlow14Image} alt="" />
              <p>
                Upon completion the user receives a Thank-you message that
                underlines the community character and is presented with an
                updated points balance.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.paddingTop}>
          <h2>Ask Community User Flow</h2>
          <div className={styles.flow}>
            <div className={styles.flowImageGrid}>
              <div className={styles.flowImageContainer}>
                <img src={userFlow21Image} alt="" />
                <p>
                  The quickest way to find information on a specific topic or
                  place is to use search.
                </p>
              </div>
              <div className={styles.flowImageContainer}>
                <img src={userFlow22Image} alt="" />
                <p>
                  In case SitEinander/Mello does not yet contain information on
                  what the user is looking for, they are encouraged to reach out
                  to their community. To make this as effortless as possible,
                  the app provides a pre-written text.
                </p>
              </div>
              <div className={styles.flowImageContainer}>
                <img src={userFlow23Image} alt="" />
                <p>
                  Posting a recommendation request, the user receives a
                  Thank-you message underlining the community character.
                </p>
              </div>
              <div className={styles.flowImageContainer}>
                <img src={userFlow24Image} alt="" />
                <p>
                  The post immediately becomes part of the community’s
                  neighborhood feed, motivating users to interact by tone of
                  voice and through Karma points.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.paddingTop}>
          <h2>Recommendation User Flow</h2>
          <div className={styles.flow}>
            <div className={styles.flowImageGrid}>
              <div className={styles.flowImageContainer}>
                <img src={userFlow31Image} alt="" />
                <p>
                  Recommendation requests automatically become part of relevant
                  topic feeds. Replying takes users directly to the
                  recommendation screen.
                </p>
              </div>
              <div className={styles.flowImageContainer}>
                <img src={userFlow32Image} alt="" />
                <p>
                  They may then type in a business name and the app searches the
                  Google Maps library for matches.
                </p>
              </div>
              <div className={styles.flowImageContainer}>
                <img src={userFlow33Image} alt="" />
                <p>
                  Finding the correct place, SitEinander/Mello then directly
                  imports basic information. Similar to ratings, users can add
                  family specific information by way of a few taps and leave a
                  comment.
                </p>
              </div>
              <div className={styles.flowImageContainer}>
                <img src={userFlow34Image} alt="" />
                <p>
                  Upon completion, the recommendation turns into a detail page
                  and becomes part of SitEinander/Mello’s internal library.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Block>
      <Block verticalPadding background="white">
        <h2>Project Learnings</h2>
        <div className={styles.paddingTop}>
          <p>
            <strong>• Empathy is strength</strong>
            <br />
            <br />
            As a designer, the primary goal is to understand the user, their
            problems and then come up with a design that solves it.
          </p>
          <p>
            <strong>• Prioritize</strong>
            <br />
            <br />
            Time managment is crucial to meet all the requeriments to launch an
            MVP. Follow a roadmap helped us to be focus and deal with
            out-of-scope requests.
          </p>
          <p>
            <strong>• Feedback</strong>
            <br />
            <br />
            The sooner we get feedback the better. As early as possible saves
            ample amount of time and re-work.
          </p>
          <p>
            <strong>• Validation</strong>
            <br />
            <br />
            As designers we are all very eager to jump into the process of
            designing. However, design is only the first step in the process,
            the more important step is validating your design properly.
          </p>
        </div>
      </Block>
      <Block verticalPadding background="gray">
        <h2>Find out more...</h2>
        <div className={styles.paddingTop}>
          <p>
            You can find out more about Siteinander by clicking on the following
            links.
          </p>
          <p>
            <a
              href="https://www.siteinander.com/de"
              target="_blank"
              rel="noopener noreferrer"
            >
              The SitEinander website
            </a>
          </p>
          <p>
            <a
              href="https://maze-impact.com/interview-with-anna-the-co-founder-of-siteinander"
              target="_blank"
              rel="noopener noreferrer"
            >
              Interview with co-founder Anna Geber
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/siteinander"
              target="_blank"
              rel="noopener noreferrer"
            >
              SitEinander Instagram
            </a>
          </p>
          <p>
            <a
              href="https://mello-app.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Mello
            </a>
          </p>
        </div>
      </Block>
      <Block verticalPadding background="white">
        <h3 style={{ textAlign: "center" }}>MORE PROJECTS</h3>
        <Projects currentProject={1} />
      </Block>
      <div id="contact"></div>
      <Block verticalPadding background="gray">
        <Contact />
      </Block>
    </Fragment>
  );
}

export default ProjectPage;
