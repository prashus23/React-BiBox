import React from "react";
import "../HeroSection/herosection.css";
import roundtxt from "./hero-assets-lh/roundtxt.png";
import ellipse from "./hero-assets-lh/Ellipse 4.png";

import mainMask from "./hero-assets-rh/mainMask.png";
import pinksplash from "./hero-assets-rh/pinkspash.png";
import yellowsplash from "./hero-assets-rh/yellowsplash.png";
import getSample from "./hero-assets-rh/Group 1.png";
import heading from "./hero-assets-rh/heading.png";

import child from "./sectoin-2-assets/child.png";
import childvid from "./sectoin-2-assets/child-vid.png";
import ellipseplay from "./sectoin-2-assets/Ellipse 120.png";
import play from "./sectoin-2-assets/Polygon 3.png";
import belline from "./sectoin-2-assets/belowVideo.png";

import section3 from "./section3-assets/Group 702.png";
import Button from "../Button/Button";

import bg from "../HeroSection/section-4-assets/background.png";
import product from "../HeroSection/section-4-assets/product.png";
import buttons from "../HeroSection/section-4-assets/buttons.png";

const HeroSection = () => {
  return (
    <main>
      <section className="section-1">
        <div className="left-container">
          <h1 className="title">Play And Learn</h1>
          <div className="sec-title">
            <h2>World's First Augmented Reality</h2>
            <span>powered</span>
            &nbsp;TECH - ART KIT
            <p>for young innovators</p>
          </div>
          <img className="roundtxt" src={roundtxt} />
        </div>
        <div className="right-container">
          <div id="img2">
            <img className="ellipse" src={ellipse} />
          </div>
          <div id="img1">
            <img className="pinksplash" src={pinksplash} />
          </div>
          <div id="img4">
            <img className="mainMask" src={mainMask} />
          </div>
          <div id="img">
            <img className="yellowsplash" src={yellowsplash} />
          </div>
          <img className="heading" src={heading} />
          <br />
          <img className="getSample" src={getSample} />
        </div>
        {/* <div className="videoClip">
          <img className="playellipse" src={ellipseplay} />
          <img className="videoshadow" src={child} />
          <img className="videoimg" src={childvid} />
          <img className="play" src={play} />
        </div> */}
        <div>
          <img className="vidbeltitle" src={belline} />
        </div>
        <div className="buykit">
          <Button title={"BUY A KIT"} />
        </div>
        <div className="">
          <img src={section3} />
        </div>
        <div className="sec-btn">
          <Button title={"BUY TODAY"} />
          <p>Get a flat 20% launch discount</p>
        </div>

        <div className="sec-4">
          <img className="bg-sec" src={bg} />
        </div>
        <div className="product-container">
          <img className="product" src={product} />
          <img className="product" src={product} />
          <img className="product" src={product} />
          <img className="product" src={product} />
        </div>
        <div className="btn-sec4">
          <img className="btns" src={buttons} />
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
