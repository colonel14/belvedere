import "@/styles/single-page.css";
import dynamic from "next/dynamic";

import client from "@/tina/__generated__/client";

const HomeComponent = dynamic(
  () => import("@/components/PageComponent/HomeComponent"),
  { ssr: false }
);
export default async function Home() {
  const result = await client.queries.page({ relativePath: "home.md" });

  return (
    <main>
      <HomeComponent {...result} />
    </main>
  );
}
