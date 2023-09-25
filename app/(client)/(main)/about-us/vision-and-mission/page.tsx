import "@/styles/single-page.css";
import client from "@/tina/__generated__/client";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const VisionAndMissionPage = dynamic(
  () => import("@/components/PageComponent/VisionAndMissionPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Vision & Mission",
};
export default async function VisionAndMission() {
  const result = await client.queries.page({
    relativePath: "Vision And Mission.md",
  });
  return (
    <main>
      <VisionAndMissionPage {...result} />
    </main>
  );
}
