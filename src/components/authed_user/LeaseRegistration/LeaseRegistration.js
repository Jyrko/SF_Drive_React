import React, { useEffect, useState } from 'react';

import ReturnButton from "~/components/authed_user/ReturnButton";
import CarCardSmallest from "~/components/authed_user/LeaseRegistration/CarCardSmallest";
import TripInfo from "~/components/authed_user/LeaseRegistration/TripInfo";
import AdditionalServices from "~/components/authed_user/LeaseRegistration/AdditionalServices";
import Cheque from "~/components/authed_user/LeaseRegistration/Cheque";
import ContinueDiv from "~/components/ContinueDiv";
import SuccessPage from "~/components/authed_user/SuccessPage";

import { setInvalidStyleInput, setValidStyleInput } from "~/functions/styleInputs.js"

import successSvg from "~/assets/svg/authed/lease_registration/success.svg";

import "~/styles/authed_user/lease_registration/lease_registration.scss";

export default function LeaseRegistration({ car, parentCallback}) {
  const formatYmd = date => date.toISOString().slice(0, 10);
  const todayDate = new Date();
  const tommorowDate = () => {
    const newDate = new Date();
    newDate.setDate(todayDate.getDate() + 1);
    return newDate;
  }

  const [isValid, setIsValid] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);

  const [chequeSummary, setChequeSummary] = useState({
    rentPriceWithDiscount: 0,
    rentPriceWithoutDiscount: 0,
    additionalServicesPrice: 0,
    serviceComission: 1000,
    summary: 1000
  })

  const [tripInfo, setTripInfo] = useState({
    "period_from": formatYmd(todayDate),
    "period_to": formatYmd(tommorowDate()),
    "textarea": ""
  })

  const [additionalServiceInfo, setAdditionalServiceInfo] = useState({
    "babySeat": false,
    "carDelivery": false,
    "endInAnyPlace": false,
    "fullTank": false
  })

  //-----------------------callbacks-----------------------
  function onParentClickHandler(e) {
    e.preventDefault();
    parentCallback();
  }

  function onChildsParentClickHandler(e) {
    setShowSuccessPage(true);
    console.log("Continue");
  }

  //-----------------------Cheque-summary-computing-----------------------
  const isoDatesDifferenceInDays = (date1, date2) => (date2 - date1) / 86400000;

  const rentPriceWithDiscountFunc = (daysDiff) => {
    let withDiscount = null;
    if (daysDiff >= 3 && daysDiff < 5) {
      withDiscount = daysDiff * Number(car.rentInfo.threeDayRentPrice);
    } else if (daysDiff >= 5) {
      withDiscount = daysDiff * Number(car.rentInfo.fiveDayPlusRentPrice);
    }
    return withDiscount;
  }

  const additionalServicesPrice = () => {
    let servicesPrice = 0
    for (let serviceKey in additionalServiceInfo) {
      if (additionalServiceInfo[serviceKey]) {
        servicesPrice += 1000
      }
    }
    return servicesPrice
  }

  function chequeSumup() {
    const date1 = new Date(tripInfo.period_from);
    const date2 = new Date(tripInfo.period_to);
    const dayDifference = isoDatesDifferenceInDays(date1, date2);

    const rentPriceWithoutDiscount = dayDifference * Number(car.rentInfo.regularPrice);
    let rentPriceWithDiscount = rentPriceWithDiscountFunc(dayDifference) || rentPriceWithoutDiscount;

    let servicesPrice = additionalServicesPrice();
    console.log(servicesPrice);

    setChequeSummary((prevValue) => ({
      ...prevValue,
      rentPriceWithDiscount,
      rentPriceWithoutDiscount,
      additionalServicesPrice: servicesPrice,
      summary: rentPriceWithDiscount + servicesPrice + 1000
    }))
  }

  useEffect(() => {
    const {textarea, ...dates} = tripInfo;
    chequeSumup()
  }, [additionalServiceInfo, tripInfo])

  //-----------------------Handlers-----------------------
  function validInput(target) {
    if (target.value.length > 15) {
      setIsValid(true)
      return setValidStyleInput(target);
    } else {
      setIsValid(false)
      return setInvalidStyleInput(target);
    }
  }

  function onTripInfoChange(e) {
    const targetValue = e.target.value;
    switch (e.target.id) {
      case "period_from":
        setTripInfo((prevValue) => ({
          ...prevValue,
          "period_from": targetValue,
        }));
        break;
      case "period_to":
        setTripInfo((prevValue) => ({
          ...prevValue,
          "period_to": targetValue,
        }));
        break;

      case "textarea":
        e.target = validInput(e.target)
        setTripInfo((prevValue) => ({
          ...prevValue,
          "textarea": targetValue,
        }));
        break;
      default:
      break;
    }

  }

  function onAdditionalServicesChange(e, serviceId) {
    console.log(serviceId);
    let selectedServiceId = "";
    switch (serviceId) {
      case "babySeat":
        setAdditionalServiceInfo((prevValue) => ({
          ...prevValue,
          babySeat: !prevValue.babySeat
        }));
        break;
      case "carDelivery":
        setAdditionalServiceInfo((prevValue) => ({
          ...prevValue,
          carDelivery: !prevValue.carDelivery
        }));
        break;
      case "endInAnyPlace":
        setAdditionalServiceInfo((prevValue) => ({
          ...prevValue,
          endInAnyPlace: !prevValue.endInAnyPlace
        }));
        break;
      case "fullTank":
        setAdditionalServiceInfo((prevValue) => ({
          ...prevValue,
          fullTank: !prevValue.fullTank
        }));
        break;
      default:
        return;
    }
  }

  return (
    <>
      { showSuccessPage
        ?
          <SuccessPage
            description="You have successfully booked a car. Wait for booking confirmation from the owner"
            linkTo="/"
            image={successSvg} />
        :
        <>
          <section className="lease_registration">
            <ReturnButton onClick={onParentClickHandler} />
            <h2>Registration of rent</h2>
            <div className="lease_registration_container">
              <div className="lease_registration_container_order">
               <div className="lease_registration_container_order_list">
                  <h3 className="lease_registration_container_order_list_title">Order list</h3>
                  <CarCardSmallest car={car} />
                </div>
                <div className="lease_registration_container_order_trip_info">
                  <h3 className="lease_registration_container_order_list_title">Trip info</h3>
                  <TripInfo onChange={onTripInfoChange} tripInfo={tripInfo} minPeriodFrom={formatYmd(todayDate)} minPeriodTo={formatYmd(tommorowDate())}/>
                </div>

                <div className="lease_registration_container_order_additional_services">
                  <h3 className="lease_registration_container_order_additional_services_title">Additional services</h3>
                  <AdditionalServices carSelectedServices={car.services} onServiceChange={onAdditionalServicesChange} />
                </div>
               </div>

              <div className="lease_registration_container_cheque">
                <Cheque tripInfo={tripInfo} chequeSummary={chequeSummary}/>
              </div>
            </div>
          </section>
          <ContinueDiv buttonName="Go to the payment" isValid={isValid ? "true" : "false"} parentCallback={onChildsParentClickHandler}/>
        </>
      }
    </>
  )
}
