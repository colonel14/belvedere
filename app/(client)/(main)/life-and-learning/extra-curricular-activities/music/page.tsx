import "@/styles/single-page.css";
import client from "@/tina/__generated__/client";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const MusicPage = dynamic(
  () => import("@/components/PageComponent/MusicPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Music",
};
export default async function Music() {
  const result = await client.queries.page({
    relativePath: "Music.md",
  });

  return (
    <main>
      <MusicPage {...result} />
    </main>
  );
}
