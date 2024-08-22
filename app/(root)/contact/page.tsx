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
      <Animated className="mx-6 mb-10 text-[27px] lg:ml-32">
        <h2>{ContactSubtitle}</h2>
      </Animated>
      <Animated className="mx-6 mb-20 text-6xl md:ml-32">
        <h1>{ContactTitle}</h1>
      </Animated>
      <Animated className="mx-6 mb-20 text-3xl md:mx-20">
        <h2>{ContactDesc}</h2>
      </Animated>
      <Animated className="hover-link mx-6 mb-4 border-b pb-4 text-[28px] md:text-5xl">
        <a href={`mailto:${Email}`}>{Email}</a>
      </Animated>
      <Animated className="mx-6 mb-20 border-b pb-4 text-end text-3xl md:text-5xl">
        <p>{PhoneNumber}</p>
      </Animated>
      <div className="mx-10">
        <div className="items-left flex flex-col justify-around gap-10 md:flex-row">
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
              <p className="mb-2 text-3xl font-bold">Location.</p>
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
