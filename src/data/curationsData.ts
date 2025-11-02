export interface CurationItem {
  title: string;
  link: string;
}

export interface CurationData {
//   curations: CurationItem[];
  history: CurationItem[];
  writing: CurationItem[];
  films: CurationItem[];
  places: CurationItem[];
}

export const curationsData: CurationData = {

  //* ========== History ==========
  history: [
    {
      title: "D-Day FDR Prayer",
      link: "https://www.youtube.com/watch?v=IMy1ZLyaSqk&list=PLrvljGPnb6yWcRrURLXtfkWlN3J5MswoP&index=3",
    },
    {
      title: "Downfall (film)",
      link: "https://en.wikipedia.org/wiki/Downfall_(2004_film)",
    },
    {
      title: "Hacksaw Ridge (film)",
      link: "https://www.imdb.com/title/tt2119532/?ref_=nv_sr_srsg_1_tt_5_nm_2_in_0_q_hacksa",
    },
    {
      title: "Rise and Fall of the 3rd Reich",
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
      title: "Mastery - robert greene",
      link: "https://www.amazon.com/Mastery-Robert-Greene/dp/014312417X",
    },
    
    {
      title: "Ironies of Automation",
      link: "https://ckrybus.com/static/papers/Bainbridge_1983_Automatica.pdf",
    },
    {
      title: "Frankenstein - Mary Shelley",
      link: "https://en.wikipedia.org/wiki/Frankenstein",
    },
    {
      title: "Simulation Inferences",
      link: "https://gwern.net/simulation-inference",
    },
    {
      title: "Moth Fund Manifesto",
      link: "https://www.mothfund.com/manifesto",
    },
    {
      title: "Julius Caesar - Shakespeare",
      link: "https://www.amazon.com/Julius-Caesar-Folger-Shakespeare-Library/dp/0743482743/",
    },
    {
      title: "How to do Great Work",
      link: "https://paulgraham.com/greatwork.html",
    }
  ],

  //* ========== Films ==========
  films: [
    {
      title: "Interstellar",
      link: "https://www.imdb.com/title/tt0816692/",
    },
    {
      title: "The Fault in our Stars",
      link: "https://www.imdb.com/title/tt2582846/",
    },
    {
      title: "The Last of Us",
      link: "https://www.imdb.com/title/tt3581920/",
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

  //* ========== Places ==========
  places: [
    {
      title: "La Cabra, Soho",
      link: "https://us.lacabra.com/pages/soho",
    },
    {
      title: "Ichimiann, Torrance",
      link: "https://www.ichimiann.com/",
    },
    {
      title: "Blues Alley Club, DC",
      link: "https://www.bluesalley.com/",
    },
    {
      title: "Del Cerro Park, Palos Verdes",
      link: "/",
    },
    {
      title: "The Huntington, San Marino",
      link: "https://www.huntington.org/",
    },
  ],
};
