'use client';
import { FC, ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { KeyboardArrowDown } from "@mui/icons-material"; 

interface CardProps {
  icon: ReactNode; 
  title: string;
  subtitle: string;
  description: string;
}

const AccordionIconCard: FC<CardProps> = ({ icon, title, subtitle, description }) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col border border-gray-500 border-opacity-40 w-full rounded-lg py-6 px-4 items-start gap-3 hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-row justify-between items-center w-full cursor-pointer"  onClick={() => setIsOpen(!isOpen)}>

        {/* icon and title/subtitle */}
        <div className="flex flex-row items-center justify-center gap-3 text-mutedPeriwinkle">
          {icon}

          {/* title and subtitle */}
          <div className="flex flex-col">
            <h3 className="font-ibmPlexSerif text-base text-primaryText">{title}</h3>
            <p className="text-sm text-secondaryText">{subtitle}</p>
          </div>
        </div>

     {/* Open/Closed Animated Arrow Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }} // Rotate animation
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
         <KeyboardArrowDown className="text-secondaryText w-8 h-8" /> 
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden flex flex-col gap-3"
          >
            <hr className="border-gray-500 border-opacity-40" />
            <p className="text-sm text-secondary">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionIconCard;