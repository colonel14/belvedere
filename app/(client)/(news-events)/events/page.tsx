import { Metadata } from "next";
import dynamic from "next/dynamic";

const EventsPage = dynamic(
  () => import("@/components/PageComponent/EventsPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Events",
};
export default async function Events() {
  return (
    <main className="events">
      <EventsPage />
    </main>
  );
}
