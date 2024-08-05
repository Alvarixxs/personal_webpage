import React from "react";
import {navLinks} from "@/constants";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <nav className="mobile-menu">
      {navLinks.map((item) => (
        <Link key={item.route} href={item.route}>{item.label}</Link>
      ))}
    </nav>
  )
}

export default MobileMenu;