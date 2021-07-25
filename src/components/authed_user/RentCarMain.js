import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Loading from '~/components/Loading';
import CarSearch from './CarSearch';
import Footer from '~/components/Footer';
import Header from '~/components/nav/Header';
import CarCard from './CarCard/CarCard';

import validateUser from "~/functions/validateUser";
import getCarRandom12List from "~/functions/getCarRandom12List";

import { MOCK_CAR, HOSTNAME } from "~/constants";

import SClasse from '~/assets/img/rent_car_search_page/recommended_cars/merc.jpg'
import SClasseOwner from '~/assets/img/rent_car_search_page/recommended_cars/owner.png'

import '~/styles/authed_user/rent_car_main.scss';

export default function RentCarMain(props) {

  const [carArray, setCarArray] = useState([]);

  const [selectedCar, setSelectedCar] = useState(MOCK_CAR);
  const [carChosen, setCarChosen] = useState(false);
  const [carUpdateFlag, setCarUpdateFlag] = useState(false);

  const [userImages, setUserImages] = useState({});

  const [isLogined, setIsLogined] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    setLoading(true);
    const isValid = await validateUser();
    setIsLogined(isValid);
    const random12Array = await getCarRandom12List();
    setCarArray(random12Array);
    setLoading(false)
  }, [])

  function carViewClickHandler(e, car) {
    setSelectedCar(car);
    console.log("-------------------")
    console.log(userImages);
    setCarChosen(true);
  }

  function childReturnToHome(isReturned) {
    setCarChosen(false);
  }

  const carTemplate = (car) => (
  <div className="recommend_wrapper_car" key={car._id} onClick={(e) => carViewClickHandler(e, car)}>
    <img className="recommend_wrapper_car_background_img" src={car.images[0]} alt="merc"/>
    <div className="recommend_wrapper_car_desc">
      <p className="recommend_wrapper_car_desc_model">{car.specs.manufacturer} {car.specs.model}, {car.specs.yearOfProduction}</p>
      <p className="recommend_wrapper_car_desc_price">от {car.rentInfo.fiveDayPlusRentPrice} ₽/сутки</p>
    </div>
  </div>);

  return (
    <Loading loading={loading}>
      { isLogined ?
          !carChosen ?
          <>
            <Header />
            <section className="rent_car_search">
              <h2>Арендуйте Автомобиль</h2>
              <CarSearch />
            </section>
            <section className="recommend">
                <h3>Рекомендуем поблизости</h3>
                <div className="recommend_wrapper">

                  {carArray.map((car, index) => {
                    return carTemplate(car);
                  })}

                </div>
            </section>
            <Footer />
          </>
          : <CarCard car={selectedCar} parentCallback={childReturnToHome}/>
      : <Redirect to="/" />
    }
    </Loading>
  )
}
