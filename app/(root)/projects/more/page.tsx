import Animated from "@/components/shared/Animated";
import ProjectCardSm from "@/components/shared/cards/ProjectCardSm";
import { ProjectsMoreItems } from "@/constants";
import React from "react";

const ProjectsMore = () => {
  return (
    <div className="projects-more">
      <Animated className="z-10 bg-black pb-16 pt-10 lg:sticky lg:left-0 lg:top-20 lg:pt-0">
        <h1 className="text-5xl">ALL PROJECTS.</h1>
      </Animated>
      <div className="flex flex-col gap-10 pt-0 md:pt-10">
        {ProjectsMoreItems.map((item) => (
          <Animated key={item.title}>
            <ProjectCardSm
              key={item.title}
              title={item.title}
              description={item.description}
              github={item.github}
              website={item.website}
              year={item.year}
              skills={item.skills}
              imageSrc={item.imageSrc}
            />
          </Animated>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMore;
