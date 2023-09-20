import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const ArtAndDesignPage = dynamic(
  () => import("@/components/PageComponent/ArtAndDesignPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Art & Design",
};
export default async function ArtAndDesign() {
  return (
    <main>
      <ArtAndDesignPage />
    </main>
  );
}
