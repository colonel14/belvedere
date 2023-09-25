import "@/styles/single-page.css";
import client from "@/tina/__generated__/client";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const SportsPage = dynamic(
  () => import("@/components/PageComponent/SportsPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Sports",
};
export default async function Sports() {
  const result = await client.queries.page({
    relativePath: "Sports.md",
  });
  return (
    <main>
      <SportsPage {...result} />
    </main>
  );
}
