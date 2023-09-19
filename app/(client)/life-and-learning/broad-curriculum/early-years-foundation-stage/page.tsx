import "@/styles/single-page.css";
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
  return (
    <main>
      <EarlyYearsFoundationPage />
    </main>
  );
}
