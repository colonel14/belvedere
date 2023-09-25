import "@/styles/single-page.css";
import dynamic from "next/dynamic";

import client from "@/tina/__generated__/client";
import { Metadata } from "next";

const AcademicPage = dynamic(
  () => import("@/components/PageComponent/AcademicPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Academic",
};
export default async function Academic() {
  const result = await client.queries.page({
    relativePath: "Academic Page.md",
  });

  return (
    <main>
      <AcademicPage {...result} />
    </main>
  );
}
