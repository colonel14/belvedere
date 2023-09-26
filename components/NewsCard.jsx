import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";

function NewsCard({ item, isEvent }) {
  console.log(item);
  return (
    <Link
      href={
        isEvent
          ? `/events/${item._sys.breadcrumbs.join("/")}`
          : `/latest-news/${item._sys.breadcrumbs.join("/")}`
      }
      className="news__card"
    >
      <div className="news__card-img">
        <Image
          src={isEvent ? item.eventImg : item.newsImg}
          fill
          alt="news image"
          unoptimized
          className="object-cover"
        />
      </div>
      <div className="news__card-info">
        {isEvent && item.category && (
          <span className="news__card-category">{item.category.title}</span>
        )}
        <h2 className="news__card-title">{item.title}</h2>
        <p className="news__card-details line-clamp-2">{item.excerpt}</p>
        <time className="news__card-date">
          <Image
            src="/calendar-icon.svg"
            width={20}
            height={17}
            alt="calendar icon"
          />
          {format(new Date(item.date), "yyyy-MM-dd")}
        </time>
      </div>
    </Link>
  );
}

export default NewsCard;
