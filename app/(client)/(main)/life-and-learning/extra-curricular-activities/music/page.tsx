import "@/styles/single-page.css";
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
  return (
    <main>
      <MusicPage />
    </main>
  );
}
