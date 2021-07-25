import React, { useEffect, useState } from 'react';

import ReturnButton from "~/components/authed_user/ReturnButton";

import "~/styles/authed_user/lease_registration.scss";

export default function LeaseRegistration({ car, parentCallback}) {

  function onParentClickHandler(e) {
    e.preventDefault();
    parentCallback();
  }

  return (
    <>
      <section className="lease_registration">
        <ReturnButton onClick={onParentClickHandler} />
        <h2>Оформление заказа</h2>
        <div className="lease_registration_container">
          <div className="lease_registration_container_order">

           <div className="lease_registration_container_order_list">
              </div>
              <div className="lease_registration_container_order_trip_info">
              </div>
              <div className="lease_registration_container_order_additional_services">
              </div>
           </div>

          <div className="lease_registration_container_cheque">
          
          </div>
        </div>
      </section>
    </>
  )
}
