import React from 'react';

import SClasse from '~/assets/img/rent_car_search_page/recommended_cars/merc.jpg'
import star from "~/assets/svg/authed/star.svg";

import "~/styles/authed_user/lease_registration/additional/car_card_smallest.scss";

export default function CarCardSmallest({car}) {
  return (
    <div className="car-card-smallest">
      <div className="car-card-smallest_image_div">
        <img src={car.images[0]} />
      </div>
      <div className="car-card-smallest_info_div">
        <div className="car-card-smallest_info_div_rating">
          <img src={star} />
          <p>4,5 <span>(12)</span></p>
        </div>
        <div className="car-card-smallest_info_div_manufacturer_model">
          <p>{car.specs.manufacturer} {car.specs.model}, {car.specs.yearOfProduction}</p>
        </div>
        <div className="car-card-smallest_info_div_price">
          <p>{car.rentInfo.regularPrice} ₽ в сутки</p>
        </div>
      </div>
    </div>
  )
}
