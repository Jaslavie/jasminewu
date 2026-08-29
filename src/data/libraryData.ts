export interface Book {
  id: string;
  title: string;
  author: string;
  year?: string;
  link?: string;
  coverImage?: string;
  noteTitle?: string;
  subtitle: string; // Date string e.g. "08-28-26"
  readingTime?: string;
  isActive?: boolean; // Only true for active books with dedicated pages
  layout: {
    // Relative positioning on canvas (percentage based across 0-100)
    x: number; // percentage from left
    y: number; // percentage from top
    rotation: number; // static rotation in degrees
    scale?: number; // relative scale
    floatDelay: number; // seconds
    floatDuration: number; // seconds
    floatVariant: 1 | 2 | 3 | 4;
  };
}

export const books: Book[] = [
  {
    id: "coming-soon-01",
    title: "coming soon.",
    author: "",
    subtitle: "—",
    coverImage: "/library/coming-soon.png",
    layout: {
      x: 10,
      y: 22,
      rotation: -4.5,
      scale: 0.96,
      floatDelay: 0.2,
      floatDuration: 7.2,
      floatVariant: 1,
    },
  },
  {
    id: "coming-soon-02",
    title: "coming soon.",
    author: "",
    subtitle: "—",
    coverImage: "/library/coming-soon.png",
    layout: {
      x: 32,
      y: 19,
      rotation: 5.5,
      scale: 1.0,
      floatDelay: 1.1,
      floatDuration: 8.4,
      floatVariant: 2,
    },
  },
  {
    id: "coming-soon-03",
    title: "coming soon.",
    author: "",
    subtitle: "—",
    coverImage: "/library/coming-soon.png",
    layout: {
      x: 56,
      y: 18,
      rotation: -3.0,
      scale: 0.98,
      floatDelay: 0.7,
      floatDuration: 6.8,
      floatVariant: 3,
    },
  },
  {
    id: "coming-soon-04",
    title: "coming soon.",
    author: "",
    subtitle: "—",
    coverImage: "/library/coming-soon.png",
    layout: {
      x: 82,
      y: 21,
      rotation: 7.0,
      scale: 1.0,
      floatDelay: 1.8,
      floatDuration: 7.9,
      floatVariant: 4,
    },
  },
  {
    id: "frankenstein",
    title: "Frankenstein",
    author: "Mary Shelley",
    year: "1818",
    link: "https://example.com",
    coverImage: "/library/frankenstein.png",
    noteTitle: "Frankenstein",
    subtitle: "07-22-26",
    readingTime: "3",
    isActive: true,
    layout: {
      x: 22,
      y: 48,
      rotation: -6.5,
      scale: 1.08,
      floatDelay: 2.2,
      floatDuration: 8.8,
      floatVariant: 2,
    },
  },
  {
    id: "coming-soon-06",
    title: "coming soon.",
    author: "",
    subtitle: "—",
    coverImage: "/library/coming-soon.png",
    layout: {
      x: 43,
      y: 46,
      rotation: 3.5,
      scale: 0.98,
      floatDelay: 0.5,
      floatDuration: 7.5,
      floatVariant: 1,
    },
  },
  {
    id: "simulacra",
    title: "Simulacra and Simulation",
    author: "Jean Baudrillard",
    year: "1981",
    link: "https://example.com",
    coverImage: "/library/simulacra.png",
    noteTitle: "Simulacra and Simulation",
    subtitle: "07-02-26",
    readingTime: "4",
    layout: {
      x: 63,
      y: 44,
      rotation: -4.0,
      scale: 1.0,
      floatDelay: 1.5,
      floatDuration: 8.1,
      floatVariant: 4,
    },
  },
  {
    id: "coming-soon-08",
    title: "coming soon.",
    author: "",
    subtitle: "—",
    coverImage: "/library/coming-soon.png",
    layout: {
      x: 84,
      y: 49,
      rotation: 5.5,
      scale: 1.02,
      floatDelay: 0.9,
      floatDuration: 7.1,
      floatVariant: 3,
    },
  },
  {
    id: "coming-soon-09",
    title: "coming soon.",
    author: "",
    subtitle: "—",
    coverImage: "/library/coming-soon.png",
    layout: {
      x: 37,
      y: 76,
      rotation: -3.5,
      scale: 1.0,
      floatDelay: 2.0,
      floatDuration: 8.6,
      floatVariant: 1,
    },
  },
  {
    id: "coming-soon-10",
    title: "coming soon.",
    author: "",
    subtitle: "—",
    coverImage: "/library/coming-soon.png",
    layout: {
      x: 67,
      y: 74,
      rotation: 4.5,
      scale: 1.03,
      floatDelay: 1.4,
      floatDuration: 7.8,
      floatVariant: 2,
    },
  },
];
