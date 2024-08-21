import React from "react";
import Animated from "@/components/shared/Animated";
import { HeroDesc, HeroHobbies, HeroName, HeroTitle } from "@/constants";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="section">
      <Animated className="text-[27px] mb-14 lg:ml-32 mx-6">
        <h2>{HeroName}</h2>
      </Animated>
      <Animated className="text-5xl md:text-6xl leading-tight md:mb-20 lg:mr-28 lg:ml-32 mx-6">
        <h1>{HeroTitle}</h1>
      </Animated>
      <Animated>
        <Image
          src="/images/mobile-self.jpg"
          alt=""
          width={400}
          height={30}
          className="md:hidden mx-auto px-2 py-10"
        />
      </Animated>
      <Animated className="text-2xl leading-normal mb-10 md:mb-20 lg:mr-28 lg:ml-72 mx-6">
        <p>{HeroDesc}</p>
      </Animated>
      <Animated className="text-xl mx-6 md:text-center">
        <p>{HeroHobbies}</p>
      </Animated>
    </section>
  );
};

export default Hero;
