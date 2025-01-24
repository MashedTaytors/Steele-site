'use client';
import React from "react";
import Link from 'next/link';
import SocialIcons from "./SocialIcons";

const Header = () => {
    return (
        <header className="flex flex-row justify-center w-full max-h-16">
            <div className="flex flex-row justify-between w-full border-b border-gray-500 border-opacity-40">
                {/* left header */}
                <Link href={"/"} className="flex flex-row h-16 items-center justify-center text-2xl font-ibmPlexSerif text-primaryText font-semibold"> Taylor Steele </Link>

                {/* right header */}
                <div className="flex flex-row">
                    <SocialIcons />
                </div>
            </div>
        </header>
    );
};

export default Header;
