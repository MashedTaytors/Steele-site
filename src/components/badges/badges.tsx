import React, { ReactNode }  from "react";

interface SkillBadgeProps {
    children: ReactNode;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ children }) => {
    return(
        <li className="flex items-center rounded-full bg-paleLilac px-2.5 py-0.5 text-xs font-medium leading-5 font-sourceCodePro text-[#1f223e]">
            {children}
        </li>
    )
}

export default SkillBadge;