import React, { useState, useEffect } from 'react';

import arrowRight from '~/assets/svg/slider/arrow_right.svg';
import arrowLeft from '~/assets/svg/slider/arrow_left.svg';

import activeDot from '~/assets/svg/slider/active_slide_dot.svg';
import dot from '~/assets/svg/slider/slide_dot.svg';

import '~/styles/slider/review_slider.scss';
function ReviewSlider({ slides }) {
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
    <div className="review_slider">
      <img className="review_slider_arrow review_slider_arrow_right" src={arrowRight} onClick={nextSlide}/>
      <img className="review_slider_arrow review_slider_arrow_left" src={arrowLeft} onClick={prevSlide}/>
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {(index === current) && (
              <div className="review_slider_content">
                  <div className="review_slider_content_author">
                    <img className="review_slider_content_author_profile" src={slide.authorImg} alt="Profile Image"/>
                    <div className="review_slider_content_author_desc">
                      <span className="review_slider_content_author_desc_name">{slide.name}</span>
                      <span className="review_slider_content_author_desc_city">{slide.city}</span>
                    </div>
                  </div>
                  <p className="review_slider_content_text">{slide.text}</p>
              </div>
            )}
          </div>
        )
      })}

      <div className="review_slider_dots">
        {slides.map((slide, index) => <img key={index} id={index} className="review_slider_dots_dot" src={current === index ? activeDot : dot} onClick={selectDot}/>)}
      </div>
    </div>
  )
}

export default ReviewSlider;
