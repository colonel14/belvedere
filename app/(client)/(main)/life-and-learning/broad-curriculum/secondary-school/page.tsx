import "@/styles/single-page.css";
import client from "@/tina/__generated__/client";
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
  const result = await client.queries.page({
    relativePath: "Secondary School.md",
  });

  return (
    <main>
      <SecondarySchoolPage {...result} />
    </main>
  );
}
