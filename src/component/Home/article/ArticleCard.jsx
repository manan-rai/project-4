import React from "react";

const ArticleCard = ({blog:{id,img,title}}) => {
  return (
    <>
      <div className="article_card flex">
        <div className="article_img">
          <img src={img} alt="" />
        </div>
        <div className="article_details right_detail">
          <ul className="flex p-0">
            <li className="article_list">20 jan, 2021</li>
            <li className="article_list">/</li>
            <li className="article_list">
              <a href="#">2 comments</a>
            </li>
          </ul>
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
