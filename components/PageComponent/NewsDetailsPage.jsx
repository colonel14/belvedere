"use client";
import RelatedList from "../RelatedList";
import Image from "next/image";
import { tinaField, useTina } from "tinacms/dist/react";
import { newsList } from "@/data";
import { TinaMarkdown } from "tinacms/dist/rich-text";

function NewsDetailsPage(props) {
  const { data } = useTina(props);

  console.log(data);
  return (
    <div className="details__page news__details">
      <div className="container">
        <div className="details__page-hero">
          <Image
            src={data.post.newsImg || "/details-hero.jpg"}
            fill
            alt="hero image"
            unoptimized
            className="object-cover"
            priority
            data-tina-field={tinaField(data.post, "newsImg")}
          />
        </div>
        <div className="details__page-inner">
          <div className="flex flex-col lg:grid lg:grid-cols-12">
            <div className="col-span-9 app__section-left">
              <h2
                className="details__page-title"
                data-tina-field={tinaField(data.post, "title")}
              >
                {data.post.title}
              </h2>
              <time className="details__page-date">
                <Image
                  src={"/calendar-icon.svg"}
                  width={20}
                  height={17}
                  alt="calendar icon"
                />
                2023/01/13
              </time>
              <div
                className="details__page-content"
                data-tina-field={tinaField(data.post, "body")}
              >
                <TinaMarkdown
                  content={data.post.body}
                  components={{
                    h1: (props) => <h1 {...props} />,
                    h2: (props) => <h2 {...props} />,
                    h3: (props) => <h3 {...props} />,
                    p: (props) => <p className="page__text" {...props} />,
                  }}
                />
              </div>
            </div>
            <div className="col-span-3 app__section-right">
              <div className="related__news">
                <h3 className="related__title">Related</h3>
                <RelatedList newsList={newsList} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetailsPage;
