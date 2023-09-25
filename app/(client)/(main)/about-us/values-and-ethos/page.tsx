import "@/styles/single-page.css";
import client from "@/tina/__generated__/client";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const ValuesAndEthosPage = dynamic(
  () => import("@/components/PageComponent/ValuesAndEthosPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Values and Ethos",
};
export default async function VisionAndMission() {
  const result = await client.queries.page({
    relativePath: "Values And Ethos.md",
  });
  return (
    <main>
      <ValuesAndEthosPage {...result} />
    </main>
  );
}
