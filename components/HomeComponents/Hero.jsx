"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTina } from "tinacms/dist/react";

function HomeHero(props) {
  const { data } = useTina(props);
  return (
    <div className="home__hero">
      <Image
        src="/home-hero.jpg"
        fill
        className="home__hero-img object-cover"
        alt="hero image"
      />
      <div className="container">
        <div className="home__hero-inner">
          <div className="home__hero-content">
            <h1 className="hero__title">
              We <span className="text__underline">Prepare</span> For Life.
            </h1>
            <p className="hero__text">
              We aspire to develop a harmonious balance of the moral,
              intellectual, and extracurricular aspects of school life, through
              an affordable, premium educational system that nurtures and
              celebrates the authentic identities and diverse cultural heritages
              of all learners.
            </p>
            <Link href="/" className="app__button">
              Register Now <ChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
