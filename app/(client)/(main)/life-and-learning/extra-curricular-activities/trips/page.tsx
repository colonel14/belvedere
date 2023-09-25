import "@/styles/single-page.css";
import client from "@/tina/__generated__/client";
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
  const result = await client.queries.page({
    relativePath: "Trips.md",
  });
  return (
    <main>
      <TripsPage {...result} />
    </main>
  );
}
