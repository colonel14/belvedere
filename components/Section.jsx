"use client";

import { lifeLearningLinks } from "@/data";

import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React, { useEffect } from "react";
import AOS from "aos";
import PageLinksList from "./PageLinksList";
import Heading from "./Heading";

function Section({ data }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="app__section">
      <div className="container">
        <div className="app__section-inner">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
            <div className="col-span-8 app__section-left">
              <div data-aos="fade-animation" data-aos-duration="700">
                <div data-tina-field={tinaField(data.page, "body")}></div>
              </div>

              {data?.page?.blocks?.map((block, i) => {
                switch (block.__typename) {
                  case "PageBlocksHeading":
                    return (
                      <React.Fragment key={i}>
                        <div
                          className="section__heading"
                          data-tina-field={tinaField(data.page, `blocks[${i}]`)}
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
                          data-tina-field={tinaField(data.page, `blocks[${i}]`)}
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
                  case "PageBlocksFeatures":
                    return (
                      <React.Fragment key={i}>
                        <div
                          id="features"
                          data-aos="fade-animation"
                          data-aos-duration="700"
                          data-tina-field={tinaField(data.page, `blocks[${i}]`)}
                        >
                          <div className="features__heading">
                            <h5 className="features__title">
                              {" "}
                              <TinaMarkdown
                                content={block.title}
                                components={{
                                  p: (props) => <p {...props} />,
                                }}
                              />
                            </h5>
                            <span className="features__subtitle">
                              {block.subtitle}
                            </span>
                          </div>
                          <div className="features__list">
                            {block?.featuresList?.map((item, idx) => (
                              <div
                                key={idx}
                                className="feature__box"
                                style={{ "--accent-color": item.color }}
                              >
                                <span className="feature__box-num">
                                  {idx + 1}
                                </span>
                                <p className="feature__box-text">
                                  {item.title}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </React.Fragment>
                    );

                  case "PageBlocksCircles":
                    return (
                      <React.Fragment key={i}>
                        <div
                          id="cricles__map"
                          data-aos="fade-animation"
                          data-aos-duration="700"
                          data-tina-field={tinaField(data.page, `blocks[${i}]`)}
                        >
                          <p className="palatino__text">{block.circlesTitle}</p>
                          <div className="circles__list">
                            <div className="circles__row-1">
                              {block?.circlesList
                                .slice(0, 4)
                                .map((circle, circleIndex) => (
                                  <div
                                    key={circleIndex}
                                    className="map__circle"
                                    style={{ "--accent-color": circle.color }}
                                  >
                                    <p>
                                      <TinaMarkdown
                                        content={circle.title}
                                        components={{
                                          p: (props) => <p {...props} />,
                                          strong: (props) => (
                                            <strong {...props} />
                                          ),
                                        }}
                                      />
                                    </p>
                                  </div>
                                ))}
                            </div>
                            <div className="circles__row-2">
                              {block?.circlesList
                                .slice(4, 8)
                                .map((circle, circleIndex) => (
                                  <div
                                    key={circleIndex}
                                    className="map__circle"
                                    style={{ "--accent-color": circle.color }}
                                  >
                                    <p>
                                      <TinaMarkdown
                                        content={circle.title}
                                        components={{
                                          p: (props) => <p {...props} />,
                                          strong: (props) => (
                                            <strong {...props} />
                                          ),
                                        }}
                                      />
                                    </p>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  default:
                    return null;
                }
              })}
            </div>
            <div className="col-span-4 app__section-right">
              <PageLinksList links={lifeLearningLinks} />
              <div className="page__info-foursquare">
                <div className="page__info-foursquare_palatino">
                  We encourage a <br /> love of learning <br /> through
                </div>
                <div className="page__info-foursquare_poppins">
                  engaging, <br /> exciting, and <br /> challenging <br />{" "}
                  coursework.
                </div>
              </div>
              <div className="page__info-foursquare_sec">
                <div className="page__info-foursquare_poppins">
                  Life-long <br /> Learning for <br /> the Real World
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
