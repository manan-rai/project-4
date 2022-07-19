import React from "react";

const CausesCard = ({ item: { id, img, title } }) => {
  return (
    <>
      <section className="causes_card">
        <div className="card_box">
          <div className="card_img text_center">
            <img src={img} alt="" />
          </div>
          <div className="card_content">
            <h3>{title}</h3>
            <p className="paragraph">
              There are not many of passages of lorem ipsum avail isn alteration
              donationa in form simply free
            </p>
          </div>

          <div className="card_box_footer">
            <div className="line">
              <span className="percentage_line"></span>
            </div>
            <div className="line_number flex_SB">
              <div className="line_one items_center">
                <h1>$25,270</h1>
                <p className="paragraph">Raised</p>
              </div>
              <div className="line_two items_center">
                <h1>$25,270</h1>
                <p className="paragraph">Goal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CausesCard;
