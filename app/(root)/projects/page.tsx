import React from "react";
import Animated from "@/components/shared/Animated";
import {
  AwardsSubtitle,
  AwardsTitle,
  ProjectsItems,
  ProjectsSubtitle,
  ProjectsTitle,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/shared/cards/ProjectCard";

const Projects = () => {
  return (
    <section className="section">
      <Animated className="text-[27px] mb-10 lg:ml-32 mx-6">
        <h2>{ProjectsSubtitle}</h2>
      </Animated>
      <Animated className="text-5xl md:text-6xl mb-14 lg:mr-28 lg:ml-32 mx-6">
        <h1>{ProjectsTitle}</h1>
      </Animated>
      <div className="flex flex-wrap mx-10 mb-10 lg:mb-0 gap-10 justify-center">
        {ProjectsItems.map((item) => (
          <ProjectCard
            key={item.title}
            title={item.title}
            description={item.description}
            github={item.github}
            website={item.website}
            year={item.year}
            skills={item.skills}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
      <Link href="/projects/more" className="flex gap-1 mx-10">
        <Image
          src="/icons/arrow-right.svg"
          alt="arrow-right.svg"
          width={15}
          height={15}
          className="white-logo"
        />
        <p className="text-sm underline">More projects</p>
      </Link>
    </section>
  );
};

export default Projects;
