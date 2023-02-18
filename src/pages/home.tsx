import React from "react";
import Tiers from "components/home/tiers-points/tiers";
import Rules from "../components/home/tournament-rules/rules";
import Slider from "components/home/slider/slider";

const Home = () => {
  return (
    <>
      <Slider />
      <Rules />
      <Tiers />
    </>
  );
};

export default Home;
