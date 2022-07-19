import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="footer_top">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12 mb-5">
                <div className="footer_title">
                  <h1>About</h1>
                </div>
                <div className="footer_content">
                  <p className="paragraph">
                    Lorem ipsum dolor sit ame consect etur pisicing elit sed do
                    eiusmod tempor incididunt ut labore.
                  </p>
                </div>

                <button className="donate_btn"><i class="fa-solid fa-heart"></i>Donate</button>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-5">
                <div className="footer_title">
                  <h1>Explore</h1>
                </div>
                <div className="footer_content">
                  <ul className="p-0">
                    <li>
                      <a href="#" className="footer_list">
                        Donate
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer_list">
                        Campaigns
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer_list">
                        Fundraise
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer_list">
                        Sponsors
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer_list">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer_list">
                        Help
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-5">
                <div className="footer_title">
                  <h1>Contact</h1>
                </div>
                <div className="footer_content">
                  <ul className="p-0">
                    <li className="flex footer_items">
                      <i class="fa-solid fa-phone-volume"></i>
                      <label>
                        <h6>Call Anytime </h6>
                        <a
                          href="tel:92 666 888"
                          className="footer_contact_info"
                        >
                          92 666 888
                        </a>
                      </label>
                    </li>
                    <li className="flex footer_items for_padding">
                      <i class="fa-solid fa-envelope-open-text"></i>
                      <span>
                        <h6>Send Email</h6>
                        <a
                          href="mailto:needhelp@company.com"
                          className="footer_contact_info"
                        >
                          needhelp@company.com
                        </a>
                      </span>
                    </li>
                    <li className="flex footer_items">
                      <i class="fa-solid fa-map-location-dot"></i>
                      <span>
                        <h6>Visit Office </h6>
                        <a href="#" className="footer_contact_info">
                          80 broklyn golden street
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-5">
                <div className="footer_title">
                  <h1>Newsletter</h1>
                </div>
                <div className="footer_content">
                  <p className="paragraph">
                    Lorem ipsum dolor sit ame consect etur pisicing elit sed do.
                  </p>
                </div>
                <div className="search_box">
                  <input type="email" placeholder="Email address" />
                  <button className="send_btn"><i class="fa-solid fa-arrow-right"></i>Send</button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="row">
              <div className="col-lg-3 col-12">
                <div className="footer_logo items_center">
                  <img src="/img/logo.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-12 items_center mt-3 mb-3">
                <div className="social_links flex">
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa-solid fa-globe"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-12 items_center">
                <div className="copyright">
                  <h2>© Copyright 2022 by Halpes</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
