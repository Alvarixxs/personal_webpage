import React from "react";
import Animated from "@/components/shared/Animated";
import { HeroDesc, HeroHobbies, HeroName, HeroTitle } from "@/constants";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="section">
      <Animated className="mx-6 mb-14 text-[27px] lg:ml-32">
        <h2>{HeroName}</h2>
      </Animated>
      <Animated className="mx-6 text-5xl leading-tight md:mb-20 md:text-6xl lg:ml-32 lg:mr-28">
        <h1>{HeroTitle}</h1>
      </Animated>
      <Animated>
        <Image
          src="/images/mobile-self.jpg"
          alt=""
          width={400}
          height={30}
          className="mx-auto px-2 py-10 md:hidden"
        />
      </Animated>
      <Animated className="mx-6 mb-10 text-2xl leading-normal md:mb-20 lg:ml-72 lg:mr-28">
        <p>{HeroDesc}</p>
      </Animated>
      <Animated className="mx-6 text-xl md:text-center">
        <p>{HeroHobbies}</p>
      </Animated>
    </section>
  );
};

export default Hero;
