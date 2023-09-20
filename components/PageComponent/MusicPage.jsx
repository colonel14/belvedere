"use client";

import Image from "next/image";
import PageHero from "../PageHero";
import KnowMore from "../KnowMore";
import PageLinksList from "../PageLinksList";
import { lifeLearningLinks } from "@/data";

const linksList = [
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
    <div>
      <PageHero imageSrc="/music-hero.jpg" title="Music" color="#FF9BC2" />
      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-9 app__section-left">
                <p className="page__text">
                  Just like Mathematics, Music is considered by many a universal
                  language, and we feel the same at Belvedere. Our pupils will
                  attend regular music lessons to discover global rhythms,
                  tempos, and instruments that will fuel their love for music.
                  Through music instruction, pupils make scholarly improvements,
                  gainsocial skills, and find a creativeoutlet. Moreover,
                  playing instruments improves dexterity and hand-eye
                  coordination, as the need to perform simultaneous tasks
                  fosters brain development. Music education is also an
                  exceptional method to develop memorisation skills. Since
                  pupils will be playing an instrument, reading sheet music, and
                  recalling lyrics at the same time, the brain’s memory centre
                  is in constant motion.
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
        src="/music-footer.jpg"
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

export default SportsPage;
