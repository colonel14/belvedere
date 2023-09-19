"use client";

import PageHero from "../PageHero";
import CardsList from "../CardsList";
import PageLinksList from "../PageLinksList";
import { aboutUsLinks } from "@/data";
import Heading from "../Heading";
import Image from "next/image";
import KnowMore from "../KnowMore";

const linksList = [
  {
    name: "Our History",
    href: "/about-us/our-history",
  },
  {
    name: "Vision & Mission",
    href: "/about-us/vision-and-mission",
  },
  {
    name: "Values and Ethos",
    href: "/about-us/values-and-ethos",
  },
];

function PrimaryWelcomePage() {
  return (
    <main>
      <PageHero
        imageSrc="/primary-welcome-hero.jpg"
        title="Primary Head’s Welcome"
        color="#046A38"
      />
      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-8 app__section-left">
                <Heading
                  title={
                    <>
                      From the Head of
                      <br />
                      Primary School
                    </>
                  }
                  subtitle="A message"
                  titleColor="#2B52AA"
                  subtitleColor="#2B52AA"
                />
                <p className="page__text">
                  At Belvedere School, Cairo, we are eager to create an
                  environment that produces well-rounded learners prepared for
                  the challenges of today’s fast-paced world. Our school
                  community is made up of and belongs to our pupils and their
                  parents, so we hope to constantly work hand-in-hand to
                  maintain the warm family atmosphere and academic excellence
                  that define Belvedere.
                </p>
                <p className="page__text">
                  Our enthusiastic and committed teachers are dedicated to
                  delivering individualised learning that fosters every pupil’s
                  individual skills in a safe and engaging environment.
                </p>
                <p className="page__text">
                  At Belvedere, we believe that every child can achieve
                  greatness and that greatness is always unique. I am delighted
                  to lead the Primary School in Belvedere School, Cairo as it
                  grows to welcome pupils and families who share our vision and
                  beliefs and look forward to being a part of Belvedere’s
                  community
                </p>
              </div>
              <div className="col-span-4 app__section-right">
                <PageLinksList links={aboutUsLinks} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/primary-welcome-footer.jpg"
        width={100}
        height={100}
        className="w-full h-[245px] lg:h-[495px] object-cover grayscale"
        unoptimized
        alt="footer image"
      />
      <KnowMore linksList={linksList} />
    </main>
  );
}

export default PrimaryWelcomePage;
