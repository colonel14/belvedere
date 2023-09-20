"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function CardsList({ list }) {
  return (
    <div className="card__links-list">
      {list.map((item) => (
        <div
          key={item.href}
          className="card__link-box"
          data-aos="fade-animation"
          data-aos-duration="700"
        >
          <div className="card__link-box-image">
            <Image
              src={item.image}
              height={548}
              width={504}
              className="h-full w-full object-cover"
              alt={item.title}
              unoptimized
            />
          </div>
          <div className="card__link-box-info">
            {item.grade && (
              <span className="card__link-grade">{item.grade}</span>
            )}

            <h3
              className={`card__link-title`}
              style={{ color: item.titleColor ? item.titleColor : item.color }}
            >
              {item.title}
            </h3>
            <p className="card__link-description line-clamp-4">
              {item.description}
            </p>
            <Link
              href={item.href}
              className={`card__link-link text-[${item.color}]`}
              style={{ color: item.color }}
            >
              Learn More
              <span
                className={`w-11 h-11 rounded border card__link-icon`}
                style={{ borderColor: item.color }}
              >
                <ChevronRight />
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardsList;
