import React from "react";
import "./Volunter.css";
import VolunterCard from "./VolunterCard";

const Volunter = ({datas}) => {
  return (
    <>
      <section className="volunteer">
        <div className="container">
          <div className="volunteer_top flex_SB">
            <div className="volunteer_top_left">
              <div className="section_title">
                <h1>Help them whenever they are in need</h1>
              </div>
            </div>
            <div className="volunteer_top_right">
            <a href="#"><i class="fa-solid fa-play"></i></a>
            <h2>Watch the video</h2>
            </div>
          </div>
          <div className="volunteer_bottom flex">
            {datas.map((data)=>(
                <VolunterCard key={data.id} data={data}/>
            ))}
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Volunter;
