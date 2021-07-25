import React from 'react';

import CarPhotosSlider from "~/components/slider/CarPhotosSlider";

import first from "~/assets/img/tempfiles/1.jpg";
import second from "~/assets/img/tempfiles/2.jpg";
import third from "~/assets/img/tempfiles/3.jpg";

import "~/styles/authed_user/image_gallery.scss";

export default function ImageGallary(props) {
  function closeImageGallery(e) {
    e.preventDefault();
    props.parentCallback(true);
  }

  return (
    <div className="image_gallery">
      <div className="image_gallery_close_div" onClick={closeImageGallery}>
        <svg className="image_gallery_close_div_button_svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="image_gallery_close_div_button_svg_path" d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black"/></svg>
      </div>
      <div className="image_gallery_slider">
        <CarPhotosSlider slides={props.images} />
      </div>
    </div>
  )
}
