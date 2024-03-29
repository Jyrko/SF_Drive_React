import React, { useEffect, useState } from 'react';

import Header from '~/components/nav/Header';
import ContinueDiv from "../../ContinueDiv";
import ImageGallery from "../ImageGallery";
import ReturnButton from "~/components/authed_user/ReturnButton"
import CarOptions from "./CarOptions";
import LeaseRegistration from "~/components/authed_user/LeaseRegistration/LeaseRegistration";

//tempfiles
import first from "~/assets/img/tempfiles/1.jpg";
import second from "~/assets/img/tempfiles/2.jpg";
import third from "~/assets/img/tempfiles/3.jpg";

import "~/styles/authed_user/car_card/car_card.scss";
import owner from "~/assets/img/car_card/owner_sample.png";
import separator from "~/assets/svg/authed/separator.svg";
import star from "~/assets/svg/authed/star.svg";
import morePhotos from "~/assets/svg/authed/more_photos.svg";

import ruLocale from "date-fns/locale/ru";
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import {ThemeProvider} from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {availabilityTheme} from "~/styles/authed_user/car_card/car_card";


import {HOSTNAME, NO_IMAGE_AVAILABLE} from '~/constants';
import getUserBasicInfoById from "~/functions/getUserBasicInfoById";


export default function CarCard({car, parentCallback}) {
  let currentDate = new Date();
  let nextMonthDate = new Date();

  const [isRentChosen, setIsRentPageChosen] = useState(false);

  const [showMorePhotos, setShowMorePhotos] = useState(false);

  const [carName, setCarName] = useState("Car Model");
  const [yearProduction, setYearProduction] = useState("2021");

  const [rentFor1Day, setRentFor1Day] = useState("3000");
  const [rentFor3Day, setRentFor3Day] = useState("3000");
  const [rentForMoreThan5Day, setRentMoreThanFor5Day] = useState("3000");

  const [userProfileImage, setUserProfileImage] = useState(NO_IMAGE_AVAILABLE)
  const [username, setUsername] = useState("Joe Down");

  const [carImages, setCarImages] = useState([]);

  const [currentMonthDate, setCurrentMonthDate] = useState((new Date()).setDate((new Date()).getDate() + 31));
  const [lastMonthDate, setLastMonthDate] = useState((new Date()).setDate((new Date()).getDate() + 1));

  const options_template = [
    "airConditioner",
    "airBags",
    "aux",
    "bluetooth",
    "cruiseControl",
    "losfixFastening",
    "multimedia",
    "navigationSys",
    "parktronic",
    "heater",
    "seatHeater",
    "seatVent",
    "roofRack",
    "rearCam"
  ]


  useEffect(async () => {
    currentDate = currentDate.setDate(currentDate.getDate() - 1);
    nextMonthDate = nextMonthDate.setDate(nextMonthDate.getDate() + 31);
    console.log(car);

    setCarImages(car.images);
    setCarName(`${car.specs.manufacturer} ${car.specs.model}, ${car.specs.yearOfProduction}`);
    const userInfo = await getUserBasicInfoById(car.ownerId);
    setUsername(userInfo ? userInfo.name : "Not Loaded");
    setUserProfileImage(userInfo ? `${HOSTNAME}${userInfo.profileImage}` : NO_IMAGE_AVAILABLE);
  }, []);

  function lastMonthDatePickerHandler(date) {
    setLastMonthDate(date)
    return date;
  }

  function currentMonthDatePickerHandler(date) {
    setCurrentMonthDate(date);
    return date;
  }
  function returnToHomeHandler(e) {
    e.preventDefault();
    parentCallback(true);
  }

  function onShowMorePhotosHandler(e) {
    e.preventDefault();
    setShowMorePhotos(!showMorePhotos);
  }

  function showMorePhotosParentCallback(isClosed) {
    setShowMorePhotos(!isClosed);
  }

  function rentCarCallback(isContinued) {
    setIsRentPageChosen(!isRentChosen);
  }

  return (
      <>
        <Header />
        { isRentChosen ?
          <LeaseRegistration car={car} parentCallback={rentCarCallback}/>
          :
          <>
          {
            showMorePhotos
            ? <ImageGallery images={car.images} parentCallback={showMorePhotosParentCallback} />
            : <></>
          }
          <div className="car_card">
            <ReturnButton onClick={returnToHomeHandler} />
            <section className="car_gallery">
              <div className="car_gallery_container">
                <div className="car_gallery_container_main">
                  <button className="car_gallery_container_main_show_slider_btn_mobile" onClick={onShowMorePhotosHandler}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 14V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0H6C5.46957 0 4.96086 0.210714 4.58579 0.585786C4.21071 0.960859 4 1.46957 4 2V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14ZM9 10L11.03 12.71L14 9L18 14H6L9 10ZM0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16V18H2V4" fill="white"/>
                    </svg>
                  </button>
                  <img src={carImages[0]} className="car_gallery_container_main_image" />
                </div>
                <div className="car_gallery_container_additional">
                  <img src={carImages[1]} className="car_gallery_container_additional_image" />
                  <div className="car_gallery_container_additional_more">
                    <img src={carImages[2]} className="car_gallery_container_additional_more_image" />
                    <button className="car_gallery_container_additional_more_btn" onClick={onShowMorePhotosHandler}>Show more photos</button>
                  </div>
                </div>
              </div>
            </section>

            <section className="car_and_owner_basic_info">
              <div className="car_and_owner_basic_info_car">
                <h2 className="car_and_owner_basic_info_car_title">{`${car.specs.manufacturer} ${car.specs.model}, ${car.specs.yearOfProduction}`}</h2>
                <div className="car_and_owner_basic_info_car_prices">
                  <div className="car_and_owner_basic_info_car_prices_price">
                    <p className="car_and_owner_basic_info_car_prices_price_value">{car.rentInfo.regularPrice} UAH/day</p>
                    <p className="car_and_owner_basic_info_car_prices_price_desc">regular rent</p>
                  </div>
                  <div className="car_and_owner_basic_info_car_prices_price">
                    <p className="car_and_owner_basic_info_car_prices_price_value">{car.rentInfo.threeDayRentPrice} UAH/day</p>
                    <p className="car_and_owner_basic_info_car_prices_price_desc">when renting for 3 days</p>
                  </div>
                  <div className="car_and_owner_basic_info_car_prices_price">
                    <p className="car_and_owner_basic_info_car_prices_price_value">{car.rentInfo.fiveDayPlusRentPrice} UAH/day</p>
                    <p className="car_and_owner_basic_info_car_prices_price_desc">when renting more than 5 days</p>
                  </div>
                </div>
                <div className="car_and_owner_basic_info_owner">
                  <div className="car_and_owner_basic_info_owner_wrapper">
                    <img src={userProfileImage} className="car_and_owner_basic_info_owner_wrapper_image"/>
                    <p className="car_and_owner_basic_info_owner_wrapper_name">{username}</p>
                    <p className="car_and_owner_basic_info_owner_wrapper_role">Owner</p>
                    <a href="/"> View Profile</a>
                  </div>
                </div>
              </div>
            </section>

            <section className="car_detailed_specs">
              <h3 className="car_detailed_specs_title">Characteristics</h3>
              <div className="car_detailed_specs_wrapper">
                <p className="car_detailed_specs_wrapper_name">Year Of Production</p>
                <p className="car_detailed_specs_wrapper_value">{car.specs.yearOfProduction}</p>

                <p className="car_detailed_specs_wrapper_name">Vehicle Type</p>
                <p className="car_detailed_specs_wrapper_value">{car.specs.vehicleType}</p>

                <p className="car_detailed_specs_wrapper_name">Engine</p>
                <p className="car_detailed_specs_wrapper_value">{car.specs.engineDisplacement} л / {car.specs.engineHp} л.с. / {car.specs.engineType}</p>

                <p className="car_detailed_specs_wrapper_name">Translation Type</p>
                <p className="car_detailed_specs_wrapper_value">{car.specs.transmissionType}</p>

                <p className="car_detailed_specs_wrapper_name">Wheel Drive</p>
                <p className="car_detailed_specs_wrapper_value">{car.specs.wheelDrive}</p>

                <p className="car_detailed_specs_wrapper_name">Mileage</p>
                <p className="car_detailed_specs_wrapper_value">{car.specs.mileage} км</p>
              </div>

              <img className="car_card_separator" src={separator} />
            </section>

            <section className="car_options">
              <h3 className="car_options_title">Options</h3>
              <CarOptions options={options_template}/>
              <img className="car_card_separator" src={separator} />
            </section>

            <section className="car_availability">
              <h3 className="car_availability_title">Availability</h3>
              <div className="car_availability_pickers">
                <ThemeProvider theme={availabilityTheme}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale} >
                    <DatePicker
                      autoOk
                      disableToolbar
                      disablePast
                      readOnly={true}
                      orientation="landscape"
                      variant="static"
                      openTo="date"
                      value={lastMonthDate}
                      onChange={lastMonthDatePickerHandler}
                    />
                  </MuiPickersUtilsProvider>
                  <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale} >
                    <DatePicker
                      autoOk
                      readOnly
                      disableToolbar
                      orientation="landscape"
                      variant="static"
                      openTo="date"
                      value={currentMonthDate}
                      onChange={currentMonthDatePickerHandler}
                    />
                  </MuiPickersUtilsProvider>
                </ThemeProvider>
              </div>
              <img className="car_card_separator" src={separator} />
            </section>

            <section className="car_reviews">
              <h3 className="car_reviews_title">Reviews</h3>
              <div className="car_reviews_summary">
                <img className="car_reviews_summary_star" src={star}/>
                <p className="car_reviews_summary_score">4,5</p>
                <p className="car_reviews_summary_reviews_count"> (4 reviews)</p>
              </div>

              <div className="car_reviews_wrapper">
                  <div className="car_reviews_wrapper_review">
                    <div className="car_reviews_wrapper_review_author">
                      <img src={owner} />
                      <div className="car_reviews_wrapper_review_author_desc">
                        <p className="car_reviews_wrapper_review_author_desc_name">Name Doe</p>
                        <p className="car_reviews_wrapper_review_author_desc_date">march 2021</p>
                      </div>
                    </div>
                    <div className="car_reviews_wrapper_review_content">
                      <p>Great car for the money. There are enough dynamics for the city, the consumption is also small, it’s not in vain that taxi drivers take Solaris. The owner is sociable, showed and told everything about the car. We agreed that we would give him a car in another area of the city! Recommend!</p>
                    </div>
                  </div>
              </div>
            </section>
          </div>
          <ContinueDiv isValid="true" buttonName="Rent" parentCallback={rentCarCallback}/>
        </>
      }
    </>
  )
}
