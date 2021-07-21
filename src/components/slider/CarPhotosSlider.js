import React, { useState, useEffect } from 'react';

import arrowRight from '~/assets/svg/slider/arrow_right_white.svg';
import arrowLeft from '~/assets/svg/slider/arrow_left_white.svg';

import activeDot from '~/assets/svg/slider/active_slide_dot.svg';
import dot from '~/assets/svg/slider/slide_dot.svg';

import '~/styles/slider/car_photos_slider.scss';
function CarPhotosSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  function nextSlide(e) {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  }

  function prevSlide(e) {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  }

  function selectDot(e) {
    const index = Number(e.target.id);
    setCurrent(index);
  }



  return (
    <div className="car_photos_slider">
      <img className="car_photos_slider_arrow car_photos_slider_arrow_right" src={arrowRight} onClick={nextSlide}/>
      <img className="car_photos_slider_arrow car_photos_slider_arrow_left" src={arrowLeft} onClick={prevSlide}/>
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {(index === current) && (
              <div className="car_photos_slider_content">
                <img className="car_photos_slider_content_image" src={slide} alt="Car image" />
              </div>
            )}
          </div>
        )
      })}

      <div className="car_photos_slider_dots">
        {slides.map((slide, index) => <img key={index} id={index} className="car_photos_slider_dots_dot" src={current === index ? activeDot : dot} onClick={selectDot}/>)}
      </div>
    </div>
  )
}

export default CarPhotosSlider;
