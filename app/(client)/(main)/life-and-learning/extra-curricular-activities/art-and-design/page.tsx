import "@/styles/single-page.css";
import client from "@/tina/__generated__/client";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const ArtAndDesignPage = dynamic(
  () => import("@/components/PageComponent/ArtAndDesignPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Art & Design",
};
export default async function ArtAndDesign() {
  const result = await client.queries.page({
    relativePath: "Art And Design.md",
  });
  return (
    <main>
      <ArtAndDesignPage {...result} />
    </main>
  );
}
