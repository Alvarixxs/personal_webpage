import React from "react";
import Animated from "@/components/shared/Animated";
import { ProjectsItems, ProjectsSubtitle, ProjectsTitle } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/shared/cards/ProjectCard";

const Projects = () => {
  return (
    <section className="section">
      <Animated className="mx-6 mb-10 text-[27px] lg:ml-32">
        <h2>{ProjectsSubtitle}</h2>
      </Animated>
      <Animated className="mx-6 mb-14 text-5xl md:text-6xl lg:ml-32 lg:mr-28">
        <h1>{ProjectsTitle}</h1>
      </Animated>
      <div className="mx-10 mb-10 flex flex-wrap justify-center gap-10 lg:mb-0">
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
      <Link href="/projects/more" className="mx-10 flex gap-1">
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
