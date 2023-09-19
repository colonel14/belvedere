"use client";

import Image from "next/image";
import PageHero from "../PageHero";
import KnowMore from "../KnowMore";
import CardsList from "../CardsList";
import PageLinksList from "../PageLinksList";
import Heading from "../Heading";
import LearningArea from "../LearningArea";
import { lifeLearningLinks } from "@/data";

function EarlyYearsFoundationPage() {
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
    <main>
      <PageHero
        imageSrc="/early-years-hero.jpg"
        title="Early Years Foundation Stage"
        color="#FFB842"
      />

      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-8 app__section-left">
                <p className="page__text">
                  The Early Years Foundation Stage (EYFS) sets the standards
                  that all must meet to ensure that children learn and develop
                  well and are kept healthy and safe. We understand and value
                  the importance of learning through educational play in a
                  child-initiated environment. Our EYFS gives us a unique
                  opportunity to provide a balance between EYFS principles and
                  practices, and the more school-like routines and educational
                  practices at Key Stage 1.{" "}
                </p>
                <Heading
                  title={
                    <>
                      Curriculum & <br />
                      Subjects.
                    </>
                  }
                  subtitle="A look at the"
                  titleColor="#FB491C"
                  subtitleColor="#FFB842"
                />
                <p className="page__text">
                  The curriculum at Belvedere School has been developed to
                  encompass and enhance the requirements of the National
                  Curriculum. We foster an enjoyment of study through rewarding,
                  stimulating and challenging classwork.
                </p>
                <LearningArea title="Primary areas of learning" list={list} />
                <LearningArea title="Primary areas of learning" list={list2} />
              </div>
              <div className="col-span-4 app__section-right">
                <PageLinksList links={lifeLearningLinks} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EarlyYearsFoundationPage;
