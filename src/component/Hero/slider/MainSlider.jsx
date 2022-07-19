import React from "react";
import Slider from "react-slick";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="hero_next">
        <i class="fa-solid fa-arrow-right-long"></i>
      </button>
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="hero_prev">
        <i class="fa-solid fa-arrow-left-long"></i>
      </button>
    </div>
  );
};

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 50,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="slider_img ">
          <img src="/img/main_slider1.jpg" alt="" />
        </div>
        <div className="slider_img">
          <img src="/img/main_slider2.jpg" alt="" />
        </div>
        <div className="slider_img ">
          <img src="/img/main_slider3.jpg" alt="" />
        </div>
      </Slider>
      <div className="img_overlay"></div>
    </>
  );
};

export default MainSlider;
