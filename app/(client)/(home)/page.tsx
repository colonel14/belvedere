import "@/styles/home.css";

import HomeHero from "@/components/HomeComponents/Hero";
import Navbar from "@/components/Navbar";
import HomeHistory from "@/components/HomeComponents/HomeHistory";

function Home() {
  return (
    <div id="homepage">
      <Navbar />
      <HomeHero />
      <HomeHistory />
    </div>
  );
}

export default Home;
