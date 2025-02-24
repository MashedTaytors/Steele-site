import React from "react";
import Accordions from "@/components/Accordion";
import {FilterAlt, Code, FormatLineSpacingRounded, Search, StorageRounded, ContentPasteGoRounded,LoopRounded, HealthAndSafety} from '@mui/icons-material';
import PageSection from "./PageSection";

function DevelopmentSection() {
  const cardsData = [
    {
      icon: <Search className="w-10 h-10" />,
      title: "Fuzzy Search Mechanism",
      subtitle: "Smarter, faster search.",
      description: "Developed and implemented a fuzzy search mechanism to help users find relevant content efficiently, even with incomplete or misspelled queries."
    },
    {
      icon: <FilterAlt className="w-10 h-10" />,
      title: "Dynamic Content Filtering",
      subtitle: "Faster content discovery",
      description: "Integrated dynamic content filtering using custom Elementor widgets and GraphQL API to enhance interactive features, such as content discovery tools."
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Custom Shortcodes",
      subtitle: "Dynamic content simplified",
      description: "Developed shortcodes to dynamically retrieve and render CMS-based content, enabling flexible layouts and streamlined content presentation."
    },
    {
      icon: <StorageRounded className="w-10 h-10" />,
      title: "Custom Post Types and Data Models",
      subtitle: "Organized content structure",
      description: "Designed and structured custom post types and author data models on the backend for Library.Nagios.com, creating a more organized and streamlined publishing process.",
    },
    {
      icon: <ContentPasteGoRounded className="w-10 h-10" />,
      title: "Optimized Content Workflow",
      subtitle: "Faster content updates",
      description: "Assisted in developing and implementing an optimized content workflow to improve collaboration between content and marketing teams."
    }
  ];

  return <PageSection title="Development & Optimization" description="One of my proactive goals was to empower other teams and departments to manage data relevant to their work. For the marketing team, I standardized UI elements and developed modular templates to streamline updates and maintain brand consistency across multiple sites. For another department, I created a solution, using custom post types and fields which are managed by team members, and that information is then dynamically presented to end users. As a result, the sites are more scalable, easier to maintain, and better aligned with business goals." cards={cardsData} />;
}

function PerformanceSection() {
  const cardsData = [
    {
      icon: <LoopRounded className="w-10 h-10" />,
      title: "URL Redirect Management",
      subtitle: "Seamless link redirection",
      description: "Managed manual URL redirections during migrations using Rank Math SEO, ensuring link continuity, minimizing traffic disruptions, and maintaining SEO performance.",
    },
    {
      icon: <HealthAndSafety className="w-10 h-10" />,
      title: "Proactive Site Health Monitoring",
      subtitle: "Reliable site performance",
      description: "Used Screaming Frog to regularly scan for and resolve site issues, including broken links, redirect chains, and missing metadata, maintaining high site health and strong SEO performance."
    }
  ];

  return <PageSection title="SEO & Performance" description=" Boosted SEO rankings, resolved site issues, and optimized performance through URL redirects, crawlability improvements, and faster page load times." cards={cardsData} />;
}

export default function ModernizationSection() {
  const websites = [
    {
      title: "support.nagios.com",
      links: [
        {
          label: "Before",
          url: "https://web.archive.org/web/20220818235149/https://support.nagios.com/",
        },
        {
          label: "Version 1",
          url: "https://web.archive.org/web/20240805121946/https://support.nagios.com/",
        },
        {
          label: "Version 2",
          url: "https://web.archive.org/web/20241217213801/https://support.nagios.com/",
        },
      ],
    },
    {
      title: "www.nagios.com",
      links: [
        {
          label: "Before",
          url: "https://web.archive.org/web/20221023012854/https://www.nagios.com/",
        },
        {
          label: "After",
          url: "https://web.archive.org/web/20241215002432/https://www.nagios.com/",
        },
      ],
    },
    {
      title: "www.nagios.org",
      links: [
        {
          label: "Before",
          url: "https://web.archive.org/web/20221004080704/https://www.nagios.org/",
        },
        {
          label: "Version 1",
          url: "https://web.archive.org/web/20240919071434/https://www.nagios.org/",
        },
        {
          label: "Version 2",
          url: "https://web.archive.org/web/20241217184018/https://www.nagios.org/",
        },
      ],
    },
    {
      title: "library.nagios.com",
      links: [
        {
          label: "Before",
          url: "https://web.archive.org/web/20221023012854/https://www.nagios.com/",
        },
        {
          label: "After",
          url: "https://web.archive.org/web/20250119124607/https://library.nagios.com/",
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-3 w-full">
        <h2 className="font-ibmPlexSerif text-2xl text-primaryText">
          Modernization of Nagios Websites
        </h2>
        <p className="text-base leading-relaxed text-secondaryText">
        I played a key role in planning and developing the Nagios websites, collaborating closely with marketing, design, and executive teams. While adapting to shifting requirements, my team and I successfully delivered each project within critical deadlines. The result was fully responsive WordPress pages that maintained design accuracy and provided an intuitive user experience.
        </p>
      </div>

      <hr className=" border-gray-500 border-opacity-40 w-1/3" />
      <DevelopmentSection />
      <hr className=" border-gray-500 border-opacity-40 w-1/3" />
      <PerformanceSection />
      <hr className=" border-gray-500 border-opacity-40 w-1/3" />

      <div className="flex flex-col gap-3 w-full">
        <h3 className="font-ibmPlexSerif text-lg text-primaryText" >Representation of Work</h3>
        <p>Below, you'll find more context on each website overhaul along with Wayback Machine links showcasing the project’s progression. Please note that the Wayback Machine’s capture process may result in significant load time delays, which do not reflect the actual performance of the sites at that time.</p>
        <p className="text-sm" >* Please note that the Wayback Machine’s capture process may result in significant load time delays, which do not reflect the actual performance of the sites at that time.</p>
        <Accordions sections={websites} />
      </div>
    </>
  );
}

