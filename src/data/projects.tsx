export interface FullProject {
  id: number;
  type: ProjectType.Full;
  title: string;
  backgroundColorHero: string;
  subtitle: string;
  simple: boolean;
  blocks: Block[];
}
export enum ProjectType {
  Full = "full",
  External = "external",
}

export interface ExternalProject {
  id: number;
  type: ProjectType.External;
  title: string;
  subtitle: string;
  linkText: string;
  link: string;
}

export type Project = FullProject | ExternalProject;

export interface Block {
  backgroundColor?: string;
  contactBlock: boolean;
  sections: Section[];
}

export interface Section {
  title: string;
  paragraphs: (Text | List)[];
}

interface List {
  type: ParagraphType.List;
  items: string[];
}

interface Text {
  type: ParagraphType.Text;
  text: string;
}

export enum ParagraphType {
  Text = "text",
  List = "list",
}

const projects: Project[] = [
  {
    id: 1,
    title: "AnyMove",
    subtitle: "Creating behavioral change in mobility on global scale",
    simple: true,
    type: ProjectType.Full,
    backgroundColorHero: "sand",
    blocks: [
      {
        backgroundColor: "white",
        contactBlock: true,
        sections: [
          {
            title: "Overview",
            paragraphs: [
              {
                type: ParagraphType.Text,
                text: "The mission of AnyMove is create the European end-to-end new mobility platform that will enable highly convenient and inclusive mobility services for anyone.",
              },
            ],
          },
          {
            title: "My Role",
            paragraphs: [
              {
                type: ParagraphType.Text,
                text: "<strong>Product Designer<strong>",
              },
              {
                type: ParagraphType.Text,
                text: "Qualitative user interview, Creation of the Design System, Wireframes, Prototyping & Testing",
              },
              {
                type: ParagraphType.Text,
                text: "February 2022",
              },
            ],
          },
          {
            title: "Challenges",
            paragraphs: [
              {
                type: ParagraphType.List,
                items: [
                  "Multi-dimensional use cases must be covered",
                  "Want to create an experience that feels consistent for every service and city",
                  "Giving mobility a new direction for the good of all",
                  "Encouraging conscious consumption and driving sustainability",
                  "Building a new version of the app based on the feedback",
                ],
              },
            ],
          },
          {
            title: "Results",
            paragraphs: [
              {
                type: ParagraphType.List,
                items: [
                  "Built the design system in Figma from scratch",
                  "Tested the first version with our Beta group and collected feedback",
                  "Due to the modularity of the app, we can easily add more services",
                  "Viewed last 300 rentals, conducted user interviews and did competitor research.",
                  "MVP is currently live and constantly being improved according to customer feedback",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Mello",
    subtitle: "Connecting local parents",
    type: ProjectType.Full,
    simple: false,
    backgroundColorHero: "blue",
    blocks: [
      {
        backgroundColor: "white",
        contactBlock: true,
        sections: [
          {
            title: "Overview",
            paragraphs: [
              {
                type: ParagraphType.Text,
                text: "The goal of Mello is to make the life of parents and their children easier by helping them to connect with other families in their neighborhood and giving them the digital tools to simply exchange free babysitting with their trusted support-network.",
              },
              {
                type: ParagraphType.Text,
                text: "So far, Mello is focused on offering parents an exchange of babysitting and playdates. The aim of this project was to create a new feature that allows parents to exchange recommendations and discovery of interesting offers of family friendly businesses.",
              },
            ],
          },
          {
            title: "My Role",
            paragraphs: [
              {
                type: ParagraphType.Text,
                text: "<strong>UX/UI Designer — Mello</strong>",
              },
              {
                type: ParagraphType.Text,
                text: "User Research, Persona, Storyboard, Wireframes, Information Architecture, Visual Design, Prototyping & Testing",
              },
              {
                type: ParagraphType.Text,
                text: "April 2020",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Beelinguapp",
    subtitle: "Learn languages with stories you love.",
    simple: true,
    type: ProjectType.Full,
    backgroundColorHero: "orange",
    blocks: [
      {
        backgroundColor: "white",
        contactBlock: true,
        sections: [
          {
            title: "Overview",
            paragraphs: [
              {
                type: ParagraphType.Text,
                text: "The mission of Beelinguapp is to make learning a language as simple and fun reading your favourite book. We are using the neuroscience of language acquisition, the simplest way to gain understanding and develop fluency. Using the parallel texts method, we unlock the brain's natural ability to learn languages in context",
              },
              {
                type: ParagraphType.Text,
                text: `Based on early success of the glossary project, we’ve gained confidence that building vocabulary is a strong user motivation.`,
              },
            ],
          },
          {
            title: "My Role",
            paragraphs: [
              {
                type: ParagraphType.Text,
                text: "<strong>UX/UI Designer<strong>",
              },
              {
                type: ParagraphType.Text,
                text: `Qualitative user interview, Creation of Design System Components and principles, Wireframes, Visual Design, Illustrator and book covers redesign, Prototyping & Testing`,
              },
              {
                type: ParagraphType.Text,
                text: "February 2021",
              },
            ],
          },
          {
            title: "Challenges",
            paragraphs: [
              {
                type: ParagraphType.List,
                items: [
                  "Refine the flashcards/vocab functions to drive engagement and retention",
                  "Redesign the end of story experience",
                  "Impact on WAU",
                ],
              },
            ],
          },
          {
            title: "Results",
            paragraphs: [
              {
                type: ParagraphType.List,
                items: [
                  "An end-to-end end of story experience",
                  "20% increase in WAU of flashcard function",
                  "Retention (15+ days) for paid/free users",
                  "MVP is currently live and is constantly being improved according to customer feedback",
                  "Today Beelinguapp has more than 5 million downloads for both Apple and Android",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Yoona.ai",
    subtitle: "Automate your design process to three clicks",
    type: ProjectType.Full,
    simple: true,
    backgroundColorHero: "purple",
    blocks: [
      {
        backgroundColor: "white",
        contactBlock: true,
        sections: [
          {
            title: "Overview",
            paragraphs: [
              {
                type: ParagraphType.Text,
                text: "Yoona.ai is a deep tech B2B service platform that simplifies the apparel industry value chain, from idea to production - 3 clicks to Metaverse & Real Production. Businesses benefit from efficiency, cost reductions, sustainability, and easy preparation for digital markets.",
              },
              {
                type: ParagraphType.Text,
                text: `yoona.ai software uses AI to analyze data and provides 3d cash cow designs also for VR Digital Fashion Shows using AR. This allows fashion companies to save time and costs, while working more sustainably and also provides them with the necessary technology to make the leap towards the metaverse and digitization.`,
              },
            ],
          },
          {
            title: "My Role",
            paragraphs: [
              {
                type: ParagraphType.Text,
                text: "<strong>Product Designer<strong>",
              },
              {
                type: ParagraphType.Text,
                text: `Qualitative user interview, Wireframes, Visual Design, Redesigning the web and the desk app, Prototyping & Testing`,
              },
              {
                type: ParagraphType.Text,
                text: "August 2020",
              },
            ],
          },
          {
            title: "Challenges",
            paragraphs: [
              {
                type: ParagraphType.List,
                items: [
                  "Redesign the web and the desk app",

                  "Bringing together technology and strategy",
                  "Encouraging conscious consumption and driving sustainability",
                ],
              },
            ],
          },
          {
            title: "Results",
            paragraphs: [
              {
                type: ParagraphType.List,
                items: [
                  "Hi-Fidelity Prototype tested",
                  "MVP is currently live",
                  "A new and fresher view of the brand",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Kiwi",
    subtitle:
      "The app to buy, sell and exchange second-hand kids' clothes and accesories",
    linkText: "View Case Study ->",
    link: "https://www.behance.net/gallery/86777305/KIWI",
    type: ProjectType.External,
  },
  {
    id: 6,
    title: "CMF Konex",
    subtitle: "[Re]Designing the website of a classical music festival",
    linkText: "Read on Medium ->",
    link: "https://medium.com/@lucianareyes/re-designing-a-classical-music-festival-website-cad1fb189560",
    type: ProjectType.External,
  },
  {
    id: 7,
    title: "Digital Mag",
    subtitle: "Designing a Digital Magazine from scratch for the Eco-Conscious",
    linkText: "Read in Medium ->",
    link: "https://medium.com/@lucianareyes/digital-magazine-from-scratch-ux-case-study-9c7255dd2b39",
    type: ProjectType.External,
  },
  {
    id: 8,
    title: "Netflix live",
    subtitle: "Adding a feature to watch live events",
    linkText: "Coming soon",
    link: "",
    type: ProjectType.External,
  },
];

export default projects;
