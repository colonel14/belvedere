import "@/styles/single-page.css";
import client from "@/tina/__generated__/client";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const TeachingMethodologyPage = dynamic(
  () => import("@/components/PageComponent/TeachingMethodologyPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Teaching Methodology",
};

export default async function SecondarySchool() {
  const result = await client.queries.page({
    relativePath: "Teaching Page.md",
  });
  return (
    <main>
      <TeachingMethodologyPage {...result} />
    </main>
  );
}
