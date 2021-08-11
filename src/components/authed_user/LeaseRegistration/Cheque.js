import React, { useState, useEffect } from 'react';

import "~/styles/authed_user/lease_registration/additional/cheque.scss";

export default function Cheque({chequeSummary, tripInfo}) {


  useEffect(() => {
    console.log(chequeSummary.summary)
  }, [])

  return (
    <div className="cheque">
      <h3 className="cheque_title">Ваш чек</h3>
      <div className="cheque_rent_price">
        <div className="cheque_rent_price_with_discount">
          <p className="cheque_rent_price_with_discount_title">Стоимость Аренды</p>
          <p className="cheque_rent_price_with_discount_value">{chequeSummary.rentPriceWithDiscount} ₽</p>
        </div>
        <div className="cheque_rent_price_without_discount">
          <p className="cheque_rent_price_without_discount_title">{tripInfo.period_from} – {tripInfo.period_to} </p>
          <p className="cheque_rent_price_without_discount_value">{chequeSummary.rentPriceWithoutDiscount} ₽</p>
        </div>
      </div>

      <div className="cheque_additional_service">
        <p className="cheque_additional_service_title">Доп услуги</p>
        <p className="cheque_additional_service_value">{chequeSummary.additionalServicesPrice} ₽</p>
      </div>

      <div className="cheque_comission">
        <p className="cheque_comission_title">Комиссия сервиса</p>
        <p className="cheque_comission_value">1 000 ₽</p>
      </div>

      <div className="cheque_summary">
        <hr />
        <div className="cheque_summary_info">
          <p className="cheque_summary_info_title">К оплате</p>
          <p className="cheque_summary_info_value">{chequeSummary.summary} ₽</p>
        </div>
      </div>

    </div>
  )
}
