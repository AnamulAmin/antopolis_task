import React from "react";
import heroImage from "../../assets/images/banner_img.png";
import "./hero.css";
function Hero() {
  return (
    <div id="hero" className="">
      <div className="hero_bg"></div>
      <div className="container hero_content">
        <div className="hero_text">
          <h1>
            Experience food <span>Delivery</span> like no other
          </h1>
          <p className="">
            We deliver the food of your choice wherever, whenever. Select your
            food from only the top restaurants in the area, and get it in a
            flash. Download the app now to discover more.
          </p>
        </div>
        <div className="hero_image">
          <img src={heroImage} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
