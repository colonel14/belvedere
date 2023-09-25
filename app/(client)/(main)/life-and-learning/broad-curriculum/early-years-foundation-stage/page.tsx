import "@/styles/single-page.css";
import client from "@/tina/__generated__/client";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const EarlyYearsFoundationPage = dynamic(
  () => import("@/components/PageComponent/EarlyYearsFoundationPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Early Years Foundation Stage",
};

export default async function EarlyYearsFoundation() {
  const result = await client.queries.page({
    relativePath: "Early Years Page.md",
  });
  return (
    <main>
      <EarlyYearsFoundationPage {...result} />
    </main>
  );
}
