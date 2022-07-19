import React from "react";

const Head = () => {
  return (
    <>
      <section className="head flex_SB ">
        <div className="menu_wrapper_left flex_SB">
          <div className="wrapper_left_content ">
            <p>Welcome to the Charity & Donation Theme</p>
          </div>
          <div className="wrapper_left_email items_center">
            <div className="icon">
            <i class="fa-solid fa-envelope"></i>
            </div>
            <div className="email">
              <a href="mailto:needhelp@company.com">needhelp@company.com</a>
            </div>
          </div>
        </div>
        <div className="menu_wrapper_right">
          <div className="social_links flex_SB">
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-solid fa-globe"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
