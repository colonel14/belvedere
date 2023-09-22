import Image from "next/image";
import Link from "next/link";
import React from "react";

function RelatedList({ newsList }) {
  return (
    <div className="related__list">
      {newsList.slice(0, 3).map((item) => (
        <Link
          key={item.id}
          href={`/latest-news/${item.id}`}
          className="related__card"
        >
          <div className="related__card-img">
            <Image
              src={item.image}
              fill
              alt="news image"
              unoptimized
              className="object-cover"
            />
          </div>
          <h2 className="related__card-title line-clamp-1">{item.title}</h2>
          <p className="related__card-details line-clamp-2">{item.details}</p>
        </Link>
      ))}
    </div>
  );
}

export default RelatedList;
