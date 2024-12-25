import React from "react";
import NavLinks from "./nav-links";
// import SocialIcons from "./social-icons";

const Footer: React.FC = () => {
  return (
    <footer className="flex w-full justify-center py-16">
      <div className="flex w-content">
       {/* <SocialIcons /> */}
       <NavLinks />
        {/* empty column for layout */}
        <div className="lg:w-1/2"></div>
      </div>
    </footer>
  );
};

export default Footer;
