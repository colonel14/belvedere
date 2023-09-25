import "@/styles/single-page.css";
import client from "@/tina/__generated__/client";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const PrimaryWelcomePage = dynamic(
  () => import("@/components/PageComponent/PrimaryWelcomePage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Primary Head’s Welcome",
};
export default async function PrimaryHeadWelcome() {
  const result = await client.queries.page({
    relativePath: "Primary Head.md",
  });
  return (
    <main>
      <PrimaryWelcomePage {...result} />
    </main>
  );
}
