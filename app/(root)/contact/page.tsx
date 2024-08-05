import React from "react";
import Animated from "@/components/shared/Animated";
import {
  AwardsSubtitle,
  ContactDesc,
  ContactSubtitle,
  ContactTitle,
  Email,
  Github,
  Linkedin,
  PhoneNumber,
  X
} from "@/constants";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="section">
      <Animated className="text-[27px] mb-10 lg:ml-32 mx-6">
        <h2>{ContactSubtitle}</h2>
      </Animated>
      <Animated className="mb-20 mx-6 md:ml-32 text-6xl">
        <h1>{ContactTitle}</h1>
      </Animated>
      <Animated className="mb-20 mx-6 md:mx-20 text-3xl">
        <h2>{ContactDesc}</h2>
      </Animated>
      <Animated className="mb-4 mx-6 text-3xl md:text-5xl pb-4 border-b transition-colors duration-500 hover-link">
        <a href={`mailto:${Email}`}>{Email}</a>
      </Animated>
      <Animated className="mb-20 mx-6 text-3xl md:text-5xl pb-4 text-end border-b">
        <p>{PhoneNumber}</p>
      </Animated>
      <Animated className="mx-10">
        <div className="flex gap-6">
          <Link href={X} target="_blank">
            <Image src="/icons/x.svg" alt="x logo" height={30} width={30} className="white-logo hover-logo"/>
          </Link>
          <Link href={Linkedin} target="_blank">
            <Image src="/icons/linkedin.svg" alt="linkedin logo" width={30} height={30} className="white-logo hover-logo"/>
          </Link>
          <Link href={Github} target="_blank">
            <Image src="/icons/github.svg" alt="github logo" width={30} height={30} className="white-logo hover-logo"/>
          </Link>
        </div>
      </Animated>
    </section>
  )
}

export default Contact