import React from 'react';

import Header from "../Header";
import Footer from "../Footer";
import ReviewSlider from "../slider/ReviewSlider";

import '~/styles/home_page/home_page.scss';

import firstSvg from '~/assets/svg/home_page/1.svg';
import secondSvg from '~/assets/svg/home_page/2.svg';
import thirdSvg from '~/assets/svg/home_page/3.svg';
import forthSvg from '~/assets/svg/home_page/4.svg';
import fifthSvg from '~/assets/svg/home_page/5.svg';

import step1Svg from '~/assets/svg/home_page/step_1.svg';
import step2Svg from '~/assets/svg/home_page/step_2.svg';
import step3Svg from '~/assets/svg/home_page/step_3.svg';

import rentCarSvg from '~/assets/svg/home_page/rent_car.svg';
import haveCarSvg from '~/assets/svg/home_page/have_car.svg';

import { SliderData } from './SliderData';

function HomePage(props) {
  return (
    <>
      <Header />
        <div id="home_page">
          <section className="car_sharing_above_section">
          <img className="car_sharing_above_section_bg_image" src={firstSvg}/>
            <div className="car_sharing_above_section_wrapper">
              <h1 className="car_sharing_above_section_wrapper_title">Каршеринг в любой <br />точке России</h1>
              <h3 className="car_sharing_above_section_wrapper_description">Будьте всегда за рулём во время путешествий  и командировок.</h3>
              <a href="/singup">Зарегестрироваться</a>
            </div>
          </section>

          <section className="car_sharing_middle_section">
            <div className="car_sharing_middle_section_wrapper">

              <div className="car_sharing_middle_section_wrapper_image_div">
                <img className="car_sharing_middle_section_wrapper_image_div_1" src={secondSvg}/>
              </div>
              <div className="car_sharing_middle_section_wrapper_div_1">
                <h2 className="car_sharing_middle_section_wrapper_div_1_title">Аренда напрямую<br/>от владельцев</h2>
                <p className="car_sharing_middle_section_wrapper_div_1_description">Вы получите автомобиль от его собственника,
                а мы проверим юридическую чистоту и техническую исправность.</p>
              </div>

              <div className="car_sharing_middle_section_wrapper_div_2">
                <h2 className="car_sharing_middle_section_wrapper_div_2_title">Автомобили <br />на любой вкус</h2>
                <p className="car_sharing_middle_section_wrapper_div_2_description">Вы всегда можете подобрать автомобиль любого класса от бюджетных моделей до премиум-класса и спорткаров.</p>
              </div>
              <div className="car_sharing_middle_section_wrapper_image_div_center">
                <img className="car_sharing_middle_section_wrapper_image_div_2" src={thirdSvg}/>
              </div>

              <div className="car_sharing_middle_section_wrapper_image_div">
                <img className="car_sharing_middle_section_wrapper_image_div_3" src={forthSvg}/>
              </div>
              <div className="car_sharing_middle_section_wrapper_div_3">
                <h2 className="car_sharing_middle_section_wrapper_div_3_title">Гарантия  честной аренды</h2>
                <p className="car_sharing_middle_section_wrapper_div_3_description">Общение и оплата происходит через наш сервис, что предотвращает вас от обмана.</p>
              </div>
            </div>
          </section>

          <section className="car_sharing_how_to_rent_section">
            <h2 className="car_sharing_how_to_rent_section_title">Как арендовать автомобиль</h2>
            <img className="car_sharing_how_to_rent_section_image" />
          </section>

          <section className="car_sharing_do_you_have_car_section">
            <h2 className="car_sharing_do_you_have_car_section_title">У вас есть автомобиль?</h2>
            <h3>Чтобы он не простаивал — сдавайте его в аренду и зарабатывайте.</h3>
            <div className="car_sharing_do_you_have_car_section_wrapper">
              <img src={haveCarSvg} />
            </div>
          </section>

          <section className="car_sharing_reviews_section">
            <h2 className="car_sharing_reviews_section_title">Отзывы клиентов</h2>
            <ReviewSlider slides={SliderData}/>
          </section>

          <section className="car_sharing_try_yourself_section">
            <img src={fifthSvg} className="car_sharing_try_yourself_section_img" />
            <h2 className="car_sharing_try_yourself_section_title">Попробуйте аренду на себе</h2>
            <a href="/singup">Зарегистрироваться</a>
          </section>
        </div>
      <Footer />
    </>
  )
}

export default HomePage;
