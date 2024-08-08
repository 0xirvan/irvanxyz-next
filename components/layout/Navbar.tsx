"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setNavbar(false);
  };

  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navbar]);
  return (
    <nav className="select-none bg-background px-18">
      <div className="flex justify-between">
        <Link href={"/"} onClick={handleClick} className="flex items-center">
          <h1 className="text-lg font-bold text-zinc-900 dark:text-green-300">
            ./{siteConfig.name}
          </h1>
        </Link>
        <div className="flex gap-4">
          <ul className="flex items-center space-x-4 text-sm text-zinc-500 dark:text-green-300">
            <Link href={"/"} onClick={handleClick} className="hover:underline">
              <p>Home</p>
            </Link>
            <Link
              href={"/dashboard"}
              onClick={handleClick}
              className="hover:underline"
            >
              <p>Dashboard</p>
            </Link>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
