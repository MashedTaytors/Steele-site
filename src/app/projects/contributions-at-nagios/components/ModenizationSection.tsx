import React from "react";
import Accordions from "@/components/Accordion";
import { PhoneIphone, FilterAlt, ViewModuleRounded, Code, Brush, FormatLineSpacingRounded, RotateRight, Search, StorageRounded, ContentPasteGoRounded,LoopRounded} from '@mui/icons-material';
import PageSection from "./PageSection";

function DevelopmentSection() {
  const cardsData = [
    {
      icon: <PhoneIphone className="w-10 h-10" />, // Removed extra {}
      title: "Responsive Development", // Added missing commas
      subtitle: "Flexible layouts",
      description: "Built fully responsive pages using WordPress and Elementor, ensuring consistent user experiences across desktop, tablet, and mobile devices."
    },
    {
      icon: <FilterAlt className="w-10 h-10" />,
      title: "Dynamic Content Filtering",
      subtitle: "Faster content discovery",
      description: "Integrated dynamic content filtering using custom Elementor widgets and GraphQL API to enhance interactive features, such as the Find a Partner page and content discovery tools."
    },
    {
      icon: <ViewModuleRounded className="w-10 h-10" />,
      title: "Modular Templates",
      subtitle: "Flexible, scalable designs",
      description: "Developed and implemented modular templates for streamlined updates and easy maintenance across multiple sites."
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Custom Shortcodes",
      subtitle: "Dynamic content simplified",
      description: "Developed shortcodes to dynamically retrieve and render CMS-based content, enabling flexible layouts and streamlined content presentation."
    }
  ];

  return <PageSection title="Development & Optimization" description=" Developed responsive, modular, and dynamic web solutions to streamline updates, enhance user interactions, and improve content discoverability." cards={cardsData} />;
}

function DesignSection() {
  const cardsData = [
    {
      icon: <Brush className="w-10 h-10" />,
      title: "Design Collaboration",
      subtitle: "Turning design into experience",
      description: "Worked closely with the design team to translate mockups into functional web pages, ensuring accurate implementation of intended user interfaces.",
    },
    {
      icon: <FormatLineSpacingRounded className="w-10 h-10" />,
      title: "Standardized UI Elements",
      subtitle: "Consistent, user-friendly UI",
      description: "Standardized typography, spacing, and layout elements across multiple sites to maintain a consistent brand experience."
    },
    {
      icon: <RotateRight className="w-10 h-10" />,
      title: "Post-Launch Site Redesign",
      subtitle: "Redesigns for business needs",
      description: "Supported a post-launch site redesign initiative for Nagios.org, implementing changes to reflect an updated visual style and site purpose to align with business goals."
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "Fuzzy Search Mechanism",
      subtitle: "Smarter, faster search.",
      description: "Developed and implemented a fuzzy search mechanism to help users find relevant content efficiently, even with incomplete or misspelled queries."
    }
  ];

  return <PageSection title="Design & User Experience" description=" Collaborated on UI/UX design, standardized visual elements, and implemented interactive features for consistent, engaging, and user-friendly experiences." cards={cardsData} />;
}

function BackendSection() {
  const cardsData = [
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
      description: "Assisted in developing and implementing an optimized content workflow to improve collaboration between content and development teams."
    }
  ];

  return <PageSection title="Backend Development" description="Structured efficient backend systems, optimized workflows, and improved collaboration through custom data models and streamlined content management." cards={cardsData} />;
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
      icon: <FormatLineSpacingRounded className="w-10 h-10" />,
      title: "Performance Optimization",
      subtitle: "Faster, smoother pages",
      description: "Enhanced page load times using Google Lighthouse to diagnose and resolve issues, optimizing asset delivery, compressing images, and implementing lazy loading to reduce layout shifts.",
    },
    {
      icon: <RotateRight className="w-10 h-10" />,
      title: "Proactive Site Health Monitoring",
      subtitle: "Reliable site performance",
      description: "Used Screaming Frog to regularly scan for and resolve site issues, including broken links, redirect chains, and missing metadata, maintaining high site health and strong SEO performance."
    }
  ];

  return <PageSection title="SEO & Performance" description=" Boosted SEO rankings, resolved site issues, and optimized performance through URL redirects, crawlability improvements, and faster page load times." cards={cardsData} />;
}

export default function ModernizationSection() {

  const sections = [
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
          Collaborating with the marketing team, I played a key role in
          overhauling Nagios&apos; primary websites. Below are links from the
          Wayback Machine, showcasing project evolution over time:
        </p>
        <Accordions sections={sections} />
        <p className="text-base leading-relaxed text-secondaryText">
          Facing tight deadlines and evolving requirements, I demonstrated
          adaptability and technical expertise by developing, optimizing, and
          maintaining the sites post-launch. My contributions significantly
          enhanced site health, improved SEO rankings, increased performance
          metrics, and elevated the overall user experience, driving measurable
          business value and long-term sustainability.
        </p>
      </div>

      <hr className=" border-gray-500 border-opacity-40 w-1/3" />
      <DevelopmentSection />
      <hr className=" border-gray-500 border-opacity-40 w-1/3" />
      <DesignSection />
      <hr className=" border-gray-500 border-opacity-40 w-1/3" />
      <BackendSection />
      <hr className=" border-gray-500 border-opacity-40 w-1/3" />
      <PerformanceSection />
    </>
  );
}

