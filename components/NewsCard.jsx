import Image from "next/image";
import Link from "next/link";
import React from "react";

function NewsCard({ item, isEvent }) {
  return (
    <Link
      href={isEvent ? `/events/${item.id}` : `/latest-news/${item.id}`}
      className="news__card"
    >
      <div className="news__card-img">
        <Image
          src={item.image}
          fill
          alt="news image"
          unoptimized
          className="object-cover"
        />
      </div>
      <div className="news__card-info">
        {item.category && <span className="news__card-category">Category</span>}
        <h2 className="news__card-title">{item.title}</h2>
        <p className="news__card-details line-clamp-2">{item.details}</p>
        <time className="news__card-date">
          <Image
            src="/calendar-icon.svg"
            width={20}
            height={17}
            alt="calendar icon"
          />
          {item.date}
        </time>
      </div>
    </Link>
  );
}

export default NewsCard;
