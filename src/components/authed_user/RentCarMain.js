import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CarSearch from './CarSearch';
import Footer from '~/components/Footer';
import Header from '~/components/nav/Header';
import CarCard from './CarCard';
// import Loading from '~/components/Loading';

import validateUser from '~/functions/validateUser';

import SClasse from '~/assets/img/rent_car_search_page/recommended_cars/merc.jpg'
import SClasseOwner from '~/assets/img/rent_car_search_page/recommended_cars/owner.png'

import '~/styles/authed_user/rent_car_main.scss';

export default function RentCarMain(props) {
  const [selectedCar, setSelectedCar] = useState("60ed97db4cab66e18a30954d");
  const [carChosen, setCarChosen] = useState(false);

  useEffect(async () => {
    console.log("Component mounting");
    console.log(await validateUser());

  }, []);

  function carViewClickHandler(e) {
    e.preventDefault();
    setCarChosen(true)
  }

  function childReturnToHome(isReturned) {
    setCarChosen(!isReturned);
  }

  const carTemplate =
  <div className="recommend_wrapper_car" onClick={carViewClickHandler}>
    <img className="recommend_wrapper_car_background_img" src={SClasse} alt="merc"/>
    <img className="recommend_wrapper_car_owner_img" src={SClasseOwner} alt="merc_owner"/>
    <div className="recommend_wrapper_car_desc">
      <p className="recommend_wrapper_car_desc_model">Mercedes S-classe, 2019</p>
      <p className="recommend_wrapper_car_desc_price">от 5 200 ₽/сутки</p>
    </div>
  </div>;

  return (
    <>
      <Header />
      { !carChosen ?
        <>
          <section className="rent_car_search">
            <h2>Арендуйте Автомобиль</h2>
            <CarSearch />
          </section>
          <section className="recommend">
              <h3>Рекомендуем поблизости</h3>
              <div className="recommend_wrapper">
                {carTemplate}
                {carTemplate}
                {carTemplate}
                {carTemplate}
                {carTemplate}
                {carTemplate}
                {carTemplate}
                {carTemplate}
                {carTemplate}
                {carTemplate}
                {carTemplate}
                {carTemplate}
              </div>
          </section>
          <Footer />
        </>
        : <CarCard carId={selectedCar} parentCallback={childReturnToHome}/>
      }
    </>
  )
}
