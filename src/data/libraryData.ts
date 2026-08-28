export interface Book {
  id: string;
  title: string;
  author: string;
  year?: string;
  link?: string;
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
    id: "book-01",
    title: "Placeholder Title 01",
    author: "Author Name",
    year: "2026",
    link: "https://example.com",
    subtitle: "08-28-26",
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
    id: "book-02",
    title: "Placeholder Title 02",
    author: "Author Name",
    year: "2026",
    link: "https://example.com",
    subtitle: "08-20-26",
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
    id: "book-03",
    title: "Placeholder Title 03",
    author: "Author Name",
    year: "2026",
    link: "https://example.com",
    subtitle: "08-14-26",
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
    id: "book-04",
    title: "Placeholder Title 04",
    author: "Author Name",
    year: "2026",
    link: "https://example.com",
    subtitle: "08-01-26",
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
    id: "book-05",
    title: "Placeholder Title 05",
    author: "Author Name",
    year: "2026",
    link: "https://example.com",
    noteTitle: "Notes on Placeholder Title 05",
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
    id: "book-06",
    title: "Placeholder Title 06",
    author: "Author Name",
    year: "2026",
    link: "https://example.com",
    subtitle: "07-15-26",
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
    id: "book-07",
    title: "Placeholder Title 07",
    author: "Author Name",
    year: "2026",
    link: "https://example.com",
    subtitle: "07-02-26",
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
    id: "book-08",
    title: "Placeholder Title 08",
    author: "Author Name",
    year: "2026",
    link: "https://example.com",
    subtitle: "06-18-26",
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
    id: "book-09",
    title: "Placeholder Title 09",
    author: "Author Name",
    year: "2026",
    link: "https://example.com",
    subtitle: "06-05-26",
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
    id: "book-10",
    title: "Placeholder Title 10",
    author: "Author Name",
    year: "2026",
    link: "https://example.com",
    subtitle: "05-28-26",
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
