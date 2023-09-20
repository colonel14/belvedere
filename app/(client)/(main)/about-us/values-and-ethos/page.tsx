import "@/styles/single-page.css";
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
  return (
    <main>
      <ValuesAndEthosPage />
    </main>
  );
}
