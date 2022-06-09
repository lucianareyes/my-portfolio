import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Block from "../layout/Block";
import cn from "classnames";
import styles from "./Project.module.scss";
import Projects from "../ui/Projects";
import Contact from "../ui/Contact";
import Image from "../ui/Image";
import config from "../config";
import projects, {
  ParagraphType,
  Section as SectionType,
} from "../data/projects";

type SectionProps = {
  section: SectionType;
};

const Section = ({ section }: SectionProps) => (
  <div className={styles.column}>
    <h4>{section.title}</h4>
    {section.paragraphs.map((p) =>
      p.type === ParagraphType.Text ? (
        <p dangerouslySetInnerHTML={{ __html: p.text }}></p>
      ) : (
        <ul className={styles.list}>
          {p.items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      )
    )}
  </div>
);

function ProjectPage() {
  let { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id.toString() === projectId);
  const imgRootPath = `${config.imgBaseURL}/projects/${project?.id}`;

  return project ? (
    <Fragment>
      <Block staticTopPadding background={project.backgroundColorHero}>
        <div className={styles.paddingTop}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>
          <Image className={styles.projectImg} src={`${imgRootPath}/detail`} />
        </div>
      </Block>
      {project.blocks.map((block) => (
        <Block verticalPadding background={block.backgroundColor}>
          <div className={styles.row}>
            {block.sections
              .filter((item, i) => i < 2)
              .map((section) => (
                <Section section={section} />
              ))}
          </div>
          <div className={styles.row}>
            {block.sections
              .filter((item, i) => i >= 2)
              .map((section) => (
                <Section section={section} />
              ))}
          </div>
        </Block>
      ))}

      {!project.simple ? (
        <Fragment>
          <Block verticalPadding background="black">
            <h2>The Problem</h2>
            <div className={styles.paddingTop}>
              <p>
                In Europe, around 53 million families live with small children,
                most of them in big cities, often far away from the grandparents
                and with a very small support network.
              </p>
              <p>
                According to a German health insurance 80% of all parents suffer
                every day from exhaustion and 46% of mothers feel lonely. And
                these numbers are from before Covid-19. Parents need more
                support than ever.
              </p>
              <p>
                After many weeks of physical distancing, many parents and their
                children are feeling the effects of social isolation. This is
                especially true for parents who were already experiencing
                postpartum anxiety and depression brought on by isolation, lack
                of support from others.
              </p>
              <p>
                <strong>
                  How might we provide parents with trustworthy
                  neighbourhood-based information that reduces family-related
                  stress and expands their community?
                </strong>
              </p>
            </div>
          </Block>
          <Block verticalPadding background="white">
            <h2>User Research</h2>
            <ul className={styles.list}>
              <li>12 user interviews</li>
              <li>About 3258 digital stickies</li>
              <li>Reaching out to existing Mello Users</li>
              <li>70+ user answers to our survey</li>
              <li>Focus on Berlin</li>
            </ul>
            <div className={styles.paddingTop}>
              <div className={styles.twoColumn}>
                <div className={styles.column55}>
                  <Image src={`${imgRootPath}/affinity_diagram`} width="100%" />
                  <div className={styles.imageText}>
                    Affinity Diagram & Interview Insights
                  </div>
                </div>
                <div className={styles.column45}>
                  <Image
                    className={styles.projectImg}
                    src={`${imgRootPath}/survey_insights`}
                    width="100%"
                  />
                  <div className={styles.imageText}>Survey Insights</div>
                </div>
              </div>
              <div className={styles.paddingTop}>
                <Image src={`${imgRootPath}/personas`} width="100%" />
                <div className={styles.imageText}>User Personas</div>
              </div>
              <div className={styles.paddingTop}>
                <p>
                  We started the project with extensive{" "}
                  <strong>user research</strong> and{" "}
                  <strong>competitor analysis</strong> to familiarize ourselves
                  with the product and users.
                </p>
                <p>
                  With the help of <strong>online surveys</strong>, telephone
                  and Zoom <strong>interviews</strong>, we gained a better
                  understanding of Mello's users.
                </p>
                <p>
                  In order to fix all the pains of our users, we created{" "}
                  <strong>3 user personas</strong> — that helps us focusing in
                  our user values trought the whole design process.
                </p>
              </div>
            </div>
          </Block>
          <Block verticalPadding background="green">
            <h2>Wireframing</h2>
            <div className={styles.paddingTop}>
              <div className={styles.twoColumn}>
                <div className={styles.column55}>
                  <Image src={`${imgRootPath}/low_wireframe`} width="100%" />
                  <div className={styles.imageText}>Low-Fi Wireframes</div>
                </div>
                <div className={styles.column45}>
                  <Image src={`${imgRootPath}/storyboard`} width="100%" />
                  <div className={styles.imageText}>Storyboard</div>
                </div>
              </div>
            </div>
            <div className={styles.paddingTop}>
              <p>
                The design process always starts with pen and paper, these are
                our first approaches.
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
                <Image src={`${imgRootPath}/method`} width="100%" />
              </div>
            </div>
          </Block>
          <Block verticalPadding background="gray">
            <div className={styles.twoColumn}>
              <div className={styles.column}>
                <h2>Rebranding</h2>
                <div className={styles.paddingTop}>
                  <p>
                    We've working in the middle of the Mello rebranding -
                    SitEinander is now Mello and its brand will change. We tried
                    to design our features based on the new design system.
                  </p>
                  <p>
                    According to our research, Mello is more compatible with
                    non-German speaking users abroad, and that is why we adopted
                    it.
                  </p>
                </div>
              </div>
              <div className={styles.column}>
                <Image src={`${imgRootPath}/rebranding`} width="100%" />
              </div>
            </div>
          </Block>
          <Block verticalPadding background="black">
            <div className={styles.twoColumn}>
              <div className={styles.column}>
                <h2>The Solution</h2>
                <div className={styles.paddingTop}>
                  <p>
                    After gathering all these insight, we were able to identify
                    the feature requirements to our concept.
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
                  <video
                    width="100%"
                    controls
                    poster={`${imgRootPath}/prototype_poster.png`}
                  >
                    <source
                      src={`${imgRootPath}/prototype.mp4`}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
            <h2>Rating User Flow</h2>
            <div className={styles.flow}>
              <div className={styles.flowImageGrid}>
                <div className={styles.flowImageContainer}>
                  <Image src={`${imgRootPath}/userflow1_1`} />
                  <p>
                    A pop-up asks the user to rate a place they visited during
                    the day. Catering to parents’ needs, the pop-up only appears
                    at evening/night time, when the children are already in bed.
                  </p>
                </div>
                <div className={styles.flowImageContainer}>
                  <Image src={`${imgRootPath}/userflow1_2`} />
                  <p>
                    To motivate interaction, the user is shown how many Karma
                    points they may earn by following the CTA as well as the
                    remaining points needed until their next bonus.
                  </p>
                </div>
                <div className={styles.flowImageContainer}>
                  <Image src={`${imgRootPath}/userflow1_3`} />
                  <p>
                    Interaction is kept to a minimum with a familiar points
                    rating system, family-related extra services that may be
                    checked and the possibility to leave comments. Information
                    is limited to a single screen with no scrolling.
                  </p>
                </div>
                <div className={styles.flowImageContainer}>
                  <Image src={`${imgRootPath}/userflow1_4`} />
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
                    <Image src={`${imgRootPath}/userflow2_1`} />
                    <p>
                      The quickest way to find information on a specific topic
                      or place is to use search.
                    </p>
                  </div>
                  <div className={styles.flowImageContainer}>
                    <Image src={`${imgRootPath}/userflow2_2`} />
                    <p>
                      In case SitEinander/Mello does not yet contain information
                      on what the user is looking for, they are encouraged to
                      reach out to their community. To make this as effortless
                      as possible, the app provides a pre-written text.
                    </p>
                  </div>
                  <div className={styles.flowImageContainer}>
                    <Image src={`${imgRootPath}/userflow2_3`} />

                    <p>
                      Posting a recommendation request, the user receives a
                      Thank-you message underlining the community character.
                    </p>
                  </div>
                  <div className={styles.flowImageContainer}>
                    <Image src={`${imgRootPath}/userflow2_4`} />
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
                    <Image src={`${imgRootPath}/userflow3_1`} />
                    <p>
                      Recommendation requests automatically become part of
                      relevant topic feeds. Replying takes users directly to the
                      recommendation screen.
                    </p>
                  </div>
                  <div className={styles.flowImageContainer}>
                    <Image src={`${imgRootPath}/userflow3_2`} />
                    <p>
                      They may then type in a business name and the app searches
                      the Google Maps library for matches.
                    </p>
                  </div>
                  <div className={styles.flowImageContainer}>
                    <Image src={`${imgRootPath}/userflow3_3`} />
                    <p>
                      Finding the correct place, SitEinander/Mello then directly
                      imports basic information. Similar to ratings, users can
                      add family specific information by way of a few taps and
                      leave a comment.
                    </p>
                  </div>
                  <div className={styles.flowImageContainer}>
                    <Image src={`${imgRootPath}/userflow3_4`} />
                    <p>
                      Upon completion, the recommendation turns into a detail
                      page and becomes part of SitEinander/Mello’s internal
                      library.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Block>
          <Block verticalPadding background="white">
            <h2>Usability Testing</h2>
            <div className={styles.paddingTop}>
              <p>We tested our features at several stages of the project.</p>
              <p>
                • <strong>Lo-fi prototypes</strong> were tested with the
                stakeholders to get feedback on the functionality, content, and
                interactivity of the product.
              </p>
              <p>
                • <strong>Unmoderated User testing</strong> - We provided a
                specific interaction scenarios to the users, and observed the
                user interactions.
              </p>
              <p>
                • <strong>Moderated User testing</strong> - We've guided our
                test participants through the tasks, answering their questions,
                and replying to their feedback in real time.
              </p>
            </div>
            <div className={styles.usabilityGrid}>
              <Image width="100%" src={`${imgRootPath}/usability_testing1`} />
              <Image width="100%" src={`${imgRootPath}/usability_testing2`} />
              <Image width="100%" src={`${imgRootPath}/usability_testing3`} />
            </div>
          </Block>
          <Block verticalPadding background="gray">
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
                Time managment is crucial to meet all the requeriments to launch
                an MVP. Follow a roadmap helped us to be focus and deal with
                out-of-scope requests.
              </p>
              <p>
                <strong>• Feedback</strong>
                <br />
                <br />
                The sooner we get feedback the better. As early as possible
                saves ample amount of time and re-work.
              </p>
              <p>
                <strong>• Validation</strong>
                <br />
                <br />
                Although we designers are tempted to jump quickly into the
                design process, the design is only the first step of the process
                - the most important step is the validation of our design
                properly.
              </p>
            </div>
          </Block>
          <Block verticalPadding background="blue">
            <h2>Find out more...</h2>
            <div className={styles.paddingTop}>
              <p>
                You can find out more about Mello by clicking on the following
                links.
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
                  href="https://www.instagram.com/mello.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mello Instagram
                </a>
              </p>
              <p>
                <a
                  href="https://mello-app.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mello's website
                </a>
              </p>
              <p>
                <a
                  href="https://apps.apple.com/de/app/siteinander/id1478633013"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AppStore
                </a>
              </p>
              <p>
                <a
                  href="https://play.google.com/store/apps/details?id=de.siteinander.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PlayStore
                </a>
              </p>
            </div>
          </Block>
        </Fragment>
      ) : (
        <Image className={styles.projectImg} src={`${imgRootPath}/extra`} />
      )}

      <Block verticalPadding background="gray">
        <h3 style={{ textAlign: "center" }}>MORE PROJECTS</h3>
        <Projects currentProject={1} />
      </Block>
      <Block verticalPadding background="white">
        <Contact />
      </Block>
    </Fragment>
  ) : (
    <></>
  );
}

export default ProjectPage;
