import "@/styles/single-page.css";
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
  return (
    <main>
      <SportsPage />
    </main>
  );
}
