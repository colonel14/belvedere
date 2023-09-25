import "@/styles/single-page.css";
import client from "@/tina/__generated__/client";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const DramaPage = dynamic(
  () => import("@/components/PageComponent/DramaPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Drama",
};
export default async function Drama() {
  const result = await client.queries.page({
    relativePath: "Drama.md",
  });
  return (
    <main>
      <DramaPage {...result} />
    </main>
  );
}
