import React from "react";
import MainSlider from "./slider/MainSlider";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="main_slider">
        <MainSlider />
        </div>
        <div className="slider_content">
          <h3>Helping them today</h3>
          <h1 className="poor">
            Help the Poor in Need
            <div className="content_img">
              <img src="/img/main-slider-1-shape-1.2ea22ce3.png" alt="" />
            </div>
          </h1>
          <button className="learn_more_btn"><i class="fa-solid fa-arrow-right"></i>Learn More</button>
        </div>
        <div className="slider_footer">
          <ul className="slider_box flex_SB">
            <li>
              <h3 className="box_number">4390</h3>
              <span className="box_text">Volunteers are Available</span>
            </li>
            <li>
              <h3 className="box_number">8900</h3>
              <span className="box_text">Funds Raised by People</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Hero;
