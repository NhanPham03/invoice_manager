'use client';

import { DocumentDuplicateIcon, HomeIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/home", icon: HomeIcon, },
  { name: "Invoice", href: "/home/invoice", icon: DocumentDuplicateIcon, },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link className={clsx("flex md:flex-none h-[48px] grow items-center justify-center md:justify-start gap-2 rounded-md bg-gray-800 p-3 md:p-2 md:px-3 text-sm font-medium ease-in duration-100 hover:bg-green-950 hover:text-green-600",
            {
              "bg-green-950 text-green-600": pathname === link.href,
            },
          )}
            key={link.name}
            href={link.href}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}