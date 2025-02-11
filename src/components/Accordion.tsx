'use client';

import { useState } from 'react';
import { KeyboardArrowDown } from "@mui/icons-material"; 
import { motion, AnimatePresence } from "framer-motion";

// TODO: Make more scalable - conent independant from links

interface Section {
  title: string;
  links: Link[];
}

interface Link {
  label: string;
  url: string;
}

interface AccordionsProps {
  sections: Section[];
}

interface AccordionItemProps {
  title: string;
  links: Link[];
}

const Accordions: React.FC<AccordionsProps> = ({ sections }) => {
  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <AccordionItem key={index} title={section.title} links={section.links} />
      ))}
    </div>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-500 border-opacity-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-2 font-medium text-base flex justify-between items-center"
      >
        {title}
      {/* Open/Closed Animated Arrow Icon */}
      <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }} // Rotate animation
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
         <KeyboardArrowDown className="text-secondaryText w-6 h-6" /> 
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.ul 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="flex flex-row items-center pl-4 pb-2 gap-4">
            {links.map((link, index) => (
              <li key={index} className="flex flex-row items-center mt-0">
                <a
                  href={link.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex flex-row items-center text-primaryText hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordions;
