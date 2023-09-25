"use client";

import PageHero from "../PageHero";
import PageLinksList from "../PageLinksList";
import Heading from "../Heading";
import LearningArea from "../LearningArea";
import { lifeLearningLinks } from "@/data";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import React from "react";

function EarlyYearsFoundationPage(props) {
  const { data } = useTina(props);

  const list = [
    {
      name: "Communication & Language",
      bgColor: "#65D2DE",
    },
    {
      name: "Physical Development",
      bgColor: "#FFB842",
    },
    {
      name: "Personal, Social, Emotional Development",
      bgColor: "#6AC45B",
    },
  ];
  const list2 = [
    {
      name: "Literacy",
      bgColor: "#FF9BC2",
    },
    {
      name: "Mathematics",
      bgColor: "#FB491C",
    },
    {
      name: "Excessive Art & Design",
      bgColor: "#44508D",
    },
    {
      name: "Understanding the World",
      bgColor: "#046A38",
    },
  ];

  return (
    <div>
      <PageHero
        imageSrc="/early-years-hero.jpg"
        title={
          <>
            Early Years <br />
            Foundation Stage
          </>
        }
        color="#FFB842"
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

                    case "PageBlocksLearningAreas":
                      return (
                        <React.Fragment key={i}>
                          <div
                            data-tina-field={tinaField(
                              data.page,
                              `blocks[${i}]`
                            )}
                          >
                            <LearningArea
                              title={block.areaTitle}
                              list={block.areaList || list}
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

export default EarlyYearsFoundationPage;
