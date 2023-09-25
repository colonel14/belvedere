"use client";
import "swiper/css";
import "swiper/css/pagination";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

function School() {
  const swiperRef = useRef(null);

  const goToPreviousSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="home__school">
      <div className="container">
        <div className="home__school-heading">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco{" "}
          </p>
        </div>
      </div>

      <div className="home__school-slider">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          modules={[Pagination]}
          breakpoints={{
            991: {
              slidesPerView: "auto",
            },
            767: {
              width: 767,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            479: {
              width: 469,
              slidesPerView: 1,
            },
          }}
          spaceBetween={20}
          className="home__school-swiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <div className="slide__item">
              <Image
                src="/slide-1.jpg"
                className="slide__image"
                width={755}
                height={483}
                alt="slide image"
              />
              <h4 className="slide__title">KG Library</h4>
              <p className="slide__details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide__item">
              <Image
                src="/slide-2.jpg"
                className="slide__image"
                width={755}
                height={483}
                alt="slide image"
              />
              <h4 className="slide__title">KG Classroom</h4>
              <p className="slide__details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide__item">
              <Image
                src="/slide-3.jpg"
                className="slide__image"
                width={755}
                height={483}
                alt="slide image"
              />
              <h4 className="slide__title">KG Entrance</h4>
              <p className="slide__details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide__item">
              <Image
                src="/slide-1.jpg"
                className="slide__image"
                width={755}
                height={483}
                alt="slide image"
              />
              <h4 className="slide__title">KG Library</h4>
              <p className="slide__details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="container">
          <div className="school_slider-controls">
            <button
              onClick={goToPreviousSlide}
              className="slider__controls-button"
            >
              <ChevronLeft />
            </button>
            <button onClick={goToNextSlide} className="slider__controls-button">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default School;
