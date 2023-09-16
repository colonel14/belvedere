"use client";

import Link from "next/link";
import Heading from "./Heading";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";

function Section({ data }) {
  console.log(data);
  return (
    <section className="app__section">
      <div className="container">
        <div className="app__section-inner">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
            <div className="col-span-8 app__section-left">
              <div
                className="section__heading"
                data-tina-field={tinaField(data.page, "heading")}
              >
                <TinaMarkdown
                  content={data.page.heading}
                  components={{
                    h4: (props) => (
                      <h4 className="heading__subtitle" {...props} />
                    ),
                    h3: (props) => <h3 className="heading__title" {...props} />,
                  }}
                />
              </div>
              {/* <Heading
                title="Learning-Centered Educational Institution."
                subtitle="Belvedere School, Cairo is a"
              /> */}

              <div data-tina-field={tinaField(data.page, "body")}>
                <TinaMarkdown
                  content={data.page.body}
                  components={{
                    h1: (props) => <h1 {...props} />,
                    h2: (props) => <h2 {...props} />,
                    h3: (props) => <h3 {...props} />,
                    p: (props) => <p className="page__text" {...props} />,
                  }}
                />
              </div>

              <div id="features">
                <div className="features__heading">
                  <h5 className="features__title">
                    learner-centered education focuses on 3 key
                    <br /> aspects about the learner
                  </h5>
                  <span className="features__subtitle">
                    Each learner is seen as
                  </span>
                </div>
                <div className="features__list">
                  <div className="feature__box">
                    <span className="feature__box-num">1</span>
                    <p className="feature__box-text">
                      Being unique <br /> in meaningful <br />
                      ways
                    </p>
                  </div>
                  <div className="feature__box">
                    <span className="feature__box-num">2</span>
                    <p className="feature__box-text">
                      Having <br /> unbounded <br /> potential.
                    </p>
                  </div>
                  <div className="feature__box">
                    <span className="feature__box-num">3</span>
                    <p className="feature__box-text">
                      Having an <br /> innate desire <br /> to learn
                    </p>
                  </div>
                </div>
              </div>
              <div id="cricles__map">
                <p className="palatino__text">Learners Centred Principles</p>
                <div className="circles__list">
                  <div className="circles__row-1">
                    <div className="map__circle">
                      <p>
                        Let learners{" "}
                        <span className="font-bold">construct</span> their path
                      </p>
                    </div>
                    <div className="map__circle">
                      <p>
                        Encourage{" "}
                        <span className="font-bold">multiple prespectives</span>
                      </p>
                    </div>
                    <div className="map__circle">
                      <p>
                        Prompt learners to{" "}
                        <span className="font-bold">
                          think about their thinking
                        </span>
                      </p>
                    </div>
                    <div className="map__circle">
                      <p>
                        <span className="font-bold">Evaluate </span>
                        learner’s thinking process
                      </p>
                    </div>
                  </div>
                  <div className="circles__row-2">
                    <div className="map__circle">
                      <p>
                        <span className="font-bold">Coach</span> learners to
                        expert performance
                      </p>
                    </div>
                    <div className="map__circle">
                      <p>
                        Situate learning in
                        <span className="font-bold">real-life activities</span>
                      </p>
                    </div>
                    <div className="map__circle">
                      <p>
                        Guide learners to
                        <span className="font-bold"> think like an expert</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 app__section-right">
              <div className="page__info-list">
                <h5 className="page__list-title">Explore this section</h5>
                <ul>
                  <li>
                    Life & Learning
                    <ul>
                      <li>
                        <Link href="/">Academic</Link>
                      </li>
                      <li>
                        A Broad Curriculum
                        <ul>
                          <li>
                            <Link href="/">Early Years Foundation Stage</Link>
                          </li>
                          <li>
                            <Link href="/">Primary Stage</Link>
                          </li>
                          <li>
                            <Link href="/">Secondary School</Link>
                          </li>
                        </ul>
                        <li>
                          <Link href="/">Teaching Methodology</Link>
                        </li>
                      </li>
                      <li>
                        Extra-curricular Activities
                        <ul>
                          <li>
                            <Link href="/">Sports</Link>
                          </li>
                          <li>
                            <Link href="/">Music</Link>
                          </li>
                          <li>
                            <Link href="/">Drama</Link>
                          </li>
                          <li>
                            <Link href="/">Art & Design</Link>
                          </li>
                          <li>
                            <Link href="/">Trips</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
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
