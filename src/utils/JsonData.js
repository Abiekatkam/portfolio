import RPSGameImage from "../assets/rockpaperscissor.png";
import CurrencyConverter from "../assets/currencyconverter.png";
import EnglishDictionary from "../assets/englishdictionary.png";
import RandomQuoteGenerator from "../assets/randomquotegenerator.png";
import ThePlanetaryDocuments from "../assets/planetarydocuments.png";
import GithubUserFinder from "../assets/GithubUserFinder.png";
import Summarize from "../assets/summarize.png";
import StatsCard from "../assets/statspreviewcard.jpg";
import Dalle from "../assets/dalle.png";
import AdviceGen from "../assets/adivegenerator.png";

export const ExperienceData = [
  {
    id: "experience1",
    timeline: "May 2023 - present",
    companyName: "Konnect Insights",
    jobRole: "software developement engineer",
    skills: [
      {
        id: "1",
        name: "ASP.Net MVC core",
      },
      {
        id: "2",
        name: "C-sharp",
      },
      {
        id: "3",
        name: "SQL",
      },
      {
        id: "4",
        name: "Javascript",
      },
      {
        id: "5",
        name: "ASP.NET",
      },
      {
        id: "6",
        name: "Jquery",
      },
    ],
    companyLink: "https://www.linkedin.com/company/konnectinsights/mycompany/",
  },
];

export const SmallProjectData = [
  {
    id: "s1",
    projectname: "Rock Paper Scissor",
    sourceCode: "https://github.com/Abiekatkam/rock-paper-scissor-game",
    liveUrl: "https://incomparable-biscotti-5bbfdd.netlify.app/",
    coverImage: RPSGameImage,
    badge: "small project",
  },
  {
    id: "s2",
    projectname: "Currency Converter",
    sourceCode: "https://github.com/Abiekatkam/currency-converter",
    liveUrl: "https://radiant-puppy-1d9e55.netlify.app/",
    coverImage: CurrencyConverter,
    badge: "small project",
  },
  {
    id: "s3",
    projectname: "English Dictionary",
    sourceCode: "https://github.com/Abiekatkam/english-dictionary",
    liveUrl: "https://unique-torrone-62a8b4.netlify.app/",
    coverImage: EnglishDictionary,
    badge: "small project",
  },
  {
    id: "s4",
    projectname: "Random Quote Generator",
    sourceCode: "https://github.com/Abiekatkam/random-quote-generator",
    liveUrl: "https://clinquant-puppy-a112cf.netlify.app/",
    coverImage: RandomQuoteGenerator,
    badge: "small project",
  },
  {
    id: "s5",
    projectname: "The Planetary Documents",
    sourceCode: "https://github.com/Abiekatkam/ThePlanetaryDocuments",
    liveUrl: "https://abiekatkam.github.io/ThePlanetaryDocuments/",
    coverImage: ThePlanetaryDocuments,
    badge: "small project",
  },
  {
    id: "s6",
    projectname: "Github User Finder",
    sourceCode: "https://github.com/Abiekatkam/GithubUserFinder",
    liveUrl: "https://abiekatkam.github.io/GithubUserFinder/",
    coverImage: GithubUserFinder,
    badge: "small project",
  },
  {
    id: "s7",
    projectname: "Stats Preview Card",
    sourceCode: "https://github.com/Abiekatkam/Stats-preview-card-component",
    liveUrl: "https://abiekatkam.github.io/Stats-preview-card-component/",
    coverImage: StatsCard,
    badge: "small project",
  },
  {
    id: "s8",
    projectname: "Advice Generator",
    sourceCode: "https://github.com/Abiekatkam/AdviceGenerator",
    liveUrl: "https://abieproject09-advicegenerator.netlify.app/",
    coverImage: AdviceGen,
    badge: "small project",
  },
];

export const LargeProjectData = [
  {
    id: "l1",
    projectname: "Summarize",
    sourceCode: "https://github.com/Abiekatkam/Summarize",
    liveUrl: "https://kaleidoscopic-conkies-81812b.netlify.app/",
    coverImage: Summarize,
    description:
      "Summarize is an AI based article summarizing tool, This website is based on the GPT-4. It is build by the use of REACT, REDUX/Toolkit, Tailwind.CSS and RapidAPI. For the reference purpose visit JS Mastery.",
    badge: "large",
  },
  {
    id: "l2",
    projectname: "Dall-E 2.0",
    sourceCode: "https://github.com/Abiekatkam/Dall-E2.0",
    liveUrl: "",
    coverImage: Dalle,
    description:
      "DALLE Project: MERN-based web app with Tailwind CSS. Generates images from text using OpenAI's DALL-E model. For the reference purpose visit JS Mastery.",
    badge: "large",
  },
];

const mixArrays = (smallData, largeData) => {
  const mixedArray = [];
  let smallIndex = 0;
  let largeIndex = 0;

  // Loop until one of the arrays is fully traversed
  while (smallIndex < smallData.length && largeIndex < largeData.length) {
    mixedArray.push(smallData[smallIndex]);
    smallIndex++;

    mixedArray.push(smallData[smallIndex]);
    smallIndex++;

    mixedArray.push(largeData[largeIndex]);
    largeIndex++;
  }

  // Add remaining elements from the small array if any
  while (smallIndex < smallData.length) {
    mixedArray.push(smallData[smallIndex]);
    smallIndex++;
  }

  // Add remaining elements from the large array if any
  while (largeIndex < largeData.length) {
    mixedArray.push(largeData[largeIndex]);
    largeIndex++;
  }

  return mixedArray;
};
export const AllProjectData = mixArrays(SmallProjectData, LargeProjectData);
