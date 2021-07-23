import React, { useState, useEffect } from 'react';

import ContinueDiv from "~/components/ContinueDiv";
import SelectInput from "~/components/authed_user/SelectInput";

import * as listData from "~/dataForLists";

import "~/styles/authed_user/add_new_car/step1.scss";

export default function Step1(props) {
  const [carManufacturer, setCarManufacturer] = useState("");
  const [carManufacturerModel, setCarManufacturerModel] = useState("");
  const [carManufacturerModels, setCarManufacturerModels] = useState([]);

  const [yeatOfProduction, setYearOfProduction] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [vin, setVin] = useState("");
  const [color, setColor] = useState("");

  const [engineType, setEngineType] = useState("");
  const [engineVolume, setEngineVolume] = useState("");
  const [engineHP, setEngineHP] = useState("");
  const [transmission, setTransmisson] = useState("");
  const [wheelDrive, setWheelDrive] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const [milage, setMileage] = useState("");
  const [ptsSerial, setPtsSerial] = useState("");
  const [stsSerial, setStsSerial] = useState("");

  const [regularPrice, setRegularPrice] = useState("");
  const [threeDayRentPrice, setThreedayRentPrice] = useState("");
  const [fiveDayRentPrice, setFiveDayRentPrice] = useState("");

  const [osago, setOsago] = useState("");
  const [kasko, setKasko] = useState("");

  const [isValidCarManufacturer, setIsValidCarManufacturer] = useState(false);
  const [isValidCarManufacturerModel, setIsValidCarManufacturerModel] = useState(false);

  const [isValidYeatOfProduction, setIsValidYearOfProduction] = useState(false);
  const [isValidLicensePlate, setIsValidLicensePlate] = useState(false);
  const [isValidVin, setIsValidVin] = useState(false);
  const [isValidColor, setIsValidColor] = useState(false);

  const [isValidEngineType, setIsValidEngineType] = useState(false);
  const [isValidEngineVolume, setIsValidEngineVolume] = useState(false);
  const [isValidEngineHP, setIsValidEngineHP] = useState(false);
  const [isValidTransmission, setIsValidTransmisson] = useState(false);
  const [isValidWheelDrive, setIsValidWheelDrive] = useState(false);
  const [isValidVehicleType, setIsValidVehicleType] = useState(false);

  const [isValidMileage, setIsValidMileage] = useState(false);
  const [isValidPtsSerial, setIsValidPtsSerial] = useState(false);
  const [isValidStsSerial, setIsValidStsSerial] = useState(false);

  const [isValidRegularPrice, setIsValidRegularPrice] = useState(false);
  const [isValidThreeDayRentPrice, setIsValidThreedayRentPrice] = useState(false);
  const [isValidFiveDayRentPrice, setIsValidFiveDayRentPrice] = useState(false);

  const [isValidOsago, setIsValidOsago] = useState(false);
  const [isValidKasko, setIsValidKasko] = useState(false);

  const CAR_MANUFACTURER_REGEX = /^[a-zA-z -]{3,30}$/;
  const CAR_MODEL_REGEX = /^[0-9a-zA-z -\.]{2,30}$/;
  const YEAR_OF_PROUCTION_REGEX = /^[2][0][0-2][0-9]$/;
  const LICENSE_PLATE_REGEX = /^[АВЕКМНОРСТУХ]\d{3}(?<!000)[АВЕКМНОРСТУХ]{2}\d{2,3}$/ui;
  const VIN_REGEX = /^[A-HJ-NPR-Z0-9]{17}$/i;
  const COLOR_REGEX = /^[а-яА-Я-]{3,15}$/;

  const ENGINE_TYPE_REGEX = COLOR_REGEX;
  const ENGINE_VOLUME_REGEX = /^(\d{1,2})[,\.](\d{1,2})$/;
  const ENGINE_HP_REGEX = /^\d{2,4}$/;
  const WHEEL_DRIVE_REGEX = /^[a-яА-Я]{4,14}$/;
  const MILEAGE_REGEX = /^(\d{1,3})[ -]?(\d{1,3})?$/;
  const VEHICLE_TYPE_REGEX = COLOR_REGEX;

  const RENT_PRICE_REGEX = /^\d{3,7}$/;

  const PTS_STS_OSAGO_KASKO_REGEX = /^[a-z-A-Z0-9]{10,25}$/;

  function setInvalidStyleInput(target) {
    target.style.opacity = '1';
    target.style.border = '2px solid red';
  }

  function setValidStyleInput(target) {
    target.style.border = '2px solid green';
  }

  function onChangePattern(e, setFunc, REGEX, setValidFunc) {
    setFunc(e.target.value);
    if (REGEX.test(e.target.value)) {
      setValidStyleInput(e.target);
      setValidFunc(true);
    } else {
      setInvalidStyleInput(e.target);
      setValidFunc(false);
    }
  }

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

  function checkIfValidStep1() {
    console.log(
      isValidCarManufacturer &&
      isValidCarManufacturerModel &&
      isValidYeatOfProduction &&
      isValidLicensePlate &&
      isValidVin &&
      isValidColor &&
      isValidEngineType &&
      isValidEngineVolume &&
      isValidEngineHP &&
      isValidTransmission &&
      isValidWheelDrive &&
      isValidVehicleType &&
      isValidMileage &&
      isValidPtsSerial &&
      isValidStsSerial &&
      isValidRegularPrice &&
      isValidThreeDayRentPrice &&
      isValidFiveDayRentPrice &&
      isValidOsago
    )
    return (
    isValidCarManufacturer &&
    isValidCarManufacturerModel &&
    isValidYeatOfProduction &&
    isValidLicensePlate &&
    isValidVin &&
    isValidColor &&
    isValidEngineType &&
    isValidEngineVolume &&
    isValidEngineHP &&
    isValidTransmission &&
    isValidWheelDrive &&
    isValidVehicleType &&
    isValidMileage &&
    isValidPtsSerial &&
    isValidStsSerial &&
    isValidRegularPrice &&
    isValidThreeDayRentPrice &&
    isValidFiveDayRentPrice &&
    isValidOsago);
  }

  return (
    <>
      <form id="step1">
        <h3 className="car_info">Информация об автомобиле</h3>
        <div className="form_wrapper">
          <div className="form_wrapper_container">
            <label className="form_wrapper_container_label" htmlFor="manufactor">Марка</label>
            <SelectInput key="manufactor" customId="manufactor" listData={listData.CAR_MANUFACTURERS_ARRAY} onChange={(e) => onChangePattern(e, setCarManufacturer, CAR_MANUFACTURER_REGEX, setIsValidCarManufacturer)} />

            <label className="form_wrapper_container_label" htmlFor="model">Модель</label>
            <SelectInput key="model" customId="model" listData={carManufacturerModels} onChange={(e) => onChangePattern(e, setCarManufacturerModel, CAR_MODEL_REGEX, setIsValidCarManufacturerModel)} />

            <label className="form_wrapper_container_label" htmlFor="year_of_production">Год выпуска</label>
            <input className="form_wrapper_container_input_small" type="text" id="year_of_production" placeholder="0000" onChange={(e) => onChangePattern(e, setYearOfProduction, YEAR_OF_PROUCTION_REGEX, setIsValidYearOfProduction)} />

            <label className="form_wrapper_container_label" className="form_wrapper_container_label" htmlFor="license_plate">Гос. номер</label>
            <input className="form_wrapper_container_input_small" type="text" id="license_plate" placeholder="A000AA000" onChange={(e) => onChangePattern(e, setLicensePlate, LICENSE_PLATE_REGEX, setIsValidLicensePlate)}/>

            <label className="form_wrapper_container_label" htmlFor="vin">VIN</label>
            <input className="form_wrapper_container_input_large" type="text" id="vin" placeholder="ABCD1234567890" onChange={(e) => onChangePattern(e, setVin, VIN_REGEX, setIsValidVin)}/>

            <label className="form_wrapper_container_label" htmlFor="car_color">Цвет</label>
            <SelectInput key="car_color" customId="car_color" listData={["Белый"]} onChange={(e) => onChangePattern(e, setColor, COLOR_REGEX, setIsValidColor)} />
          </div>
        </div>

        <div className="form_wrapper">
          <div className="form_wrapper_container">
            <label className="form_wrapper_container_label" htmlFor="engine_type">Тип двигателя</label>
            <SelectInput key="engine_type" customId="engine_type" listData={["Бензин"]} onChange={(e) => onChangePattern(e, setEngineType, ENGINE_TYPE_REGEX, setIsValidEngineType)} />

            <label className="form_wrapper_container_label" htmlFor="engine_volume">Объем (л)</label>
            <input className="form_wrapper_container_input_small" type="text" id="engine_volume" placeholder="1,0л" onChange={(e) => onChangePattern(e, setEngineVolume, ENGINE_VOLUME_REGEX, setIsValidEngineVolume)}/>

            <label className="form_wrapper_container_label" htmlFor="engine_hp">Мощность (л.с)</label>
            <input className="form_wrapper_container_input_small" type="text" id="engine_hp" placeholder="100 л.c." onChange={(e) => onChangePattern(e, setEngineHP, ENGINE_HP_REGEX, setIsValidEngineHP)}/>

            <label className="form_wrapper_container_label" htmlFor="transmission">Трансмиссия</label>
            <SelectInput key="transmission" customId="transmission" listData={["Автоматическая"]} onChange={(e) => onChangePattern(e, setTransmisson, COLOR_REGEX, setIsValidTransmisson)} />

            <label className="form_wrapper_container_label" htmlFor="wheel_drive">Привод</label>
            <SelectInput key="wheel_drive" customId="wheel_drive" listData={["Автоматическая"]} onChange={(e) => onChangePattern(e, setWheelDrive, WHEEL_DRIVE_REGEX, setIsValidWheelDrive)}/>

            <label className="form_wrapper_container_label" htmlFor="vehicle_type">Тип кузова</label>
            <SelectInput key="vehicle_type" customId="vehicle_type" listData={["Автоматическая"]} onChange={(e) => onChangePattern(e, setVehicleType, VEHICLE_TYPE_REGEX, setIsValidVehicleType)} />
          </div>
        </div>

        <div className="form_wrapper">
          <div className="form_wrapper_container">
            <label className="form_wrapper_container_label" htmlFor="milage">Пробег (км)</label>
            <input className="form_wrapper_container_input_small" type="text" id="milage" placeholder="10 000км" onChange={(e) => onChangePattern(e, setMileage, MILEAGE_REGEX, setIsValidMileage)}/>

            <label className="form_wrapper_container_label" htmlFor="pts_serial">Серия и номер ПТС</label>
            <input className="form_wrapper_container_input_large" type="text" id="pts_serial" placeholder="00 АА 000000" onChange={(e) => onChangePattern(e, setPtsSerial, PTS_STS_OSAGO_KASKO_REGEX, setIsValidPtsSerial)}/>

            <label className="form_wrapper_container_label" htmlFor="sts_serial">Серия и номер СТС</label>
            <input className="form_wrapper_container_input_large" type="text" id="sts_serial" placeholder="00 АА 000000" onChange={(e) => onChangePattern(e, setStsSerial, PTS_STS_OSAGO_KASKO_REGEX, setIsValidStsSerial)}/>
          </div>
        </div>

        <h3 className="rent_price">Стоимость аренды</h3>
        <div className="form_wrapper form_wrapper_custom">
          <div className="form_wrapper_container form_wrapper_container_custom">
            <label className="form_wrapper_container_label" htmlFor="regular_price">Обычная цена (₽/сутки)</label>
            <input className="form_wrapper_container_input_small" type="text" id="regular_price" placeholder="1 500 ₽/сутки" onChange={(e) => onChangePattern(e, setRegularPrice, RENT_PRICE_REGEX, setIsValidRegularPrice)} />

            <label className="form_wrapper_container_label" htmlFor="3day_price">Цена при аренде на 3 дня (₽/сутки)</label>
            <input className="form_wrapper_container_input_small" type="text" id="3day_price" placeholder="1 400 ₽/сутки" onChange={(e) => onChangePattern(e, setThreedayRentPrice, RENT_PRICE_REGEX, setIsValidThreedayRentPrice)} />

            <label className="form_wrapper_container_label" htmlFor="5plus_price">Цена при аренде более 5 дней (₽/сутки)</label>
            <input className="form_wrapper_container_input_small" type="text" id="5plus_price" placeholder="1 300 ₽/сутки" onChange={(e) => onChangePattern(e, setFiveDayRentPrice, RENT_PRICE_REGEX, setIsValidFiveDayRentPrice)} />
          </div>
        </div>

        <h3 className="car_insurance">Страхование</h3>
        <div className="form_wrapper">
          <div className="form_wrapper_container">
            <label className="form_wrapper_container_label" htmlFor="osago">Полис ОСАГО</label>
            <input className="form_wrapper_container_input_large" type="text" id="osago" placeholder="XXX 000000000" onChange={(e) => onChangePattern(e, setOsago, PTS_STS_OSAGO_KASKO_REGEX, setIsValidOsago)}/>

            <label className="form_wrapper_container_label" htmlFor="kasko">Полис КАСКО (если есть)</label>
            <input className="form_wrapper_container_input_large" type="text" id="kasko" placeholder="XXX 000000000" onChange={(e) => onChangePattern(e, setKasko, PTS_STS_OSAGO_KASKO_REGEX, setIsValidKasko)}/>
          </div>
        </div>
      </form>
      { checkIfValidStep1() ?
        <ContinueDiv isValid="true" form="step1" buttonName="Продолжить" callback={childsParentCallback}/> : <ContinueDiv buttonName="Продолжить" isValid="false"/> }
    </>
  )
}
