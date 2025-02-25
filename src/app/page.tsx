import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import SkillBadge from "@/components/Badges/Badges";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Taylor Steele",
  description: "Web Developer & Digital Marketer with expertise in WordPress, React.js, and SEO. Passionate about building fast, scalable, and user-friendly web solutions.",
};

export default function Home() {
  return (
    <>
      <main className="flex flex-col flex-grow justify-between w-content gap-16 lg:gap-8">
        <div className="flex flex-col gap-4 items-start justify-between py-8 lg:py-16 lg:flex-row">
        {/* Headings and Nav */}
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
          {/* div containing headers */}
            <div className="flex flex-col gap-4"> 
              <h1 className="text-2xl font-ibmPlexSerif text-primaryText font-semibold lg:text-5xl">Taylor Steele</h1>
              <h2 className="text-lg font-sourceCodePro text-secondaryText lg:text-2xl"> Web Development & Marketing </h2>
            </div>
          
             
          </div>

          <div className="flex flex-col gap-8 w-full lg:w-1/2 lg:mt-1">
          {/* Content */}
            <div className="flex flex-col gap-4 leading-relaxed text-base font-sourceCodePro text-secondaryText">
              <p className="text-sm leading-relaxed text-secondaryText">
               In 2022, I graduated from the University of Wisconsin - Stout with a B.S. in Digital Marketing Technology and minored in Computer Science. My degree fused technical knowledge with marketing insights, enabling me to deliver optimized solutions that are goal-aligned.
              </p>
              <p className="text-sm leading-relaxed text-secondaryText">
              My first opportunity after graduation was at Nagios, where I served as a Web Developer on the marketing team. I primarily built and managed WordPress sites, but <Link href="/projects/contributions-at-nagios" className="text-primaryText font-semibold hover:underline">my contributions at Nagios</Link> went beyond that. I participated in multiple initiatives and spearheaded experimental projects using modern frameworks, which really sparked my interest in modular architecture and next-generation web development.
              </p>
              <p className="text-sm leading-relaxed text-secondaryText">
              I am a quick learner and eagerly adapt to new tools and technologies. My skill set is further rounded-out by my strong intrapersonal skills, self-motivation, emotional intelligence, ability to identify trends, and self-renewing ambition. I am a reliable, accountable, and personable asset to any team. 

              </p>
            </div>

            {/* Experience */}
            <div className="flex flex-col mt-6">
              {/* Nagios */}
              <a  href="https://www.nagios.com" target="_blank" rel="noreferrer noopener" aria-label="Web Developer at Nagios (opens in a new tab)">
                <div className="flex flex-col p-4 gap-2 rounded-lg lg:flex-row lg:gap-0 hover:bg-gray-400 hover:bg-opacity-10 ">
                  {/* Timeline */}
                  <div className="flex flex-col lg:w-1/4">
                    <span className="uppercase text-xs text-secondaryText font-sourceCodePro">2022 - 2024</span>
                  </div>
                  {/* Job Description */}
                  <div className="flex flex-col gap-2 lg:w-3/4">
                    <span className="font-semibold text-sm font-ibmPlexSerif">Web Developer · Nagios</span>
                    <p className="text-xs text-secondaryText leading-normal mb-1 font-sourceCodePro">
                      Developed 4 websites, managed 8, built a headless WordPress site with Faust.js, and improved website health by 39% with technical SEO fixes.
                    </p> 
                  
                    <ul className="flex flex-row flex-wrap gap-2">
                      <SkillBadge> HTML &amp; CSS </SkillBadge>
                      <SkillBadge> JavaScript </SkillBadge>
                      <SkillBadge> PHP </SkillBadge>
                      <SkillBadge> WordPress </SkillBadge>
                      <SkillBadge> GraphQL </SkillBadge>
                      <SkillBadge> React.js </SkillBadge>
                    </ul>

                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      
      <Footer />
      </main>
    </>
  );
}
