export interface CurationItem {
  title: string;
  link: string;
}

export interface CurationData {
//   curations: CurationItem[];
  history: CurationItem[];
  writing: CurationItem[];
  media: CurationItem[];
}

export const curationsData: CurationData = {
  //* ========== Curations ==========
//   curations: [
//     {
//       title: "Interstellar",
//       link: "https://www.imdb.com/title/tt0816692/",
//     },
//     {
//       title: "Ralph Lauren",
//       link: "https://www.ralphlauren.com/",
//     },
//   ],

  //* ========== History ==========
  history: [
    {
      title: "The Blue Boy",
      link: "https://www.huntington.org/blue-boy",
    },
    {
      title: "D-Day FDR Prayer",
      link: "https://www.youtube.com/watch?v=IMy1ZLyaSqk&list=PLrvljGPnb6yWcRrURLXtfkWlN3J5MswoP&index=3",
    },
    {
      title: "The Genius of Napoleon",
      link: "https://towardsdatascience.com/napoleon-was-the-best-general-ever-and-the-math-proves-it-86efed303eeb",
    },
    {
      title: '"The Steel of American Resolve", 9/11',
      link: "https://www.youtube.com/watch?v=0218zWdyPS8&list=PLrvljGPnb6yWcRrURLXtfkWlN3J5MswoP&index=1",
    },
    {
      title: "Rise and Fall of the Third Reich",
      link: "https://www.amazon.com/Rise-Fall-Third-Reich-ebook/dp/B07XD76H41/",
    },
    {
      title: "The Diary of Anne Frank",
      link: "https://www.amazon.com/Anne-Frank-Diary-Young-Girl/dp/B007Z332A0/",
    },
    {
      title: "Flight 93 Revolt",
      link: "https://www.youtube.com/watch?v=x5i-tvvHX68",
    },
  ],

  //* ========== Writing ==========
  writing: [
    {
      title: "Mastery",
      link: "https://www.amazon.com/Mastery-Robert-Greene/dp/014312417X",
    },
    {
      title: "Ironies of Automation",
      link: "https://ckrybus.com/static/papers/Bainbridge_1983_Automatica.pdf",
    },
    {
      title: "Julius Caesar - Shakespeare",
      link: "https://www.amazon.com/Julius-Caesar-Folger-Shakespeare-Library/dp/0743482743/",
    },
    {
      title: "How to do Great Work",
      link: "https://paulgraham.com/greatwork.html",
    },
    {
      title: "Live vs Dead Players",
      link: "https://samoburja.com/live-versus-dead-players/",
    },
    {
      title: "Moth Fund Manifesto",
      link: "https://www.mothfund.com/manifesto",
    },
    {
      title: "Childhoods of Exceptional People",
      link: "https://substack.com/inbox/post/82323090",
    },
    {
      title: "The Science of Genius",
      link: "https://www.scientificamerican.com/article/the-science-of-genius2/",
    },
  ],

  //* ========== Media ==========
  media: [
    {
      title: "Interstellar",
      link: "https://www.imdb.com/title/tt0816692/",
    },
    {
      title: "Hacksaw Ridge",
      link: "https://www.imdb.com/title/tt2119532/?ref_=nv_sr_srsg_1_tt_5_nm_2_in_0_q_hacksa",
    },
    {
      title: "Hamilton, the Musical",
      link: "https://www.youtube.com/watch?v=Ic7NqP_YGlg",
    },
    {
      title: "The Pianist",
      link: "https://www.imdb.com/title/tt0253474/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520pian",
    },
    {
      title: "Dune II",
      link: "https://www.imdb.com/title/tt15239678/?ref_=nv_sr_srsg_2_tt_5_nm_1_in_0_q_Dune%2520ii",
    },
    {
      title: "Imitation Game",
      link: "https://www.imdb.com/title/tt2084970/",
    },
    {
      title: "Pride and Prejudice",
      link: "https://www.imdb.com/title/tt0414387/",
    },
  ],
};
