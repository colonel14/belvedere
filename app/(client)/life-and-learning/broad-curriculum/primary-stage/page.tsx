import "@/styles/single-page.css";
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
  return (
    <main>
      <PrimaryStagePage />
    </main>
  );
}
