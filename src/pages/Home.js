import React from "react";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import ValueCard from "../components/Card";
import Who from "../components/Who";
import ValuePreposition from "../components/ValuePreposition";
import Services from "../components/Services";
import Process from "../components/Process";

const Home = () => {
  return (
    <>
      <Slider />
      <ValueCard />
      <Who />
      <ValuePreposition />
      <Services />
      <Process />
      <Footer />
    </>
  );
};

export default Home;
