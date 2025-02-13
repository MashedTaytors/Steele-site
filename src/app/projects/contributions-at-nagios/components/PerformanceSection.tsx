import React from "react";
import IconGradientCard from "@/components/Cards/IconGradientCards";
import { LoopRounded, FormatLineSpacingRounded, RotateRight} from '@mui/icons-material';


export default function PerformanceSection() {
  return (
    <>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-3">
          <h3 className="font-ibmPlexSerif text-lg text-primaryText">
          SEO & Performance
          </h3>
          <p className="text-sm leading-relaxed text-secondaryText">
          Boosted SEO rankings, resolved site issues, and optimized performance through URL redirects, crawlability improvements, and faster page load times.
          </p>
        </div>
      </div>

      <div className="flex flex-row w-full flex-wrap gap-6">
        <IconGradientCard
          icon={<LoopRounded className="w-10 h-10" />}
          title="URL Redirect Management"
          subtitle="Seamless link redirection."
          description="Managed manual URL redirections during migrations using Rank Math SEO, ensuring link continuity, minimizing traffic disruptions, and maintaining SEO performance."
        />
        <IconGradientCard
          icon={<FormatLineSpacingRounded className="w-10 h-10" />}
          title="Performance Optimization"
          subtitle="Faster, smoother pages."
          description="Enhanced page load times using Google Lighthouse to diagnose and resolve issues, optimizing asset delivery, compressing images, and implementing lazy loading to reduce layout shifts.."
        />
        <IconGradientCard
          icon={<RotateRight className="w-10 h-10" />}
          title="Proactive Site Health Monitoring"
          subtitle="Reliable site performance."
          description="Used Screaming Frog to regularly scan for and resolve site issues, including broken links, redirect chains, and missing metadata, maintaining high site health and strong SEO performance."
        />
      </div>
    </>
  );
}