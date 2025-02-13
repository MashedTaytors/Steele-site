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
        <div className="flex flex-col w-content fixed top-24 border-gray-500 border-opacity-40 gap-2 h-32 border-b md:w-1/4 md:min-h-[calc(100vh-4rem)] md:border-r md:border-b-0 lg:w-80">
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
    );
}
