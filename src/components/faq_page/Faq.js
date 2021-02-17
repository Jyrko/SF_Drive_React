import React from 'react';

import faq from "~/assets/svg/FAQ.svg";

import Header from "../Header";
import Footer from "../Footer";

import '~/styles/base_faq.scss';

const Faq = (props) => {
  function buttonHandler() {
    let coll = document.getElementsByClassName("collapsible");
    let i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

  }

  return (
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
          <button type="button" className="collapsible">Могу ли я отменить бронь?</button>
          <div className="content">
            <p>Данный вопрос обсуждается с собственником, но как правило автомобиль нужно  вернуть туда, где вы его получили.</p>
          </div>
          <button type="button" className="collapsible">Могу ли я вернуть деньги, если не подошёл автомобиль?</button>
          <div className="content">
            <p>Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.</p>
          </div>
          <button type="button" className="collapsible">Что делать, если случилось ДТП?</button>
          <div className="content">
            <p>Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.</p>
          </div>
          <button type="button" className="collapsible">Могу ли я оставить автомобиль в удобном для меня месте?</button>
          <div className="content">
            <p>Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.</p>
          </div>
          <button type="button" className="collapsible">Что делать, если собственник просит заплатить ему напрямую?</button>
          <div className="content">
            <p>Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.</p>
          </div>
          <button type="button" className="collapsible">Должен ли я заправлять автомобиль?</button>
          <div className="content">
            <p>Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}

export default Faq;
