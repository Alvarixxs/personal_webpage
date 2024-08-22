import React from "react";
import Animated from "@/components/shared/Animated";
import {
  ContactDesc,
  ContactItems,
  ContactSubtitle,
  ContactTitle,
  Email,
  Location,
  PhoneNumber,
} from "@/constants";
import Link from "next/link";
import Image from "next/image";
import CurrentTime from "@/components/shared/CurrentTime";

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
      <Animated className="mb-4 mx-6 text-[28px] md:text-5xl pb-4 border-b hover-link">
        <a href={`mailto:${Email}`}>{Email}</a>
      </Animated>
      <Animated className="mb-20 mx-6 text-3xl md:text-5xl pb-4 text-end border-b">
        <p>{PhoneNumber}</p>
      </Animated>
      <div className="mx-10">
        <div className="flex justify-around items-left flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-4">
            <Animated>
              <p className="text-3xl font-bold">My Digital Spaces.</p>
            </Animated>
            <Animated>
              <div className="flex gap-6">
                {ContactItems.map((item) => (
                  <Link key={item.label} href={item.route} target="_blank">
                    <Image
                      src={item.imageSrc}
                      alt={`${item.label} icon`}
                      height={30}
                      width={30}
                      className="white-logo hover-logo"
                    />
                  </Link>
                ))}
              </div>
            </Animated>
          </div>
          <div className="flex flex-col">
            <Animated>
              <p className="text-3xl font-bold mb-2">Location.</p>
            </Animated>
            <Animated>
              <p className="text-2xl">{Location}</p>
            </Animated>
            <Animated>
              <CurrentTime />
            </Animated>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
