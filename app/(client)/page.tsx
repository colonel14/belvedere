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
      <div className="relative w-full h-[495px]">
        <Image src="/footer-img.jpg" fill alt="footer image" />
      </div>
      <KnowMore />
    </main>
  );
}
