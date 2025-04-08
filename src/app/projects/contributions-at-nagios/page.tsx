import React from "react";
import type { Metadata } from "next";
import ModernizationSection from "./components/ModenizationSection";
import UnreleasedSection from "./components/UnreleasedSection";

export const metadata: Metadata = {
  title: "Contributions at Nagios | Taylor Steele",
  description: "During my time at my previous role, I grew as a developer, designer, and marketer",
};

export default function Nagios() {

  return (
      <div className="flex flex-col gap-6 items-center leading-relaxed font-sourceCodePro text-secondaryText w-full">
        {/* Title & intro */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-ibmPlexSerif text-primaryText font-semibold">
            Contributions at Nagios
          </h1>
          <p className="text-base leading-relaxed text-secondaryText">* Due to a non-disclosure agreement, specifics have been withheld.</p>
          <p className="text-base leading-relaxed text-tertiaryText">
          My time with Nagios strengthened my skills as a developer, designer, and marketer. I gained a deeper understanding of server vs. client development, UI/UX principles, the nuances of implementation, and much more.
          </p>
        </div>

        <ModernizationSection />
        <hr className=" border-gray-500 border-opacity-40 w-1/3" />
        <UnreleasedSection />
      </div>
  );
}
