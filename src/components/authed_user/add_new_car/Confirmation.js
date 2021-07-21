import React from 'react';
import {Link} from 'react-router-dom';

import "~/styles/singup_page/confirmation.scss";

import logo from '~/assets/svg/Logo.svg';
import confirmation from '~/assets/svg/authed/my_cars/registration_confirmation.svg';

export default function Confirmation() {
  return (
    <>
      <header>
        <img src={logo}/>
      </header>
      <section className="section_wrapper">
        <img src={confirmation} />
        <h2>Успех!</h2>
        <p>Автомобиль добавлен. Дождитесь, когда указанная вами информация
        пройдёт проверку модераторами.</p>
        <Link to="/authed">
          <button id="return-main-page">Перейти на главную</button>
        </Link>
      </section>
    </>
  )
}
