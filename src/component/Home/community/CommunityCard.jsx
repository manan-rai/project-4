import React from "react";

const CommunityCard = ({ card: { id, img, title } }) => {
  return (
    <>
     
     <section className="community_card flex">
        <div className="card_img">
          <img src={img} alt="" />
        </div>
        <div className="card_content">
          <div className="content_title">
            <h1>{title}</h1>
          </div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            voluptatibus praesentium unde fugit quaerat sit, consequuntur enim
            quam ducimus. Quos!
          </p>
          <a href="donate" className="donate_btn">
            <i class="fa-solid fa-heart"></i>
            <span>Donate</span>
            </a>
        </div>
      </section>
     
    </>
  );
};

export default CommunityCard;
