import React from 'react';

import ContinueDiv from "~/components/ContinueDiv";
import RoundSwitch from "~/components/authed_user/RoundSwitch";

import "~/styles/authed_user/add_new_car/step2.scss";

import { CAR_OPTIONS_ARRAY } from "~/carOptions";

export default function Step2(props) {
  function childsParentCallback(isContinued) {
    props.parentCallback(isContinued, 1);
  }

  return (
    <>
      <form id="step_2">
        <h3>Опции автомобиля</h3>
        <div className="form_wrapper_options">
          {CAR_OPTIONS_ARRAY.map((option, index) => {
            return (
              <div key={option.text} className="form_wrapper_options_option">
                <img src={option.icon} className="form_wrapper_options_option_icon" alt="Car Option"/>
                <p>{option.text}</p>
                <div className="form_wrapper_options_option_switch">
                  <RoundSwitch  onChange={(e) => console.log("switched")}/>
                </div>
              </div>
            )
          })}
        </div>
        <h3>Дополнительные услуги</h3>
        <div className="form_wrapper_additional_services">
          <div className="form_wrapper_additional_services_service">
            <div className="form_wrapper_additional_services_service_info">
              <p className="form_wrapper_additional_services_service_info_title">Детское кресло</p>
              <p className="form_wrapper_additional_services_service_info_desc">Сдавайте кресло в аренду и получайте дополнительный заработок</p>
            </div>

            <div className="form_wrapper_additional_services_service_price_div">
              <p className="form_wrapper_additional_services_service_price_div_price">1 000 ₽</p>
            </div>

            <div className="form_wrapper_additional_services_service_switch">
              <RoundSwitch  onChange={(e) => console.log("switched")}/>
            </div>
          </div>

          <div className="form_wrapper_additional_services_service">
            <div className="form_wrapper_additional_services_service_info">
              <p className="form_wrapper_additional_services_service_info_title">Доставка автомобиля</p>
              <p className="form_wrapper_additional_services_service_info_desc">Привезите автомобиль в удобное для арендатора место и получите доход</p>
            </div>

            <div className="form_wrapper_additional_services_service_price_div">
              <p className="form_wrapper_additional_services_service_price_div_price">1 000 ₽</p>
            </div>

            <div className="form_wrapper_additional_services_service_switch">
              <RoundSwitch  onChange={(e) => console.log("switched")}/>
            </div>
          </div>

          <div className="form_wrapper_additional_services_service">
            <div className="form_wrapper_additional_services_service_info">
              <p className="form_wrapper_additional_services_service_info_title">Завершение аренды в любом месте</p>
              <p className="form_wrapper_additional_services_service_info_desc">Заберите автомобиль в удобном для арендатора месте за доп. доход</p>
            </div>

            <div className="form_wrapper_additional_services_service_price_div">
              <p className="form_wrapper_additional_services_service_price_div_price">1 000 ₽</p>
            </div>

            <div className="form_wrapper_additional_services_service_switch">
              <RoundSwitch  onChange={(e) => console.log("switched")}/>
            </div>
          </div>

          <div className="form_wrapper_additional_services_service">
            <div className="form_wrapper_additional_services_service_info">
              <p className="form_wrapper_additional_services_service_info_title">Полный бак</p>
              <p className="form_wrapper_additional_services_service_info_desc">Заправьте полный бак перед сдачей в аренду</p>
            </div>

            <div className="form_wrapper_additional_services_service_price_div">
              <p className="form_wrapper_additional_services_service_price_div_price">1 000 ₽</p>
            </div>

            <div className="form_wrapper_additional_services_service_switch">
              <RoundSwitch  onChange={(e) => console.log("switched")}/>
            </div>
          </div>
        </div>
      </form>
      <ContinueDiv isValid="true" buttonName="Продолжить" parentCallback={childsParentCallback} />
    </>
  )
}
