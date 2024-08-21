import React from "react";
import Animated from "@/components/shared/Animated";
import {AwardsSubtitle, AwardsTitle, ProjectsItems, ProjectsSubtitle, ProjectsTitle} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/shared/ProjectCard";

const Projects = () => {
  return (
    <section className="section">
      <Animated className="text-[27px] mb-10 lg:ml-32 mx-6">
        <h2>{ProjectsSubtitle}</h2>
      </Animated>
      <Animated className="text-5xl md:text-6xl mb-14 lg:mr-28 lg:ml-32 mx-6">
        <h1>{ProjectsTitle}</h1>
      </Animated>
      <div className="flex flex-wrap mx-10 gap-10 justify-center">
        {ProjectsItems.map((item) => (
          <ProjectCard
            key={item.title}
            title={item.title}
            description={item.description}
            github={item.github}
            year={item.year}
            skills={item.skills}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects;