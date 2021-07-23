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
            <img src={faq} alt="Часто задаваемые вопросы" />
          </div>
          <h1>Частые вопросы</h1>
          <p>Отвечаем на все вопросы, которые у вас могут возникнуть</p>
          <div className="FAQ_wrapper">
            <button type="button" className="collapsible" onClick={collapse}>Могу ли я отменить бронь?</button>
            <div className="content">
              <p>Данный вопрос обсуждается с собственником, но как правило автомобиль нужно  вернуть туда, где вы его получили.</p>
            </div>
            <button type="button" className="collapsible" onClick={collapse}>Могу ли я вернуть деньги, если не подошёл автомобиль?</button>
            <div className="content">
              <p>Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.</p>
            </div>
            <button type="button" className="collapsible" onClick={collapse}>Что делать, если случилось ДТП?</button>
            <div className="content">
              <p>Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.</p>
            </div>
            <button type="button" className="collapsible" onClick={collapse}>Могу ли я оставить автомобиль в удобном для меня месте?</button>
            <div className="content">
              <p>Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.</p>
            </div>
            <button type="button" className="collapsible" onClick={collapse}>Что делать, если собственник просит заплатить ему напрямую?</button>
            <div className="content">
              <p>Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.</p>
            </div>
            <button type="button" className="collapsible" onClick={collapse}>Должен ли я заправлять автомобиль?</button>
            <div className="content">
              <p>Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.</p>
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
