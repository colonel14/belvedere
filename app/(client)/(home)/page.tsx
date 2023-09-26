import "@/styles/home.css";
import HomeHero from "@/components/HomeComponents/Hero";
import Navbar from "@/components/Navbar";
import HomeHistory from "@/components/HomeComponents/HomeHistory";
import HomeLifeAndLearning from "@/components/HomeComponents/HomeLifeAndLearning";
import School from "@/components/HomeComponents/School";
import Footer from "@/components/Footer";
import HomeAdmissions from "@/components/HomeComponents/HomeAdmissions";

import client from "@/tina/__generated__/client";

async function Home() {
  const result = await client.queries.home({ relativePath: "home.md" });

  return (
    <div id="homepage">
      <Navbar />
      <HomeHero {...result} />
      <HomeHistory />
      <HomeLifeAndLearning />
      <School />
      <HomeAdmissions />
      <Footer />
    </div>
  );
}

export default Home;
