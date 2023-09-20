"use client";

import PageHero from "../PageHero";
import CardsList from "../CardsList";
import PageLinksList from "../PageLinksList";
import { aboutUsLinks } from "@/data";
import Heading from "../Heading";
import Image from "next/image";
import KnowMore from "../KnowMore";
import GridList from "../GridList";

const linksList = [
  {
    name: "Primary Head’s Welcome",
    href: "/about-us/primary-head-welcome",
  },
  {
    name: "Our History",
    href: "/about-us/our-history",
  },
  {
    name: "Vision & Mission",
    href: "/about-us/vision-and-mission",
  },
];

function ValuesAndEthosPage() {
  const list = [
    {
      name: "Synergy.",
      bgColor: "#FFCB47",
    },
    {
      name: "Integrity.",
      bgColor: "#FF9BC2",
    },
    {
      name: "Respect.",
      bgColor: "#8BCCCF",
    },
    {
      name: "Growth.",
      bgColor: "#041E42",
    },
  ];

  return (
    <div>
      <PageHero
        imageSrc="/values-and-ethos-hero.jpg"
        title={
          <>
            Values <br /> and Ethos
          </>
        }
        color="#65D2DE"
      />
      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-8 app__section-left">
                <Heading
                  title={
                    <>
                      for everyone to <br /> feel valued for <br /> who they
                      are.
                    </>
                  }
                  subtitle={
                    <>
                      We believe that the <br /> best way to create a healthy{" "}
                      <br /> community is
                    </>
                  }
                  titleColor="#FFB842"
                  subtitleColor="#2B52AA"
                />
                <p className="page__text">
                  Belvedere School, Cairo is a diverse and supportive community
                  that enables pupils to thrive academically and succeed in
                  their personal endeavours within and outside school. By
                  setting high expectations for our pupils, we encourage them to
                  set clear goals for themselves and continuously evolve to meet
                  and exceed those goals. Our school values integrity,
                  diversity, innovation, community, well-being, lifelong
                  learning, and resilience. These values drive our approach,
                  creating a thriving environment for pupils.
                </p>

                <div className="mt-12">
                  <Image
                    src="/values-and-ethos-placeholder.jpg"
                    width={100}
                    height={300}
                    className="w-full h-[300px] object-cover"
                    alt="placeholder"
                    unoptimized
                  />
                </div>
                <div className="keywords">
                  <span>Resilliance.</span>
                  <span>Balance.</span>
                  <span>Innovation.</span>
                </div>
                <GridList list={list} columnsCount={4} />
              </div>
              <div className="col-span-4 app__section-right">
                <PageLinksList links={aboutUsLinks} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/values-and-ethos-footer.jpg"
        width={100}
        height={100}
        className="w-full h-[245px] lg:h-[495px] object-cover grayscale"
        unoptimized
        alt="footer image"
      />
      <KnowMore linksList={linksList} />
    </div>
  );
}

export default ValuesAndEthosPage;
