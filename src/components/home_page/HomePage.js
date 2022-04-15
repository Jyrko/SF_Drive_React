import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Header from "../nav/Header";
import Footer from "../Footer";
import ReviewSlider from "../slider/ReviewSlider";

import validateUser from "~/functions/validateUser";

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
  const [isLogined, setIsLogined] = useState(false);

  useEffect(async () => {
    const isValid = await validateUser();
    setIsLogined(isValid);
    console.log("Home logined - " + isValid);
  }, [])
  return (
    <>
      { isLogined ?
        <Redirect to="/authed" />
        :
        <>
        <Header />
          <div id="home_page">
            <section className="car_sharing_above_section">
            <img className="car_sharing_above_section_bg_image" src={firstSvg}/>
              <div className="car_sharing_above_section_wrapper">
                <h1 className="car_sharing_above_section_wrapper_title">Car sharing anywhere in Ukraine</h1>
                <h3 className="car_sharing_above_section_wrapper_description">Be always driving when traveling and on business trips.</h3>
                <a href="/singup">Register</a>
              </div>
            </section>

            <section className="car_sharing_middle_section">
              <div className="car_sharing_middle_section_wrapper">

                <div className="car_sharing_middle_section_wrapper_image_div">
                  <img className="car_sharing_middle_section_wrapper_image_div_1" src={secondSvg}/>
                </div>
                <div className="car_sharing_middle_section_wrapper_div_1">
                  <h2 className="car_sharing_middle_section_wrapper_div_1_title">Rent directly<br/>from owners</h2>
                  <p className="car_sharing_middle_section_wrapper_div_1_description">You will receive a car from its owner,
                  and we will check the legal purity and technical correctness.</p>
                </div>

                <div className="car_sharing_middle_section_wrapper_div_2">
                  <h2 className="car_sharing_middle_section_wrapper_div_2_title">Cars <br />for every taste</h2>
                  <p className="car_sharing_middle_section_wrapper_div_2_description">You can always pick up a car of any class from budget models to premium and sports cars.</p>
                </div>
                <div className="car_sharing_middle_section_wrapper_image_div_center">
                  <img className="car_sharing_middle_section_wrapper_image_div_2" src={thirdSvg}/>
                </div>

                <div className="car_sharing_middle_section_wrapper_image_div">
                  <img className="car_sharing_middle_section_wrapper_image_div_3" src={forthSvg}/>
                </div>
                <div className="car_sharing_middle_section_wrapper_div_3">
                  <h2 className="car_sharing_middle_section_wrapper_div_3_title">Fair Rental Guaranteed</h2>
                  <p className="car_sharing_middle_section_wrapper_div_3_description">Communication and payment takes place through our service, which prevents you from being deceived.</p>
                </div>
              </div>
            </section>

            <section className="car_sharing_how_to_rent_section">
              <h2 className="car_sharing_how_to_rent_section_title">How to rent a car</h2>
              <img className="car_sharing_how_to_rent_section_image" />
            </section>

            <section className="car_sharing_do_you_have_car_section">
              <h2 className="car_sharing_do_you_have_car_section_title">Do you have a car?</h2>
              <h3>To keep it running, rent it out and earn money.</h3>
              <div className="car_sharing_do_you_have_car_section_wrapper">
                <img src={haveCarSvg} />
              </div>
            </section>

            <section className="car_sharing_reviews_section">
              <h2 className="car_sharing_reviews_section_title">Customer Reviews</h2>
              <ReviewSlider slides={SliderData}/>
            </section>

            <section className="car_sharing_try_yourself_section">
              <img src={fifthSvg} className="car_sharing_try_yourself_section_img" />
              <h2 className="car_sharing_try_yourself_section_title">Try car sharing</h2>
              <a href="/singup">Sign Up</a>
            </section>
          </div>
        <Footer />
        </>
      }
    </>
  )
}

export default HomePage;
