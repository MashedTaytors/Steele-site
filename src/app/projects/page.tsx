import React from "react";
import type { Metadata } from "next";
import QRCodeGenerator from "./components/QRGenerator";
import CharacterCounter from "./components/CharacterCounter";

export const metadata: Metadata = {
  title: "Projects | Taylor Steele",
  description: "See past, prestent, and future project notes here and get access to some quick tools to make life a bit easier",
};


export default function Projects() {
  return (
      <div className="flex flex-col items-start justify-between gap-8">
          <div className="flex flex-col gap-8 leading-relaxed font-sourceCodePro text-secondaryText w-full"
          >
            {/* What's cookin' & intro */}
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-ibmPlexSerif text-primaryText font-semibold">What&apos;s cookin&apos;</h1>
              <p className="text-sm leading-relaxed text-primaryText">
              Here&apos;s where I keep the things I&apos;ve been working on — projects from the past and ideas I&apos;m currently exploring. It&apos;s all about continuous learning, growing, and building along the way.
              </p>
            </div>

            {/* Tools */}
            <div className="flex flex-col gap-3"> 
              <h2 className="font-ibmPlexSerif text-xl text-primaryText">Tools</h2>
              <p className="text-xs leading-relaxed text-secondaryText">
              These are tools I&apos;ve put together to address everyday challenges. They&apos;re built with usability in mind and designed to make life a little bit easier. While similar tools exsist, I prefer these to avoid potential security risks from untrusted sources.
              </p>
            </div>


            {/* QR Generator */}
            <div className="flex flex-col gap-3">
              <h3 className="font-ibmPlexSerif text-sm text-primaryText">QR Code Generator</h3>
              <p className="text-xs leading-relaxed text-secondaryText">
              Enter a URL, click generate, and you&apos;re good to go. Personalize the background and foreground colors while keeping contrast in mind for accessibility
              </p>
              <QRCodeGenerator />
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-ibmPlexSerif text-sm text-primaryText">Character Counter</h3>
              <p className="text-xs leading-relaxed text-secondaryText">
              Add your text to monitor the character count as you type.
              </p>
              <CharacterCounter />
            </div>

          </div>
      </div>
  );
}
