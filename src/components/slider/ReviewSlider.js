import React, { useState } from 'react';
import { SliderData } from './SliderData';

import arrowRight from '~/assets/svg/slider/arrow_right.svg';
import arrowLeft from '~/assets/svg/slider/arrow_left.svg';

function ReviewSlider(props) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  return (
    <div className="slider">
      {SliderData.map((slide, index) => {
        return (
          <div key={index}>
            <img src={slide.authorImg} alt="Profile Image"/>
            <span className="name">{slide.name}</span>
            <span className="city">{slide.city}</span>
            <p className="text">{slide.text}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ReviewSlider;
