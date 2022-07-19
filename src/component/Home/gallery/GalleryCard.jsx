import React from 'react'

const GalleryCard = ({photo:{id,img}}) => {
  return (
    <>
<section className="gallery_card items_center">
<div className="gallery_img">
    <img src={img} alt="" />
</div>
</section>
    </>
  )
}

export default GalleryCard