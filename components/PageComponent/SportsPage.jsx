"use client";

import Image from "next/image";
import PageHero from "../PageHero";
import KnowMore from "../KnowMore";
import { tinaField, useTina } from "tinacms/dist/react";
import PageLinksList from "../PageLinksList";
import { lifeLearningLinks } from "@/data";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import React from "react";
import GridList from "../GridList";
import Heading from "../Heading";

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

function SportsPage(props) {
  const { data } = useTina(props);

  return (
    <div>
      <PageHero imageSrc="/sports-hero.jpg" title="Sports" color="#6AC45B" />
      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-9 app__section-left">
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
              </div>
              <div className="col-span-3 app__section-right">
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
    </div>
  );
}

export default SportsPage;
