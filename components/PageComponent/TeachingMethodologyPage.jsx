"use client";

import PageHero from "../PageHero";
import PageLinksList from "../PageLinksList";
import Heading from "../Heading";
import GridList from "../GridList";
import Image from "next/image";
import KnowMore from "../KnowMore";
import { lifeLearningLinks } from "@/data";
import { tinaField, useTina } from "tinacms/dist/react";
import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const linksList = [
  {
    name: "A Broad Curriculum",
    href: "/life-and-learning/broad-curriculum",
  },
  {
    name: "Academic",
    href: "/life-and-learning/academic",
  },
  {
    name: "Extra-curricular Activities",
    href: "/life-and-learning/extra-curricular-activities",
  },
];

function TeachingMethodologyPage(props) {
  const { data } = useTina(props);

  const list = [
    {
      name: "Interdisciplinary Learning",
      bgColor: "#046A38",
    },
    {
      name: "Hands -on Experiences",
      bgColor: "#0F213F",
    },
    {
      name: "Integration of Arts",
      bgColor: "#FB491C",
    },
    {
      name: "Inquiry- Based Learning",
      bgColor: "#65D2DE",
    },
    {
      name: "Technology Integration",
      bgColor: "#44508D",
    },
    {
      name: "Collaboration & Communication",
      bgColor: "#FF9BC2",
    },
    {
      name: "Problem Solving & Critical Thinking",
      bgColor: "#C33734",
    },
    {
      name: "Adaptability & Resilience",
      bgColor: "#FFB842",
    },
  ];

  return (
    <div>
      <PageHero
        imageSrc="/teaching-methodology-hero.jpg"
        title="Teaching Methodology"
        color="#046A38"
      />

      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-9 app__section-left">
                {data?.page?.blocks?.map((block, i) => {
                  switch (block.__typename) {
                    case "PageBlocksHeading":
                      return i > 0 ? (
                        <div className="secondary__heading" key={i}>
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
                        </div>
                      ) : (
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
                <div className="page__image-placeholder">
                  <Image
                    fill
                    src="/explore-placeholder.jpg"
                    alt="explore child potential"
                  />
                </div>
                <div className="page__info-foursquare_sec">
                  <div
                    className="page__info-foursquare_poppins"
                    style={{ color: "#65D2DE" }}
                  >
                    DIFFERENTIATION.
                  </div>
                  <div
                    className="page__info-foursquare_poppins"
                    style={{ color: "#FF9BC2" }}
                  >
                    RELEVANCE
                  </div>
                  <div
                    className="page__info-foursquare_poppins"
                    style={{ color: "#FFB842" }}
                  >
                    COHERENCE.
                  </div>
                  <div
                    className="page__info-foursquare_poppins"
                    style={{ color: "#6AC45B" }}
                  >
                    BREADTH.
                  </div>
                  <div
                    className="page__info-foursquare_poppins"
                    style={{ color: "#2B52AA" }}
                  >
                    BALANCE.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/teaching-methodology-footer.jpg"
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

export default TeachingMethodologyPage;
