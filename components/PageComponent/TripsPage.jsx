"use client";

import Image from "next/image";
import PageHero from "../PageHero";
import KnowMore from "../KnowMore";
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
];

function TripsPage() {
  return (
    <div>
      <PageHero imageSrc="/trips-hero.jpg" title="Trips" color="#65D2DE" />
      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-9 app__section-left">
                <p className="page__text">
                  School trips at Belvedere are an indispensable aspect of the
                  pupils’ journeys. Acting as both a complementary learning tool
                  and a social activity, trips provide pupils with real-life
                  interpretations of the topics they are learning. While our
                  school trips are mainly educational efforts to contextualise
                  learning, they serve a much greater purpose. Through
                  experiencing an out-of-school setting, pupils understand that
                  learning is not confined to a classroom and that it is, in
                  fact, a lifelong skill that exists within us. Every trip
                  planned by the school is designed to include activities that
                  encourage creative problem- solving, foster interpersonal and
                  intrapersonal skills, and strengthen the bond between
                  Belvedere pupils and teachers. In line with Belvedere’s
                  values, trips are a part of the school’s endeavours to create
                  an enriching environment for pupils that broadens their
                  horizons and leads to academic and personal successes.
                </p>
              </div>
              <div className="col-span-3 app__section-right">
                <PageLinksList links={lifeLearningLinks} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/trips-footer.jpg"
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

export default TripsPage;
