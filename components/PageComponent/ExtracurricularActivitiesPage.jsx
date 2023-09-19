"use client";

import Image from "next/image";
import PageHero from "../PageHero";
import KnowMore from "../KnowMore";
import CardsList from "../CardsList";
import PageLinksList from "../PageLinksList";

function ExtracurricularActivitiesPage() {
  const list = [
    {
      image: "/card-img-5.jpg",
      grade: "FSI & FSII",
      title: (
        <>
          <span className="card__link-title-underline !after:bg-[#FFB842]">
            Early Years
          </span>{" "}
          Foundation Stage overview
        </>
      ),
      description:
        "The Early Years Foundation Stage (EYFS) sets the standards that all must meet to ensure that children learn and develop well and are kept healthy and safe. We understand and value the importance of learning through educational play...",
      href: "/life-and-learning/academic",
      color: "#FFB842",
      titleColor: "#0F213F",
    },
    {
      image: "/card-img-6.jpg",
      grade: "Y1 to Y5",
      title: (
        <>
          <span className="card__link-title-underline !after:bg-[#65D2DE]">
            Primary
          </span>{" "}
          <br /> Stage
        </>
      ),
      description:
        "We believe in the concept of lifelong learning, and in the belief that we are laying the foundations for learning throughout life in terms of skills, strategies and attitudes. We maintain that learning should be a rewarding and an enjoyable experience for everyone. Through our teaching, we equip children with the skills and a broad range of knowledge and understanding that is",
      href: "/life-and-learning/academic",
      color: "#65D2DE",
      titleColor: "#0F213F",
    },
    {
      image: "/card-img-7.jpg",
      grade: "Y7 to Sixth Form",
      title: (
        <>
          <span className="card__link-title-underline">Secondary</span> School
        </>
      ),
      description:
        "The Secondary School curriculum is organised into Key Stage 3, Key Stage 4, and Sixth Form/ IBDP, the latter offering a blend of core and optional subjects. All lessons are taught by highly qualified subject experts...",
      href: "/life-and-learning/academic",
      color: "#6AC45B",
      titleColor: "#0F213F",
    },
  ];
  return (
    <main>
      <PageHero
        imageSrc="/broad-curriculum-hero.jpg"
        title="A Broad Curriculum"
        color="#44508D"
      />

      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-8 app__section-left">
                <p className="page__text">
                  The British education system is founded on critical thinking,
                  creativity, and flexibility. At Belvedere School Cairo we
                  offer a genuinely broad curriculum following the British
                  National Curricullum, with generous time allocated to music,
                  sport, art, drama and language. Accordingly, learners engage
                  in academic learning, understand how to implement this
                  knowledge in real-life situations, and delve into
                  extracurricular activities they are passionate about.
                </p>
                <div className="mt-[80px]">
                  <CardsList list={list} />
                </div>
              </div>
              <div className="col-span-4 app__section-right">
                <PageLinksList />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/broad-curriculum-footer.jpg"
        width={100}
        height={100}
        className="w-full h-[245px] lg:h-[495px] object-cover grayscale"
        unoptimized
        alt="footer image"
      />
      <KnowMore />
    </main>
  );
}

export default ExtracurricularActivitiesPage;
