'use client';
import React from "react";
import NavLinks from "./nav-links";
import Link from 'next/link';

const Header = () => {
    return (
        <header className="flex flex-row justify-center w-full max-h-16">
            <div className="flex flex-row justify-between w-content border-b border-gray-500 border-opacity-40">
                {/* left header */}
                <Link href={"/"} className="flex flex-row h-16 items-center justify-center text-xl font-ibmPlexSerif text-primaryText font-semibold"> Taylor Steele </Link>

                {/* right header */}
                <div className="flex flex-row">
                    <NavLinks />
                </div>
            </div>
        </header>
    );
};

export default Header;
