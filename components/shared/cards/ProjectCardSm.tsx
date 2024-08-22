import React from "react";
import { ProjectProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Animated from "../Animated";

const ProjectCardSm = ({
  title,
  description,
  github,
  website,
  year,
  skills,
  imageSrc,
}: ProjectProps) => {
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <Link href={website || github} target="_blank">
        <Animated className="rounded-xl">
          <Image
            src={imageSrc}
            alt={`thumbnail for ${title}`}
            width={150}
            height={150}
            className="transition-transform duration-1000 hover:scale-110"
          />
        </Animated>
      </Link>
      <div className="flex flex-col gap-1">
        <Animated>
          <div className="flex items-end gap-2">
            <h3 className="text-lg font-medium">{title}</h3>
            <Link href={github} target="_blank" className="text-sm underline">
              Github
            </Link>
          </div>
        </Animated>
        <Animated>
          <div className="text-md flex gap-2 font-light">
            <p className="flex items-center rounded-full border border-orange-600 px-2 text-orange-600">
              {year}
            </p>
            <p className="rounded-full border border-orange-600 px-2 text-center text-orange-600">
              {skills.join(" · ")}
            </p>
          </div>
        </Animated>
        <Animated>
          <p className="max-w-[700px] text-sm">{description}</p>
        </Animated>
      </div>
    </div>
  );
};

export default ProjectCardSm;
