import React from "react";
import Animated from "@/components/shared/Animated";
import {HeroDesc, HeroName, HeroTitle} from "@/constants";

const Hero = () => {
  return (
    <section className="section">
      <Animated className="text-[27px] mb-14 lg:ml-32 mx-6">
        <h2>{HeroName}</h2>
      </Animated>
      <Animated className="text-6xl leading-tight mb-20 lg:mr-28 lg:ml-32 mx-6">
        <h1>{HeroTitle}</h1>
      </Animated>
      <Animated className="text-2xl leading-normal mb-10 lg:mr-28 lg:ml-72 mx-6">
        <p>{HeroDesc}</p>
      </Animated>
    </section>
  )
}

export default Hero;