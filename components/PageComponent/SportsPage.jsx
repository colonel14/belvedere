"use client";

import Image from "next/image";
import PageHero from "../PageHero";
import Section from "../Section";
import KnowMore from "../KnowMore";
import { useTina } from "tinacms/dist/react";
import PageLinksList from "../PageLinksList";
import { lifeLearningLinks } from "@/data";

const linksList = [
  {
    name: "Music",
    href: "/life-and-learning/extra-curricular-activities/music",
  },
  {
    name: "Drama",
    href: "/life-and-learning/extra-curricular-activities/drama",
  },
  {
    name: "Art & Design",
    href: "/life-and-learning/extra-curricular-activities/art-and-design",
  },
  {
    name: "Trips",
    href: "/life-and-learning/extra-curricular-activities/trips",
  },
];

function SportsPage() {
  return (
    <main>
      <PageHero imageSrc="/sports-hero.jpg" title="Sports" color="#6AC45B" />
      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-8 app__section-left">
                <p className="page__text">
                  Sports education is a significant pillar of the academic
                  journey, and at Belvedere, we have established comprehensive
                  sports facilities and academic programmes that seamlessly
                  integrate sports instruction. Belvedere pupils will have
                  access to facilities that allow them to practise a myriad of
                  sports within a safe and healthy environment. Physical
                  activity through sports increases physical abilities and is
                  also linked with improved motor and mental skills. Moreover,
                  the nature of individual and team sports introduces pupils to
                  routines and practices crucial to developing and maintaining
                  healthier lifestyles
                </p>
              </div>
              <div className="col-span-4 app__section-right">
                <PageLinksList links={lifeLearningLinks} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/sports-footer.jpg"
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

export default SportsPage;
