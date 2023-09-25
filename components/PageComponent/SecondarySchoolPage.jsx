"use client";

import PageHero from "../PageHero";
import PageLinksList from "../PageLinksList";
import Heading from "../Heading";
import GridList from "../GridList";
import { lifeLearningLinks } from "@/data";
import React from "react";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

function SecondarySchoolPage(props) {
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
      name: "Biology",
      bgColor: "#FF9BC2",
    },
    {
      name: "Pyhsics",
      bgColor: "#FB491C",
    },
    {
      name: "Business Studies",
      bgColor: "#FB491C",
    },
    {
      name: "Chemistry",
      bgColor: "#FF9BC2",
    },
    {
      name: "Global Perspectives",
      bgColor: "#44508D",
      column: 2,
    },
    {
      name: "Economics",
      bgColor: "#FF9BC2",
    },
    {
      name: "Art & Design",
      bgColor: "#FFB842",
    },
    {
      name: "Literature",
      bgColor: "#65D2DE",
    },
    {
      name: "ICT",
      bgColor: "#FF9BC2",
    },
    {
      name: "Compute Science",
      bgColor: "#FB491C",
    },
    {
      name: "Modern Foreign Language",
      bgColor: "#FB491C",
    },
  ];

  return (
    <div>
      <PageHero
        imageSrc="/secondary-school-hero.jpg"
        title={
          <>
            Secondary <br /> School
          </>
        }
        color="#6AC45B"
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

export default SecondarySchoolPage;
