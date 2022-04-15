import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import faq from "~/assets/svg/FAQ.svg";

import Header from "../nav/Header";
import Footer from "../Footer";

import validateUser from "~/functions/validateUser";

import '~/styles/base_faq.scss';

const Faq = (props) => {

  const [isLogined, setIsLogined] = useState(false);

  useEffect(async () => {
    const isValid = await validateUser();
    setIsLogined(isValid);
    console.log("Home logined - " + isValid);
  }, [])

  function collapse(e) {
    const target = e.target;
    target.classList.toggle("active");

    let content = target.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }

  return (
    <>
    { isLogined ?
      <Redirect to="/authed" />
      :
      <>
      <Header />
      <main>
        <section className="FAQ">
          <div className="FAQ_img_wrapper">
            <img src={faq} alt="FAQ" />
          </div>
          <h1>FAQ</h1>
          <p>We answer all questions you may have</p>
          <div className="FAQ_wrapper">
            <button type="button" className="collapsible" onClick={collapse}>Can I cancel my booking?</button>
            <div className="content">
              <p>This issue is discussed with the owner, but as a rule, the car must be returned to where you received it.</p>
            </div>
            <button type="button" className="collapsible" onClick={collapse}>Can I get a refund if the car didn't fit?</button>
            <div className="content">
              <p>This issue is discussed with the owner, but as a rule, the car must be returned to where you received it.</p>
            </div>
            <button type="button" className="collapsible" onClick={collapse}>What to do if an accident happens?</button>
            <div className="content">
              <p>This issue is discussed with the owner, but as a rule, the car must be returned to where you received it.</p>
            </div>
            <button type="button" className="collapsible" onClick={collapse}>Can I leave my car in a convenient location?</button>
            <div className="content">
              <p>This issue is discussed with the owner, but as a rule, the car must be returned to where you received it.</p>
            </div>
            <button type="button" className="collapsible" onClick={collapse}>What if the owner asks to pay directly?</button>
            <div className="content">
              <p>This issue is discussed with the owner, but as a rule, the car must be returned to where you received it.</p>
            </div>
            <button type="button" className="collapsible" onClick={collapse}>Should I fill up the car?</button>
            <div className="content">
              <p>This issue is discussed with the owner, but as a rule, the car must be returned to where you received it.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </>
    }
    </>
  );
}

export default Faq;
