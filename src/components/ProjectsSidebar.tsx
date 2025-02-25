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
    {
        name: 'Contributions at Nagios',
        href: '/projects/contributions-at-nagios'
    },
    {
        name: 'Ethan Reed for Eau Claire',
        href: '/projects/ethan-reed-campaign'
    },
];

export default function ProjectsSidebar(): JSX.Element {
    const pathname = usePathname();

    return (
        <div className="flex flex-col w-full justify-start items-start sticky top-20 border-gray-500 border-opacity-40  min-h-[calc(100vh-4rem)] border-b md:w-1/3 md:min-h-[calc(100vh-5rem)] md:border-r md:border-b-0 lg:w-1/4">
        <div className="flex flex-col gap-2 w-content h-full"> 
            {/* hover:overflow-y-scroll once there are more nav items */}
            {links.map((link) => {
                const isActive = pathname.startsWith(link.href);

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex grow items-start justify-start gap-2 rounded-md text-sm font-medium hover:text-buttonText md:flex-none',
                            {
                                // Ensure "Projects" has ibmPlexSerif always
                                'text-xl text-primaryText font-bold font-ibmPlexSerif': link.name === 'Projects',
                                // Other links use sourceCodePro with active state handled
                                'text-secondaryText font-sourceCodePro': link.name !== 'Projects' && !isActive,
                                'text-secondaryText font-sourceCodePro font-bold': link.name !== 'Projects' && isActive,
                            },
                        )}
                    >
                        <p className="block">{link.name}</p>
                    </Link>
                );
            })}
        </div>
        </div>
    );
}
