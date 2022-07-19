import React from "react";
import Slider from "react-slick";
import GalleryCard from "./GalleryCard";

const Gallery = ({ photos }) => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 50,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          
        }
      }]
  };
  return (
    <>
      <section className="gallery">
        <div className="container">
          <Slider {...settings}>
            {photos.map((photo) => (
              <GalleryCard key={photo.id} photo={photo} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Gallery;
