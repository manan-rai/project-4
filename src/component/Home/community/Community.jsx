import React from "react";
import "./Community.css";
import CommunityCard from "./CommunityCard";
const Community = ({ cards }) => {
  return (
    <>
      <section className="community section_break">
        <div className="community_top text_center">
          <div className="section_title">
            <h1>Join the community to give</h1>
            <h1>education for children</h1>
          </div>
          <button className="learn_more_btn">
            <i class="fa-solid fa-arrow-right"></i> Learn More
          </button>
        </div>
       
        <div className="community_bottom flex">
          {cards.map((card) => (
            <CommunityCard key={card.id} card={card} />
          ))}
        </div>
        
      </section>
    </>
  );
};

export default Community;
