import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="nav flex_SB">
        <div className="list_toggle" onClick={() => setShow(!show)}>
          <i class="fa-solid fa-bars"></i>
        </div>

        <div
          className={show ? "mobile_view" : "nav_left"}
          // onClick={() => setShow(false)}
        >
          <div className="nav_left mobile_view">
            <div className="cancel_btn" onClick={()=>setShow(!show)}>
              <h5>&times;</h5>
            </div>
            <div className="nav_logo">
              <img src="/img/logo.png" alt="" />
            </div>
            <ul className="main_nav flex_SB">
              <li className="list_item ">
                <Link to="/">Home</Link>
                <i class="fa-solid fa-angle-right"></i>
                <ul className="sub_nav_list">
                  <li>
                    <Link to="/">Home1</Link>
                  </li>
                  <li>
                    <Link to="/">Home2</Link>
                  </li>
                  <li>
                    <Link to="/">Home3</Link>
                  </li>
                </ul>
              </li>
              <li className="list_item">
                <Link to="/pages">Pages</Link>
                <i class="fa-solid fa-angle-right"></i>
                <ul className="sub_nav_list">
                  <li>
                    <Link to="/pages">Pages1</Link>
                  </li>
                  <li>
                    <Link to="/pages">Pages2</Link>
                  </li>
                  <li>
                    <Link to="/pages">Pages3</Link>
                  </li>
                </ul>
              </li>
              <li className="list_item">
                <Link to="/donations">Donations</Link>
              </li>
              <li className="list_item">
                <Link to="/Events">Events</Link>
              </li>
              <li className="list_item">
                <Link to="/news">News</Link>
                <i class="fa-solid fa-angle-right"></i>
              </li>
            </ul>

            <div className="nav_footer">
              <div className="nav_contact flex">
                <label>
                  <i class="fa-solid fa-envelope"></i>
                  <span>needhelp@halpes.com</span>
                </label>
                <label>
                  <i class="fa-solid fa-phone"></i>
                  <span>666 888 000</span>
                </label>
              </div>
              <div className="nav_icons">
                <div className="social_links">
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
            </div>
          </div>
        </div>

        <div className="nav_right flex_SB">
          <span className="srch_btn">
            <img src="/img/search.png" alt="" />
          </span>
          <div className="phone_details">
            <div className="chat_icon items_center">
              <i class="fa-brands fa-rocketchat"></i>
            </div>
            <div className="details_num">
              <h5>Call Anytime</h5>
              <a href="tel:92 666 888">92 666 888</a>
            </div>
          </div>
          <a href="donate" className="donate_btn">
            <i class="fa-solid fa-heart"></i>
            <span>Donate</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Nav;
