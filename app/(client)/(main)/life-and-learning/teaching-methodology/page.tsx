import "@/styles/single-page.css";
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
  return (
    <main>
      <TeachingMethodologyPage />
    </main>
  );
}
