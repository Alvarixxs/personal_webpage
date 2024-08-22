import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ADS | Software developer",
  description: "Portfolio website for Alvaro de Santos, Software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
