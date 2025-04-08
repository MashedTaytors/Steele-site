'use client';
import React from "react";
import Link from 'next/link';
import SocialIcons from "./SocialIcons";

const Header = () => {
    return (
        <header className="flex flex-row justify-center w-full h-16 fixed top-0 z-50 backdrop-blur-md bg-black/40 md:bg-transparent">
            <div className="flex flex-row justify-center w-full border-b border-gray-500 border-opacity-40">
                {/* left header */}
            <div className="flex flex-row justify-between items-center w-content">
                {/* left header */}
                <Link href={"/"} className="flex flex-row h-16 items-center justify-center text-2xl font-ibmPlexSerif text-primaryText font-semibold"> Taylor Steele </Link>

                {/* right header */}
                <div className="flex flex-row">
                    <SocialIcons />
                </div>
            </div>
            </div>
        </header>
    );
};

export default Header;
