// Edit this file as plans, team assignments, and project links take shape.
export const resources = {
  everyone: "https://make-it-count-clever.vercel.app",
  builder: "https://github.com/legertom/golden-path-setup",
  designer: "https://fifteen-pieces.vercel.app",
};

export const teams = [
  {
    name: "Team 01",
    topic: "Topic TBD",
    sme: "Adam",
    builder: "TBD",
    designer: "TBD",
  },
  {
    name: "Team 02",
    topic: "Topic TBD",
    sme: "Nikkole",
    builder: "TBD",
    designer: "TBD",
  },
  {
    name: "Team 03",
    topic: "Topic TBD",
    sme: "Keith",
    builder: "TBD",
    designer: "TBD",
  },
];

export const roles = [
  {
    number: "01",
    name: "Subject Matter Expert",
    label: "Bring the know-how.",
    description:
      "Choose a useful Clever IDM topic, define what an agent needs to know, and make sure the training gets the details right.",
    tasks: [
      "Pick a focused IDM topic with your team",
      "Research Guru, the past year of cases, and your own expertise",
      "Tell Tom & Katie before 5pm on November 6",
    ],
  },
  {
    number: "02",
    name: "Builder",
    label: "Make it work.",
    description:
      "Turn the team's idea into an interactive Next.js app with Claude Code. Follow the Golden Path to get ready to build.",
    tasks: [
      "Complete the Golden Path setup",
      "Build and iterate with your teammates",
      "Keep the project on GitHub; host on Vercel",
    ],
  },
  {
    number: "03",
    name: "Learning Designer",
    label: "Make it stick.",
    description:
      "Shape the learning journey so an agent can practice a new skill and leave ready to use it. Start with the Fifteen Pieces ramp-up course.",
    tasks: [
      "Define a clear learning outcome",
      "Plan an activity and a knowledge check",
      "Keep the experience to 30 minutes or less",
    ],
  },
];
