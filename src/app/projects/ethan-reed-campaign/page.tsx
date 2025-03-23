import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ethan Reed for Eau Claire | Taylor Steele",
  description:
    "Discover how I helped Ethan Reed’s Eau Claire City Council campaign by creating a consistent brand, designing print/digital media, and building a WordPress site to showcase his vision.",
};

export default function Reed() {
  return (
    <div className="flex flex-col items-start justify-between gap-8">
      <div className="flex flex-col gap-8 leading-relaxed font-sourceCodePro text-secondaryText w-full">
        {/* Title & intro */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-ibmPlexSerif text-primaryText font-semibold">
            Ethan Reed for Eau Claire
          </h1>
          <p className="text-sm leading-relaxed text-primaryText">
            Ethan Reed, a fellow alumnus of the University of Wisconsin - Stout, is running for a seat on
            the Eau Claire City Council. I joined his campaign as the Web & Brand Development Manager, where I designed and implemented a
            multimedia marketing strategy to showcase his platform and vision
            for the community. This included establishing a consistent brand
            identity, creating designs for both digital and print media, and
            building the <a href="https://ethandreed.com/" target="_blank"  className="text-primaryText font-semibold hover:underline" >Ethan Reed For City Council</a> website to highlight his campaign&apos;s message.
          </p>
        </div>

        {/* Designing the brand */}
        <div className="flex flex-col gap-3">
          <h2 className="font-ibmPlexSerif text-2xl text-primaryText">
            Designing the Brand
          </h2>
          <p className="text-xs leading-relaxed">
            I worked with Ethan to create a logo, color palette, typography
            heirarchy, and some overarching rules for the brand.
          </p>
          <h3 className="font-ibmPlexSerif text-lg text-primaryText">
            A People-first Logo
          </h3>
          <p className="text-xs leading-relaxed text-secondaryText">
            The logo for light backgrounds the “Clear Water Revival” by Mike
            Berge{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              className="text-primaryText font-semibold hover:underline"
            >
              (CC BY 4.0){" "}
            </a>
            In 2016, Eau Claire residents voted for an unofficial municipal flag
            design. Incorporating the flag into this campaign logo highlights
            the people-first values at the heart of Ethan&apos;s policies—ensuring
            local government reflects the voices, needs, and priorities of the
            community.
          </p>
          <Image
            src="/reedAssets/reedLogosHD.png"
            alt="Light and dark variations of the Ethan Reed For City Council logo"
            width={775}
            height={489.09}
            priority
          />

          <h3 className="font-ibmPlexSerif text-lg text-primaryText">
            The Palette &amp; Typography
          </h3>
          <p className="text-xs leading-relaxed text-secondaryText">
           I created guides for future use on the campaign to ensure consistency. The section below features the color palette and typography scale for the campaign's brand. The layout of the palette is intended to convey the color balance used throughout the brand. 
          </p>
         <div className="bg-slateGrey rounded-lg p-4">
          <Image
            src="/reedAssets/reedPaletteTypography.png"
            alt="The palette and typography used in the Ethan Reed for Eau Claire City Council Campaign"
            width={824}
            height={393}
            priority
          />
          {/* Digital Media */}
            {/* possibly look into this as an option: https://vercel.com/blog/building-a-fast-animated-image-gallery-with-next-js */}
            <h3 className="font-ibmPlexSerif text-lg text-primaryText">
            Print Designs
            </h3>
            <p className="text-xs leading-relaxed text-secondaryText">
              literature for door knocking, postcards, business cards, and yard signs
            </p>
          {/* Print Media */}
  
          </div>
        </div>
      </div>
    </div>
  );
}
