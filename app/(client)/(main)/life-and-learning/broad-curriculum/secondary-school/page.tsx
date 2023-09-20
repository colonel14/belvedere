import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const SecondarySchoolPage = dynamic(
  () => import("@/components/PageComponent/SecondarySchoolPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Secondary School",
};

export default async function SecondarySchool() {
  return (
    <main>
      <SecondarySchoolPage />
    </main>
  );
}
