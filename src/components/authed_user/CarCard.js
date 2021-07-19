import React, { useEffect, useState } from 'react';

import ContinueDiv from "../ContinueDiv";
import ImageGallery from "./ImageGallery";

import "~/styles/authed_user/car_card/car_card.scss";
import owner from "~/assets/img/car_card/owner_sample.png";
import separator from "~/assets/svg/authed/separator.svg";
import star from "~/assets/svg/authed/star.svg";

import ruLocale from "date-fns/locale/ru";
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import {ThemeProvider} from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {availabilityTheme} from "~/styles/authed_user/car_card/car_card";


export default function CarCard(props) {
  let currentDate = new Date();
  let nextMonthDate = new Date();

  const [carName, setCarName] = useState("Car Model");
  const [yearProduction, setYearProduction] = useState("2021");

  const [rentFor1Day, setRentFor1Day] = useState("3000");
  const [rentFor3Day, setRentFor3Day] = useState("3000");
  const [rentForMoreThan5Day, setRentMoreThanFor5Day] = useState("3000");

  const [currentMonthDate, setCurrentMonthDate] = useState((new Date()).setDate((new Date()).getDate() + 31));
  const [lastMonthDate, setLastMonthDate] = useState((new Date()).setDate((new Date()).getDate() + 1));


  useEffect(() => {
    console.log(props.carId);

    currentDate = currentDate.setDate(currentDate.getDate() - 1);
    nextMonthDate = nextMonthDate.setDate(nextMonthDate.getDate() + 31);
  }, [])

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
    props.parentCallback(true);
  }

  return (
      <>
        <div className="car_card">
          <div className="return_to_home" onClick={returnToHomeHandler}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0002 7.00008V9.00008H4.00016L9.50016 14.5001L8.08016 15.9201L0.160156 8.00008L8.08016 0.0800781L9.50016 1.50008L4.00016 7.00008H16.0002Z" fill="#61A199"/>
            </svg>
            <span className="return_to_home_title">Назад</span>
          </div>
          <section className="car_gallery">
            <ImageGallery />
          </section>

          <section className="car_and_owner_basic_info">
            <div className="car_and_owner_basic_info_car">
              <h2 className="car_and_owner_basic_info_car_title">Car and Model, 2021</h2>
              <div className="car_and_owner_basic_info_car_prices">
                <div className="car_and_owner_basic_info_car_prices_price">
                  <p className="car_and_owner_basic_info_car_prices_price_value">1800 $/сут.</p>
                  <p className="car_and_owner_basic_info_car_prices_price_desc">обычная аренда</p>
                </div>
                <div className="car_and_owner_basic_info_car_prices_price">
                  <p className="car_and_owner_basic_info_car_prices_price_value">1600 $/сут.</p>
                  <p className="car_and_owner_basic_info_car_prices_price_desc">при аренде за 3 дня</p>
                </div>
                <div className="car_and_owner_basic_info_car_prices_price">
                  <p className="car_and_owner_basic_info_car_prices_price_value">1400 $/сут.</p>
                  <p className="car_and_owner_basic_info_car_prices_price_desc">при аренде более 5 дней</p>
                </div>
              </div>
              <div className="car_and_owner_basic_info_owner">
                <div className="car_and_owner_basic_info_owner_wrapper">
                  <img src={owner} className="car_and_owner_basic_info_owner_wrapper_image"/>
                  <p className="car_and_owner_basic_info_owner_wrapper_name">Name Doe</p>
                  <p className="car_and_owner_basic_info_owner_wrapper_role">Владелец</p>
                  <a href="/"> Просмотреть профиль</a>
                </div>
              </div>
            </div>
          </section>

          <section className="car_detailed_specs">
            <h3 className="car_detailed_specs_title">Характеристики</h3>
            <div className="car_detailed_specs_wrapper">
              <p className="car_detailed_specs_wrapper_name">Год выпуска</p>
              <p className="car_detailed_specs_wrapper_value">2021</p>

              <p className="car_detailed_specs_wrapper_name">Кузов</p>
              <p className="car_detailed_specs_wrapper_value">Седвн</p>

              <p className="car_detailed_specs_wrapper_name">Двигатель</p>
              <p className="car_detailed_specs_wrapper_value">1.6 л / 123 л.с. / бензин</p>

              <p className="car_detailed_specs_wrapper_name">Трансмиссия</p>
              <p className="car_detailed_specs_wrapper_value">Автоматическая</p>

              <p className="car_detailed_specs_wrapper_name">Привод</p>
              <p className="car_detailed_specs_wrapper_value">Передний</p>

              <p className="car_detailed_specs_wrapper_name">Пробег</p>
              <p className="car_detailed_specs_wrapper_value">125 000 км</p>
            </div>

            <img className="car_card_separator" src={separator} />
          </section>

          <section className="car_options">
            <h3 className="car_options_title">Опции</h3>
            dunno
            <img className="car_card_separator" src={separator} />
          </section>

          <section className="car_availability">
            <h3 className="car_availability_title">Доступность</h3>
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
            <h3 className="car_reviews_title">Отзывы</h3>
            <div className="car_reviews_summary">
              <img className="car_reviews_summary_star" src={star}/>
              <p className="car_reviews_summary_score">4,5</p>
              <p className="car_reviews_summary_reviews_count"> (4 отзыва)</p>
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
                    <p>Отличный автомобиль за эти деньги. Динамики для города достаточно, расход также небольшой, не зряСолярис берут таксисты. Владелец общительный,показал и рассказал все об автомобиле. Договорились, что передадим ему машину в другом районе города! Рекомендую!</p>
                  </div>
                </div>
            </div>
          </section>
        </div>
        <ContinueDiv isValid="true" buttonName="Арендовать" />
      </>
  )
}
