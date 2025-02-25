import React from "react";
import PageSection from '../../../../components/PageSection';
import { Tune, DynamicFeed, Update, AllInclusive } from '@mui/icons-material';

function GameSection() {
  const cardsData = [
    {
      icon: <AllInclusive className="w-10 h-10" />,
      title: "End-to-End Development", 
      subtitle: "Full-scope development",
      description: "Designed and developed a project from scratch using React and Node.js, implementing both frontend functionality and backend logic while managing all aspects of styling, animations, and interactivity."
    }
  ];

  return <PageSection title="Custom Game with Server-Side Results" description="I independently-developed a project focused on marketing goals which involved collaborating with multiple teams and creating a custom API to transmit data from the client to the server." cards={cardsData} />;
}

function HeadlessSection() {
  const cardsData = [
    {
      icon: <Update className="w-10 h-10" />,
      title: "Tech Stack Modernization", 
      subtitle: "Full-scope development",
      description: "Reviewed and updated major software dependencies within the tech stack by sifting through the package.json file, updating outdated libraries, and ensuring compatibility across all packages to avoid build issues."
    },
    {
      icon: <DynamicFeed className="w-10 h-10" />, 
      title: "Dynamic React Component Development", 
      subtitle: "Seamless link redirection.",
      description: "Developed modular and reusable React components to fetch and display real-time content from the WordPress REST API, ensuring a flexible and dynamic front-end experience."
    },
    {
      icon: <Tune className="w-10 h-10" />,
      title: "Optimized GraphQL Configuration", 
      subtitle: "Unified project teamwork.",
      description: "Configured GraphQL queries within the Faust.js environment to enable efficient content fetching, minimizing over-fetching and optimizing data delivery."
    }
  ];

  return <PageSection title="Headless WordPress Using Faust.js" description="Created dynamic React components, optimized GraphQL data fetching, and modernized the tech stack for efficient headless WordPress integration." cards={cardsData} />;
}


export default function UnreleasedSection() {
  return (
    <>
      <div className="flex flex-col gap-3 w-full">
        <h2 className="font-ibmPlexSerif text-2xl text-primaryText">
          Experimental and Unreleased Projects
        </h2>
        <GameSection />
        <hr className=" border-gray-500 border-opacity-40 w-1/3" />
        <HeadlessSection />
      </div>
    </>
  );
}
