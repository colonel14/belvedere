import "@/styles/single-page.css";
import dynamic from "next/dynamic";

import client from "@/tina/__generated__/client";

const AcademicComponent = dynamic(
  () => import("@/components/PageComponent/AcademicPage"),
  { ssr: false }
);
export default async function Home() {
  const result = await client.queries.page({ relativePath: "home.md" });

  return (
    <main>
      <AcademicComponent {...result} />
    </main>
  );
}
