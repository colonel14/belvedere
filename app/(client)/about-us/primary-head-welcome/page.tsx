import "@/styles/single-page.css";
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
  return (
    <main>
      <PrimaryWelcomePage />
    </main>
  );
}
