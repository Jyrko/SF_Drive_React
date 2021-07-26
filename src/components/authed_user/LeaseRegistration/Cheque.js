import React from 'react';

import "~/styles/authed_user/lease_registration/additional/cheque.scss";

export default function Cheque({carRentInfo}) {
  return (
    <div className="cheque">
      <h3 className="cheque_title">Ваш чек</h3>
      <div className="cheque_main_price">
      </div>
      <div className="cheque_additional_services_price">
        <p className="cheque_additional_service_comission_title">Доп услуги</p>
        <p className="cheque_additional_service_comission_value">0 ₽</p>
      </div>
      <div className="cheque_additional_service">
        <p className="cheque_additional_service_title">Доп услуги</p>
        <p className="cheque_additional_service_value">0 ₽</p>
      </div>
      <div className="cheque_comission">
        <p className="cheque_comission_title">Комиссия сервиса</p>
        <p className="cheque_comission_value">1 000 ₽</p>
      </div>
      <div className="cheque_summary">
        <hr />
        <p className="cheque_summary_title">К оплате</p>
        <p className="cheque_summary_value">5 800 ₽</p>
      </div>

    </div>
  )
}
