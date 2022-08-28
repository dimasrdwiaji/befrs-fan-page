import React from "react";
import HeroSection from "../components/HeroSection";
import SiteFooter from "../components/SiteFooter";
import PopVideoList from "./PopVideoList";

function Home() {
  return (
    <div>
      <HeroSection />
      <PopVideoList />
      <SiteFooter />
    </div>
  );
}

export default Home;
