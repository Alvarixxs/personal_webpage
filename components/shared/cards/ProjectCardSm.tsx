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
    <div className="flex flex-col md:flex-row gap-5">
      <Link href={website ? website : github} target="_blank">
        <Animated className="rounded-xl">
          <Image
            src={imageSrc}
            alt={`thumbnail for ${title}`}
            width={150}
            height={150}
            className="hover:scale-110 transition-transform duration-1000"
          />
        </Animated>
      </Link>
      <div className="flex flex-col gap-1">
        <Animated>
          <div className="flex gap-2 items-end">
            <h3 className="text-lg font-medium">{title}</h3>
            <Link href={github} target="_blank" className="underline text-sm">
              Github
            </Link>
          </div>
        </Animated>
        <Animated>
          <div className="flex gap-2 text-md font-light">
            <p className="text-orange-600 rounded-full border border-orange-600 px-2 flex items-center">
              {year}
            </p>
            <p className="text-orange-600 rounded-full border border-orange-600 px-2 text-center">
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
