import React from "react";
import IconGradientCard from "@/components/Cards/IconGradientCards";
import { StorageRounded, ContentPasteGoRounded} from '@mui/icons-material';

export default function BackendSection() {
  return (
    <>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-3">
          <h3 className="font-ibmPlexSerif text-lg text-primaryText">
          Backend Development
          </h3>
          <p className="text-sm leading-relaxed text-secondaryText">
          Structured efficient backend systems, optimized workflows, and improved collaboration through custom data models and streamlined content management.
          </p>
        </div>
      </div>

      <div className="flex flex-row w-full flex-wrap gap-6">
        <IconGradientCard
          icon={<StorageRounded className="w-10 h-10" />}
          title="Custom Post Types and Data Models"
          subtitle="Organized content structure"
          description="Designed and structured custom post types and author data models on the backend for Library.Nagios.com, creating a more organized and streamlined publishing process."
        />
        <IconGradientCard
          icon={<ContentPasteGoRounded className="w-10 h-10" />}
          title="Optimized Content Workflow"
          subtitle="Faster content updates"
          description="Assisted in developing and implementing an optimized content workflow to improve collaboration between content and development teams."
        />

      </div>
    </>
  );
}