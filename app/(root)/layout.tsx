import React from "react";
import Header from "@/components/shared/Header";
import Logo from "@/components/shared/Logo";
import Footer from "@/components/shared/Footer";
import ConditionalBackground from "@/components/shared/ConditionalBackground";

export default function Layout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConditionalBackground>
      <div className="logo hover-rotate">
        <Logo />
      </div>
      <div className="content">
        <Header />
        {children}
        <Footer />
      </div>
    </ConditionalBackground>
  );
}
