import client from "@/tina/__generated__/client";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const EventsPage = dynamic(
  () => import("@/components/PageComponent/EventsPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Events",
};
export default async function Events({ searchParams }: any) {
  const result = await client.queries.eventConnection({
    filter: { title: { startsWith: searchParams.q } },
  });

  return (
    <main className="events">
      <EventsPage {...result} />
    </main>
  );
}
