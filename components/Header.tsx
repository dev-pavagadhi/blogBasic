"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoLogoTwitter } from "react-icons/io";

const navLinks = [
  {
    href: "/",
    lable: "Home",
  },
  {
    href: "/posts",
    lable: "Posts",
  },
  {
    href:"/createPost",
    label:"createPost"
  }
];

function Header() {
    const pathname=usePathname()
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b ">
      <IoLogoTwitter />
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link className={` ${
                pathname===link.href ? "text-zinc-900":"text-zinc-400"
              }`} href={link.href}>
                {link.lable}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
