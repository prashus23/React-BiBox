import React from "react";
import "./main.css";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer";

import bgPink from "../Pages/Assets/Polygon.png";
const Main = () => {
  return (
    <section>
      <div className="layout">
        <Header />
        <HeroSection />
        <div className="bgPink">
          <img  src={bgPink} />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Main;
