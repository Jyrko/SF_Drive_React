import React, { useEffect, useState } from 'react';
import { USER_ID_KEY } from '~/constants';

import Header from "~/components/nav/Header";
import CarCardSmall from "./CarCard/CarCardSmall";

import car from "~/assets/svg/authed/my_cars/earn_money_bro.svg";
import getUserCarsById from "~/functions/getUserCarsById";

import "~/styles/authed_user/my_cars.scss";

export default function MyCars(props) {

  const [userCarsArray, setUserCarsArray] = useState([]);

  useEffect(async () => {
    const userCars = await getUserCarsById(sessionStorage.getItem(USER_ID_KEY));
    setUserCarsArray(userCars);
  }, [])

  return (
    <>
        <Header />
        { userCarsArray.length ?
          <div className="my_cars_exists">
              <h2 className="my_cars_exists_title">My cars</h2>
              <div className="my_cars_exists_wrapper">
                {userCarsArray.map((car, index) => {
                  return <CarCardSmall key={car._id} car={car}/>
                })}
              </div>
              <a href="/authed/my-cars/add-new">Add a car</a>
            </div>
        : <div className="my_cars">
             <img src={car} alt="Earn Money Image"/>
             <h2>Make money on your car</h2>
             <p>Rent a car and earn money.</p>
             <a href="/authed/my-cars/add-new">Add a car</a>
           </div>
        }
    </>
  )
}
