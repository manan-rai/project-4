import React from "react";


const TestimonialSlider = ({ detail: { id, img, name } }) => {
  return (
    <>
      <section className="testimonial_slider">
        <div className="slider_card">
          <div className="card_content">
            <p className="paragraph">
              Lorem ipsum is simply free text dolor sit amet, consectetur notted
              adipisicing elit sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
          <div className="card_detail flex">
            <div className="card_detail_img">
              <img src={img} alt="" />
            </div>
            <div className="card_details_name">
              <h1>{name}</h1>
              <h2>Volunteer</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSlider;
