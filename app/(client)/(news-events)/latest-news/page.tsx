import "@/styles/single-page.css";
import "@/styles/news-events.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import client from "@/tina/__generated__/client";

const LatestNewsPage = dynamic(
  () => import("@/components/PageComponent/LatestNewsPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Latest News",
};
export default async function LatestNews({ searchParams }: any) {
  const categoriesResult = await client.queries.categoryConnection({});

  const result = await client.queries.postConnection({
    filter: {
      title: { startsWith: searchParams.q },
      category: { category: { title: { eq: searchParams.category } } },
    },
  });

  return (
    <main className="lates__news">
      <LatestNewsPage result={result} categoriesResult={categoriesResult} />
    </main>
  );
}
