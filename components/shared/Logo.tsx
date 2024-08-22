"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = () => {
  const pathname = usePathname();

  return (
    <Link href="/" className={`${pathname === "/" && "active-logo"}`}>
      <Image src="/logo/akka.svg" alt="logo" width={70} height={70} />
    </Link>
  );
};

export default Logo;
