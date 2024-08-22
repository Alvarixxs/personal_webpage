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
        className={`hidden lg:block absolute lg:fixed top-0 left-0 h-screen -z-20`}
      />
      <Image
        src="/images/home-self.jpg"
        alt=""
        width={1280}
        height={1000}
        className={`hidden lg:block absolute top-0 -left-1/2 2xl:-left-1/4 4xl:left-0 h-screen w-auto -z-20 ${
          pathname === "/" ? "appear-from-left" : "disappear-from-left"
        }`}
      />
      {children}
    </main>
  );
};

export default ConditionalBackground;
