import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ethan Reed for Eau Claire | Taylor Steele",
  description: "Generated by create next app",
};


export default function Projects() {
  return (
      <div className="flex flex-col items-start justify-between gap-8">
          <div className="flex flex-col gap-8 leading-relaxed font-sourceCodePro text-secondaryText w-full"
          >
            {/* What's cookin' & intro */}
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-ibmPlexSerif text-primaryText font-semibold">Ethan Reed for Eau Claire</h1>
              <p className="text-sm leading-relaxed text-primaryText">
              Ethan Reed, a close friend from college, is running for a seat on the Eau Claire City Council. As part of his campaign, I&apos;ve been assisting him in developing a WordPress site to showcase his platform and vision for the community.
              </p>
            </div>

            {/* Tools */}
            <div className="flex flex-col gap-3"> 
              <h2 className="font-ibmPlexSerif text-xl text-primaryText">Coming Soon</h2>
              <p className="text-xs leading-relaxed text-secondaryText">
              The project is still in progress, but I&apos;m currently preparing detailed documentation that will be available here soon. This will include a link to the live site, screenshots of the design, and examples of the graphics I created using Figma. Stay tuned for updates!
              </p>
            </div>


           

          </div>
      </div>
  );
}
