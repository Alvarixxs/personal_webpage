import React from "react";
import Link from "next/link";
import Animated from "@/components/shared/Animated";
import Image from "next/image";
import { ProjectProps } from "@/types";

const ProjectCard = ({
  title,
  description,
  github,
  website,
  year,
  skills,
  imageSrc,
}: ProjectProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Link href={website ? website : github} target="_blank">
        <Animated className="rounded-xl">
          <Image
            src={imageSrc}
            alt={`thumbnail for ${title}`}
            width={400}
            height={300}
            className="hover:scale-110 transition-transform duration-1000"
          />
        </Animated>
      </Link>
      <Animated>
        <div className="flex gap-2 text-lg font-light">
          <p className="text-orange-600 rounded-full border border-orange-600 px-2 flex items-center">
            {year}
          </p>
          <p className="text-orange-600 rounded-full border border-orange-600 px-2 text-center">
            {skills.join(" · ")}
          </p>
        </div>
      </Animated>
      <Animated>
        <div className="flex gap-2 items-end">
          <h3 className="text-xl font-medium">{title}</h3>
          <Link href={github} target="_blank" className="underline text-sm">
            Github
          </Link>
        </div>
      </Animated>
      <Animated>
        <p className="max-w-[400px] text-sm">{description}</p>
      </Animated>
    </div>
  );
};

export default ProjectCard;
