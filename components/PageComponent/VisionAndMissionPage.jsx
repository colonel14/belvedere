"use client";

import PageHero from "../PageHero";
import CardsList from "../CardsList";
import PageLinksList from "../PageLinksList";
import { aboutUsLinks } from "@/data";
import Heading from "../Heading";
import Image from "next/image";
import KnowMore from "../KnowMore";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import React from "react";
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
    name: "Values and Ethos",
    href: "/about-us/values-and-ethos",
  },
];

function VisionAndMissionPage(props) {
  const { data } = useTina(props);

  return (
    <div>
      <PageHero
        imageSrc="/vision-mission-hero.jpg"
        title={
          <>
            Vision & <br />
            Mission
          </>
        }
        color="#FB491C"
      />
      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-8 app__section-left">
                {data?.page?.blocks?.map((block, i) => {
                  switch (block.__typename) {
                    case "PageBlocksHeading":
                      return (
                        <React.Fragment key={i}>
                          <div
                            className="section__heading"
                            data-tina-field={tinaField(
                              data.page,
                              `blocks[${i}]`
                            )}
                          >
                            <Heading
                              title={
                                <TinaMarkdown
                                  content={block.headingTitle}
                                  components={{
                                    p: (props) => <p {...props} />,
                                  }}
                                />
                              }
                              titleColor={block.headingTitleColor}
                              subtitle={block.headingSubtitle}
                              subtitleColor={block.headingSubtitleColor}
                            />
                          </div>
                        </React.Fragment>
                      );
                    case "PageBlocksText":
                      return (
                        <React.Fragment key={i}>
                          <div
                            data-tina-field={tinaField(
                              data.page,
                              `blocks[${i}]`
                            )}
                          >
                            <TinaMarkdown
                              content={block.body}
                              components={{
                                h1: (props) => <h1 {...props} />,
                                h2: (props) => <h2 {...props} />,
                                h3: (props) => <h3 {...props} />,
                                p: (props) => (
                                  <p className="page__text" {...props} />
                                ),
                              }}
                            />
                          </div>
                        </React.Fragment>
                      );

                    case "PageBlocksGrid":
                      return (
                        <React.Fragment key={i}>
                          <div
                            data-tina-field={tinaField(
                              data.page,
                              `blocks[${i}]`
                            )}
                          >
                            <GridList
                              columnsCount={block.columnsCount}
                              list={block.gridList || list}
                            />
                          </div>
                        </React.Fragment>
                      );
                    default:
                      return null;
                  }
                })}

                <div className="mt-12">
                  <h5 className="vision__heading">Our vision</h5>
                  <p className="page__text">
                    Our vision is to cultivate a dynamic international learning
                    environment that fosters creativity, academic excellence,
                    social-emotional learning, resilience, agility, and social
                    responsibility, empowering pupils to positively contribute
                    to their communities while anticipating future demands and
                    preserving cultural heritage
                  </p>
                </div>
                <div className="mt-12">
                  <h5 className="mission__heading">Our mission</h5>
                  <p className="page__text">
                    Our mission is to provide a transformative education that
                    empowers pupils to excel academically, thrive personally,
                    and contribute positively to society.
                  </p>
                  <p className="page__text">
                    Through a holistic approach, we foster a love for learning,
                    nurturing their intellectual curiosity and critical thinking
                    skills. We embrace and celebrate the unique talents and
                    diverse backgrounds of our pupils, fostering an inclusive
                    and respectful community. With a future-focused mindset, we
                    equip our pupils with the knowledge, skills, and
                    adaptability required for success in an ever-changing world.
                  </p>
                  <p className="page__text">
                    Guided by strong values and a commitment to character
                    development, we instill in our pupils a sense of
                    responsibility, integrity, and compassion.
                  </p>
                </div>
              </div>
              <div className="col-span-4 app__section-right">
                <PageLinksList links={aboutUsLinks} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/vision-mission-footer.jpg"
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

export default VisionAndMissionPage;
