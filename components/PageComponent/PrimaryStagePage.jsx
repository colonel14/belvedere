"use client";

import PageHero from "../PageHero";
import PageLinksList from "../PageLinksList";
import Heading from "../Heading";
import GridList from "../GridList";

function PrimaryStagePage() {
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
    <main>
      <PageHero
        imageSrc="/primary-stage-hero.jpg"
        title="Primary Stage"
        color="#65D2DE"
      />

      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-8 app__section-left">
                <p className="page__text">
                  We believe in the concept of lifelong learning, and in the
                  belief that we are laying the foundations for learning
                  throughout life in terms of skills, strategies and attitudes.
                  We maintain that learning should be a rewarding and an
                  enjoyable experience for everyone. Through our teaching, we
                  equip children with the skills and a broad range of knowledge
                  and understanding that is necessary to be able to make
                  informed choices about the important things in their lives. We
                  believe that appropriate teaching and learning experiences
                  help children to lead safe, healthy, productive, happy and
                  rewarding lives.
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
                  The curriculum at Belvedere School , Cairo has been developed
                  to encompass and enhance the requirements of the National
                  Curriculum. We foster an enjoyment of study through rewarding,
                  stimulating and challenging classwork.
                </p>
                <GridList list={list} />
              </div>
              <div className="col-span-4 app__section-right">
                <PageLinksList />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PrimaryStagePage;
