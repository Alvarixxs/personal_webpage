"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const ConditionalBackground = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <main className="root">
      <Image
        src="/images/macos-monterey-compressed.jpg"
        alt=""
        width={1280}
        height={1000}
        className={`left-0 top-0 -z-20 hidden h-screen lg:fixed lg:block`}
      />
      <Image
        src="/images/home-self.jpg"
        alt=""
        width={1280}
        height={1000}
        className={`absolute -left-1/2 top-0 -z-20 hidden h-screen w-auto lg:block 2xl:-left-1/4 4xl:left-0 ${
          pathname === "/" ? "appear-from-left" : "disappear-from-left"
        }`}
      />
      {children}
    </main>
  );
};

export default ConditionalBackground;
