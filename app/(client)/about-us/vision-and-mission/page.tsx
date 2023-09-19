import "@/styles/single-page.css";
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
  return (
    <main>
      <VisionAndMissionPage />
    </main>
  );
}
