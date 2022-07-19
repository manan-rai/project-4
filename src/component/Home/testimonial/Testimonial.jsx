import React from "react";
import "./Testimonial.css";
import TestimonialSlider from "./TestimonialSlider";
import Slider from "react-slick";

const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="testimonial_next">
          <i class="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="testimonial_prev">
          <i class="fa-solid fa-arrow-left-long"></i>
        </button>
      </div>
    );
  };
const Testimonial = ({ details }) => {
  const settings = {
    infinite: true,
    autoplay:true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          
        }
      }]
  };
  return (
    <>
      <section className="testimonial">
        <div className="background_bg">
          <div className="container flex">
            <div className="testimonial_left">
              <div className="section_title">
                <h3>Our Testimonials</h3>
                <h1>What they're talking about charity</h1>
              </div>
            </div>
            <div className="testimonial_right">
              <Slider {...settings}>
                {details.map((detail) => (
                  <TestimonialSlider key={detail.id} detail={detail} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
