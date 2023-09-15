import "@/styles/single-page.css";
import dynamic from "next/dynamic";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import KnowMore from "@/components/KnowMore";

const Section = dynamic(() => import("@/components/Section"), { ssr: false });
export default function Home() {
  return (
    <main>
      <PageHero imageSrc="/hero-1.jpg" title="Academic" color="#C33734" />
      <Section />
      <Image
        src="/footer-img.jpg"
        width={100}
        height={100}
        className="w-full max-h-[495px]"
        unoptimized
        alt="footer image"
      />
      <KnowMore />
    </main>
  );
}
