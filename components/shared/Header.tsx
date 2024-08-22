"use client";

import React from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (pathname === "/mobile-menu") {
      router.back();
    } else {
      router.push("/mobile-menu");
    }
  };

  return pathname === "/projects/more" ? (
    <Link
      href="/projects"
      className="self-end mt-4 translate-y-3 md:translate-y-0 mr-8 lg:m-0 lg:sticky lg:top-8 lg:right-8 z-20"
    >
      <Image
        src="/icons/arrow-left.svg"
        alt="arrow left"
        width={40}
        height={40}
        className="white-logo hover-logo"
      />
    </Link>
  ) : (
    <div className="header">
      <ul className="desktop-header">
        {navLinks.map((item) => (
          <li
            key={item.route}
            className={`nav-link ${pathname === item.route && "active-link"}`}
          >
            <Link href={item.route}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <button className="mobile-header" onClick={handleClick}>
        <div
          className={`bar ${
            pathname === "/mobile-menu" && "rotate-45 translate-y-2"
          }`}
        />
        <div className={`bar ${pathname === "/mobile-menu" && "opacity-0"}`} />
        <div
          className={`bar ${
            pathname === "/mobile-menu" && "-rotate-45 -translate-y-3"
          }`}
        />
      </button>
    </div>
  );
};

export default Header;
