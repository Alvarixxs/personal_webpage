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
      <Link href={website || github} target="_blank">
        <Animated className="rounded-xl">
          <Image
            src={imageSrc}
            alt={`thumbnail for ${title}`}
            width={400}
            height={300}
            className="transition-transform duration-1000 hover:scale-110"
          />
        </Animated>
      </Link>
      <Animated>
        <div className="flex gap-2 text-lg font-light">
          <p className="flex items-center rounded-full border border-orange-600 px-2 text-orange-600">
            {year}
          </p>
          <p className="rounded-full border border-orange-600 px-2 text-center text-orange-600">
            {skills.join(" · ")}
          </p>
        </div>
      </Animated>
      <Animated>
        <div className="flex items-end gap-2">
          <h3 className="text-xl font-medium">{title}</h3>
          <Link href={github} target="_blank" className="text-sm underline">
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
