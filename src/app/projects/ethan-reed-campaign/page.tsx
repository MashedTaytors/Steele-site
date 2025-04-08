import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ethan Reed for Eau Claire | Taylor Steele",
  description:
    "Discover how I helped Ethan Reed&apos;s Eau Claire City Council campaign by creating a consistent brand, designing print/digital media, and building a WordPress site to showcase his vision.",
};

export default function Reed() {
  return (
    <div className="flex flex-col gap-6 items-center leading-relaxed font-sourceCodePro text-secondaryText w-full">
      {/* Title & intro */}
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-ibmPlexSerif text-primaryText font-semibold">
          Ethan Reed for Eau Claire
        </h1>
        <p className="text-base leading-relaxed text-tertiaryText">
          Ethan Reed, a fellow alumnus of the University of Wisconsin - Stout,
          championed a successful campaign for a seat on the Eau Claire City
          Council. Early on, I joined his campaign as the Web & Brand
          Development Manager, where I designed and implemented a multimedia
          marketing strategy to showcase his platform and vision for the
          community. This included establishing a consistent brand identity,
          creating designs for both digital and print media, and building the{" "}
          <a
            href="https://ethandreed.com/"
            target="_blank"
            className="text-primaryText font-semibold hover:underline"
          >
            Ethan Reed For City Council
          </a>{" "}
          website to highlight his campaign&apos;s message.
        </p>
      </div>

      {/* Designing the brand */}
      <div className="flex flex-col gap-3 w-full">
        <h2 className="font-ibmPlexSerif text-2xl text-primaryText">
          Designing the Brand
        </h2>
        <p className="text-sm leading-relaxed text-secondaryText">
          I worked with Ethan to create a logo, color palette, typography
          heirarchy, and some overarching rules for the brand. The brand was
          designed to bring patriotic energy while keeping the roots in Eau
          Claire.
        </p>

        <p className="text-sm leading-relaxed text-secondryText">
        Before beginning website development, I designed mock-ups in Figma for various devices to allow for design reviews ahead of implementation, ultimately streamlining the process. Once approved, I built reusable patterns in WordPress and developed a child theme to maintain consistent styling.
        </p>

        <h3 className="font-ibmPlexSerif text-lg text-primaryText">
          A People-first Logo
        </h3>
        <p className="text-sm leading-relaxed text-secondaryText">
          The logo for light backgrounds the “Clear Water Revival” by Mike Berge{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            className="text-primaryText font-semibold hover:underline"
          >
            (CC BY 4.0){" "}
          </a>
          In 2016, Eau Claire residents voted for an unofficial municipal flag
          design. Incorporating the flag into this campaign logo highlights the
          people-first values at the heart of Ethan&apos;s policies—ensuring
          local government reflects the voices, needs, and priorities of the
          community.
        </p>
        <Image
          src="/reedAssets/reedLogos.png"
          alt="Light and dark variations of the Ethan Reed For City Council logo"
          width={775}
          height={489.09}
          priority
        />

        <h3 className="font-ibmPlexSerif text-lg text-primaryText">
          The Palette &amp; Typography
        </h3>
        <p className="text-sm leading-relaxed text-secondaryText">
          I created guides for future use on the campaign to ensure consistency.
          The section below features the color palette and typography scale for
          the campaign&apos;s brand. The layout of the palette is intended to
          convey the color balance used throughout the brand.
        </p>

        <div className="bg-slateGrey rounded-lg p-4">
          <Image
            src="/reedAssets/reedPaletteTypography.png"
            alt="The palette and typography used in the Ethan Reed for Eau Claire City Council Campaign"
            width={824}
            height={393}
            priority
          />
        </div>
      </div>
      <hr className=" border-gray-500 border-opacity-40 w-1/3" />

      <div className="flex flex-col gap-3">
        <h2 className="font-ibmPlexSerif text-2xl text-primaryText">
          Print Designs
        </h2>
        <p className="text-sm leading-relaxed text-secondaryText">
          I collaborated with Ethan to create all of the printed literature for
          the campaign, including political walk cards, postcards, and yard
          signs. Our goal was to keep information consice and skimmable, while
          providing potential voters an easy path to learn more about the
          campaign.
        </p>
        <p className="text-sm leading-relaxed text-secondaryText">
          Once I recieved the approved text from Ethan, I shifted it into
          different formats to meet campaign needs.
        </p>

        <div className="flex flex-col bg-slateGrey rounded-lg gap-10 p-4">
          {/* Print Media */}
          <Image
            src="/reedAssets/reedDoorLit.png"
            alt="Political walk card for the Ethan Reed for Eau Claire City Council Campaign, split into two vertical sections. 
              Left side: Header reads 'Built for People, Powered by Community.' 
              Text: 'Eau Claire is my home. This city gave me opportunities to build a life, and I want to make sure it does the same for everyone. That is why I am running—to keep Eau Claire affordable, connected, and ready for the future.'
              Sections below outline Ethan’s platform:
              - Investing in Affordable Housing: Support for affordable housing for families, seniors, renters, and people with disabilities.
              - Building Safe Infrastructure: Advocating for safe, pedestrian-friendly streets and transit options.
              - Strengthening our Local Economy: Supporting local businesses, walkable neighborhoods, and smart development.

              At the bottom is a headshot of Ethan Reed and text: 'Vote by April 1. Early voting starts March 18. Select up to 5 candidates for Eau Claire City Council—vote Ethan Reed.'
              Right side: A photo of Ethan Reed at a rally holding a banner reading '100% Renewable Energy by 2050.' Caption says he advocates for renewable energy in the Chippewa Valley.
              Section titled 'Why I Am Running' says: 'I've fought for fair wages, workplace protections, and policies that put Eau Claire families first. I’m running to bring that approach to local government and build a stronger Eau Claire.'
              Below are endorsements from four leaders: Jodi Emerson (State Assembly), Kate Felton and Aaron Brewster (Eau Claire City Councilors), and Matt Lehner (WI College Democrats Chair).
              At the bottom is a QR code linking to ethanreed.com with text: 'Scan the QR code to visit my website.' Also includes donation info: 'Make donations payable to Ethan Reed for Eau Claire City Council, PO Box 681, Eau Claire, WI 54702.'
              "
            width={828}
            height={1001}
          />

          <Image
            src="/reedAssets/reedMailer.png"
            alt="The Mailer used for the Ethan Reed for Eau Claire City Council Campaign. 
              Left side includes key endorsements: Jodi Emerson, Wisconsin State Assembly Member; Kate Felton and Aaron Brewster, Eau Claire City Councilors; and Matt Lehner, WI College Democrats Chair. Ethan's platform includes: investing in affordable housing, building safe infrastructure, and strengthening the local economy. A protest photo shows Ethan holding a sign that reads '100% Renewable Energy by 2050.'
              Right side reads: 'Built for People, Powered by Community. This city gave me opportunities to build a life, and I want to make sure it does the same for everyone. That's why I'm running—to keep Eau Claire affordable, connected, and ready for the future.'
              Call to action: 'Vote by April 1. Early voting starts March 18.' 
              Includes QR code linking to ethanreed.com, a headshot of Ethan Reed, and text 'Learn more about Ethan.'"
            width={827}
            height={1244}
          />

          <Image
            src="/reedAssets/reedLawnSign.png"
            alt="The Yard Sign used for the Ethan Reed for Eau Claire City Council Campaign. 
              Includes QR code linking to ethanreed.com'"
            width={828}
            height={621}
          />
        </div>
      </div>
    </div>
  );
}
