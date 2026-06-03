export type NoteMeta = {
  id: string;
  title: string;
  subtitle: string;
  readingTime?: string;
  externalUrl?: string;
  featuredImage?: {
    url: string;
    alt?: string;
    caption?: string;
  };
};

export const notes: NoteMeta[] = [
  {
    id: "aesthetics",
    title: "Aesthetics",
    subtitle: "06-02-26",
    readingTime: "8",
  },
  {
    id: "bucketlist",
    title: "Bucketlist",
    subtitle: "05-27-26",
    readingTime: "2",
  },
  {
    id: "living-ecosystems",
    title: "Living Ecosystems",
    subtitle: "10-18-25",
    readingTime: "5",
    featuredImage: {
      url: "/writing/ecosystemThumbnail.png",
      caption: "",
    },
  },
  {
    id: "outsized-bets",
    title: "How to make outsized bets",
    subtitle: "02-09-25",
    externalUrl: "https://substack.com/home/post/p-156802970",
  },
  {
    id: "sandbox",
    title: "The world is your sandbox",
    subtitle: "03-10-22",
    externalUrl:
      "https://medium.com/@Jaslavie/minecraft-creative-mode-or-survival-mode-70656cdc0f39",
  },
];
