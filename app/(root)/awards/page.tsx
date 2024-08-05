import React from "react";
import Animated from "@/components/shared/Animated";
import {AwardsItems, AwardsSubtitle, AwardsTitle, ResumeRoute} from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Awards = () => {
  return (
    <section className="section">
      <Animated className="text-[27px] mb-10 lg:ml-32 mx-6">
        <h2>{AwardsSubtitle}</h2>
      </Animated>
      <Animated className="text-5xl md:text-6xl mb-14 lg:mr-28 lg:ml-32 mx-6">
        <h1>{AwardsTitle}</h1>
      </Animated>
      <div className="awards-table">
        <Animated className="awards-separator">
          <div className="awards-row">
            <p className="awards-item-1 font-bold">Year</p>
            <div className="awards-item-2"/>
            <div className="awards-item-3 font-bold">Award</div>
          </div>
        </Animated>
        {AwardsItems.map((item) => (
          <Animated key={item.text} className="awards-separator">
            <Link href={item.route} target="_blank" className="awards-row group">
              <p className="awards-item-1">{item.year}</p>
              <p className="awards-item-2">{item.text}</p>
              <p className="awards-item-3">{item.award}</p>
              <div className="awards-item-4 gray-icon hover-logo">
                <Image src="/icons/arrow-right.svg" alt="right arrow" width={15} height={15} className="white-logo"/>
              </div>
            </Link>
          </Animated>
        ))}
      </div>
      <Animated className="mx-8 lg:ml-32">
        <Link className="text-lg flex items-center gap-2" href={ResumeRoute} target="_blank">
          <Image src="/icons/arrow-right.svg" alt="right arrow" width={15} height={15} className="white-logo"/>
          <p>DOWNLOAD CV</p>
        </Link>
      </Animated>
    </section>
  )
}

export default Awards;