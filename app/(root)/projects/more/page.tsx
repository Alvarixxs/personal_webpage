import Animated from "@/components/shared/Animated";
import ProjectCardSm from "@/components/shared/cards/ProjectCardSm";
import { ProjectsItems, ProjectsMoreItems } from "@/constants";
import React from "react";

const ProjectsMore = () => {
  return (
    <div className="projects-more">
      <Animated className="lg:sticky lg:top-20 lg:left-0 pt-10 lg:pt-0 pb-16 bg-black z-10">
        <h1 className="text-5xl">MORE PROJECTS.</h1>
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
