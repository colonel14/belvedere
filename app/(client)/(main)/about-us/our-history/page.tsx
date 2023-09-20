import "@/styles/single-page.css";
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
  return (
    <main>
      <OurHistoryPage />
    </main>
  );
}
