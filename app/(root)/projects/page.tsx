import React from "react";
import Animated from "@/components/shared/Animated";
import {AwardsSubtitle, AwardsTitle, ProjectsItems, ProjectsSubtitle, ProjectsTitle} from "@/constants";
import Image from "next/image";
import Link from "next/link";

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
            <div key={item.github} className="flex flex-col gap-2">
              <Link href={item.website ? item.website : item.github} target="_blank">
                <Animated className="rounded-xl">
                  <Image
                    src={item.imageSrc}
                    alt={`thumbnail for ${item.title}`}
                    width={400}
                    height={300}
                    className="hover:scale-110 transition-transform duration-1000"
                  />
                </Animated>
              </Link>
              <Animated>
                <div className="flex gap-2 text-lg font-light">
                  <p className="text-orange-600 rounded-full border border-orange-600 px-2 flex items-center">{item.year}</p>
                  <p className="text-orange-600 rounded-full border border-orange-600 px-2 text-center">{item.skills.join(" · ")}</p>
                </div>
              </Animated>
              <Animated>
                <div className="flex gap-2 items-end">
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <Link href={item.github} className="underline text-sm">Github</Link>
                </div>
              </Animated>
              <Animated>
                <p className="max-w-[400px] text-sm">{item.description}</p>
              </Animated>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;