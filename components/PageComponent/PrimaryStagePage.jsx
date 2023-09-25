"use client";

import PageHero from "../PageHero";
import PageLinksList from "../PageLinksList";
import Heading from "../Heading";
import GridList from "../GridList";
import { lifeLearningLinks } from "@/data";
import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField, useTina } from "tinacms/dist/react";

function PrimaryStagePage(props) {
  const { data } = useTina(props);

  const list = [
    {
      name: "English",
      bgColor: "#65D2DE",
    },
    {
      name: "Math",
      bgColor: "#FFB842",
    },
    {
      name: "Science",
      bgColor: "#6AC45B",
    },
    {
      name: "Music",
      bgColor: "#FF9BC2",
    },
    {
      name: "History",
      bgColor: "#FB491C",
    },
    {
      name: "Computing",
      bgColor: "#FB491C",
    },
    {
      name: "Geography",
      bgColor: "#FF9BC2",
    },
    {
      name: "Foreign Language",
      bgColor: "#44508D",
    },
    {
      name: "Art & Design",
      bgColor: "#FFB842",
    },
    {
      name: "Physical Education",
      bgColor: "#65D2DE",
    },
  ];

  return (
    <div>
      <PageHero
        imageSrc="/primary-stage-hero.jpg"
        title={
          <>
            Primary <br /> Stage
          </>
        }
        color="#65D2DE"
      />

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
    </div>
  );
}

export default PrimaryStagePage;
