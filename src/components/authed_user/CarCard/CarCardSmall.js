import React, { useEffect, useState } from 'react';

import SClasse from '~/assets/img/rent_car_search_page/recommended_cars/merc.jpg'
import star from "~/assets/svg/authed/star.svg";
import engineIcon from "~/assets/svg/authed/engine.svg";
import gearboxIcon from "~/assets/svg/authed/gearbox.svg";

import editImagePathToCurrentHost from "~/functions/additional/editImagePathToCurrentHost";

import "~/styles/authed_user/car_card/car_card_small.scss";

export default function CarCardSmall({car}) {
  const [carImage, setCarImage] = useState("");

  useEffect(() => {
    console.log(car);
    if (car.images) {
      setCarImage(car.images[0]);
    }
  }, [])

  return (
    <>
      <div className="car_card_small">
        <div className="car_card_small_wrapper">
          <div className="car_card_small_wrapper_img_div">
            <img src={carImage}/>
          </div>
          <div className="car_card_small_wrapper_car_info">
            <div className="car_card_small_wrapper_car_info_basic">
              <div className="car_card_small_wrapper_car_info_basic_rating">
                <img src={star} />
                <p>4,5 <span>(12)</span></p>
              </div>
              <div className="car_card_small_wrapper_car_info_basic_name_and_year">
                <p>{car.specs.manufacturer} {car.specs.model}, 2018</p>
              </div>
            </div>
            <div className="car_card_small_wrapper_car_info_specs">
              <div className="car_card_small_wrapper_car_info_specs_engine">
                <img src={engineIcon} alt="Engine Icon"/>
                <p>{car.specs.engineDisplacement} litr / {car.specs.engineHp} h.p. / {car.specs.engineType}</p>
              </div>
              <div className="car_card_small_wrapper_car_info_specs_gearbox">
                <img src={gearboxIcon} alt="gearbox Icon"/>
                <p>{car.specs.transmissionType} /  {car.specs.wheelDrive}</p>
              </div>
            </div>
            <div className="car_card_small_wrapper_car_info_price">
              <p>{car.rentInfo.regularPrice} UAH per day</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
