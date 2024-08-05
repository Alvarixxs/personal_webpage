import React from "react";
import Header from "@/components/shared/Header";
import Logo from "@/components/shared/Logo";
import Footer from "@/components/shared/Footer";

export default function Layout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="root">
      <div className="logo hover-rotate">
        <Logo />
      </div>
      <div className="content">
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  );
}
