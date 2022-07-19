import React from "react";
import ArticleCard from "./ArticleCard";
import './Article.css';
const Article = ({blogs}) => {
  return (
    <>
      <section className="article section_break">
        <div className="container">
          <div className="article_top flex_SB">
            <div className="section_title">
              <h3>Get Daily Updates</h3>
              <h1>Latest news & articles directly coming from the blog</h1>
            </div>
            <div className="view_more_btn">
              <button> <a href="#">View more</a></button>
            </div>
          </div>
          <div className="article_bottom flex">
            <div className="article_bottom_left">
              <img src="/img/news-one-img-1.73796d67.jpg" alt="" className="w_100" />
              <div className="article_details left_details">
                <ul className="flex p-0">
                  <li className="article_list">20 jan, 2021</li>
                  <li className="article_list">/</li>
                  <li className="article_list">
                    <a href="#">2 comments</a>
                  </li>
                </ul>
                <h3>Donation is Hope for Poor Childrens in Africa</h3>
              </div>
            </div>
            <div className="article_bottom_right">
                {blogs.map((blog)=>(
                    <ArticleCard key={blog.id} blog={blog}/>
                ))}
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Article;
