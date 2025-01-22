import React from "react";
import SocialIcons from "./SocialIcons";
import Link from "next/link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// TODO: Make a contact me link/form 

const Footer: React.FC = () => {
  return (
    <footer className="flex w-full justify-center py-16 mb-24">
      <div className="flex flex-row w-content">
        <div className="w-2/3 md:w-1/3">
          <SocialIcons />
        </div>
          {/* empty column for layout */}
          <div className="flex justify-end w-1/3 md:w-2/3">
          <Link href="/projects/" className="text-secondaryText text-base font-sourceCodePro">Projects <ArrowForwardIcon /></Link>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
