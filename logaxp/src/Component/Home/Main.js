import React from 'react';
// Import your CSS or Tailwind CSS here if needed

const cardsData = [
  {
    category: "Analysis",
    title: "Top trends from The CMO Survey",
    description: "The latest CMO Survey results",
    image: "path-to-cmo-image.jpg",
    link: "#",
    linkText: "Dive into the highlights"
  },
  {
    category: "Deloitte Insights",
    title: "2023 Deloitte holiday travel survey",
    description: "As travel intent picks up across all generations...",
    image: "path-to-holiday-image.jpg",
    link: "#",
    linkText: "Explore the findings"
  },
  {
    category: "Perspectives",
    title: "2023 Technology Fast 500 Award Winners",
    description: "The 2023 Technology Fast 500 awards celebrate...",
    image: "path-to-award-image.jpg",
    link: "#",
    linkText: "See the 2023 winners"
  },
  {
    category: "Perspectives",
    title: "2023 Global Marketing Trends",
    description: "The 2023 Global Marketing Trends report identifies...",
    image: "path-to-global-image.jpg",
    link: "#",
    linkText: "Explore the trends"
  },
  {
    category: "Perspectives",
    title: "2023 Global Human Capital Trends",
    description: "The 2023 Global Human Capital Trends report...",
    image: "path-to-human-image.jpg",
    link: "#",
    linkText: "Explore the trends"
  },
  {
    category: "Analysis",
    title: "2023 Global Resilience Report",
    description: "The 2023 Global Resilience Report examines how...",
    image: "path-to-resilience-image.jpg",
    link: "#",
    linkText: "Explore the findings"
  },
  {
    category: "Analysis",
    title: "2023 Global Resilience Report",
    description: "The 2023 Global Resilience Report examines how...",
    image: "path-to-resilience-image.jpg",
    link: "#",
    linkText: "Explore the findings"
  }
  // ... additional card objects
];

const trendingData = [
  {
    title: "Industry Outlooks",
    description: "Look deeper: Key opportunities, trends, and challenges"
  },
  {
    title: "Five questions on strategic risk",
    description: "Risk Angles"
  },
  {
    title: "Fleet leasing and management in North America",
    description: "Key enabler for the future of mobility"
  },

];


// Individual card component
const Card = ({ category, title, description, image, link, linkText }) => (
  <div className="max-w-sm w-full rounded overflow-hidden shadow-lg bg-white">
    <h2 className="px-6 py-4 bg-gray-900 text-white text-xs font-bold uppercase">{category}</h2>
    <img className="w-full" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <a href={link} className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{linkText}</a>
    </div>
  </div>
);


// Individual trending topic component
const TrendingTopic = ({ title, description }) => (
  <li className="border-b border-gray-200 p-4 max-h-80 min-w-full">
    <h5 className="text-lg font-bold">{title}</h5>
    <p>{description}</p>
  </li>
);


// Trending topics component that maps through the trendingData array
const TrendingTopics = () => (
  <div className="trending-topics w-full md:w-1/4 bg-white min-h-screen ">
    <h3 className="trending-header text-xl font-bold mb-4 bg-black text-white p-4">Trending Topics</h3>
    <ul className="trending-list list-none">
      {trendingData.map((topic, index) => (
        <TrendingTopic key={index} {...topic} />
      ))}
    </ul>
  </div>
);

// Main component with a responsive grid layout
const Main = () => (
  <div className="container mx-auto p-44">
  <h1 className="text-4xl font-bold text-center mb-6">Insights & Analysis</h1>
  <div className="grid grid-cols-1 lg:grid-cols-14 gap-2">
    {/* Cards for the first and second rows */}
    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-2 ">
      {/* First row with two cards */}
      <Card {...cardsData[0]} className="lg:col-span-2 md:col-span-1" />
      <Card {...cardsData[1]} className="md:col-span-1" />
      {/* Second row with one large card */}
      <div className="lg:col-span-1 grid grid-cols-1 md:grid-cols-2 gap-2 ">
        <Card {...cardsData[2]} />
        <Card {...cardsData[3]} />
      </div>
      {/* Third row with two cards */}
      <Card {...cardsData[4]} className="md:col-span-1" />
      <Card {...cardsData[5]} className="md:col-span-1" />
    </div>
    {/* Trending Topics section */}
    <div className="lg:col-span-4 w-full">
      <TrendingTopics />
    </div>
  </div>
</div>

);

export default Main;
