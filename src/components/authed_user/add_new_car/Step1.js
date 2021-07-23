import React, { useState, useEffect } from 'react';

import ContinueDiv from "~/components/ContinueDiv";
import SelectInput from "~/components/authed_user/SelectInput";

import * as listData from "~/dataForLists";

import "~/styles/authed_user/add_new_car/step1.scss";

export default function Step1(props) {
  const [carManufacturer, setCarManufacturer] = useState("");
  const [carManufacturerModel, setCarManufacturerModel] = useState("");
  const [carManufacturerModels, setCarManufacturerModels] = useState([]);

  useEffect(() => {
    for (let car of listData.ALL_CAR_MODELS_ARRAY) {
      console.log(carManufacturer);
      console.log(car.brand);
      if (car.brand === carManufacturer) {
        console.log("Car Models " + car.models);
        setCarManufacturerModels(car.models);
      }
    }
    //setCarManufacturerModels(listData)
  }, [carManufacturer])

  function childsParentCallback(isContinued) {
    props.parentCallback(isContinued, 0);
  }

  function onCarManufacturerChange(e) {
    setCarManufacturer(e.target.value);
  }

  function onCarModelsChange(e) {
    console.log(carManufacturerModels);
  }

  return (
    <>
      <form id="step1">
        <h3 className="car_info">Информация об автомобиле</h3>
        <div className="form_wrapper">
          <div className="form_wrapper_container">
            <label className="form_wrapper_container_label" htmlFor="manufactor">Марка</label>
            <SelectInput key="manufactor" customId="manufactor" listData={listData.CAR_MANUFACTURERS_ARRAY} onChange={onCarManufacturerChange} />

            <label className="form_wrapper_container_label" htmlFor="model">Модель</label>
            <SelectInput key="model" customId="model" listData={carManufacturerModels} onChange={onCarModelsChange}/>

            <label className="form_wrapper_container_label" htmlFor="year_of_production">Год выпуска</label>
            <input className="form_wrapper_container_input_small" type="text" id="year_of_production" placeholder="0000"/>

            <label className="form_wrapper_container_label" className="form_wrapper_container_label" htmlFor="license_plate">Гос. номер</label>
            <input className="form_wrapper_container_input_small" type="text" id="license_plate" placeholder="A000AA000" />

            <label className="form_wrapper_container_label" htmlFor="vin">VIN</label>
            <input className="form_wrapper_container_input_large" type="text" id="vin" placeholder="ABCD1234567890"/>

            <label className="form_wrapper_container_label" htmlFor="car_color">Цвет</label>
            <SelectInput key="" customId="car_color" listData={["Белый"]} />
          </div>
        </div>

        <div className="form_wrapper">
          <div className="form_wrapper_container">
            <label className="form_wrapper_container_label" htmlFor="engine_type">Тип двигателя</label>
            <SelectInput key="engine_type" customId="engine_type" listData={["Бензин"]} />

            <label className="form_wrapper_container_label" htmlFor="engine_volume">Объем</label>
            <input className="form_wrapper_container_input_small" type="text" id="engine_volume" placeholder="1,0л" />

            <label className="form_wrapper_container_label" htmlFor="engine_hp">Мощность</label>
            <input className="form_wrapper_container_input_small" type="text" id="engine_hp" placeholder="100 л.c." />

            <label className="form_wrapper_container_label" htmlFor="transmission">Трансмиссия</label>
            <SelectInput key="transmission" customId="transmission" listData={["Автоматическая"]} />

            <label className="form_wrapper_container_label" htmlFor="wheel_drive">Привод</label>
            <SelectInput key="wheel_drive" customId="wheel_drive" listData={["Автоматическая"]} />

            <label className="form_wrapper_container_label" htmlFor="vehicle_type">Тип кузова</label>
            <SelectInput key="vehicle_type" customId="vehicle_type" listData={["Автоматическая"]} />
          </div>
        </div>

        <div className="form_wrapper">
          <div className="form_wrapper_container">
            <label className="form_wrapper_container_label" htmlFor="milage">Пробег</label>
            <input className="form_wrapper_container_input_small" type="text" id="milage" placeholder="10 000км" />

            <label className="form_wrapper_container_label" htmlFor="pts_serial">Серия и номер ПТС</label>
            <input className="form_wrapper_container_input_large" type="text" id="pts_serial" placeholder="00 АА 000000"/>

            <label className="form_wrapper_container_label" htmlFor="sts_serial">Серия и номер СТС</label>
            <input className="form_wrapper_container_input_large" type="text" id="sts_serial" placeholder="00 АА 000000"/>
          </div>
        </div>

        <h3 className="rent_price">Стоимость аренды</h3>
        <div className="form_wrapper form_wrapper_custom">
          <div className="form_wrapper_container form_wrapper_container_custom">
            <label className="form_wrapper_container_label" htmlFor="regular_price">Обычная цена</label>
            <input className="form_wrapper_container_input_small" type="text" id="regular_price" placeholder="1 500 ₽/сутки" />

            <label className="form_wrapper_container_label" htmlFor="3day_price">Цена при аренде на 3 дня</label>
            <input className="form_wrapper_container_input_small" type="text" id="3day_price" placeholder="1 400 ₽/сутки" />

            <label className="form_wrapper_container_label" htmlFor="5plus_price">Цена при аренде более 5 дней</label>
            <input className="form_wrapper_container_input_small" type="text" id="5plus_price" placeholder="1 300 ₽/сутки" />
          </div>
        </div>

        <h3 className="car_insurance">Страхование</h3>
        <div className="form_wrapper">
          <div className="form_wrapper_container">
            <label className="form_wrapper_container_label" htmlFor="osago">Полис ОСАГО</label>
            <input className="form_wrapper_container_input_large" type="text" id="osago" placeholder="XXX 000000000" />

            <label className="form_wrapper_container_label" htmlFor="kasko">Полис КАСКО (если есть)</label>
            <input className="form_wrapper_container_input_large" type="text" id="kasko" placeholder="XXX 000000000" />
          </div>
        </div>
      </form>

      <ContinueDiv isValid="true" buttonName="Продолжить" parentCallback={childsParentCallback}/>
    </>
  )
}
