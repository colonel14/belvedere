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
    name: "Primary Head’s Welcome",
    href: "/about-us/primary-head-welcome",
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

function OurHistoryPage() {
  return (
    <div>
      <PageHero
        imageSrc="/our-history-hero.jpg"
        title="Our History"
        color="#FFB842"
      />
      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-8 app__section-left">
                <Heading
                  title={
                    <>
                      143 Years of Premium
                      <br />
                      British Education.
                    </>
                  }
                  titleColor="#FB491C"
                />
                <p className="page__text">
                  Belvedere School, Cairo is part of the leading UK-based
                  Belvedere School. Established in 1880, the Belvedere School is
                  an independent co-educational school that has been part of
                  Liverpool’s educational landscape for more than 140 years.
                </p>
                <p className="page__text">
                  We share their legacy of quality and core beliefs, and we are
                  proud of our close ties to Belvedere. We look forward to using
                  their pedagogical know- how and incorporating the best of
                  independent premium British education into our school.
                </p>
                <p className="page__text">
                  Belvedere School, Cairo is directly overseen by Belvedere
                  School in the UK to ensure the school reflects the policies,
                  academic excellence, and teaching quality that represent
                  Belvedere UK. Teacher training will be conducted under the
                  guidance of Belvedere School UK to maintain the same level of
                  teaching and learning.
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
        src="/our-history-footer.jpg"
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

export default OurHistoryPage;
