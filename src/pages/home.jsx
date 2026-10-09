import React, { useEffect } from "react";
import NovelyHero from "../components/novely-hero";
import NovelyNav from "../components/novely-nav";
import NovelyHomeExplorer from "../components/novely-Home-Explorer";
import NovelyReview from "../components/novely-review";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NovelyHero />
      <NovelyHomeExplorer />
      <NovelyReview />
    </>
  );
};

export default Home;
