"use client";

import PageHero from "../PageHero";
import PageLinksList from "../PageLinksList";
import Heading from "../Heading";
import GridList from "../GridList";
import Image from "next/image";
import KnowMore from "../KnowMore";
import { lifeLearningLinks } from "@/data";

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

function TeachingMethodologyPage() {
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
    <main>
      <PageHero
        imageSrc="/teaching-methodology-hero.jpg"
        title="Teaching Methodology"
        color="#046A38"
      />

      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-8 app__section-left">
                <Heading
                  title="Our Pupils."
                  subtitle="We care about"
                  titleColor="#6AC45B"
                  subtitleColor="#6AC45B"
                />
                <p className="page__text">
                  The Belvedere School placesemphasis on the notion thatteaching
                  and learning areas significant as curriculumcontent in
                  determining pupilprogress and achievement.To this end, we seek
                  todevelop shared experiencesbetween learners themselvesand the
                  value of formal andinformal learning situations.
                </p>
                <div className="mt-20">
                  <Heading
                    title={
                      <>
                        STEAM <br />
                        Education
                      </>
                    }
                    titleColor="#0F213F"
                  />
                </div>
                <p className="page__text">
                  Pupils of the 21st century cannot and should not receive an
                  education that was created centuries ago to suit an
                  environment that no longer exists. Today’s complex world
                  requires fluid and dynamic learning that is relevant to a
                  world that is changing exponentially at a rapid rate. This is
                  where Belvedere School, Cairo incorporates STEAM education
                  within the curriculum, allowing pupils to learn through life
                  experiences rather than textbooks. Through project-based,
                  inquiry-based, and problem-based learning, interdisciplinary
                  and multidisciplinary learning activities are created with a
                  learning environment that fosters 21st-century skills.
                </p>
                <GridList list={list} columnsCount={4} />
              </div>
              <div className="col-span-4 app__section-right">
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
    </main>
  );
}

export default TeachingMethodologyPage;
