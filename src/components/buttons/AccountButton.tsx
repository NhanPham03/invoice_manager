'use client';

import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import * as Cookie from "typescript-cookie";

export default function AccountButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const accessToken = Cookie.getCookie("accessToken");
    setIsLoggedIn(!!accessToken);
  }, []);

  const handleClick = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, [setIsOpen])

  const handleLogout = useCallback(() => {
    Cookie.removeCookie("accessToken");
    setIsLoggedIn(false);
    setIsOpen(false);
  }, [])

  return (
    <div className="relative flex justify-center w-full">
      <button className="flex md:flex-none h-[48px] w-full grow items-center justify-center md:justify-start gap-2 rounded-md bg-gray-800 p-3 md:p-2 md:px-3 text-sm font-medium ease-in duration-100 hover:bg-green-950 hover:text-green-600"
        onClick={handleClick}
      >
        <UserIcon className="w-6" />
        <p className="hidden md:block">Account</p>
      </button>

      {isOpen && (
        <div className="absolute w-[160px] rounded-[8px] overflow-hidden top-2/3 right-0 mr-2 mt-2 md:left-full md:top-1/2 md:ml-2 md:mr-0 md:mt-0 md:-translate-y-2/3 shadow-xl bg-slate-800">
          <div className="flex flex-col">
            {isLoggedIn ? (
              <button className="px-1 py-2 text-sm text-center font-semibold transition ease-in duration-100 hover:bg-green-950 hover:text-green-600"
                onClick={handleLogout}
              >
                Log out
              </button>
            ) : (
              <Link className="px-1 py-2 text-sm text-center font-semibold transition ease-in duration-100 hover:bg-green-950 hover:text-green-600"
                href={pathname + "?show=login"}
                onClick={handleClick}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}