import "@/styles/single-page.css";
import client from "@/tina/__generated__/client";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const PrimaryStagePage = dynamic(
  () => import("@/components/PageComponent/PrimaryStagePage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Primary Stage",
};

export default async function PrimaryStage() {
  const result = await client.queries.page({
    relativePath: "Primary Stage.md",
  });

  return (
    <main>
      <PrimaryStagePage {...result} />
    </main>
  );
}
