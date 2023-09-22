import "@/styles/single-page.css";
import "@/styles/news-events.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const LatestNewsPage = dynamic(
  () => import("@/components/PageComponent/LatestNewsPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Latest News",
};
export default async function LatestNews() {
  return (
    <main className="lates__news">
      <LatestNewsPage />
    </main>
  );
}
