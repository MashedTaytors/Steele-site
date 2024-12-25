'use client'
import React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    {
      name: 'Projects',
      href: '/projects/'
    },
    { name: 'QR Code Generator', href: '/projects/qr-generator'},
  ];

  export default function NavLinks() { 
    const pathname = usePathname();
    return (
      <>
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex grow items-center text-secondaryText font-ibmPlexSerif justify-center gap-2 rounded-md text-sm font-medium hover:text-buttonText md:flex-none md:justify-start  md:px-3',
                {
                  'text-primaryText': pathname === link.href,
                },
              )}>
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
}