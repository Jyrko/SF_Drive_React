import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';

import "~/styles/singup_page/confirmation.scss";

import logo from '~/assets/svg/Logo.svg';
import confirmation from '~/assets/svg/singup_page/confirmation.svg';

function Confirmation({currentUser}) {
  useEffect(() => {
    console.log(currentUser[0].documentPhotos);
  }, []);
  return (
    <>
      <header>
        <img src={logo}/>
      </header>
      <section className="section_wrapper">
        <img src={confirmation} />
        <h2>Успех!</h2>
        <p>Вы успешно зарегистрировались. Дождитесь проверки
        документов и начните пользоваться сервисом.</p>
        <Link to="/">
          <button id="return-main-page">Перейти на главную</button>
        </Link>
      </section>
    </>
  )
}

export default Confirmation;
