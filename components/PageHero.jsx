"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import AOS from "aos";
import { useEffect } from "react";

function PageHero({ imageSrc, color, title, data, query }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="app__hero">
      <div className="container">
        <div className="app__hero-wrapper">
          <div
            className="app__hero-image"
            // data-tina-field={tinaField(data.page, "heroImg")}
          >
            <Image
              // src={data.page.heroImg || "/hero-1.jpg"}
              src={imageSrc || "/hero-1.jpg"}
              fill
              alt="hero image"
              unoptimized
              className="object-cover"
              priority
            />
          </div>
          <h2
            className={`app__hero-title !bg-[${color}]`}
            style={{ backgroundColor: color }}
            // data-tina-field={tinaField(data.page, "title")}
          >
            {/* {data.page.title} */}
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default PageHero;
