"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const ConditionalBackground = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <main className="root">
      <Image
        src="/backgrounds/macos-monterey-compressed.jpg"
        alt=""
        width={1280}
        height={1000}
        className={`hidden lg:block absolute top-0 left-0 h-screen ${
          pathname !== "/" ? "appear-from-left -z-10" : "-z-20"
        }`}
      />
      <Image
        src="/backgrounds/home-self.jpg"
        alt=""
        width={1280}
        height={1000}
        className={`hidden lg:block absolute top-0 -left-1/2 2xl:-left-1/4 4xl:left-0 -z-20 h-screen w-auto ${
          pathname === "/" ? "appear-from-left -z-10" : "-z-20"
        }`}
      />
      {children}
    </main>
  );
};

export default ConditionalBackground;
