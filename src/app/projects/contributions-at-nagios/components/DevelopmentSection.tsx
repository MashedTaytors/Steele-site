import React from "react";
import IconGradientCard from "@/components/Cards/IconGradientCards";
import { PhoneIphone, FilterAlt, ViewModuleRounded, Code } from '@mui/icons-material';

export default function DevelopmentSection() {
  return (
    <>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-3">
          <h3 className="font-ibmPlexSerif text-lg text-primaryText">
            Development & Optimization
          </h3>
          <p className="text-sm leading-relaxed text-secondaryText">
            Developed responsive, modular, and dynamic web solutions to
            streamline updates, enhance user interactions, and improve content
            discoverability.
          </p>
        </div>
      </div>

      <div className="flex flex-row w-full flex-wrap gap-6">
        <IconGradientCard
          icon={<PhoneIphone className="w-10 h-10" />}
          title="Responsive Development"
          subtitle="Flexible layouts"
          description="Built fully responsive pages using WordPress and Elementor, ensuring consistent user experiences across desktop, tablet, and mobile devices."
        />
        <IconGradientCard
          icon={<FilterAlt className="w-10 h-10" />}
          title="Dynamic Content Filtering"
          subtitle="Faster content discovery"
          description="Integrated dynamic content filtering using custom Elementor widgets and GraphQL API to enhance interactive features, such as the Find a Partner page and content discovery tools."
        />
        <IconGradientCard
          icon={<ViewModuleRounded className="w-10 h-10" />}
          title="Modular Templates"
          subtitle="Flexible, scalable designs"
          description="Developed and implemented modular templates for streamlined updates and easy maintenance across multiple sites."
        />
        <IconGradientCard
          icon={<Code className="w-10 h-10" />}
          title="Custom Shortcodes"
          subtitle="Dynamic content simplified"
          description="Developed shortcodes to dynamically retrieve and render CMS-based content, enabling flexible layouts and streamlined content presentation."
        />
      </div>
    </>
  );
}
