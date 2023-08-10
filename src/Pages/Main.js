import React from "react";
import "./main.css";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <section>
      <div className="layout">
          <Header />
          <HeroSection />
          <Footer />
      </div>
    </section>
  );
};

export default Main;
