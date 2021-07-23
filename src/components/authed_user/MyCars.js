import React, { useEffect } from 'react';
import Header from "~/components/nav/Header";
import AuthedWrapper from "~/components/authed_user/AuthedWrapper";

import car from "~/assets/svg/authed/my_cars/earn_money_bro.svg";

import "~/styles/authed_user/my_cars.scss";

export default function MyCars(props) {
  return (
    <>
        <Header />
        <div className="my_cars">
          <img src={car} alt="Earn Money Image"/>
          <h2>Зарабатывайте на своём автомобиле</h2>
          <p>Сдавайте автомобиль в аренду и получайте заработок.</p>
          <a href="/authed/my-cars/add-new">Добавить автомобиль</a>
        </div>
    </>
  )
}
