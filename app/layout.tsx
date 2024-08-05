import type { Metadata } from "next";
import {Inter, Work_Sans, Barlow, IBM_Plex_Sans, Roboto, Montserrat, Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"]});

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
