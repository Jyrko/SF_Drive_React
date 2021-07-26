import React, { useEffect, useState } from 'react';

import ReturnButton from "~/components/authed_user/ReturnButton";
import CarCardSmallest from "~/components/authed_user/LeaseRegistration/CarCardSmallest";
import TripInfo from "~/components/authed_user/LeaseRegistration/TripInfo";
import AdditionalServices from "~/components/authed_user/LeaseRegistration/AdditionalServices";
import Cheque from "~/components/authed_user/LeaseRegistration/Cheque";

import ContinueDiv from "~/components/ContinueDiv";

import "~/styles/authed_user/lease_registration/lease_registration.scss";

export default function LeaseRegistration({ car, parentCallback}) {

  function onParentClickHandler(e) {
    e.preventDefault();
    parentCallback();
  }
  useEffect(() => {
    console.log(car);
  }, [])

  return (
    <>
      <section className="lease_registration">
        <ReturnButton onClick={onParentClickHandler} />
        <h2>Оформление аренды</h2>
        <div className="lease_registration_container">
          <div className="lease_registration_container_order">
           <div className="lease_registration_container_order_list">
              <h3 className="lease_registration_container_order_list_title">Состав заказа</h3>
              <CarCardSmallest car={car} />
            </div>
            <div className="lease_registration_container_order_trip_info">
              <h3 className="lease_registration_container_order_list_title">Информация о поездке</h3>
              <TripInfo />
            </div>

            <div className="lease_registration_container_order_additional_services">
              <h3 className="lease_registration_container_order_additional_services_title">Дополнительные услуги</h3>
              <AdditionalServices carSelectedServices={car.services}/>
            </div>
           </div>

          <div className="lease_registration_container_cheque">
            <Cheque carRentInfo={car.rentInfo} />
          </div>
        </div>
      </section>
      <ContinueDiv buttonName="Перейти к оплате" isValid="false" parentCallback={(e) => console.log("First")}/>
    </>
  )
}
