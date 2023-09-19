"use client";

import Image from "next/image";
import PageHero from "../PageHero";
import KnowMore from "../KnowMore";
import PageLinksList from "../PageLinksList";
import Heading from "../Heading";

function DramaPage() {
  return (
    <main>
      <PageHero imageSrc="/drama-hero.jpg" title="Drama" color="#FB491C" />
      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-8 app__section-left">
                <Heading
                  title={
                    <>
                      that is the
                      <br />
                      question.
                    </>
                  }
                  subtitle="To be, or not to be:"
                  titleColor="#046A38"
                  subtitleColor="#6AC45B"
                />
                <p className="page__text">
                  Drama at Belvedere is more than annual performances; it is a
                  means for our pupils to develop creative abilities, find their
                  own unique voices, and practise self-expression. We encourage
                  our pupils to come together through drama to share their
                  thoughts, ideas, and interpretations. At Belvedere, creative
                  expression is one of several outlets aimed at providing pupils
                  with a rich and rewarding environment. In addition to better
                  academic performance, participating in drama and theatre
                  significantly improves confidence and one’s perception of the
                  self. Pupils are taught collaboration and listening skills,
                  encouraged to speak up and express themselves, and ultimately
                  develop empathy for others.
                </p>
              </div>
              <div className="col-span-4 app__section-right">
                <PageLinksList />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/drama-footer.jpg"
        width={100}
        height={100}
        className="w-full h-[245px] lg:h-[495px] object-cover grayscale"
        unoptimized
        alt="footer image"
      />
      <KnowMore />
    </main>
  );
}

export default DramaPage;
