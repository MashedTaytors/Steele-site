'use client';
import React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// TODO: make stack on mobile 

const links = [
    {
        name: 'Projects',
        href: '/projects/'
    }
    //, {
    //     name: 'QR Code Generator',
    //     href: '/projects/qr-generator'
    // },
];

export default function ProjectsSidebar(): JSX.Element {
    const pathname = usePathname();

    return (
        <div className="flex flex-col w-full border-gray-500 border-opacity-40 gap-2 h-32 border-b md:w-1/4 md:min-h-[calc(100vh-4rem)] md:border-r md:border-b-0">
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex grow items-start text-secondaryText justify-start gap-2 rounded-md text-sm font-medium hover:text-buttonText md:flex-none ',
                            {
                                'text-secondaryText font-sourceCodePro': pathname === link.href, // styling for active link
                                'text-xl text-primaryText font-bold font-ibmPlexSerif': link.name === 'Projects', // Add larger font for "Projects"
                            },
                        )}
                    >
                        <p className="block">{link.name}</p>
                    </Link>
                );
            })}
        </div>
    );
}
