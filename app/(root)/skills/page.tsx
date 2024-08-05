import React from "react";
import Animated from "@/components/shared/Animated";
import {
  FrameworkItems, LangItems,
  LanguagesItems,
  SkillsItems,
  SkillsSubtitle,
  SkillsTitle
} from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Skills = () => {
  return (
    <section className="section">
      <Animated className="text-[27px] mb-10 lg:ml-32 mx-6">
        <h2>{SkillsSubtitle}</h2>
      </Animated>
      <Animated className="text-5xl md:text-6xl mb-20 lg:mr-28 lg:ml-32 mx-6">
        <h1>{SkillsTitle}</h1>
      </Animated>
      <Animated className="text-2xl font-light mb-10 mx-8 lg:ml-20">
        <p>{SkillsItems}</p>
      </Animated>
      <div className="mb-10 mx-10 flex gap-10 justify-evenly">
        <div className="flex flex-col gap-4 just text-xl">
          {LanguagesItems.map((item) => (
            <Animated key={item.label}>
              <Link href={item.route} target={item.route && "_blank"} className="flex gap-2">
                <Image src={item.imageSrc} alt={`${item.label} logo`} width={30} height={30}/>
                <p>{item.label}</p>
              </Link>
            </Animated>
          ))}
        </div>
        <div className="flex flex-col gap-4 text-xl">
          {FrameworkItems.map((item) => (
            <Animated key={item.label}>
              <Link href={item.route} target={item.route && "_blank"} className="flex gap-2">
                <Image src={item.imageSrc} alt={`${item.label} logo`} width={30} height={30}/>
                <p>{item.label}</p>
              </Link>
            </Animated>
          ))}
        </div>
      </div>
      <Animated className="">
        <div className="flex flex-wrap justify-evenly gap-10">
          {LangItems.map((item) => (
            <Link key={item.route} href={item.route} target={item.route && "_blank"}>
              <p className="font-bold uppercase text-lg">{item.language}</p>
              <p>{item.proficiency}</p>
              <Image src="/icons/arrow-right.svg" alt="" width={15} height={15} className="white-logo mt-2" />
            </Link>
          ))}
        </div>
      </Animated>
    </section>
  )
}

export default Skills