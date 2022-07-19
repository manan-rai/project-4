import React from "react";

const VolunterCard = ({data:{id,img,name}}) => {
  return (
    <>
      <section className="volunteer_card flex">
        <div className="card_img">
          <img src={img} alt="" />
        </div>
        <div className="card_content">
          <h2>{name}</h2>
          <h5>
            There are many variations of but the majority have simply free text
            suffered.
          </h5>
        </div>
      </section>
    </>
  );
};

export default VolunterCard;
