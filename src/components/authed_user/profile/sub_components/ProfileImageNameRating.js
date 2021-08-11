import React, { useEffect, useState } from 'react';

import owner from "~/assets/img/car_card/owner_sample.png";
import star from "~/assets/svg/authed/star.svg";

export default function ProfileImageNameRating({ userId }) {
  return (
    <div className="profile_image_name_rating_wrapper">
      <img className="profile_image_name_rating_wrapper_image" src={owner} />
      <h2 className="profile_image_name_rating_wrapper_name">Иван Тест</h2>
      <div className="profile_image_name_rating_wrapper_rating_div">
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
      </div>
      <button className="profile_image_name_rating_wrapper_write">Написать в чат</button>
    </div>
  )
}
