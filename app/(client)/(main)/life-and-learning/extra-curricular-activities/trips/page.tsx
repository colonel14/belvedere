import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const TripsPage = dynamic(
  () => import("@/components/PageComponent/TripsPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Trips",
};
export default async function Trips() {
  return (
    <main>
      <TripsPage />
    </main>
  );
}
