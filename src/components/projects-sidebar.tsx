'use client';
import React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    {
        name: 'Projects',
        href: '/projects/'
    },
    // {
    //     name: 'QR Code Generator',
    //     href: '/projects/qr-generator'
    // },
];

export default function ProjectsSidebar(): JSX.Element {
    const pathname = usePathname();

    return (
        <div className="flex flex-col w-1/4 border-r border-gray-500 border-opacity-40 h-screen gap-2">
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex grow items-center text-secondaryText justify-center gap-2 rounded-md text-sm font-medium hover:text-buttonText md:flex-none md:justify-start ',
                            {
                                'text-secondaryText font-sourceCodePro': pathname === link.href,
                                'text-xl text-primaryText font-bold font-ibmPlexSerif': link.name === 'Projects', // Add larger font for "Projects"
                            },
                        )}
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </div>
    );
}
