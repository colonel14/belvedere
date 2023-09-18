"use client";

import Image from "next/image";
import PageHero from "../PageHero";
import Section from "../Section";
import KnowMore from "../KnowMore";
import { useTina } from "tinacms/dist/react";

function HomeComponent(props) {
  const { data } = useTina(props);

  return (
    <main>
      <PageHero
        imageSrc="/hero-1.jpg"
        title="Academic"
        color="#C33734"
        data={data}
        query={props.query}
      />
      <Section data={data} />
      <Image
        src="/footer-img.jpg"
        width={100}
        height={100}
        className="w-full h-[245px] lg:h-[495px] object-cover"
        unoptimized
        alt="footer image"
      />
      <KnowMore />
    </main>
  );
}

export default HomeComponent;
