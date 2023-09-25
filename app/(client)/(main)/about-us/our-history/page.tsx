import "@/styles/single-page.css";
import client from "@/tina/__generated__/client";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const OurHistoryPage = dynamic(
  () => import("@/components/PageComponent/OurHistoryPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Our History",
};
export default async function OurHistory() {
  const result = await client.queries.page({
    relativePath: "Our History.md",
  });

  return (
    <main>
      <OurHistoryPage {...result} />
    </main>
  );
}
