"use client"

import React from "react";
import {navLinks} from "@/constants";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <ul className="header">
      {navLinks.map((item) => (
        <li key={item.route} className={`nav-link ${pathname === item.route && 'active-link'}`}>
          <Link href={item.route}>{item.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Header;