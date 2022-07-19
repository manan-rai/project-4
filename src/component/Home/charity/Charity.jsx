import React from "react";
import "./Charity.css";
const Charity = () => {
  return (
    <>
      <section className="charity section_break">
        <div className="container flex">
          <div className="charity_left">
            <div className="main_img">
              <img src="/img/welcome-one-img-1.b0c9c53d.jpg" alt="" />
              <div className="inner_image">
                <img src="/img/welcome-one-img-2.3da7d4bc.jpg" alt="" />
              </div>
            </div>
            <div className="charity_left_content flex">
              <div className="charity_content_txt">
                <h2>Helping Today</h2>
              </div>
              <div className="charity_content_img">
                <img src="/img/welcome-one-heart-icon.bd6d7c14.png" alt="" />
              </div>
            </div>
          </div>
          <div className="charity_right">
            <div className="section_title">
              <h3>welcome to charity</h3>
              <h1>Helping each other can make world better</h1>
            </div>
            <div className="charity_right_paragraph">
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, quae atque. Eligendi odio incidunt porro labore
                tenetur dignissimos inventore et.
              </p>
            </div>
            <div className="charity_funfacts flex">
              <div className="charity_content">
                <h2>
                  <i class="fa-solid fa-arrow-right"></i>Our Mission
                </h2>
                <p className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="charity_content">
                <h2>
                  <i class="fa-solid fa-arrow-right"></i>Our Story
                </h2>
                <p className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="work_progress">
              <div className="charity_work_progress">
                <h2>Charity</h2>
                <div className="progress_line">
                  <span className="charity_line"></span>
                </div>
              </div>
              <div className="donation_work_progress">
                <h2>Donations</h2>
                <div className="progress_line">
                  <span className="donation_line"></span>
                </div>
              </div>
            </div>

            <button
              className="learn_more_btn
              "
            >
              <i class="fa-solid fa-arrow-right"></i> Learn more
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Charity;
