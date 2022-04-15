import React, { useState } from 'react';

import ContinueDiv from "~/components/ContinueDiv";
import RoundSwitch from "~/components/authed_user/RoundSwitch";

import "~/styles/authed_user/add_new_car/step2.scss";

import { CAR_OPTIONS_ARRAY } from "~/carOptions";

export default function Step2(props) {
  const [optionsObject, setOptionsObject] = useState({
    airConditioner: false,
    airBags: false,
    aux: false,
    bluetooth: false,
    cruiseControl: false,
    multimedia: false,
    navigationSys: false,
    IsofixFastening: false,
    heater: false,
    seatHeater: false,
    seatVent: false,
    rearCam: false,
    roofRack: false,
    parktronic: false,
  });

  const [servicesObject, setServicesObject] = useState({
    babySeat: false,
    carDelivery: false,
    endInAnyPlace: false,
    fullTank: false,
  });

  function childsParentCallback(isContinued) {
    console.log(optionsObject);
    if (isContinued) {
      props.addCarStep2({
        options: {
          airConditioner: optionsObject.airConditioner,
          airBags: optionsObject.airBags,
          bluetooth: optionsObject.bluetooth,
          cruiseControl: optionsObject.cruiseControl,
          multimedia: optionsObject.multimedia,
          navigationSys: optionsObject.navigationSys,
          IsofixFastening: optionsObject.IsofixFastening,
          heater: optionsObject.heater,
          seatVent: optionsObject.seatVent,
          seatHeater: optionsObject.seatHeater,
          rearCam: optionsObject.rearCam,
          roofRack: optionsObject.roofRack,
          parktronic: optionsObject.parktronic,
        },
        services: {
          babySeat: servicesObject.babySeat,
          carDelivery: servicesObject.carDelivery,
          endInAnyPlace: servicesObject.endInAnyPlace,
          fullTank: servicesObject.fullTank,
        }
      })
    }
    props.parentCallback(isContinued, 1);
  }

  function onOptionChange(e, optionName) {
    console.log("switched " + optionName);
    switch (optionName) {
      case "airConditioner":
       setOptionsObject((prevState) => ({
         ...prevState,
         airConditioner: !prevState.airConditioner
       }));
       break;

     case "airBags":
      setOptionsObject((prevState) => ({
        ...prevState,
        airBags: !prevState.airBags
      }));
      break;

     case "aux":
       setOptionsObject((prevState) => ({
         ...prevState,
         aux: !prevState.aux
       }));
       break;

     case "bluetooth":
      setOptionsObject((prevState) => ({
        ...prevState,
        bluetooth: !prevState.bluetooth
      }));
      break;
      case "cruiseControl":
       setOptionsObject((prevState) => ({
         ...prevState,
         cruiseControl: !prevState.cruiseControl
       }));
       break;

     case "multimedia":
      setOptionsObject((prevState) => ({
        ...prevState,
        multimedia: !prevState.multimedia
      }));
      break;

     case "navigationSys":
       setOptionsObject((prevState) => ({
         ...prevState,
         navigationSys: !prevState.navigationSys
       }));
       break;

     case "IsofixFastening":
      setOptionsObject((prevState) => ({
        ...prevState,
        IsofixFastening: !prevState.IsofixFastening
      }));
      break;

      case "heater":
       setOptionsObject((prevState) => ({
         ...prevState,
         heater: !prevState.heater
       }));
       break;

     case "seatHeater":
      setOptionsObject((prevState) => ({
        ...prevState,
        seatHeater: !prevState.seatHeater
      }));
      break;

     case "seatVent":
       setOptionsObject((prevState) => ({
         ...prevState,
         seatVent: !prevState.seatVent
       }));
       break;

     case "rearCam":
      setOptionsObject((prevState) => ({
        ...prevState,
        rearCam: !prevState.rearCam
      }));
      break;

      case "roofRack":
       setOptionsObject((prevState) => ({
         ...prevState,
         roofRack: !prevState.roofRack
       }));
       break;

     case "parktronic":
      setOptionsObject((prevState) => ({
        ...prevState,
        parktronic: !prevState.parktronic
      }));
      break;

      default:
        return;
    }

    console.log(optionsObject);
  }

  return (
    <>
      <form id="step_2">
        <h3>Vehicle options</h3>
        <div className="form_wrapper_options">
          {CAR_OPTIONS_ARRAY.map((option, index) => {
            return (
              <div key={option.text} className="form_wrapper_options_option">
                <img src={option.icon} className="form_wrapper_options_option_icon" alt="Car Option"/>
                <p>{option.text}</p>
                <div className="form_wrapper_options_option_switch">
                  <RoundSwitch  onChange={(e) => onOptionChange(e, option.title)}/>
                </div>
              </div>
            )
          })}
        </div>
        <h3>Additional services</h3>
        <div className="form_wrapper_additional_services">
          <div className="form_wrapper_additional_services_service">
            <div className="form_wrapper_additional_services_service_info">
              <p className="form_wrapper_additional_services_service_info_title">Child Seat</p>
              <p className="form_wrapper_additional_services_service_info_desc">Rent a chair and earn extra money</p>
            </div>

            <div className="form_wrapper_additional_services_service_price_div">
              <p className="form_wrapper_additional_services_service_price_div_price">1 000 UAH</p>
            </div>

            <div className="form_wrapper_additional_services_service_switch">
              <RoundSwitch  onChange={(e) => {
                  setServicesObject((prevState) => ({
                    ...prevState,
                    babySeat: !prevState.babySeat
                  }))
                }}/>
            </div>
          </div>

          <div className="form_wrapper_additional_services_service">
            <div className="form_wrapper_additional_services_service_info">
              <p className="form_wrapper_additional_services_service_info_title">Vehicle Delivery</p>
              <p className="form_wrapper_additional_services_service_info_desc">Take the car to a location convenient for the renter and earn income</p>
            </div>

            <div className="form_wrapper_additional_services_service_price_div">
              <p className="form_wrapper_additional_services_service_price_div_price">1 000 UAH</p>
            </div>

            <div className="form_wrapper_additional_services_service_switch">
              <RoundSwitch  onChange={(e) => {
                  setServicesObject((prevState) => ({
                    ...prevState,
                    carDelivery: !prevState.carDelivery
                  }))
                }}/>
            </div>
          </div>

          <div className="form_wrapper_additional_services_service">
            <div className="form_wrapper_additional_services_service_info">
              <p className="form_wrapper_additional_services_service_info_title">End lease anywhere</p>
              <p className="form_wrapper_additional_services_service_info_desc">Pick up the car at a convenient location for the tenant for an extra charge. income</p>
            </div>

            <div className="form_wrapper_additional_services_service_price_div">
              <p className="form_wrapper_additional_services_service_price_div_price">1 000 UAH</p>
            </div>

            <div className="form_wrapper_additional_services_service_switch">
              <RoundSwitch  onChange={(e) => {
                  setServicesObject((prevState) => ({
                    ...prevState,
                    endInAnyPlace: !prevState.endInAnyPlace
                  }))
                }} />
            </div>
          </div>

          <div className="form_wrapper_additional_services_service">
            <div className="form_wrapper_additional_services_service_info">
              <p className="form_wrapper_additional_services_service_info_title">Full tank</p>
              <p className="form_wrapper_additional_services_service_info_desc">Fill a full tank before renting out</p>
            </div>

            <div className="form_wrapper_additional_services_service_price_div">
              <p className="form_wrapper_additional_services_service_price_div_price">1 000 UAH</p>
            </div>

            <div className="form_wrapper_additional_services_service_switch">
              <RoundSwitch  onChange={(e) => {
                  setServicesObject((prevState) => ({
                    ...prevState,
                    fullTank: !prevState.fullTank
                  }))
                }} />
            </div>
          </div>
        </div>
      </form>
      <ContinueDiv isValid="true" buttonName="Continue" parentCallback={childsParentCallback} />
    </>
  )
}
