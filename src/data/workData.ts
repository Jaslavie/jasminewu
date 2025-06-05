export interface WorkProject {
  number: string;
  title: string;
  description: string;
  link: string;
}

export const workData: WorkProject[] = [
  {
    number: "01",
    title: "decision support system for lunar traversal",
    description:
      "Exploring shared autonomy between AI and human operator in space.",
    link: "/nasa-suits",
  },
  {
    number: "02",
    title: "anticipatory heads-up displays for spacesuits",
    description:
      "XR decision making tool for astronauts. tested at the Johnson Space Center.",
    link: "/spacesuit-hud",
  },
  {
    number: "03",
    title: "ai agents for emergency response",
    description: "911 dispatch agents to offload non-emergency calls.",
    link: "/emergency-ai",
  },
  {
    number: "04",
    title: "the ctrl+r guide",
    description:
      "My consolidated thesis around interfaces for human-ai collaboration.",
    link: "/ctrl-r-guide",
  },
];
