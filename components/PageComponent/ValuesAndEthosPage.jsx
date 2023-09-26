"use client";

import PageHero from "../PageHero";
import CardsList from "../CardsList";
import PageLinksList from "../PageLinksList";
import { aboutUsLinks } from "@/data";
import Heading from "../Heading";
import Image from "next/image";
import KnowMore from "../KnowMore";
import GridList from "../GridList";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import React from "react";
import { tinaField, useTina } from "tinacms/dist/react";

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
    name: "Vision & Mission",
    href: "/about-us/vision-and-mission",
  },
];

function ValuesAndEthosPage(props) {
  const { data } = useTina(props);

  const list = [
    {
      name: "Synergy.",
      bgColor: "#FFCB47",
    },
    {
      name: "Integrity.",
      bgColor: "#FF9BC2",
    },
    {
      name: "Respect.",
      bgColor: "#8BCCCF",
    },
    {
      name: "Growth.",
      bgColor: "#041E42",
    },
  ];

  return (
    <div>
      <PageHero
        imageSrc="/values-and-ethos-hero.jpg"
        title={
          <>
            Values <br /> and Ethos
          </>
        }
        color="#65D2DE"
      />
      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-8 app__section-left">
                {data?.page?.blocks?.map((block, i) => {
                  switch (block.__typename) {
                    case "PageBlocksHeading":
                      return i > 0 ? (
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
                      ) : (
                        <div className="values__ethos-heading" key={i}>
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

                    default:
                      return null;
                  }
                })}
                <div className="keywords">
                  <span>Resilliance.</span>
                  <span>Balance.</span>
                  <span>Innovation.</span>
                </div>
                {data?.page?.blocks?.map((block, i) => {
                  switch (block.__typename) {
                    case "PageBlocksGrid":
                      return (
                        <div className="values__ethos-grid" key={i}>
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
                        </div>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
              <div className="col-span-4 app__section-right">
                <PageLinksList links={aboutUsLinks} />
                <div className="words__square">
                  <h4 className="words__square-title">
                    Be Bold. Be Brave. Be...
                  </h4>
                  <div className="words__square-list">
                    <p className="">Benevolent</p>
                    <p className="">Exceptional</p>
                    <p className="">Loyal</p>
                    <p className="">Visionary</p>
                    <p className="">Exemplary</p>
                    <p className="">Disciplined</p>
                    <p className="">Empowering</p>
                    <p className="">Reflective</p>
                    <p className="">Ethical</p>
                  </div>
                </div>
                <div className="sidebar__text">
                  We encourage our pupils to be the best versions of themselves,
                  not second-rate versions of others.
                </div>
                <div className="sidebar__text">
                  By giving them high quality education, they can become whoever
                  they aspire to be.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/values-and-ethos-footer.jpg"
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

export default ValuesAndEthosPage;
