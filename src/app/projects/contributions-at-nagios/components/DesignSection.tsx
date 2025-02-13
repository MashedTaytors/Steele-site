import React from "react";
import IconGradientCard from "@/components/Cards/IconGradientCards";
import { Brush, FormatLineSpacingRounded, RotateRight, Search} from '@mui/icons-material';


export default function DesignSection() {
  return (
    <>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-3">
          <h3 className="font-ibmPlexSerif text-lg text-primaryText">
          Design & User Experience
          </h3>
          <p className="text-sm leading-relaxed text-secondaryText">
          Collaborated on UI/UX design, standardized visual elements, and implemented interactive features for consistent, engaging, and user-friendly experiences.
          </p>
        </div>
      </div>

      <div className="flex flex-row w-full flex-wrap gap-6">
        <IconGradientCard
          icon={<Brush className="w-10 h-10" />}
          title="Design Collaboration"
          subtitle="Turning design into experience"
          description="Worked closely with the design team to translate mockups into functional web pages, ensuring accurate implementation of intended user interfaces."
        />
        <IconGradientCard
          icon={<FormatLineSpacingRounded className="w-10 h-10" />}
          title="Standardized UI Elements"
          subtitle="Consistent, user-friendly UI"
          description="Standardized typography, spacing, and layout elements across multiple sites to maintain a consistent brand experience."
        />
        <IconGradientCard
          icon={<RotateRight className="w-10 h-10" />}
          title="Post-Launch Site Redesign"
          subtitle="Redesigns for business needs"
          description="Supported a post-launch site redesign initiative for Nagios.org, implementing changes to reflect an updated visual style and site purpose to align with business goals."
        />
        <IconGradientCard
          icon={<Search className="w-10 h-10" />}
          title="Fuzzy Search Mechanism"
          subtitle="Smarter, faster search."
          description="Developed and implemented a fuzzy search mechanism to help users find relevant content efficiently, even with incomplete or misspelled queries."
        />
      </div>
    </>
  );
}