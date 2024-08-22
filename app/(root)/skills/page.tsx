import React from "react";
import Animated from "@/components/shared/Animated";
import {
  FrameworkItems,
  LangItems,
  LanguagesItems,
  SkillsItems,
  SkillsSubtitle,
  SkillsTitle,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Skills = () => {
  return (
    <section className="section">
      <Animated className="mx-6 mb-10 text-[27px] lg:ml-32">
        <h2>{SkillsSubtitle}</h2>
      </Animated>
      <Animated className="mx-6 mb-20 text-5xl md:text-6xl lg:ml-32 lg:mr-28">
        <h1>{SkillsTitle}</h1>
      </Animated>
      <Animated className="mx-8 mb-10 text-2xl font-light lg:ml-20">
        <p>{SkillsItems}</p>
      </Animated>
      <div className="mx-10 mb-10 flex justify-evenly gap-10">
        <div className="just flex flex-col gap-4 text-xl">
          {LanguagesItems.map((item) => (
            <Animated key={item.label}>
              <Link
                href={item.route}
                target={item.route && "_blank"}
                className="flex gap-2"
              >
                <Image
                  src={item.imageSrc}
                  alt={`${item.label} logo`}
                  width={30}
                  height={30}
                />
                <p>{item.label}</p>
              </Link>
            </Animated>
          ))}
        </div>
        <div className="flex flex-col gap-4 text-xl">
          {FrameworkItems.map((item) => (
            <Animated key={item.label}>
              <Link
                href={item.route}
                target={item.route && "_blank"}
                className="flex gap-2"
              >
                <Image
                  src={item.imageSrc}
                  alt={`${item.label} logo`}
                  width={30}
                  height={30}
                />
                <p>{item.label}</p>
              </Link>
            </Animated>
          ))}
        </div>
      </div>
      <Animated className="">
        <div className="flex flex-wrap justify-evenly gap-10">
          {LangItems.map((item) => (
            <Link
              key={item.route}
              href={item.route}
              target={item.route && "_blank"}
            >
              <p className="text-lg font-bold uppercase">{item.language}</p>
              <p>{item.proficiency}</p>
              <Image
                src="/icons/arrow-right.svg"
                alt=""
                width={15}
                height={15}
                className="white-logo mt-2"
              />
            </Link>
          ))}
        </div>
      </Animated>
    </section>
  );
};

export default Skills;
