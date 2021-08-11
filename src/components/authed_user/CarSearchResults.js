import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Loading from '~/components/Loading';
import Header from '~/components/nav/Header';
import Footer from '~/components/Footer';
import CarSearch from '~/components/authed_user/CarSearch';
import CarCardSmall from '~/components/authed_user/CarCard/CarCardSmall';
import CarCard from "./CarCard/CarCard";

import validateUser from "~/functions/validateUser";
import getCarList from "~/functions/getCarList";

import { MOCK_CAR } from "../../constants";

import "~/styles/authed_user/car_search_results.scss";

export default function CarSearchResults() {
  const [isLogined, setIsLogined] = useState(false);
  const [loading, setLoading] = useState(true);

  const [isCardCardOpen, setIsCarCardOpen] = useState(false);
  const [currentCar, setCurrentCar] = useState(MOCK_CAR);

  const [carListArray, setCarListArray] = useState([]);
  useEffect(async () => {
    setLoading(true);
    const isValid = await validateUser();
    const carList = await getCarList();
    setCarListArray(carList);
    setIsLogined(isValid);
    setLoading(false)
  }, [])

  function parentCallback(childInfo) {
    setIsCarCardOpen(!childInfo);
  }

  return (
    <Loading loading={loading}>
      { isCardCardOpen ?
        <CarCard car={currentCar} parentCallback={parentCallback} />
        :
        <>
      <Header />
      { isLogined ?
        <>
          <div className="car_search_results">
            <CarSearch searchType="searched" />
            <div className="car_search_results_filter_map">
              <button className="car_search_results_filter_map"> </button>
            </div>
            <div className="car_search_results_cars">
            <div className="car_search_results_cars_wrapper">
                {carListArray.map((car, index) => {
                    return (
                      <div key={car._id} className="car_search_results_cars_wrapper_car">
                        <CarCardSmall car={car} />
                        <button onClick={(e) => {
                            e.preventDefault();
                            setIsCarCardOpen(true);
                            setCurrentCar(car);
                          }}className="car_search_results_cars_wrapper_button">Арендовать</button>
                      </div>
                    )
                })}
              </div>
            </div>
          </div>
        </>
        : <Redirect to="/" />
      }
      <Footer />
      </>
    }
    </Loading>
  )
}
