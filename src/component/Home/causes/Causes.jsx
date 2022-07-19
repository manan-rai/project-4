import React from "react";
import "./Causes.css";
import CausesCard from "./CausesCard";
import Slider from "react-slick";

const Causes = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots:true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots:true,
        }
      }]
  };

  return (
    <>
      <section className="causes">
        <div className="container">
          <div className="causes_header">
            <div className="section_title">
              <h3>Latest Causes</h3>
              <h1>Find the popular cause 
             and donate them</h1>
            </div>
          </div>
          <div className="main_card">
            <Slider {...settings}>
              {items.map((item) => (
                <CausesCard key={item.id} item={item} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Causes;
