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
    name: "Trips",
    href: "/life-and-learning/extra-curricular-activities/trips",
  },
];

function ArtAndDesignPage() {
  return (
    <main>
      <PageHero
        imageSrc="/art-design-hero.jpg"
        title="Art & Design"
        color="#FFB842"
      />
      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-9 app__section-left">
                <p className="page__text">
                  On the surface, learning through the arts teaches pupils about
                  colour, layout, perspective, and balance, but beneath all
                  that, it carries a much bigger influence on their academic and
                  personal growth. From developing motor, verbal, social,
                  decision- making, risk-taking, and imaginative skills to
                  dissecting complex ideas and innovating solutions, Art and
                  Design can truly transform pupils’ learning. Pupils at
                  Belvedere will benefit from an Art and Design programme
                  designed to promote a sense of confidence, collaboration, and
                  self-expression. Our Belvedere values of celebrating diversity
                  and success teach our pupils to take pride in their work,
                  support their classmates, and accept failure as an opportunity
                  to try again.
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
        src="/art-design-footer.jpg"
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

export default ArtAndDesignPage;
